import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONSULTATION_URL, openConsultation } from '../../lib/calendly';
import { trackConversion } from '../../lib/conversions';

const services = [
  {
    title: 'Pre-IPO Investment Advisory',
    description: 'Advice on pre-IPO opportunities and the options for investing directly or through a fund or SPV.',
    scope: ['Investment due diligence', 'Fees and investor rights', 'Liquidity and transfer restrictions'],
  },
  {
    title: 'Brokered Transactions',
    description: 'Transaction support for investors and shareholders working with a broker.',
    scope: ['Broker proposals and fee review', 'Purchase and sale documentation', 'Transaction review and closing requirements'],
  },
  {
    title: 'Shareholder Liquidity',
    description: 'Advice on secondary sales and alternative liquidity arrangements for founders, employees and other shareholders.',
    scope: ['Sale and forward-contract comparisons', 'Company approvals and transfer restrictions', 'Payment, delivery and counterparty risk'],
  },
  {
    title: 'Transaction Structuring',
    description: 'Advice on ownership, economics and transaction terms before committing capital or selling shares.',
    scope: ['Direct ownership and SPV interests', 'Investor protections and sponsor economics', 'Transfer and settlement terms'],
  },
];

export const PrivateMarkets: React.FC = () => {
  const handleConsultation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackConversion('consultation_link_clicked');
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void openConsultation().catch(() => {
      window.location.assign(CONSULTATION_URL);
    });
  };

  return (
    <>
      <section className="relative border-b border-grid bg-bg">
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-8">
            Private Markets
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-highlight tracking-tight mb-8 text-balance">
            Strategic Guidance <br className="hidden sm:block" />
            for <span className="italic font-normal text-accent">Private Markets.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            For investors pursuing <span className="whitespace-nowrap">pre-IPO</span> opportunities and shareholders considering liquidity.
          </p>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConsultation}
            className="inline-flex items-center justify-center gap-3 px-7 md:px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Book Consultation
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

      </section>

      <section className="border-b border-grid bg-bg py-20 md:py-28" aria-labelledby="private-markets-support">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-5">Expertise</p>
            <h2 id="private-markets-support" className="font-serif text-4xl md:text-5xl leading-tight text-text-highlight text-balance">
              Advisory Services
            </h2>
          </div>

          <div className="lg:col-span-8 border-t border-grid">
            {services.map((service, index) => (
              <div key={service.title} className="grid grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr] gap-4 md:gap-6 py-8 border-b border-grid">
                <span className="text-xs font-mono text-accent pt-2" aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-text-highlight mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                    {service.scope.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-grid bg-bg py-16 md:py-20" aria-labelledby="private-markets-insights">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
            <h2 id="private-markets-insights" className="font-serif text-3xl md:text-4xl text-text-highlight">Private Markets Insights</h2>
            <a href="/insights/" className="text-sm text-accent hover:text-accentHover underline underline-offset-4">View All Insights</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {[
              { href: '/insights/primary-vs-secondary-investments/', title: 'Primary vs. Secondary Investments in Private Companies', detail: 'Capital, ownership and investor rights in each transaction.' },
              { href: '/insights/choosing-private-share-broker/', title: 'Choosing a Broker for a Private Share Purchase', detail: 'The broker’s role, seller relationships and engagement terms.' },
              { href: '/insights/comparing-pre-ipo-broker-offers/', title: 'Comparing Broker Offers for Pre-IPO Shares', detail: 'Compare the security, total cost and conditions for closing.' },
              { href: '/insights/selling-pre-ipo-shares/', title: 'Selling Pre-IPO Shares: Options for Employees and Founders', detail: 'Liquidity alternatives and the terms that affect proceeds.' },
            ].map(article => (
              <a key={article.href} href={article.href} className="group border-t border-grid py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                <h3 className="font-serif text-xl md:text-2xl text-text-highlight group-hover:text-accent transition-colors mb-3">{article.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{article.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-grid bg-bg py-12 md:py-16" aria-labelledby="private-markets-related">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 id="private-markets-related" className="font-serif text-2xl md:text-3xl text-text-highlight mb-6">Related Expertise</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-12 text-sm">
            <a href="/insights/reviewing-investment-documents/" className="inline-flex items-center gap-2 text-accent hover:text-accentHover underline underline-offset-4">
              Reviewing Investment Documents <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="/#services" className="inline-flex items-center gap-2 text-accent hover:text-accentHover underline underline-offset-4">
              Fund Formation &amp; Compliance <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface/30 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-5">Get in Touch</h2>
            <p className="text-text-secondary leading-relaxed max-w-xl">
              Discuss your investment or liquidity plans.
            </p>
          </div>
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConsultation}
            className="inline-flex items-center gap-3 self-start lg:self-auto shrink-0 border-b border-accent pb-3 text-xs font-bold uppercase tracking-widest text-accent hover:text-accentHover hover:border-accentHover transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Book Consultation
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
};
