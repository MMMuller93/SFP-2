export const CONSULTATION_URL = 'https://calendly.com/milesmuller/30min';

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
    gtag?: (...args: unknown[]) => void;
  }
}

let widgetLoading: Promise<void> | undefined;
let opening: Promise<void> | undefined;
let listening = false;
const countedFrames = new WeakSet<Window>();

export const handleCalendlyMessage = (event: MessageEvent) => {
  if (event.origin !== 'https://calendly.com' || event.data?.event !== 'calendly.event_scheduled') return;

  // Only accept the live consultation embed, never unrelated frames or messages.
  const frame = Array.from(document.querySelectorAll('iframe')).find((candidate) => {
    if (candidate.contentWindow !== event.source) return false;
    try {
      const url = new URL(candidate.src);
      return `${url.origin}${url.pathname}` === CONSULTATION_URL;
    } catch {
      return false;
    }
  });
  const source = frame?.contentWindow;
  if (!source || countedFrames.has(source)) return;
  countedFrames.add(source);

  if (!['strategicfundpartners.com', 'www.strategicfundpartners.com'].includes(window.location.hostname)) return;
  try {
    // Deliberately do not forward Calendly's payload or any invitee/booking details.
    window.gtag?.('event', 'intro_booked');
  } catch {
    // Measurement must never interfere with a completed booking.
  }
};

const loadWidget = () => {
  if (window.Calendly) return Promise.resolve();
  if (widgetLoading) return widgetLoading;

  if (!document.querySelector('link[data-sfp-calendly]')) {
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = 'https://assets.calendly.com/assets/external/widget.css';
    styles.dataset.sfpCalendly = '';
    document.head.appendChild(styles);
  }

  widgetLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    const fail = () => {
      clearTimeout(timeout);
      script.remove();
      reject(new Error('Calendly could not load'));
    };
    const timeout = window.setTimeout(fail, 10000);
    script.onerror = fail;
    script.onload = () => {
      clearTimeout(timeout);
      if (window.Calendly) resolve();
      else fail();
    };
    document.head.appendChild(script);
  }).catch((error) => {
    widgetLoading = undefined;
    throw error;
  });
  return widgetLoading;
};

export const openConsultation = () => {
  if (opening) return opening;
  opening = loadWidget().then(() => {
    if (!listening) {
      window.addEventListener('message', handleCalendlyMessage);
      listening = true;
    }
    window.Calendly!.initPopupWidget({ url: CONSULTATION_URL });
  }).finally(() => {
    opening = undefined;
  });
  return opening;
};
