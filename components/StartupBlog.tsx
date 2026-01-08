import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from './SEO';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
}

interface StartupBlogProps {
  onContactClick: () => void;
}

const posts: BlogPost[] = [
  {
    id: 'incorporating-your-startup',
    title: 'Incorporating Your Startup: The Complete Guide to Delaware C-Corps',
    date: 'December 15, 2025',
    readTime: '10 min read',
    excerpt: 'Delaware C-corp is the standard structure for VC-backed startups. This guide explains why, walks through the incorporation process, and covers what you need to get started.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          If you're building a startup that plans to raise venture capital, your company structure isn't a detail to figure out later. It's foundational. Nearly every VC-backed company incorporates as a Delaware C-corporation before raising institutional capital, and for good reason.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains why Delaware C-corp is the standard, what the incorporation process involves, and what documents and decisions you'll need to make before you can start hiring, issuing equity, and raising capital.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Delaware C-Corp?</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investor expectations</h4>
            <p className="text-text-secondary">VCs expect Delaware C-corps. Their legal teams know Delaware law, their templates are written for Delaware entities, and their due diligence process assumes this structure. Incorporating elsewhere creates friction and questions.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Legal framework</h4>
            <p className="text-text-secondary">Delaware corporate law is well-developed, predictable, and business-friendly. Courts resolve disputes quickly. Statutes provide maximum flexibility for structuring board rights, preferred stock terms, and protective provisions.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Equity structures</h4>
            <p className="text-text-secondary">Delaware law makes it straightforward to issue multiple classes of stock with different rights. This is essential for venture financings, where investors receive preferred stock with liquidation preferences, anti-dilution protection, and board seats.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Exit readiness</h4>
            <p className="text-text-secondary">Acquirers and underwriters expect Delaware C-corps. Converting from an LLC or non-Delaware entity before an exit creates tax complications, timing delays, and additional legal costs.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          <strong className="text-text-highlight">What about LLCs?</strong> LLCs offer tax advantages for profitable businesses, but they don't work well for VC-backed startups. Investors don't want pass-through tax treatment, and LLC equity structures are harder to manage with multiple financing rounds and option pools.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Incorporation Process</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">1. Choose a Name</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Your corporate name must be distinguishable from existing Delaware entities. Search Delaware's entity database before filing. You'll also want to check domain availability and USPTO trademark records.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          The name on your Certificate of Incorporation is your legal name. You can operate under a different name (DBA) but the legal name appears on contracts, cap tables, and SEC filings.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">2. File Certificate of Incorporation</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The Certificate of Incorporation is the foundational document filed with Delaware. It specifies:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Company name</li>
          <li>Registered agent address in Delaware</li>
          <li>Authorized shares: typically 10-15 million common shares authorized at formation, with par value of $0.0001 per share</li>
          <li>Incorporator name (your lawyer or a founder)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Why authorize 10-15 million shares?</strong> You'll issue founders a few million shares and reserve 1-2 million for an employee option pool. The rest provides headroom for future rounds without needing to amend the certificate and pay filing fees.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">3. Adopt Bylaws</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Bylaws are the internal operating rules. They cover board size and election, officer roles, stockholder meetings, and procedures for amending bylaws. Bylaws aren't filed publicly—they're maintained internally and provided to investors during due diligence.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">4. Appoint Initial Directors</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          The incorporator appoints the initial board. For founder-stage companies, this is typically the founders. Board size is usually 1-3 at formation, expanding as you raise capital and add outside directors or investor representatives.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">5. Issue Founder Stock</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The board issues common stock to founders under restricted stock purchase agreements. Shares are typically priced at par value ($0.0001 per share), which means 1 million shares costs $100.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Vesting is standard.</strong> Even for founders. The typical schedule is four years with a one-year cliff. This protects the company if a co-founder leaves early.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Founders must file 83(b) elections within 30 days of purchasing stock. See our guide <Link to="/startups/insights/83b-election" className="text-accent hover:text-accent/80 underline">The 83(b) Election</Link> for details.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">6. Adopt Stock Plan</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Adopt an equity incentive plan before hiring employees. The plan reserves shares for option grants. A typical size is 10-20% of fully diluted capitalization at formation. For more, see <Link to="/startups/insights/founder-equity" className="text-accent hover:text-accent/80 underline">Founder Equity: Stock, Vesting, and 83(b)</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Post-Incorporation Essentials</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">EIN (Employer Identification Number)</h4>
            <p className="text-text-secondary">Apply for an EIN from the IRS immediately after incorporation. You need it to open bank accounts, file tax returns, and hire employees.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Bank account</h4>
            <p className="text-text-secondary">Open a corporate bank account in the company's name. Keep founder funds separate. Commingling personal and business funds creates piercing-the-veil risks and tax problems.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">IP assignment</h4>
            <p className="text-text-secondary">All founders must assign pre-existing IP to the company. Any code, designs, or inventions developed before incorporation should be formally transferred. Investors will look for this in due diligence.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Registered agent</h4>
            <p className="text-text-secondary">You need a registered agent with a physical Delaware address to receive legal notices. Most companies use a commercial service ($100-300 annually).</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We handle Delaware C-corp formation for early-stage startups:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Entity formation', desc: 'Certificate of Incorporation drafting and filing, bylaws, initial board resolutions, registered agent setup' },
            { title: 'Founder equity', desc: 'Restricted stock purchase agreements, 83(b) election coordination, equity splits and vesting schedules' },
            { title: 'Stock plans', desc: 'Equity incentive plan adoption, option templates, 409A coordination' },
            { title: 'Corporate setup', desc: 'EIN application, IP assignment agreements, initial governance documents' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="text-text-highlight font-medium">{item.title}</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: '83b-election',
    title: 'The 83(b) Election: How to File and Why Missing the Deadline Could Cost You Thousands',
    date: 'December 1, 2025',
    readTime: '8 min read',
    excerpt: 'You have 30 days from receiving restricted stock to file an 83(b) election. Miss that deadline and you could owe taxes on hundreds of thousands of dollars of paper gains you can't sell.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          You have 30 days from receiving restricted stock to file an <strong className="text-accent font-medium">83(b) election</strong>. Miss that deadline and you could owe taxes on hundreds of thousands of dollars of paper gains you can't sell. The form itself is one page. The consequence of not filing it can be devastating.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains what the 83(b) election does, when you need to file one, and the exact steps to file it correctly.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What the 83(b) Election Does</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          When you receive <strong className="text-accent font-medium">restricted stock</strong> (stock subject to vesting), the IRS normally treats you as receiving taxable income each time shares vest. You pay ordinary income tax on the value at vesting, even if you can't sell the shares.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          An <strong className="text-accent font-medium">83(b) election</strong> flips this. You choose to pay tax on the stock's value now, when you receive it, rather than later when it vests. For founders receiving stock at formation for pennies per share, this means paying tax on almost nothing.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
          <p className="text-text-secondary mb-4">
            You receive 2 million shares of restricted founder stock at $0.0001 per share ($200 total value). Without an 83(b) election, you pay tax each time shares vest based on their value at that moment.
          </p>
          <p className="text-text-secondary mb-4">
            If the company raises money at $2.00 per share before your first cliff, you owe ordinary income tax on $500,000 (250,000 shares × $2.00) when your one-year cliff vests.
          </p>
          <p className="text-text-secondary">
            With an 83(b) election filed within 30 days of receiving the stock, you pay tax on $200 at grant. The $500,000 in appreciation is taxed as capital gains when you eventually sell, not as ordinary income when shares vest.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The 30-Day Deadline Is Absolute</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The election must be <strong className="text-accent font-medium">filed with the IRS within 30 days of the date you receive the stock.</strong> Not postmarked. Filed. The IRS follows the mailbox rule (postmark counts), but don't cut it close.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          There are no exceptions. No extensions. No late filing provisions. If you miss 30 days, you cannot file the election. Ever.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How to File an 83(b) Election</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 1: Prepare the Form</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          There's no official IRS form. You prepare a letter with this information:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Your name, address, and Social Security number</li>
          <li>Description of the property (e.g., "2,000,000 shares of Common Stock")</li>
          <li>Date you received the property</li>
          <li>Fair market value of shares at grant</li>
          <li>Amount paid for the shares</li>
          <li>Statement that you're making the election under Section 83(b)</li>
        </ul>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 2: File with the IRS</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Mail the <strong className="text-accent font-medium">original signed election</strong> to the IRS service center where you file your tax return.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Send it <strong className="text-accent font-medium">certified mail, return receipt requested.</strong> This is your proof of filing. Keep the receipt and the return card.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 3: Provide Copies</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Attach a copy of the election to your tax return for the year in which you receive the stock.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Provide a copy to your company. The company should keep it in its records.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 4: Keep Proof Forever</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Keep your certified mail receipt, the signed return card from the IRS, and a copy of the election. You may need to prove you filed it years later during an audit or acquisition.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens If You Don't File</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you receive restricted stock and don't file an 83(b) election:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>You owe ordinary income tax as shares vest</li>
          <li>You can't sell the shares to pay the tax</li>
          <li>You lose capital gains treatment on appreciation before vesting</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We coordinate 83(b) elections for founders and early employees:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Formation packages', desc: 'Preparing and filing 83(b) elections for all founders receiving restricted stock' },
            { title: 'Ongoing support', desc: 'For companies issuing restricted stock or allowing early exercise of options' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="text-text-highlight font-medium">{item.title}</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'safes-complete-guide',
    title: 'SAFEs: The Complete Guide to Simple Agreements for Future Equity',
    date: 'November 17, 2025',
    readTime: '12 min read',
    excerpt: 'SAFEs let you raise capital without setting a valuation or giving up board seats. This guide explains how they work, what terms matter, and when to use them.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A SAFE (Simple Agreement for Future Equity) is the most common instrument for seed-stage fundraising. It lets you raise capital from angels and pre-seed funds without negotiating a valuation, without issuing equity today, and without creating debt.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          SAFEs were introduced by Y Combinator in 2013 to replace convertible notes. Today they're the standard for early-stage rounds. This guide explains how they work, what terms you need to understand, and when to use them.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is a SAFE?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A SAFE is a contract that gives the investor the right to receive equity in a future priced round. It's not debt—there's no interest, no maturity date, and no repayment obligation. It's not equity—the investor doesn't get shares until the SAFE converts.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          SAFEs convert into preferred stock when you raise a priced equity round (typically Series A). The conversion terms are set in the SAFE: the investor gets shares based on the discount rate, valuation cap, or both.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
          <p className="text-text-secondary mb-4">
            You raise $500K on a post-money SAFE with a $6M valuation cap. Twelve months later, you raise a Series A at a $12M pre-money valuation.
          </p>
          <p className="text-text-secondary">
            The SAFE holder converts at the $6M cap, not the $12M Series A price. They receive a larger percentage of the company than Series A investors paying full price.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Key SAFE Terms</h2>

        <div className="space-y-8 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Valuation Cap</h3>
            <p className="text-text-secondary mb-3">
              The valuation cap is the maximum valuation at which the SAFE converts. If your priced round values the company above the cap, SAFE holders convert at the cap, not the actual valuation.
            </p>
            <p className="text-text-secondary">
              <strong className="text-accent font-medium">Typical range:</strong> $4M–$10M for pre-seed, $8M–$15M for seed. The cap isn't a valuation—it's a ceiling on conversion price.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Discount Rate</h3>
            <p className="text-text-secondary mb-3">
              The discount gives SAFE holders the right to convert at a reduced price compared to the next round investors. A 20% discount means the SAFE converts at 80% of the Series A price.
            </p>
            <p className="text-text-secondary">
              <strong className="text-accent font-medium">Typical range:</strong> 15–25%. Most SAFEs use 20%. Discounts reward early risk by giving SAFE investors better pricing than later investors.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Pro Rata Rights</h3>
            <p className="text-text-secondary mb-3">
              Pro rata rights let SAFE holders invest additional capital in the next round to maintain their ownership percentage. Without pro rata rights, SAFE holders get diluted by new investors.
            </p>
            <p className="text-text-secondary">
              <strong className="text-accent font-medium">What's standard:</strong> Most SAFEs don't include pro rata rights. Investors who want them negotiate separately.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Most Favored Nation (MFN)</h3>
            <p className="text-text-secondary mb-3">
              An MFN clause gives SAFE holders the right to adopt more favorable terms if you issue SAFEs to later investors on better terms. This prevents issuing sweetheart deals to later investors.
            </p>
            <p className="text-text-secondary">
              <strong className="text-accent font-medium">What's standard:</strong> MFN is common in angel rounds where you expect to raise multiple tranches over several months.
            </p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Post-Money vs Pre-Money SAFEs</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Y Combinator released two SAFE versions: the original (now called "pre-money") and the 2018 "post-money" SAFE. The difference matters for cap table dilution.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Post-money SAFEs are now standard.</strong> They're clearer and more founder-friendly. For details on the difference, see <Link to="/startups/insights/post-money-vs-pre-money" className="text-accent hover:text-accent/80 underline">Post-Money vs Pre-Money SAFEs</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When Does a SAFE Convert?</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Equity Financing</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          The SAFE converts when you raise a "qualified financing"—typically defined as a preferred stock round of at least $1M. The SAFE converts into the same series of preferred stock sold in that round, with the same rights and preferences.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Liquidity Event</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          If the company is acquired or goes public before a qualified financing, SAFE holders either (1) convert to common stock immediately before the transaction, or (2) receive a cash payment equal to their investment. The SAFE specifies which approach applies.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Dissolution</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          If the company dissolves before conversion, SAFE holders have a payment right behind creditors but ahead of common stockholders. In practice, dissolutions rarely leave any assets for SAFE holders.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">SAFEs vs Convertible Notes</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          SAFEs replaced convertible notes as the standard early-stage instrument. The main differences:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">SAFEs are not debt.</strong> No interest, no maturity date, no repayment obligation.</li>
          <li><strong className="text-accent font-medium">Simpler terms.</strong> No need to negotiate interest rates, maturity, or default provisions.</li>
          <li><strong className="text-accent font-medium">Fewer investor protections.</strong> Convertible notes often include board representation, information rights, and other terms SAFEs lack.</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          For a detailed comparison, see <Link to="/startups/insights/safe-vs-convertible-note" className="text-accent hover:text-accent/80 underline">SAFE vs Convertible Note</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Common Mistakes</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Setting the cap too low</h4>
            <p className="text-text-secondary">If your cap is $5M and you raise a Series A at $15M, SAFE holders get massive dilution protection. Make sure the cap leaves room for growth without excessive dilution.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Issuing too many SAFEs</h4>
            <p className="text-text-secondary">Multiple SAFE rounds with different terms create cap table complexity. Limit the number of SAFE investors and keep terms consistent.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Not modeling dilution</h4>
            <p className="text-text-secondary">Run conversion scenarios before issuing SAFEs. Understand how much of the company SAFE holders will own at different Series A valuations.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Using old pre-money templates</h4>
            <p className="text-text-secondary">Post-money SAFEs are clearer and avoid conversion surprises. Use Y Combinator's post-money template unless an investor specifically requests pre-money.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We handle SAFE rounds for early-stage startups:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'SAFE preparation', desc: 'Drafting SAFEs based on Y Combinator templates, customizing terms for your round, cap modeling' },
            { title: 'Round management', desc: 'Coordinating multiple investors, tracking signatures and wires, updating cap table' },
            { title: 'Conversion support', desc: 'Series A conversion mechanics, calculating share counts, coordinating with Series A counsel' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="text-text-highlight font-medium">{item.title}</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'post-money-vs-pre-money',
    title: 'Post-Money vs Pre-Money SAFEs: What\'s the Difference and Why It Matters',
    date: 'November 3, 2025',
    readTime: '7 min read',
    excerpt: 'Post-money SAFEs give founders certainty about dilution. Pre-money SAFEs shift conversion risk to founders. Here\'s what changes and why you should use post-money.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          In 2018, Y Combinator released a new SAFE template called the "post-money" SAFE and retroactively labeled the original as "pre-money." The difference seems technical but has real consequences for founder dilution.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains how the two versions differ, what changes for founders, and why post-money SAFEs are now standard.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Core Difference</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Both versions have a valuation cap. The difference is <strong className="text-accent font-medium">what the cap refers to</strong>:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Pre-money cap:</strong> The cap applies to the company's value <em>before</em> the SAFE investment. SAFE holders dilute founders and other SAFE holders at conversion.</li>
          <li><strong className="text-accent font-medium">Post-money cap:</strong> The cap applies to the company's value <em>after</em> the SAFE investment. SAFE holders' ownership percentage is locked in at issuance.</li>
        </ul>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
          <p className="text-text-secondary mb-4">
            You raise $1M on SAFEs with a $10M cap. At the time of issuance, you expect SAFE holders to own 10% of the company ($1M / $10M).
          </p>
          <p className="text-text-secondary mb-4">
            <strong className="text-accent font-medium">With pre-money SAFEs:</strong> If you raise another $1M on SAFEs before conversion, total SAFE capital is now $2M. At conversion, SAFE holders own $2M / $10M = 20%, not 10%. Founders get diluted more than expected.
          </p>
          <p className="text-text-secondary">
            <strong className="text-accent font-medium">With post-money SAFEs:</strong> The first $1M SAFE locks in 10% ownership. The second $1M SAFE separately calculates its percentage. Founders know exactly how much they're diluted with each SAFE.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Post-Money SAFEs Are Better for Founders</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Predictable dilution</h4>
            <p className="text-text-secondary">You know exactly how much equity you're giving up when you sign the SAFE. No surprises at conversion when you discover you issued more SAFEs than you thought.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Rolling closes</h4>
            <p className="text-text-secondary">You can close SAFEs over several months without worrying about diluting earlier investors. Each SAFE stands alone.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Easier cap table modeling</h4>
            <p className="text-text-secondary">Founders can calculate dilution at signing, not at conversion. You can show Series A investors a clear cap table without complex SAFE conversion math.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How Pre-Money SAFEs Create Dilution Risk</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          With pre-money SAFEs, all SAFE capital pools together at conversion and dilutes the pre-SAFE cap table. This creates two problems:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Founders don't know final dilution until the priced round. If you raise $500K expecting 5% dilution but then raise another $1M on SAFEs before Series A, you've actually given up 15%.</li>
          <li>Early SAFE investors get diluted by later SAFE investors. If you raise multiple SAFE tranches, early investors own less than they expected.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When Investors Prefer Pre-Money</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Some investors prefer pre-money SAFEs because they avoid dilution from later SAFEs. If you raise multiple tranches, early pre-money SAFE holders benefit from the pooled conversion.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          In practice, most professional investors now accept post-money SAFEs as standard. If an investor pushes for pre-money, ask why. It's usually because they expect you to raise significant additional SAFE capital and want to avoid dilution from later investors.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What to Use</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Use post-money SAFEs unless an investor specifically negotiates for pre-money.</strong> Post-money is now the Y Combinator standard, and most investors have moved to it. It's clearer, easier to model, and avoids unpleasant dilution surprises.
        </p>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          For more on SAFEs generally, see <Link to="/startups/insights/safes-complete-guide" className="text-accent hover:text-accent/80 underline">SAFEs: The Complete Guide</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We help founders navigate SAFE rounds:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Cap modeling', desc: 'Running scenarios to show dilution impact of different cap and discount terms' },
            { title: 'SAFE negotiation', desc: 'Explaining terms to investors and negotiating cap, discount, and pro rata rights' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="text-text-highlight font-medium">{item.title}</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'founder-equity',
    title: 'Founder Equity: Stock, Vesting, and 83(b) Elections',
    date: 'October 20, 2025',
    readTime: '11 min read',
    excerpt: 'How founder equity works, why vesting protects the company, and what happens if a founder leaves before their shares vest.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Founder equity isn't just a split between co-founders. It's a structure designed to protect the company if founders leave, align incentives over a long time horizon, and satisfy investor requirements in future financings.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains how founder stock works, why vesting is standard, and what you need to know about restricted stock and 83(b) elections.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Founder Stock Basics</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Founders receive <strong className="text-accent font-medium">common stock</strong> at formation. This is different from employee options or investor preferred stock.
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Founders buy stock.</strong> You purchase shares at par value (typically $0.0001 per share). One million shares costs $100.</li>
          <li><strong className="text-accent font-medium">Stock is restricted.</strong> Shares are subject to vesting, meaning the company can repurchase unvested shares if you leave.</li>
          <li><strong className="text-accent font-medium">You own the shares immediately.</strong> Even though shares vest over time, you're a stockholder from day one. You vote, receive dividends (if any), and have stockholder rights.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Vesting?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Vesting protects the company and remaining founders if someone leaves early. Without vesting, a co-founder who leaves after two months still owns 25% of the company. With vesting, unvested shares return to the company.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Investors require vesting. If you try to raise institutional capital without founder vesting in place, the first thing a VC will ask for is a vesting schedule. Better to set it up correctly at formation.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Standard Vesting Schedule</h4>
          <p className="text-text-secondary mb-4">
            <strong className="text-accent font-medium">Four years, one-year cliff</strong>
          </p>
          <ul className="space-y-2 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Shares vest over 48 months</li>
            <li>No vesting during the first 12 months</li>
            <li>At 12 months, 25% of shares vest</li>
            <li>Remaining shares vest monthly over the next 36 months</li>
          </ul>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens When a Founder Leaves</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Before the cliff</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          If you leave before 12 months, no shares vest. The company repurchases all shares at the original purchase price (typically $100 for 1 million shares). You walk away with your purchase price back, but no equity.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">After the cliff</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you leave after 18 months, you keep all vested shares (37.5% of your original grant: 25% from the cliff plus 12.5% from six additional months). The company repurchases unvested shares at the original purchase price.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Vested shares remain yours. You continue to own them as a stockholder even after leaving the company.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Acceleration Provisions</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Some founder agreements include <strong className="text-accent font-medium">accelerated vesting</strong> triggers:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Single-trigger acceleration:</strong> All shares vest immediately upon acquisition. Rare for founders; more common for executives.</li>
          <li><strong className="text-accent font-medium">Double-trigger acceleration:</strong> Shares vest if (1) the company is acquired AND (2) you're terminated without cause or resign for good reason within 12 months of the acquisition. This is the standard protection for founders in acquisition scenarios.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Restricted Stock and 83(b) Elections</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Founder stock is <strong className="text-accent font-medium">restricted stock</strong> under Section 83 of the tax code. Without an 83(b) election, you owe ordinary income tax each time shares vest based on the fair market value at vesting.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Filing an 83(b) election within 30 days of receiving stock</strong> lets you pay tax on the stock's value at grant (typically pennies per share) rather than at vesting (potentially dollars per share). For details, see <Link to="/startups/insights/83b-election" className="text-accent hover:text-accent/80 underline">The 83(b) Election</Link>.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Why 83(b) Elections Matter for Founders</h4>
          <p className="text-text-secondary mb-4">
            You receive 2 million shares at formation for $200 (par value $0.0001 per share). You file an 83(b) election and pay tax on $200.
          </p>
          <p className="text-text-secondary mb-4">
            Eighteen months later, your company raises a Series A at $2.00 per share. Without the 83(b), you owe ordinary income tax on the vested shares' value: 750,000 shares × $2.00 = $1.5 million in taxable income.
          </p>
          <p className="text-text-secondary">
            With the 83(b), you already paid tax at grant. No tax at vesting. The $1.5 million in appreciation will be taxed as long-term capital gains when you eventually sell, not as ordinary income when shares vest.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Equity Splits</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          How you split equity among founders depends on contributions, roles, and early vs. late co-founder status. There's no universal formula, but here are common approaches:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Equal splits:</strong> Works for co-founders who start together with similar contributions and commitment. Common for 2-3 technical co-founders.</li>
          <li><strong className="text-accent font-medium">Unequal splits:</strong> Appropriate when one founder brings significantly more (idea, capital, prior work, domain expertise). Make sure the logic is clear and agreed upfront.</li>
          <li><strong className="text-accent font-medium">Later co-founders:</strong> If you bring in a co-founder after incorporation, they typically receive less than founding team members who were there from day one. Vesting usually starts from their join date, not incorporation.</li>
        </ul>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          <strong className="text-text-highlight">Avoid informal handshake equity deals.</strong> Document equity splits in restricted stock purchase agreements at formation. Revisiting equity later creates tax problems, valuation disputes, and resentment.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We structure founder equity for early-stage startups:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Founder stock issuance', desc: 'Restricted stock purchase agreements, equity splits, vesting schedules' },
            { title: '83(b) coordination', desc: 'Preparing and filing 83(b) elections for all founders within the 30-day deadline' },
            { title: 'Acceleration provisions', desc: 'Negotiating single- and double-trigger acceleration for founders and key executives' },
            { title: 'Departures', desc: 'Handling founder exits, repurchase mechanics, and vesting acceleration disputes' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-surface/30 border border-grid">
              <div className="flex items-center gap-3 md:w-1/3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                <span className="text-text-highlight font-medium">{item.title}</span>
              </div>
              <div className="md:w-2/3">
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'safe-vs-convertible-note',
    title: 'SAFE vs Convertible Note: Which Should You Use?',
    date: 'October 6, 2025',
    readTime: '6 min read',
    excerpt: 'SAFEs and convertible notes both delay valuation, but convertible notes are debt instruments with interest and maturity dates. Here\'s when to use each.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          SAFEs and convertible notes both let you raise capital without setting a valuation. They both convert into equity in a future priced round. But they're fundamentally different instruments.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains the differences and when you might use one over the other.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Key Difference: Debt vs Not-Debt</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Convertible notes are debt.</strong> You borrow money from investors with a promise to repay or convert. The note accrues interest, has a maturity date, and creates a repayment obligation if it doesn't convert.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">SAFEs are not debt.</strong> They're a contract giving the investor the right to future equity. No interest, no maturity, no repayment obligation.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Term Comparison</h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border border-grid">
            <thead>
              <tr className="bg-surface/30">
                <th className="border border-grid p-4 text-left text-text-highlight">Term</th>
                <th className="border border-grid p-4 text-left text-text-highlight">SAFE</th>
                <th className="border border-grid p-4 text-left text-text-highlight">Convertible Note</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              <tr>
                <td className="border border-grid p-4 font-medium">Debt or equity?</td>
                <td className="border border-grid p-4">Neither—it's a conversion right</td>
                <td className="border border-grid p-4">Debt</td>
              </tr>
              <tr>
                <td className="border border-grid p-4 font-medium">Interest?</td>
                <td className="border border-grid p-4">No</td>
                <td className="border border-grid p-4">Yes (typically 2-8%)</td>
              </tr>
              <tr>
                <td className="border border-grid p-4 font-medium">Maturity date?</td>
                <td className="border border-grid p-4">No</td>
                <td className="border border-grid p-4">Yes (typically 18-24 months)</td>
              </tr>
              <tr>
                <td className="border border-grid p-4 font-medium">Repayment obligation?</td>
                <td className="border border-grid p-4">No</td>
                <td className="border border-grid p-4">Yes, at maturity if not converted</td>
              </tr>
              <tr>
                <td className="border border-grid p-4 font-medium">Valuation cap?</td>
                <td className="border border-grid p-4">Yes</td>
                <td className="border border-grid p-4">Yes</td>
              </tr>
              <tr>
                <td className="border border-grid p-4 font-medium">Discount?</td>
                <td className="border border-grid p-4">Optional (typically 15-20%)</td>
                <td className="border border-grid p-4">Yes (typically 15-20%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When Maturity Becomes a Problem</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Convertible notes mature. If you don't raise a qualified financing before the maturity date, noteholders can demand repayment. In practice, investors usually extend the maturity date rather than forcing repayment (startups rarely have cash to repay).
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          But maturity creates awkward conversations. Investors can use approaching maturity as leverage to negotiate new terms or force an unfavorable conversion.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
          <p className="text-text-secondary mb-4">
            You raise $500K on convertible notes with a 24-month maturity. At month 22, you're making progress but not ready for Series A. Investors agree to extend maturity by 12 months—but ask for warrant coverage or a lower cap in exchange.
          </p>
          <p className="text-text-secondary">
            With SAFEs, there's no maturity. The notes stay outstanding until conversion without renegotiation.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why SAFEs Are Now Standard</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Y Combinator introduced SAFEs in 2013 to replace convertible notes for early-stage fundraising. SAFEs quickly became the standard because:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Simpler terms.</strong> No need to negotiate interest rates, maturity extensions, or default provisions.</li>
          <li><strong className="text-accent font-medium">No maturity pressure.</strong> Notes stay outstanding until conversion without forced renegotiation.</li>
          <li><strong className="text-accent font-medium">Cleaner cap table.</strong> SAFEs don't sit on the balance sheet as debt.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When You Might Use a Convertible Note</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Convertible notes still make sense in limited scenarios:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Bridge financing.</strong> If you're raising a small amount to bridge to a priced round that's already in progress, a short-term note (3-6 months) works. You know conversion is imminent.</li>
          <li><strong className="text-accent font-medium">Non-US investors.</strong> Some international investors prefer notes because they're more familiar globally. SAFEs are a US-specific instrument.</li>
          <li><strong className="text-accent font-medium">Debt is advantageous.</strong> If your company is taxable and profitable (unlikely for venture-backed startups), the interest expense on notes is deductible. SAFEs offer no tax benefit.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What to Use</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Use SAFEs for early-stage rounds unless there's a specific reason to use notes.</strong> They're simpler, avoid maturity complications, and are the expected standard in venture ecosystems.
        </p>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          For more detail on SAFEs, see <Link to="/startups/insights/safes-complete-guide" className="text-accent hover:text-accent/80 underline">SAFEs: The Complete Guide</Link>.
        </p>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'do-i-need-83b',
    title: 'Do I Need an 83(b) Election?',
    date: 'September 22, 2025',
    readTime: '5 min read',
    excerpt: 'Quick answers: when you need to file an 83(b), when you don\'t, and what happens if you miss the deadline.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          If you're receiving restricted stock (stock subject to vesting), you almost certainly need to file an 83(b) election. Here's when it applies and what happens if you don't file.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Do I need to file an 83(b)?</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">YES if you:</h4>
            <ul className="space-y-2 text-text-secondary pl-5 list-disc marker:text-accent">
              <li>Received founder stock subject to vesting</li>
              <li>Purchased restricted stock as an early employee</li>
              <li>Exercised stock options early (before vesting)</li>
            </ul>
          </div>

          <div className="border-l-2 border-grid pl-6 py-2">
            <h4 className="text-text-muted font-medium mb-2">NO if you:</h4>
            <ul className="space-y-2 text-text-secondary pl-5 list-disc marker:text-muted">
              <li>Received stock options (not exercised yet)</li>
              <li>Received fully vested stock with no restrictions</li>
              <li>Were granted RSUs (restricted stock units)</li>
              <li>Purchased stock that's not subject to vesting</li>
            </ul>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why file an 83(b)?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Without an 83(b) election, you owe ordinary income tax each time shares vest, based on the fair market value at vesting.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          With an 83(b), you pay tax on the stock's value <strong className="text-accent font-medium">now</strong>, when you receive it. For founders receiving stock at pennies per share, this means paying tax on almost nothing.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Example</h4>
          <p className="text-text-secondary mb-4">
            You receive 1 million shares at $0.0001 per share ($100 total). Your shares vest over four years.
          </p>
          <p className="text-text-secondary mb-4">
            <strong className="text-accent font-medium">Without 83(b):</strong> If the company raises capital at $1.00 per share before your cliff, you owe ordinary income tax on $250,000 when 25% vests at your one-year cliff.
          </p>
          <p className="text-text-secondary">
            <strong className="text-accent font-medium">With 83(b):</strong> You pay tax on $100 at grant. No tax at vesting. The appreciation gets capital gains treatment when you eventually sell.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What's the deadline?</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">30 days from the date you receive the stock.</strong> Not postmarked—filed. There are no exceptions, no extensions, and no late filing provisions.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What happens if I miss the deadline?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          You cannot file late. If you miss 30 days, you're subject to taxation at vesting for the life of the restricted stock.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          This can create a tax bill on shares you can't sell, potentially hundreds of thousands of dollars.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How do I file?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          You prepare a one-page letter with:
        </p>
        <ul className="space-y-2 text-text-secondary mb-6 pl-5 list-disc marker:text-accent">
          <li>Your name, address, and Social Security number</li>
          <li>Description of the stock</li>
          <li>Date received</li>
          <li>Fair market value at grant</li>
          <li>Amount paid</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          Mail it <strong className="text-accent font-medium">certified mail, return receipt requested</strong> to the IRS service center for your region.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Attach a copy to your tax return for the year you received the stock, and provide a copy to your company.
        </p>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          For step-by-step instructions, see <Link to="/startups/insights/83b-election" className="text-accent hover:text-accent/80 underline">The 83(b) Election: How to File</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Is there any downside to filing?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The only downside: if you leave before vesting and forfeit the stock, you don't get a tax refund on the amount you paid at grant.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          For founders receiving stock at formation for pennies per share, the downside is negligible ($100-200). The upside is avoiding a massive tax bill later.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Bottom line</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">If you received restricted stock, file an 83(b) election within 30 days.</strong> The cost of not filing can be catastrophic. The cost of filing is a stamp and 20 minutes.
        </p>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  }
];

export const StartupBlog: React.FC<StartupBlogProps> = ({ onContactClick }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const post = posts.find(p => p.id === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        navigate('/startups/insights', { replace: true });
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug, navigate]);

  if (selectedPost) {
    const publishedTime = new Date(selectedPost.date).toISOString();

    return (
      <>
        <SEO
          title={`${selectedPost.title} | Strategic Fund Partners`}
          description={selectedPost.excerpt}
          type="article"
          publishedTime={publishedTime}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="bg-bg min-h-screen pt-12 pb-24"
        >
          <div className="max-w-3xl mx-auto px-6">
            <Link
              to="/startups/insights"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>

            <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {selectedPost.readTime}
              </div>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-text-highlight mb-12 text-balance">
              {selectedPost.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              {selectedPost.content}
            </div>

            <div className="mt-20 p-8 bg-surface/20 border border-grid text-center">
              <h3 className="font-serif text-2xl text-text-highlight mb-4">Forming your startup?</h3>
              <p className="text-text-secondary mb-8">Contact us to discuss your incorporation and founder equity needs.</p>
              <button
                onClick={onContactClick}
                className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors text-xs font-bold uppercase tracking-widest"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <section id="startup-blog" className="bg-bg py-20 md:py-28 border-b border-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-grid pb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-highlight mb-6">
              Insights
            </h2>
            <p className="text-text-secondary text-lg">
              Guides for startup founders on formation, equity, and fundraising
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/startups/insights/${post.id}`}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group cursor-pointer flex flex-col h-full border border-grid bg-surface/20 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs font-mono text-text-muted mb-6">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-text-highlight mb-4 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent transition-colors mt-auto">
                    Read Article
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
