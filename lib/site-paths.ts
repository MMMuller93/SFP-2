export const SITE_ORIGIN = 'https://strategicfundpartners.com';

// Shared by the router and the static build; adding a page here makes it publishable.
export const SITE_PATHS = {
  home: '/',
  about: '/about/',
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

export const canonicalPath = (pathname: string) => pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
