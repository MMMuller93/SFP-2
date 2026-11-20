import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { CONSULTATION_URL, openConsultation } from '../../lib/calendly';
import { trackConversion } from '../../lib/conversions';
import { SITE_PATHS } from '../../lib/site-paths';
import {
  BUY_GUIDES,
  COLUMN_LABELS,
  COMPANIES_UPDATED,
  SELL_GUIDES,
  companyHeading,
  companySchema,
  displayName,
  findCompany,
  metaDescription,
  relatedCompanies,
  sourceSegments,
  type Company,
} from '../../lib/companies';

// Shared with the companies hub. Breakpoints follow the approved page design
// (cards below 640px, stacked sections below 900px).
export const container = 'max-w-[1120px] mx-auto px-6';
export const link = 'text-accent underline underline-offset-4 decoration-1 hover:text-accentHover transition-colors';
export const sectionClass = 'py-[52px] min-[900px]:py-[72px]';
export const h2Class = 'font-serif font-normal text-text-highlight text-[length:clamp(28px,3.2vw,38px)] leading-[1.15] tracking-[-0.01em]';
export const table = {
  table: 'w-full border-collapse text-[15px]',
  thead: 'max-[640px]:hidden',
  th: 'font-medium text-[11px] leading-[1.2] tracking-[0.14em] uppercase text-text-muted text-left pr-3 pb-3 border-b border-borderStrong',
  thRight: 'font-medium text-[11px] leading-[1.2] tracking-[0.14em] uppercase text-text-muted text-right pl-3 pb-3 border-b border-borderStrong',
  tr: 'max-[640px]:grid max-[640px]:grid-cols-3 max-[640px]:gap-x-4 max-[640px]:border-b max-[640px]:border-border max-[640px]:py-3.5',
  td: 'py-4 pr-3 border-b border-border align-baseline max-[640px]:border-0 max-[640px]:p-0',
  date: 'py-4 pr-3 border-b border-border align-baseline text-text-secondary whitespace-nowrap tabular-nums max-[640px]:border-0 max-[640px]:p-0 max-[640px]:col-span-full max-[640px]:text-[12.5px]',
  round: 'py-4 pr-3 border-b border-border align-baseline font-serif text-[20px] text-text-highlight max-[640px]:border-0 max-[640px]:p-0 max-[640px]:col-span-full max-[640px]:mb-2',
  right: 'py-4 pl-3 border-b border-border align-baseline text-right max-[640px]:border-0 max-[640px]:p-0 max-[640px]:text-left max-[640px]:text-text-highlight max-[640px]:before:content-[attr(data-label)] max-[640px]:before:block max-[640px]:before:text-[10.5px] max-[640px]:before:tracking-[0.12em] max-[640px]:before:uppercase max-[640px]:before:text-text-muted max-[640px]:before:mb-0.5',
};

const handleConsultation = (event: React.MouseEvent<HTMLAnchorElement>) => {
  trackConversion('consultation_link_clicked');
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  void openConsultation().catch(() => {
    window.location.assign(CONSULTATION_URL);
  });
};

export const Crumbs: React.FC<{ trail: { label: string; href: string }[]; current: string }> = ({ trail, current }) => (
  <nav aria-label="Breadcrumb" className="pt-10 text-[13px] text-text-muted">
    {trail.map(item => (
      <React.Fragment key={item.href}>
        <a href={item.href} className="text-text-secondary hover:text-accent transition-colors">{item.label}</a>
        <span className="mx-2 text-borderStrong">/</span>
      </React.Fragment>
    ))}
    {current}
  </nav>
);

export const PageHead: React.FC<{ name: string; tail: string; ledes: string[] }> = ({ name, tail, ledes }) => (
  <div className="pt-6 pb-11">
    <h1 className="font-serif font-normal text-text-highlight text-[length:clamp(36px,4.8vw,60px)] leading-[1.05] tracking-[-0.02em] mb-7 max-w-[900px] text-balance">
      {name} <em className="italic text-accent">Stock</em>: {tail}
    </h1>
    {ledes.map((lede, index) => (
      <p key={index} className={`max-w-[720px] mb-4 leading-[1.6] ${index === 0 ? 'text-[length:clamp(18px,1.55vw,20px)] text-text-primary' : 'text-[17px] text-text-secondary'}`}>
        {lede}
      </p>
    ))}
    <p className="mt-5 text-[13px] text-text-muted">Updated {COMPANIES_UPDATED}</p>
  </div>
);

const Block: React.FC<{ id: string; heading: React.ReactNode; first?: boolean; children: React.ReactNode }> = ({ id, heading, first, children }) => (
  <section id={id} className={`${sectionClass} ${first ? '' : 'border-t border-border'}`}>
    <div className={`${container} grid grid-cols-1 gap-5 min-[900px]:grid-cols-[4fr_8fr] min-[900px]:gap-14`}>
      <div className="min-w-0">{heading}</div>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

const Paragraphs: React.FC<{ items: string[]; className?: string }> = ({ items, className = '' }) => (
  <div className={`max-w-[680px] ${className}`}>
    {items.map((item, index) => <p key={index} className="mb-4 last:mb-0">{item}</p>)}
  </div>
);

const Holder: React.FC<{ title: string; text: string; children?: React.ReactNode }> = ({ title, text, children }) => (
  <div className="py-7 border-t border-border first:pt-0 first:border-t-0">
    <h3 className="font-serif font-normal text-text-highlight text-[21px] leading-[1.25] mb-3">{title}</h3>
    <Paragraphs items={[text]} />
    {children}
  </div>
);

const SpvChart: React.FC<{ company: Company; years: [string, number][] }> = ({ company, years }) => {
  const top = Math.max(...years.map(([, count]) => count));
  const label = years.map(([year, count]) => `${year}, ${count}`).join('; ');
  return (
    <div className="max-w-[400px] mt-6">
      <div className="min-w-0">
        <p className="text-xs tracking-[0.12em] uppercase text-text-muted mb-3.5">New vehicles by year</p>
        <div className="flex items-end gap-3 h-[120px] border-b border-borderStrong" role="img" aria-label={`New ${company.name} special purpose vehicles by year of first SEC filing: ${label}`}>
          {years.map(([year, count]) => (
            <div key={year} className="flex-1 flex flex-col justify-end items-center h-full">
              <span className="font-medium text-xs leading-none text-text-highlight mb-1.5">{count}</span>
              <span
                className={`block w-full max-w-[40px] min-h-px ${count === 0 ? 'bg-borderStrong' : 'bg-accent'}`}
                style={{ height: count === 0 ? '1px' : `${(count / top * 100).toFixed(1)}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 mt-1.5">
          {years.map(([year]) => <span key={year} className="flex-1 text-center text-xs text-text-muted">{year}</span>)}
        </div>
      </div>
    </div>
  );
};

const GuideLinks: React.FC<{ guides: { id: string; title: string }[] }> = ({ guides }) => (
  <p className="text-[14.5px] mt-5 mb-4">
    {guides.map(guide => (
      <a key={guide.id} href={`${SITE_PATHS.insights}${guide.id}/`} className={`block w-fit mb-2 ${link}`}>{guide.title}</a>
    ))}
  </p>
);

export const CompanyProfile: React.FC<{ company: Company }> = ({ company }) => {
  const { name } = company;
  const full = displayName(company);
  const related = [...relatedCompanies(company), { name: 'All companies', path: SITE_PATHS.companies }];

  return (
    <>
      <SEO
        title={`${companyHeading(company)} | Strategic Fund Partners`}
        description={metaDescription(company)}
        schema={companySchema(company)}
      />
      <div className="text-base leading-[1.6] text-text-primary">
        <div className={container}>
          <Crumbs
            trail={[{ label: 'Private Markets', href: SITE_PATHS.privateMarkets }, { label: 'Companies', href: SITE_PATHS.companies }]}
            current={full}
          />
          <PageHead name={full} tail={company.h1_tail} ledes={company.ledes} />
        </div>

        <div className={container}>
          <dl className="grid grid-cols-2 min-[900px]:grid-cols-4 border-t border-l border-border">
            {company.figs.map(([value, label], index) => (
              <div key={index} className="border-r border-b border-border px-[22px] pt-6 pb-[22px] bg-bg/80">
                <dd className="mb-2.5 font-serif text-[28px] min-[900px]:text-[34px] leading-none text-text-highlight tabular-nums">{value}</dd>
                <dt className="text-sm leading-[1.45] text-text-secondary">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <Block id="rounds" first heading={<h2 className={h2Class}>{company.rounds_heading}</h2>}>
          <table className={table.table}>
            <thead className={table.thead}>
              <tr>
                <th className={table.th}>Date</th>
                <th className={table.th}>Round</th>
                {company.columns.map(column => <th key={column} className={table.thRight}>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {company.rounds.map(([date, round, cells], index) => (
                <tr key={index} className={table.tr}>
                  <td className={table.date}>{date}</td>
                  <td className={table.round}>{round}</td>
                  {company.columns.map((column, cell) => (
                    <td key={column} className={`${table.right} ${cells[cell] ? 'tabular-nums' : 'text-text-muted'}`} data-label={COLUMN_LABELS[column]}>
                      {cells[cell] || '–'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[13.5px] text-text-secondary mt-3.5 mb-4">{company.table_note}</p>
          <Paragraphs items={company.round_notes} className="mt-8" />
        </Block>

        <Block
          id="holders"
          heading={
            <>
              <h2 className={h2Class}>Ownership</h2>
              <p className="text-[13.5px] text-text-secondary mt-3.5 mb-4 max-w-[300px]">Based on company announcements, press reports and SEC filings through {COMPANIES_UPDATED}.</p>
            </>
          }
        >
          <Holder title="Venture and Strategic Investors" text={company.investors} />
          <Holder title="Special Purpose Vehicles" text={company.spv_sentence}>
            {company.spv_years?.length ? <SpvChart company={company} years={company.spv_years} /> : null}
          </Holder>
          {company.funds ? <Holder title="Registered Funds" text={company.funds} /> : null}
        </Block>

        <Block id="buying" heading={<h2 className={h2Class}>Buying {name} Shares</h2>}>
          <Paragraphs items={[
            `${name} shares are not available through a brokerage account. Accredited investors acquire them either directly from an existing shareholder or, more commonly, through a special purpose vehicle organized by a sponsor.`,
            `In an SPV investment, diligence centers on the sponsor and the vehicle's data room. The sponsor's track record and its source for the shares come first. The vehicle's documents should then confirm how it holds its ${name} position and set out the management fee, carried interest and expenses that determine the effective price per share.`,
            `A direct purchase is subject to ${name}'s transfer restrictions and cannot close without the company's cooperation, so the approval process and timetable should be established at the outset.`,
          ]} />
          <GuideLinks guides={BUY_GUIDES} />
        </Block>

        <Block id="selling" heading={<h2 className={h2Class}>Selling {name} Shares</h2>}>
          <Paragraphs items={[
            `Holders of ${name} stock or options should begin with their grant documents and the company's transfer policy, which determine whether a private sale is permitted, who may purchase the shares and how long approval is likely to take.`,
            'Liquidity generally comes through one of three routes: a tender offer organized by the company, a private sale that the company approves, or a forward contract under which the seller receives payment now and delivers the shares at a later date. Forward contracts leave the buyer dependent on future delivery and are prohibited by many companies, so the governing agreements should be reviewed before entering into one.',
          ]} />
          <GuideLinks guides={SELL_GUIDES} />
        </Block>

        <section className="bg-surface/60 py-[72px] border-y border-border">
          <div className={`${container} flex flex-wrap items-center justify-between gap-10`}>
            <div>
              <h2 className={`${h2Class} mb-3`}>Get in Touch</h2>
              <p className="text-text-secondary max-w-[560px]">We advise investors evaluating an offer of {name} shares and shareholders considering a sale, including review of the documents, fees and transfer terms.</p>
            </div>
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleConsultation}
              className="inline-flex items-center justify-center gap-3 px-7 md:px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contact
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className={`${container} pt-10 pb-4 text-[13px] leading-[1.6] text-text-secondary`}>
          <p className="max-w-[820px] mb-3">
            Related companies:{' '}
            {related.map((item, index) => (
              <React.Fragment key={item.path}>
                {index ? ' · ' : null}
                <a href={item.path} className={link}>{item.name}</a>
              </React.Fragment>
            ))}
          </p>
          <p className="max-w-[820px] mb-3">
            {sourceSegments(company.sources).map((segment, index) => (
              segment.href ? <a key={index} href={segment.href} className={link}>{segment.text}</a> : <React.Fragment key={index}>{segment.text}</React.Fragment>
            ))}
          </p>
          <p className="max-w-[820px] mb-3">Strategic Fund Partners is not affiliated with {full}. This page provides general information drawn from company announcements, press reports and public filings as of the date shown. It does not constitute an offer to buy or sell securities, a recommendation, or investment, legal or tax advice. Shares of private companies are illiquid and may lose their entire value.</p>
        </div>
      </div>
    </>
  );
};

export const CompanyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const company = findCompany(slug);

  useEffect(() => {
    if (!company) navigate(SITE_PATHS.companies, { replace: true });
  }, [company, navigate]);

  return company ? <CompanyProfile company={company} /> : null;
};
