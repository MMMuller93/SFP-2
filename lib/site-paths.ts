export const SITE_ORIGIN = 'https://strategicfundpartners.com';

// Shared by the router and the static build; adding a page here makes it publishable.
export const SITE_PATHS = {
  home: '/',
  about: '/about/',
  privateMarkets: '/private-markets/',
  insights: '/insights/',
  startups: '/startups/',
  formation: '/startups/formation/',
  governance: '/startups/governance/',
  equity: '/startups/equity/',
  fundraising: '/startups/fundraising/',
  registrations: '/startups/registrations/',
  startupInsights: '/startups/insights/',
  agents: '/agents/',
  agentInsights: '/agents/insights/',
} as const;

// Company pages live under this prefix; there is no index page at the prefix itself.
export const COMPANIES_PREFIX = '/private-markets/companies/';

export const canonicalPath = (pathname: string) => pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
