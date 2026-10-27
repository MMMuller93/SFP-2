import type { Plugin } from 'vite';
import prerender from '@prerenderer/rollup-plugin';
import puppeteer from 'puppeteer';
import { SITE_ORIGIN, canonicalPath } from '../lib/site-paths';
import { createSiteManifest } from './site-manifest';

const escapeXml = (text: string) => text.replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[character]!));

export const publishSite = (): Plugin[] => {
  const pages = createSiteManifest();
  const paths = new Set(pages.map(page => page.path));
  const rendered = new Map<string, { title: string; description: string; text: string; characters: number }>();
  const errors = new Map<string, string[]>();

  return [
    prerender({
      routes: pages.map(page => page.path),
      server: { host: '127.0.0.1', listenHost: '127.0.0.1' },
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 4,
        renderAfterDocumentEvent: 'app-ready',
        skipThirdPartyRequests: true,
        headless: true,
        timeout: 30000,
        pageSetup(page, route) {
          errors.set(route, []);
          page.on('pageerror', error => errors.get(route)!.push(String(error)));
          page.on('request', request => {
            if (!['GET', 'HEAD'].includes(request.method())) errors.get(route)!.push(`Unexpected ${request.method()} ${request.url()}`);
          });
          page.on('requestfinished', request => {
            if (/^https?:/.test(request.url()) && new URL(request.url()).hostname !== '127.0.0.1') errors.get(route)!.push(`Third-party request completed during prerender: ${request.url()}`);
          });
        },
        async pageHandler(page, route) {
          const published = pages.find(published => published.path === route)!;
          const article = published.article;
          // Do not rely on the app-ready event alone: effects and animations can
          // still be settling. The requested page and its actual body must agree.
          await page.waitForFunction((path, title) => {
            return window.location.pathname === path && Boolean(document.querySelector('main')) &&
              (!title || document.querySelector('main h1')?.textContent?.trim() === title);
          }, { timeout: 30000 }, route, article?.title);

          // Trigger one-time viewport reveals before serializing their HTML.
          await page.evaluate(async () => {
            for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
              window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
              await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
            }
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
            // Native animations can report computed opacity:1 while their HTML
            // still contains opacity:0. Commit only the active, finite reveals
            // inside main; leave infinite decoration and hidden UI untouched.
            for (const animation of document.getAnimations()) {
              const target = (animation.effect as KeyframeEffect | null)?.target;
              const endTime = animation.effect?.getComputedTiming().endTime;
              if (target instanceof Element && target.closest('main') && typeof endTime === 'number' && Number.isFinite(endTime)) {
                animation.finish();
                animation.commitStyles();
                animation.cancel();
              }
            }
          });
          await page.waitForFunction(() => Array.from(document.querySelectorAll('main [style]')).every(element => {
            const html = element as HTMLElement;
            return !html.style.opacity || getComputedStyle(html).display === 'none' ||
              (Number(html.style.opacity) >= 0.99 && Number(getComputedStyle(html).opacity) >= 0.99);
          }), { timeout: 30000 }).catch(async error => {
            const hidden = await page.evaluate(() => Array.from(document.querySelectorAll<HTMLElement>('main [style]')).filter(element => element.style.opacity && Number(getComputedStyle(element).opacity) < 0.99).map(element => `${element.tagName}: ${element.textContent?.trim().slice(0, 80)}`));
            throw new Error(`${route}: visible content animation did not settle (${hidden.join('; ')}): ${error}`);
          });

          const result = await page.evaluate((expected) => {
            const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
            const main = document.querySelector('main')!;
            const body = main.querySelector('.prose');
            const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
            const issues: string[] = [];
            if (canonical !== expected.url) issues.push(`Wrong canonical: ${canonical}`);
            if (document.querySelector('meta[property="og:url"]')?.getAttribute('content') !== expected.url) issues.push('Open Graph URL differs from canonical');
            if (main.textContent!.trim().length < 100) issues.push('Empty or shell main content');
            if (expected.html) {
              const authored = new DOMParser().parseFromString(expected.html, 'text/html');
              if (!body || normalize(body.textContent!) !== normalize(authored.body.textContent!)) issues.push('Rendered article does not include its complete authored content');
              if (document.title !== `${expected.title} | Strategic Fund Partners`) issues.push('Wrong article title');
              if (document.querySelector('meta[property="article:published_time"]')?.getAttribute('content') !== expected.publishedTime) issues.push('Wrong article publication date');
            }
            const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]')).map(link => link.getAttribute('href')!);
            if (typeof (window as Window & { oaiq?: unknown }).oaiq !== 'undefined') issues.push('Ads pixel must not initialize during local prerendering');
            // React's SSR serializer separates adjacent text fibers with comments.
            // page.content() otherwise merges them on reparsing (e.g. count +
            // space + "articles"), causing a hydration text mismatch.
            const root = document.getElementById('root')!;
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            for (let text = walker.nextNode(); text; text = walker.nextNode()) {
              if (text.nextSibling?.nodeType === Node.TEXT_NODE) {
                text.parentNode!.insertBefore(document.createComment(' '), text.nextSibling);
              }
            }
            // Only actual React-rendered HTML is hydrated on a production visit.
            root.dataset.prerendered = 'true';
            return {
              issues,
              links,
              title: expected.title || document.title.replace(/ \| Strategic Fund Partners$/, ''),
              description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
              text: ((body || main) as HTMLElement).innerText.trim(),
              characters: normalize((body || main).textContent!).length,
            };
          }, { url: `${SITE_ORIGIN}${route}`, html: published.expectedHtml, title: article?.title, publishedTime: article ? new Date(article.date).toISOString() : undefined });

          for (const href of result.links) {
            const url = new URL(href, `${SITE_ORIGIN}${route}`);
            if (url.origin !== SITE_ORIGIN || url.pathname.split('/').at(-1)?.includes('.')) continue;
            if (!paths.has(canonicalPath(url.pathname))) result.issues.push(`Unpublished internal link: ${href}`);
            if (url.pathname !== canonicalPath(url.pathname)) result.issues.push(`Internal link is missing trailing slash: ${href}`);
          }
          if (errors.get(route)!.length || result.issues.length) throw new Error(`${route}: ${[...errors.get(route)!, ...result.issues].join('; ')}`);
          rendered.set(route, result);
        },
      },
    }),
    {
      name: 'verify-and-publish-site-indexes',
      generateBundle: {
        order: 'post',
        async handler(_options, bundle) {
          if (rendered.size !== pages.length) this.error(`Only ${rendered.size}/${pages.length} pages rendered.`);
          // Verify the actual serialized artifact with scripts disabled. A live
          // animation's computed styles are not evidence that its HTML is visible.
          const browser = await puppeteer.launch({ headless: true, args: process.platform === 'linux' ? ['--no-sandbox', '--disable-setuid-sandbox'] : [] });
          try {
            const documentPage = await browser.newPage();
            await documentPage.setJavaScriptEnabled(false);
            await documentPage.setRequestInterception(true);
            documentPage.on('request', request => void request.abort());
            for (const page of pages) {
              const filename = page.path === '/' ? 'index.html' : `${page.path.slice(1)}index.html`;
              const asset = bundle[filename];
              if (!asset || asset.type !== 'asset') this.error(`Missing static HTML for ${page.path}`);
              await documentPage.setContent(typeof asset.source === 'string' ? asset.source : Buffer.from(asset.source).toString('utf8'), { waitUntil: 'domcontentloaded' });
              const hidden = await documentPage.evaluate(() => {
                const issues: string[] = [];
                if (!document.querySelector('main')) issues.push('Missing main content');
                for (const element of document.querySelectorAll<HTMLElement>('main h1, main h2, main h3, main h4, main p, main li, main pre, main td, main th')) {
                  if (!element.textContent?.trim() || element.closest('[aria-hidden="true"]')) continue;
                  for (let ancestor: HTMLElement | null = element; ancestor && ancestor.tagName !== 'BODY'; ancestor = ancestor.parentElement) {
                    if ((ancestor.style.opacity && Number(ancestor.style.opacity) < 0.99) || ancestor.style.display === 'none' || ancestor.style.visibility === 'hidden') {
                      issues.push(`${element.tagName}: ${element.textContent.trim().slice(0, 80)} is hidden by serialized ${ancestor.tagName} style`);
                      break;
                    }
                  }
                }
                return issues;
              });
              if (hidden.length) this.error(`${page.path}: ${hidden.join('; ')}`);
            }
          } finally {
            await browser.close();
          }
          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${SITE_ORIGIN}${escapeXml(page.path)}</loc>${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
          const introduction = '# Strategic Fund Partners\n\n> Advisory for private fund managers, SPV sponsors, startup founders, and developers of AI agents.\n\nThis index describes the published website. Articles are informational and are not legal advice. Service details may change; consult the linked page and contact the firm to confirm availability.\n';
          const llms = `${introduction}\n## Website and articles\n\n${pages.map(page => { const content = rendered.get(page.path)!; return `- [${content.title}](${SITE_ORIGIN}${page.path}): ${content.description}`; }).join('\n')}\n\n## Full text\n\n- [Complete website text](${SITE_ORIGIN}/llms-full.txt)\n`;
          const fullText = `${introduction}\n${pages.map(page => { const content = rendered.get(page.path)!; return `---\n\n# ${content.title}\n\nSource: ${SITE_ORIGIN}${page.path}\n${page.lastmod ? `Last modified: ${page.lastmod}\n` : ''}\n${content.text}\n`; }).join('\n')}`;
          for (const [fileName, source] of [['sitemap.xml', sitemap], ['llms.txt', llms], ['llms-full.txt', fullText]]) this.emitFile({ type: 'asset', fileName, source });
          this.info(`Verified ${pages.length} static pages (${pages.filter(page => page.article).length} complete articles), including serialized visibility without JavaScript; sitemap and LLM files share the same route manifest.`);
        },
      },
    },
  ];
};
