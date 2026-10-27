# Static publishing

`npm run build` publishes real HTML for every application page, including every
fund, startup, and agent article. GitHub Pages serves these files directly;
published articles do not depend on the SPA 404 redirect to load.

## Sources of truth

- `lib/site-paths.ts` supplies the fixed paths used by both `App.tsx` and the build.
- The exported post arrays in `Blog.tsx`, `StartupBlog.tsx`, and
  `agent-blog-posts/index.ts` supply article IDs, titles, dates, and full content.
- `scripts/site-manifest.ts` joins these into one route inventory.
- `scripts/publish-site.ts` prerenders that inventory and generates `sitemap.xml`,
  `llms.txt`, and `llms-full.txt` in `dist/`. Do not maintain separate URL lists in
  `public/`.

Use trailing slashes in internal page links and route paths. Asset URLs keep their
file extensions. The canonical URL and Open Graph URL use the same convention.

The build checks each article's title, publication date, and entire body against
its authored React content. It also checks canonical URLs, all internal page
links, visible content, runtime errors, and static output coverage. Missing or
empty pages and dead internal links fail the build. Third-party network requests
are blocked during rendering; no form is submitted and the Ads pixel must remain
uninitialized.

Finite content reveals are committed into inline styles before serialization;
computed animation visibility alone does not survive without JavaScript. The
build then checks the saved HTML in a separate browser with scripts disabled.
Adjacent React text nodes retain React-style comment separators so reparsing the
HTML does not merge text boundaries and break hydration.

## Sitemap dates

Builds require full Git history (`actions/checkout` uses `fetch-depth: 0`). Each
article's `lastmod` comes from the last change to its own source object, rather
than the build date, its publication label, or a change to a different article in
the same module. Formatting and trailing-slash normalization do not refresh it.
Index pages use their most recently modified article. Other pages use their
content source history. Uncommitted content whose modification date cannot be
verified omits `lastmod`; it receives a verified date after being committed.

## Local verification

Puppeteer normally installs its browser during dependency installation. If using
an existing local Chrome installation instead, set `PUPPETEER_EXECUTABLE_PATH` to
its executable when running the build. Rendering binds only to loopback and keeps
the existing four-page concurrency cap. No inquiry API key is required for this
read-only build verification.

For a manual check, serve `dist/` with a static file server that does not fall back
to `index.html`, disable JavaScript, and open article URLs from each library.
Every published route should return HTTP 200 and show the full article. Unknown
paths should still return HTTP 404. The existing `/deals/` auxiliary page and
robots policy are preserved.

The LLM files offer a text index and full published content. They do not replace
HTML or the sitemap, and do not guarantee discovery, indexing, or use by an AI
system.
