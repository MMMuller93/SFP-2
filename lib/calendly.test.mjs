import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { transform } from 'esbuild';

const source = await readFile(new URL('./calendly.ts', import.meta.url), 'utf8');
const { code } = await transform(source, { loader: 'ts', format: 'esm' });
const load = (suffix) => import(`data:text/javascript;base64,${Buffer.from(code + `\n// ${suffix}`).toString('base64')}`);

test('only the live Calendly confirmation produces a booking event, without payload data', async () => {
  const { handleCalendlyMessage, CONSULTATION_URL } = await load('messages');
  const calls = [];
  const frameWindow = {};
  const frame = { src: `${CONSULTATION_URL}?embed_type=PopupText`, contentWindow: frameWindow };
  globalThis.window = { location: { hostname: 'strategicfundpartners.com' }, gtag: (...args) => calls.push(args) };
  globalThis.document = { querySelectorAll: () => [frame] };
  const message = {
    origin: 'https://calendly.com', source: frameWindow,
    data: { event: 'calendly.event_scheduled', payload: { email: 'test@example.invalid', answers: ['private'] } },
  };

  for (const invalid of [
    { ...message, origin: 'https://example.invalid' },
    { ...message, origin: 'https://calendly.com.example.invalid' },
    { ...message, source: {} },
    { ...message, data: null },
    { ...message, data: { event: 'calendly.date_and_time_selected' } },
    { ...message, data: { event: 'calendly.event_type_viewed' } },
  ]) handleCalendlyMessage(invalid);
  assert.deepEqual(calls, []);

  handleCalendlyMessage(message);
  handleCalendlyMessage(message);
  assert.deepEqual(calls, [['event', 'intro_booked']]);

  const otherWindow = {};
  frame.contentWindow = otherWindow;
  frame.src = 'https://calendly.com/other/event';
  handleCalendlyMessage({ ...message, source: otherWindow });
  assert.equal(calls.length, 1);

  frame.src = CONSULTATION_URL;
  window.location.hostname = 'localhost';
  handleCalendlyMessage({ ...message, source: otherWindow });
  assert.equal(calls.length, 1, 'local previews must not send events');

  frame.contentWindow = {};
  window.location.hostname = 'www.strategicfundpartners.com';
  window.gtag = () => { throw new Error('analytics blocked'); };
  assert.doesNotThrow(() => handleCalendlyMessage({ ...message, source: frame.contentWindow }));
});

test('the widget loads once on demand and coalesces repeated clicks', async () => {
  const { openConsultation, CONSULTATION_URL } = await load('loader');
  const nodes = [];
  const openings = [];
  const listeners = [];
  globalThis.window = { setTimeout, addEventListener: (...args) => listeners.push(args) };
  globalThis.document = {
    querySelector: () => nodes.find(n => n.tag === 'link'),
    createElement: tag => ({ tag, dataset: {}, remove() {} }),
    head: { appendChild(node) {
      nodes.push(node);
      if (node.tag === 'script') queueMicrotask(() => {
        window.Calendly = { initPopupWidget: options => openings.push(options) };
        node.onload();
      });
    } },
  };
  assert.equal(nodes.length, 0, 'import must not load third-party resources');
  await Promise.all([openConsultation(), openConsultation()]);
  assert.deepEqual(openings, [{ url: CONSULTATION_URL }]);
  assert.equal(nodes.filter(n => n.tag === 'script').length, 1);
  assert.equal(listeners.length, 1);
  await openConsultation();
  assert.equal(openings.length, 2);
  assert.equal(listeners.length, 1);
});

test('failed loading rejects so the button can use its direct-link fallback, and can retry', async () => {
  const { openConsultation } = await load('failure');
  let scripts = 0;
  globalThis.window = { setTimeout, addEventListener() {} };
  globalThis.document = {
    querySelector: () => true,
    createElement: () => ({ remove() {} }),
    head: { appendChild(node) { scripts++; queueMicrotask(() => node.onerror()); } },
  };
  await assert.rejects(openConsultation(), /could not load/);
  await assert.rejects(openConsultation(), /could not load/);
  assert.equal(scripts, 2);
});
