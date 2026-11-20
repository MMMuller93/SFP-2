import React from 'react';
import { SEO } from '../../components/SEO';
import { SITE_PATHS } from '../../lib/site-paths';
import { HUB_DESCRIPTION, HUB_ROWS, HUB_TITLE, hubSchema } from '../../lib/companies';
import { Crumbs, PageHead, container, link, sectionClass, table } from './CompanyPage';

export const CompaniesHub: React.FC = () => (
  <>
    <SEO title={`${HUB_TITLE} | Strategic Fund Partners`} description={HUB_DESCRIPTION} schema={hubSchema()} />
    <div className="text-base leading-[1.6] text-text-primary">
      <div className={container}>
        <Crumbs trail={[{ label: 'Private Markets', href: SITE_PATHS.privateMarkets }]} current="Companies" />
        <PageHead
          name="Private Company"
          tail="Funding Rounds and Ownership"
          ledes={["These pages cover privately held companies whose shares change hands in privately negotiated transactions. Each sets out the company's funding rounds, the investors, special purpose vehicles and registered funds that hold its shares, and the points to confirm before buying or selling."]}
        />
      </div>
      <section className={`${sectionClass} border-t border-border`}>
        <div className={container}>
          <table className={table.table}>
            <thead className={table.thead}>
              <tr>
                <th className={table.th}>Company</th>
                <th className={table.th}>Latest round in table</th>
                <th className={table.thRight}>Valuation</th>
              </tr>
            </thead>
            <tbody>
              {HUB_ROWS.map(row => (
                <tr key={row.path} className={table.tr}>
                  <td className={table.round}><a href={row.path} className={link}>{row.name}</a></td>
                  <td className={table.td}>{row.round}</td>
                  <td className={`${table.right} tabular-nums`}>{row.valuation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </>
);
