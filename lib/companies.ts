import { COMPANIES_PREFIX, SITE_ORIGIN, SITE_PATHS } from './site-paths';

// One JSON file per company in content/companies/ becomes a page at
// /private-markets/companies/<slug>/. Files starting with "_" are skipped.
// scripts/site-manifest.ts reads the same folder to publish the routes.

export type CompanyColumn = 'Price per share' | 'Valuation' | 'Amount raised';

export interface Company {
  slug: string;
  name: string;
  h1_name?: string;
  site: string;
  founded?: string;
  h1_tail: string;
  ledes: string[];
  figs: [string, string][];
  rounds_heading: string;
  columns: CompanyColumn[];
  rounds: [string, string, (string | null)[]][];
  table_note: string;
  round_notes: string[];
  investors: string;
  spv_sentence: string;
  spv_years?: [string, number][] | null;
  funds?: string | null;
  related: string[];
  sources: string;
}


export const COLUMN_LABELS: Record<CompanyColumn, string> = {
  'Price per share': 'Per share',
  Valuation: 'Valuation',
  'Amount raised': 'Raised',
};

export const BUY_GUIDES = [
  { id: 'direct-shares-vs-spvs', title: 'Direct Shares vs. SPVs in Pre-IPO Investing' },
  { id: 'comparing-pre-ipo-broker-offers', title: 'Comparing Broker Offers for Pre-IPO Shares' },
  { id: 'closing-private-company-secondary', title: 'Closing a Private Company Secondary Transaction' },
];

export const SELL_GUIDES = [
  { id: 'selling-pre-ipo-shares', title: 'Selling Pre-IPO Shares: Options for Employees and Founders' },
  { id: 'secondary-sale-approvals-restrictions', title: 'Company Approval and Transfer Restrictions in Secondary Sales' },
  { id: 'forward-contracts-private-company-shares', title: 'Forward Contracts for Private Company Shares' },
];

const isString = (value: unknown): value is string => typeof value === 'string';
const isStringList = (value: unknown): value is string[] => Array.isArray(value) && value.every(isString);

// Fail the build with the file name when an entry does not have the shape the page needs.
const validate = (file: string, value: unknown): Company => {
  const company = value as Company;
  const fail = (problem: string): never => { throw new Error(`${file}: ${problem}`); };
  const stem = file.split('/').pop()!.replace(/\.json$/, '');
  if (!/^[a-z0-9-]+$/.test(company.slug ?? '') || company.slug !== stem) fail('slug must match the file name');
  for (const key of ['name', 'site', 'h1_tail', 'rounds_heading', 'table_note', 'investors', 'spv_sentence', 'sources'] as const) {
    if (!isString(company[key])) fail(`${key} must be text`);
  }
  if (company.h1_name !== undefined && !isString(company.h1_name)) fail('h1_name must be text');
  if (company.founded !== undefined && !isString(company.founded)) fail('founded must be text');
  if (company.funds != null && !isString(company.funds)) fail('funds must be text');
  if (!isStringList(company.ledes) || !isStringList(company.round_notes) || !isStringList(company.related)) fail('ledes, round_notes and related must be lists of text');
  if (!Array.isArray(company.figs) || !company.figs.length || !company.figs.every(fig => Array.isArray(fig) && fig.length === 2 && fig.every(isString))) fail('figs must be [value, label] pairs');
  if (!Array.isArray(company.columns) || !company.columns.length || !company.columns.every(column => column in COLUMN_LABELS)) fail(`columns must be from: ${Object.keys(COLUMN_LABELS).join(', ')}`);
  if (!Array.isArray(company.rounds) || !company.rounds.length) fail('rounds must not be empty');
  for (const round of company.rounds) {
    if (!Array.isArray(round) || !isString(round[0]) || !isString(round[1]) || !Array.isArray(round[2]) ||
        round[2].length !== company.columns.length || !round[2].every(cell => cell === null || isString(cell))) {
      fail(`round ${JSON.stringify(round)} must be [date, round, cells] with one cell per column`);
    }
  }
  if (company.spv_years != null && (!Array.isArray(company.spv_years) || !company.spv_years.every(year => Array.isArray(year) && isString(year[0]) && Number.isInteger(year[1]) && year[1] >= 0))) {
    fail('spv_years must be [year, count] pairs');
  }
  sourceSegments(company.sources, file);
  return company;
};

const decodeEntities = (text: string) => text.replace(/&(amp|quot|#39|apos|lt|gt);/g, (_, entity: string) => (
  { amp: '&', quot: '"', '#39': "'", apos: "'", lt: '<', gt: '>' }[entity]!
));

export type SourceSegment = { text: string; href?: string };

// The sources line is the only field with markup, and only plain links are allowed.
export const sourceSegments = (html: string, file = 'sources'): SourceSegment[] => {
  const segments: SourceSegment[] = [];
  const link = /<a href="([^"<>]+)">([^<]*)<\/a>/g;
  let last = 0;
  for (let match = link.exec(html); match; match = link.exec(html)) {
    segments.push({ text: html.slice(last, match.index) }, { text: decodeEntities(match[2]), href: decodeEntities(match[1]) });
    last = link.lastIndex;
  }
  segments.push({ text: html.slice(last) });
  for (const segment of segments) {
    if (!segment.href && /[<>]/.test(segment.text)) throw new Error(`${file}: sources may contain only <a href="...">text</a> links`);
    if (!segment.href) segment.text = decodeEntities(segment.text);
  }
  return segments.filter(segment => segment.href || segment.text);
};

const files = import.meta.glob(['../content/companies/*.json', '!../content/companies/_*.json'], { eager: true, import: 'default' });

export const COMPANIES: Company[] = Object.entries(files)
  .map(([file, data]) => validate(file.replace(/^\.\.\//, ''), data))
  .sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));

const bySlug = new Map(COMPANIES.map(company => [company.slug, company]));
const byName = new Map(COMPANIES.map(company => [company.name.toLowerCase(), company.slug]));

export const findCompany = (slug: string | undefined) => (slug ? bySlug.get(slug) : undefined);
export const companyPath = (slug: string) => `${COMPANIES_PREFIX}${slug}/`;
export const displayName = (company: Company) => company.h1_name ?? company.name;
export const companyHeading = (company: Company) => `${displayName(company)} Stock: ${company.h1_tail}`;

// Related companies link only when that company has a page.
export const relatedCompanies = (company: Company) => company.related
  .filter(name => byName.has(name.toLowerCase()))
  .map(name => ({ name, path: companyPath(byName.get(name.toLowerCase())!) }));

const moneyWords = (value: string) => {
  const match = /^\$([\d.,]+)([BMT])(\+?)$/.exec(value);
  if (!match) return undefined;
  const unit = { B: 'billion', M: 'million', T: 'trillion' }[match[2] as 'B' | 'M' | 'T'];
  return `${match[3] ? 'more than ' : ''}$${match[1]} ${unit}`;
};

// At most 155 characters, led by "<Company> stock".
export const metaDescription = (company: Company) => {
  const full = displayName(company);
  const prices = company.columns[0] === 'Price per share' ? ', share prices' : '';
  const lead = `${full} stock is not publicly traded.`;
  const tail = `See ${full} funding rounds${prices} and investors, and how private shares are bought and sold.`;
  const shortTail = `See its funding rounds${prices} and investors.`;
  const [value, label] = company.figs[0];
  const match = /^(?:Post-money valuation|Valuation|Reported valuation)(?:, ([^()]+))? \(([^()]+)\)$/.exec(label);
  const words = moneyWords(value);
  const valuation = match && words ? ` Its ${match[1] || 'latest round'} (${match[2]}) valued it at ${words}.` : '';
  const candidates = [`${lead}${valuation} ${tail}`, `${lead}${valuation} ${shortTail}`, `${lead} ${tail}`, `${lead} ${shortTail}`];
  return candidates.find(candidate => candidate.length <= 155) ?? candidates[candidates.length - 1].slice(0, 155);
};

export const companySchema = (company: Company) => {
  const full = displayName(company);
  const url = `${SITE_ORIGIN}${companyPath(company.slug)}`;
  const citation = [...company.sources.matchAll(/href="(https?:\/\/[^"]+)"/g)].map(match => decodeEntities(match[1]));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: companyHeading(company),
        description: metaDescription(company),
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
        about: { '@type': 'Organization', name: full, url: company.site, ...(company.founded ? { foundingDate: company.founded } : {}) },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        ...(citation.length ? { citation } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Private Markets', item: `${SITE_ORIGIN}${SITE_PATHS.privateMarkets}` },
          { '@type': 'ListItem', position: 2, name: full },
        ],
      },
    ],
  };
};
