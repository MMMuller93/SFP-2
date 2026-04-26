import React from 'react';

export const About: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 text-xs uppercase tracking-[0.15em] font-mono text-text-muted">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <span className="mx-3">/</span>
          <span className="text-accent">About</span>
        </div>
      </div>

      {/* Firm Section */}
      <section className="border-b border-grid px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-[980px] mx-auto">
          <div className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-accent mb-6">
            About
          </div>
          <h1 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-text-highlight mb-6 max-w-3xl text-balance">
            An advisory firm for fund managers, SPV sponsors, and family offices.
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
            Strategic Fund Partners advises on fund formation, structuring, regulatory compliance, and operations.
          </p>
        </div>
      </section>

      {/* Principal Section */}
      <section className="border-b border-grid px-6 md:px-10 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="text-[0.7rem] font-mono uppercase tracking-[0.2em] text-accent mb-6">
            Principal
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14 items-start mt-2">
            {/* Photo */}
            <div className="w-full max-w-[220px] aspect-square bg-surface border border-grid overflow-hidden">
              <img
                src="/miles-muller.jpg"
                alt="Miles Muller"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-serif font-light text-3xl text-text-highlight leading-tight mb-1.5">
                Miles Muller
              </h2>
              <div className="text-[0.7rem] font-mono uppercase tracking-[0.18em] text-text-muted mb-7">
                Founder &amp; Principal
              </div>
              <p className="text-base text-text-secondary font-light leading-relaxed mb-5 max-w-xl">
                Miles Muller is the Founder &amp; Principal of Strategic Fund Partners, where he advises fund managers, SPV sponsors, and family offices on fund formation, structuring, and regulatory compliance. He previously led legal, compliance, and operations at a fund administration platform serving venture funds, building out the platform&apos;s regulatory infrastructure as it scaled to more than $1 billion in assets under management.
              </p>

              <div className="flex flex-wrap gap-8 border-t border-grid pt-5 mt-2 mb-7 max-w-xl">
                <div className="flex flex-col gap-1">
                  <span className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-text-muted">Education</span>
                  <span className="text-sm text-text-primary font-medium">J.D., Stanford Law School</span>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/miles-muller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] border border-grid text-text-primary hover:border-accent hover:text-accent transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11.001-4.121A2.06 2.06 0 015.34 7.43zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@strategicfundpartners.com?subject=Introduction"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] border border-grid text-text-primary hover:border-accent hover:text-accent transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
