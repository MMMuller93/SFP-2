import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        // Build-time pre-rendering. Each listed route is rendered with a current
        // headless Chromium and its HTML is written to dist/<route>/index.html
        // so crawlers see real content immediately. SPA hydration takes over
        // on the client.
        prerender({
          routes: [
            '/',
            '/about',
            '/insights',
            '/startups',
            '/startups/formation',
            '/startups/governance',
            '/startups/equity',
            '/startups/fundraising',
            '/startups/registrations',
            '/startups/insights',
            '/agents',
            '/agents/insights',
          ],
          renderer: '@prerenderer/renderer-puppeteer',
          rendererOptions: {
            maxConcurrentRoutes: 4,
            renderAfterDocumentEvent: 'app-ready',
            skipThirdPartyRequests: true,
            headless: true,
            timeout: 30000,
          },
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
