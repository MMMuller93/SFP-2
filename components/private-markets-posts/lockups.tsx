import React from 'react';
import type { BlogPost } from '../Blog';

const P = 'leading-relaxed text-text-secondary mb-6';
const H2 = 'font-serif text-3xl text-text-highlight mb-6 mt-12';
const H3 = 'font-serif text-2xl text-text-highlight mb-4';
const UL = 'list-disc pl-6 space-y-2 mb-6 marker:text-accent text-text-secondary leading-relaxed';
const A = 'text-accent hover:underline';
const B = 'font-medium text-text-highlight';

const TH = 'font-medium text-[11px] leading-[1.2] tracking-[0.14em] uppercase text-text-muted pb-3 border-b border-borderStrong';
const ROW = 'max-[640px]:grid max-[640px]:grid-cols-1 max-[640px]:border-b max-[640px]:border-border max-[640px]:py-3.5';
const WHEN = 'py-4 pr-3 border-b border-border align-baseline font-medium text-text-highlight max-[640px]:border-0 max-[640px]:p-0 max-[640px]:mb-1';
const WHO = 'py-4 pr-3 border-b border-border align-baseline text-text-secondary max-[640px]:border-0 max-[640px]:p-0 max-[640px]:mb-2';
const NUM = 'py-4 pl-3 border-b border-border align-baseline text-right whitespace-nowrap tabular-nums text-text-highlight max-[640px]:border-0 max-[640px]:p-0 max-[640px]:text-left max-[640px]:whitespace-normal max-[640px]:before:content-[attr(data-label)] max-[640px]:before:block max-[640px]:before:text-[10.5px] max-[640px]:before:tracking-[0.12em] max-[640px]:before:uppercase max-[640px]:before:text-text-muted max-[640px]:before:mb-0.5';

const PROSPECTUS = 'https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm';

const ANTHROPIC_FACTS: [string, string][] = [
  ['IPO price', '$83.00 per share'],
  ['Priced', 'November 18, 2026'],
  ['Listed', 'Nasdaq Global Select Market, ANT'],
  ['Shares under lockup', '15.5 billion'],
  ['Holder groups', 'Four, each on its own schedule'],
  ['Last release', 'November 18, 2027 at the latest'],
];

// From the "Shares Eligible for Future Sale" and "Underwriting" sections of the final prospectus.
const ANTHROPIC_RELEASES: [string, string, string][] = [
  ['November 19, 2026 (first trading day)', 'Employees, consultants, non-founder directors and officers: 10% of their locked shares', '315 million'],
  ['December 15, 2026', 'Early investors: 6.0% (180-day group) and 1.8% (365-day group)', '303 million'],
  ['January 5, 2027', 'Early investors: 6.0% and 1.8%', '303 million'],
  ['January 19, 2027', 'Early investors: 7.0% and 2.1%', '353 million'],
  ['February 2, 2027', 'Early investors: 7.0% and 2.1%', '353 million'],
  ['After full-year 2026 results', 'Employees: a further 35%. Early investors: 12.5% and 3.75%', '1.7 billion'],
  ['13, 27, 41, 55 and 69 days after full-year 2026 results', 'Early investors: 9.5% and 2.85% on each date', '480 million each'],
  ['After first-quarter 2027 results, or May 17, 2027 if earlier', 'Employees and the 180-day group: all remaining shares. Co-founders: up to 29%. 365-day group: 4.2%', '3.0 billion'],
  ['34, 48, 62 and 76 days after first-quarter 2027 results', '365-day group: 5.6% on each date', '447 million each'],
  ['After second-quarter 2027 results', '365-day group: 7.0%', '558 million'],
  ['27, 41, 55, 69 and 83 days after second-quarter 2027 results', '365-day group: 6.3% on each date', '502 million each'],
  ['After third-quarter 2027 results, or November 18, 2027 if earlier', 'Co-founders and the 365-day group: all remaining shares', '1.9 billion'],
];

export const LOCKUP_POSTS: BlogPost[] = [
  {
    id: 'anthropic-lockup-expiration',
    title: 'Anthropic Lockup Expiration Dates',
    date: 'November 23, 2026',
    readTime: '5 min read',
    excerpt: 'When Anthropic employees, early investors and co-founders can sell ANT shares after the November 2026 IPO, with each release date and percentage from the final prospectus.',
    byline: false,
    contactCta: {
      title: 'Selling Anthropic shares?',
      text: 'We advise employees and early investors on release dates, sale structure and taxes.',
    },
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Anthropic priced its initial public offering on November 18, 2026 at $83.00 per share. Its Class A shares began trading on the Nasdaq Global Select Market under the symbol ANT on November 19.
        </p>
        <p className={P}>
          Directors, officers, employees and nearly all pre-IPO stockholders signed lockup or market standoff agreements covering 15.5 billion shares. Anthropic's lockup does not end on a single day. Shares are released in stages across four groups of holders. Some releases fall on fixed dates. Others follow Anthropic's earnings releases, so their dates are not yet known.
        </p>

        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          {ANTHROPIC_FACTS.map(([label, value]) => (
            <div key={label} className="flex flex-wrap gap-x-4 py-2 border-b border-grid">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted w-full sm:w-auto sm:min-w-[11rem]">{label}</span>
              <span className="text-text-highlight">{value}</span>
            </div>
          ))}
        </div>

        <h2 className={H2}>Release calendar</h2>
        <p className={P}>
          Share counts are the most that can become eligible on each date, across Class A and Class N shares, as stated in the prospectus. Results means Anthropic's public release of its financial results for that period. Each of those releases begins on the second full trading day after the results come out.
        </p>
        <div className="mb-6">
          <table className="w-full border-collapse text-[15px]">
            <thead className="max-[640px]:hidden">
              <tr>
                <th className={`${TH} text-left pr-3`}>When</th>
                <th className={`${TH} text-left pr-3`}>Who can sell</th>
                <th className={`${TH} text-right pl-3`}>Shares newly eligible</th>
              </tr>
            </thead>
            <tbody>
              {ANTHROPIC_RELEASES.map(([when, who, shares]) => (
                <tr key={when} className={ROW}>
                  <td className={WHEN}>{when}</td>
                  <td className={WHO}>{who}</td>
                  <td className={NUM} data-label="Shares newly eligible, up to">{shares}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed text-text-muted mb-6">
          If a date falls on a day the market is closed, the release moves to the next trading day.
        </p>

        <h2 className={H2}>When each group can sell</h2>
        <h3 className={H3}>Employees, consultants, directors and officers</h3>
        <p className={P}>
          Current and former employees and consultants follow one schedule, together with directors and officers who are not co-founders, including the Chief Financial Officer and Chief Accounting Officer. Percentages apply to the locked shares each person held on October 31, 2026.
        </p>
        <ul className={UL}>
          <li><strong className={B}>10%</strong> from the first day of trading, November 19, 2026.</li>
          <li><strong className={B}>A further 35%</strong> from the second full trading day after Anthropic releases its full-year 2026 results.</li>
          <li><strong className={B}>The rest</strong> after first-quarter 2027 results, or after May 17, 2027 if that comes first.</li>
        </ul>
        <p className={P}>
          Employees remain subject to Anthropic's insider trading policy, so trading windows can limit when a released share can actually be sold.
        </p>

        <h3 className={H3}>Early investors: the 180-day group</h3>
        <p className={P}>Certain stockholders holding 2.7 billion shares before the offering are on a 180-day schedule.</p>
        <ul className={UL}>
          <li>6.0% on each of December 15, 2026 and January 5, 2027.</li>
          <li>7.0% on each of January 19 and February 2, 2027.</li>
          <li>12.5% after full-year 2026 results, then 9.5% on each of the five dates that follow (13, 27, 41, 55 and 69 days later).</li>
          <li>The rest after first-quarter 2027 results, or after May 17, 2027 if that comes first.</li>
        </ul>

        <h3 className={H3}>Early investors: the 365-day group</h3>
        <p className={P}>
          Stockholders who held more than 0.5% of Anthropic's fully diluted shares before the offering are on a 365-day schedule. Together they hold 8.0 billion shares.
        </p>
        <ul className={UL}>
          <li>1.8% on each of December 15, 2026 and January 5, 2027, and 2.1% on each of January 19 and February 2, 2027.</li>
          <li>3.75% after full-year 2026 results, then 2.85% on each of the five dates that follow.</li>
          <li>4.2% after first-quarter 2027 results (or May 17, 2027 if earlier), then 5.6% on each of the four dates that follow.</li>
          <li>7.0% after second-quarter 2027 results, then 6.3% on each of the five dates that follow.</li>
          <li>The rest after third-quarter 2027 results, or after November 18, 2027 if that comes first.</li>
        </ul>

        <h3 className={H3}>Co-founders</h3>
        <p className={P}>
          Anthropic's seven co-founders may sell up to 29% of their locked shares after first-quarter 2027 results, or after May 17, 2027 if that comes first. The rest is released after third-quarter 2027 results, or after November 18, 2027 if that comes first.
        </p>

        <h3 className={H3}>Shares outside the lockup</h3>
        <ul className={UL}>
          <li>The 980 million Class A shares sold in the offering trade freely.</li>
          <li>313 million Class N shares bought for $26.0 billion in a private placement alongside the IPO are not covered by the lockup. They are restricted securities that a buyer who is not an affiliate generally must hold for six months once Anthropic has been a reporting company for 90 days.</li>
          <li>Class N shares convert into Class A shares when they are sold in the market or transferred to an unaffiliated buyer.</li>
        </ul>

        <h2 className={H2}>What can change these dates</h2>
        <ul className={UL}>
          <li><strong className={B}>Earnings dates.</strong> Most releases are tied to Anthropic's earnings releases. If Anthropic reports earlier or later, those releases move with it.</li>
          <li><strong className={B}>Early releases.</strong> The lead underwriters may release shares from the lockup at any time, in whole or in part. Some early releases trigger matching releases for certain other holders.</li>
          <li><strong className={B}>Hedging and pledging.</strong> Holders may not hedge locked shares. From June 1, 2027, certain stockholders may hedge up to 719 million shares in total. Pledging shares to a lender in a bona fide loan is permitted, subject to conditions.</li>
          <li><strong className={B}>Trading plans.</strong> Holders may set up Rule 10b5-1 trading plans during the lockup, but no sales under them can occur until the shares are released.</li>
          <li><strong className={B}>Affiliates.</strong> Directors, officers and other affiliates selling under Rule 144 are limited in any three-month period to the greater of 1% of Class A shares outstanding (75.8 million shares at the offering) or the average weekly trading volume.</li>
        </ul>

        <h2 className={H2}>Planning a sale</h2>
        <p className={P}>
          The release schedule decides when shares can be sold, not whether selling then makes sense. Before a release date, confirm which schedule applies, whether a trading window is open, and how each lot will be taxed, since that depends on whether the shares came from options, RSUs or a purchase. Selling at one release date versus spreading sales across several can change both the tax and the price received.
        </p>

        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Source: Anthropic, PBC <a href={PROSPECTUS} className={A}>final prospectus (Form 424(b)(4))</a>, filed November 19, 2026, sections The Offering, Shares Eligible for Future Sale and Underwriting.
        </p>
        <p className="text-xs text-text-secondary border-t border-grid pt-6 mt-12">
          Strategic Fund Partners is not affiliated with Anthropic, PBC. This page summarizes the lockup terms described in Anthropic's final prospectus and is not an offer to buy or sell securities or investment, legal or tax advice. Lockup terms are subject to exceptions, early releases and changes not described here.
        </p>
      </>
    ),
  },
];
