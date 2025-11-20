import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
}

interface BlogProps {
  onContactClick: () => void;
}

const posts: BlogPost[] = [
  {
    id: 'side-letters',
    title: 'Side Letters: Negotiating Custom Terms with Fund Investors',
    date: 'September 18, 2025',
    readTime: '7 min read',
    excerpt: 'Not all investors want the same deal. Whether you\'re raising a traditional fund or syndicating deal-by-deal, you\'ll likely encounter LPs requesting specific rights or terms that differ from your standard documents.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Not all investors want the same deal. Whether you're raising a traditional fund or syndicating deal-by-deal, you'll likely encounter LPs requesting specific rights or terms that differ from your standard documents. These custom arrangements are documented in side letters.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          Side letters are common in private fund practice, but they create complexity. This guide covers what fund managers need to know about side letter requests: what LPs typically ask for, how to evaluate requests, and how to manage side letters without creating operational headaches.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is a Side Letter?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A side letter is a separate agreement between the fund (or GP) and a specific investor that modifies or supplements the terms in your primary fund documents. It grants that investor particular rights, waivers, or obligations that don't apply to other LPs.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Side letters exist "on the side" of your main documents. The LPA or operating agreement governs all investors equally; the side letter creates exceptions for a specific LP.
        </p>
        <p className="leading-relaxed text-text-secondary mb-8">
          Common reasons LPs request side letters:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Minimize downside risk or limit exposure</li>
          <li>Address unique tax, regulatory, or compliance requirements</li>
          <li>Secure preferential economics</li>
          <li>Obtain enhanced information or governance rights</li>
          <li>Ensure the fund operates in ways that meet their specific policies</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-12">
          Side letters are most common with institutional LPs (fund-of-funds, endowments, pension funds, family offices) who have established negotiating positions and form side letter requests they send to every fund.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When Side Letters Get Negotiated</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Sophisticated LPs often send their form side letter early in the process, sometimes alongside their initial due diligence questions. You'll typically negotiate the LPA and side letter in parallel.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          During negotiation, provisions sometimes shift between documents. An LP may request something for the LPA that you'd prefer to grant only to them via side letter. Conversely, if multiple LPs request the same provision, you might move it into the LPA to apply to everyone.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          The key distinction: <strong className="text-accent font-medium">LPA provisions</strong> apply to all LPs; <strong className="text-accent font-medium">side letter provisions</strong> apply only to the LP with that side letter.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Common Side Letter Requests</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          Side letter requests generally fall into two categories: preferential terms that advantage the requesting LP, and administrative terms driven by the LP's regulatory or tax situation.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Preferential Terms</h3>
        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Fee reductions</h4>
            <p className="text-text-secondary">Lower management fee percentage or reduced carried interest. An LP might request 1.5% management fee instead of 2%, or 15% carry instead of 20%.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Co-investment rights</h4>
            <p className="text-text-secondary">Right to invest directly in portfolio companies alongside the fund, often with reduced or waived fees and carry on the co-invest.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Pro rata rights in future funds</h4>
            <p className="text-text-secondary">Right to invest a specified amount or percentage in the GP's next fund.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">LPAC participation</h4>
            <p className="text-text-secondary">Seat on the Limited Partner Advisory Committee, or at least observer status. LPAC members vote on conflicts and certain fund matters, and receive more information.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Enhanced reporting</h4>
            <p className="text-text-secondary">More frequent reports, additional detail, or specific formats to meet the LP's internal requirements.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">MFN (Most Favored Nation)</h4>
            <p className="text-text-secondary">Right to receive any more favorable terms granted to other LPs. This is one of the most powerful side letter provisions and requires careful consideration.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Improved transfer rights</h4>
            <p className="text-text-secondary">Ability to transfer fund interests to affiliates without GP consent.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">More favorable default terms</h4>
            <p className="text-text-secondary">Reduced penalties or more lenient cure periods if the LP defaults on a capital call.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Liquidity preferences</h4>
            <p className="text-text-secondary">Enhanced withdrawal or redemption rights beyond what other LPs receive.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Administrative Terms</h3>
        <p className="leading-relaxed text-text-secondary mb-8">
          These provisions address the LP's specific legal, tax, or regulatory requirements. They're typically found in the LP's form side letter and aren't particularly negotiable because they're driven by external requirements.
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Excluded investments</h4>
            <p className="text-text-secondary">List of investment categories the LP cannot participate in due to internal policy or regulatory restrictions. Common exclusions include alcohol, tobacco, weapons, fossil fuels, cannabis, gambling, cryptocurrency, or investments outside certain jurisdictions.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Confidentiality modifications</h4>
            <p className="text-text-secondary">Fund-of-funds may need to disclose information to their own investors. Government entities may have public records obligations. Many LPs also request that the GP not publicly disclose them as an investor without permission.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Tax provisions</h4>
            <p className="text-text-secondary">ERISA, UBTI, ECI, withholding, and other tax-related provisions tailored to the LP's status (tax-exempt, non-US, ERISA plan, etc.).</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Regulatory compliance</h4>
            <p className="text-text-secondary">Banks, insurance companies, and government entities often have specific regulatory requirements that need accommodation.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Evaluating Side Letter Requests</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          Not every request deserves the same consideration. Here's how to think through them:
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Does It Disadvantage Other LPs?</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Some provisions benefit one LP without affecting others. Reduced fees come out of the GP's pocket, not the other LPs'. Enhanced reporting is operational work for you but doesn't hurt anyone else.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Other provisions advantage one LP at the expense of others. Favorable liquidity terms mean that LP can exit while others remain locked up. Lighter indemnification means other LPs bear more risk.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Many managers draw a line: they'll consider the first category but decline the second. If a provision materially affects other LPs' rights, it likely needs to go in an LPA amendment with LP consent, not a side letter.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What's the Operational Burden?</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Side letter obligations can last 10+ years. Consider what it takes to actually comply:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Tracking and delivering custom reports on different schedules</li>
          <li>Monitoring investments against exclusion lists and calculating adjusted allocations</li>
          <li>Managing different transfer and liquidity rights across LPs</li>
          <li>Maintaining records for audit and LP verification</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          Some provisions are one-time accommodations. Others create ongoing compliance work that compounds as you add more side letters.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What's the LP Worth to You?</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Negotiating leverage matters. If an LP is writing a significant check, anchoring your fundraise, or bringing credibility that attracts other investors, their requests warrant more consideration.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          A small LP asking for major concessions is a different calculus than an anchor LP asking for the same thing.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Do You Have MFNs Outstanding?</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you've granted MFN rights to other LPs, any preferential terms you grant in a new side letter may automatically extend to MFN holders. This can cascade quickly.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          MFNs can be structured with carve-outs (e.g., only LPs above a certain commitment size qualify) to limit this effect. But you need to know your MFN exposure before granting new preferential terms.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Managing Side Letters</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          A few practices help keep side letters under control:
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Have a policy before you need one</h3>
            <p className="text-text-secondary">Decide in advance which types of provisions you'll consider and which you won't. This makes individual negotiations easier and more consistent.</p>
          </div>
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Don't be afraid to say no</h3>
            <p className="text-text-secondary">If your fund is in demand, many LPs will proceed without a side letter or with reduced asks. Emerging managers sometimes feel pressure to accommodate everything, but that creates long-term problems.</p>
          </div>
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Limit MFN grants</h3>
            <p className="text-text-secondary">Aim for zero to one MFN per fund. MFNs given liberally undermine your ability to offer differentiated terms to large or strategic LPs.</p>
          </div>
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Standardize language</h3>
            <p className="text-text-secondary">If multiple LPs want the same provision (affiliate transfers, certain confidentiality carve-outs), use identical language for all of them. Don't negotiate custom wording each time. Once you have language you're comfortable with, reuse it.</p>
          </div>
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Track your obligations</h3>
            <p className="text-text-secondary">Maintain a matrix of all side letter provisions by LP so you know who gets what. This is essential for ongoing compliance and for understanding your MFN exposure.</p>
          </div>
          <div>
            <h3 className="text-text-highlight font-medium mb-3">Consider document structure</h3>
            <p className="text-text-secondary">Some managers build flexibility into their base documents to reduce side letter requests. Variable fee schedules, standard LPAC provisions, and clear exclusion processes can address common asks without needing separate agreements.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We assist fund managers with side letter review and administration:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Side letter review', desc: 'We review LP side letter requests against your fund documents, flag issues, and help you evaluate operational and legal implications.' },
            { title: 'Negotiation support', desc: 'We help you respond to requests with appropriate counter-positions and standard fallback language.' },
            { title: 'Compliance tracking', desc: 'We help you build and maintain a side letter matrix to track provisions by LP and monitor ongoing obligations.' },
            { title: 'Document coordination', desc: 'We ensure side letter terms are consistent with your LPA/operating agreement and don\'t create conflicts or unintended consequences.' }
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
    id: 'form-d-blue-sky',
    title: 'Form D and Blue Sky Filings: Securities Filing Requirements for Private Funds',
    date: 'September 3, 2025',
    readTime: '7 min read',
    excerpt: 'When you raise capital for a private fund or SPV, you\'re selling securities. Even though private placements are exempt from SEC registration, you still need to make notice filings at both the federal and state level.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          When you raise capital for a private fund or SPV, you're selling securities. Even though private placements are exempt from SEC registration, you still need to make notice filings at both the federal and state level. Missing these filings can result in penalties, suspension of your offering, or loss of your exemption.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide covers the two key securities filings every private fund manager needs to understand: Form D with the SEC and state blue sky filings.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Regulatory Framework</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Under the Securities Act of 1933, any offer or sale of securities must either be registered with the SEC or qualify for an exemption. Private funds typically rely on Regulation D, which provides exemptions from registration while still requiring certain filings and disclosures.
        </p>
        <p className="leading-relaxed text-text-secondary mb-8">
          The most common Regulation D exemptions for private funds are:
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-6">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Rule 506(b)</h3>
          <p className="text-text-secondary">
            Allows unlimited fundraising from unlimited accredited investors plus up to 35 sophisticated non-accredited investors. No general solicitation or advertising permitted. This is the predominant framework for private capital raising.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-8">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Rule 506(c)</h3>
          <p className="text-text-secondary">
            Allows unlimited fundraising with general solicitation and advertising, but all investors must be accredited and the issuer must take reasonable steps to verify accreditation status. More burdensome verification requirements make this less common despite the marketing flexibility.
          </p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Both Rule 506 exemptions preempt state registration requirements, meaning your offering doesn't need to be registered at the state level. However, you still must make notice filings with the SEC and with states where you have investors.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Form D: The Federal Filing</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What It Is</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Form D is a notice filing with the SEC that provides information about your exempt offering. It's filed electronically through the SEC's EDGAR system and becomes publicly available on the SEC's website.
        </p>
        <p className="leading-relaxed text-text-secondary mb-8">
          The form collects basic information about your fund and the offering:
        </p>

        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Issuer identification (fund name, address, jurisdiction)</li>
          <li>Related persons (executive officers, directors, promoters)</li>
          <li>Industry and issuer size</li>
          <li>Federal exemption claimed (506(b), 506(c), etc.)</li>
          <li>Offering details (type of securities, minimum investment)</li>
          <li>Sales compensation (any placement agents or finders)</li>
          <li>Offering and sales amounts</li>
          <li>Investors (number and types)</li>
          <li>Use of proceeds</li>
        </ul>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Filing Deadline</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Form D must be filed within <strong className="text-accent font-medium">15 days after the first sale of securities</strong>. The SEC defines "date of first sale" as the date on which the first investor is irrevocably contractually committed to invest, which typically means the date subscription documents are signed.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          This means you should be prepared to file before you close your first investor.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Amendments</h3>
        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Annual amendments</h4>
            <p className="text-text-secondary">If your offering is continuous (common for hedge funds accepting new investors over time), you must file an annual amendment before the anniversary of your initial filing.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Other amendments</h4>
            <p className="text-text-secondary">You should amend Form D if previously filed information becomes materially inaccurate, such as changes to officers, address, or significant changes to the offering amount or number of investors.</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Private equity and venture capital funds that complete fundraising and close to new investors typically don't file annual amendments after fundraising ends.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">No Filing Fee</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          The SEC does not charge a fee for Form D filings or amendments.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Consequences of Not Filing</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Failing to file Form D doesn't automatically void your exemption, but it creates significant risk. The SEC can bring enforcement action, and failure to file may disqualify you from relying on Regulation D for future offerings. Some states condition their exemptions on timely Form D filing.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Blue Sky Filings: State Requirements</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What They Are</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Blue sky laws are state-level securities regulations. Each state has its own securities laws that require issuers to either register offerings or make notice filings when relying on federal exemptions.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For Rule 506 offerings, federal law preempts state registration requirements, meaning states cannot require you to register your offering. However, states can still require notice filings and fees. These are commonly called "blue sky filings."
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          You must make a blue sky filing in each state where you have investors.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Filing Process</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Most states accept blue sky filings electronically through the North American Securities Administrators Association (NASAA) Electronic Filing Depository (EFD). You submit your Form D through EFD and pay the applicable state fees.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Some states still require paper filings or have additional requirements beyond the Form D. Requirements vary significantly by state, so you need to check each state's specific rules.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Timing</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Most states require blue sky filings within <strong className="text-accent font-medium">15 days after the first sale</strong> to an investor in that state, matching the federal Form D deadline.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Because investor timing varies by state, you need to track when you close investors in each state and file accordingly.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Fees</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Each state charges its own filing fee, and structures vary. Some states charge flat fees while others use tiered fee schedules based on offering size or amount sold in the state.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Fees typically range from a few hundred dollars to over a thousand dollars per state. The total cost depends on the geographic distribution of your investor base.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Amendments and Renewals</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          State requirements for amendments and renewals also vary. Some states require annual renewal filings while your offering remains open. Others require amendments when you add investors in the state or when information changes. Track your obligations in each state where you have investors.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Coordination with Other Filings</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Form D and blue sky filings are separate from your investment adviser filings:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Form ADV</h4>
            <p className="text-text-secondary">Your adviser-level filing (RIA registration or ERA notice filing). It's about the manager, not the fund's securities offering.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Form D and blue sky filings</h4>
            <p className="text-text-secondary">Fund-level filings about the securities you're selling to investors.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-6 bg-surface/50 p-6 border border-grid">
          You need both. A common misconception is that ERA status or small adviser size exempts you from Form D and blue sky requirements. It doesn't. Even if you're not required to register as an investment adviser, your fund must still make securities filings.
        </p>

        <p className="leading-relaxed text-text-secondary mb-12">
          Timing often overlaps: Form D is due within 15 days of first close, and Form ADV is due within 60 days. Coordinate these to ensure nothing falls through the cracks.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Practical Considerations</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Tracking Investor Information</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          You need to track for each investor:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Name and state of residence</li>
          <li>Date subscription documents were signed</li>
          <li>Amount committed</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          This information determines your Form D content and which states require blue sky filings, and by when.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Pre-Filing vs. Post-Close Filing</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Some managers choose to pre-file Form D before first close rather than waiting until after. Pre-filing means you don't have to disclose actual amounts raised, which some managers prefer for optics or confidentiality. You then amend after closing to report actual amounts.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Continuous Offerings</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Hedge funds and other vehicles that accept investors on an ongoing basis need systems to track new investors by state and make timely blue sky filings as they add investors in new states. This is an ongoing compliance obligation, not a one-time filing.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Multiple Funds and SPVs</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Each fund or SPV is a separate issuer and requires its own Form D and blue sky filings. If you run multiple vehicles, the filing burden scales accordingly. Series LLCs may offer some efficiency here since each series is a separate issuer.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We handle Form D and blue sky filings for private fund managers and SPV sponsors:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Form D preparation and filing', desc: 'We prepare your Form D and file through EDGAR, including tracking your 15-day deadline from first close.' },
            { title: 'Blue sky filing management', desc: 'We identify which states require filings based on your investor locations, file through EFD or state-specific systems, and manage fee payments.' },
            { title: 'Ongoing compliance', desc: 'For continuous offerings, we track new investors by state and make timely filings as you add investors.' },
            { title: 'Amendments and renewals', desc: 'We monitor amendment requirements and handle annual renewals where required.' },
            { title: 'Coordination with adviser filings', desc: 'We ensure your Form D timeline is coordinated with your Form ADV and other regulatory obligations.' }
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
    id: 'fund-formation-structure',
    title: 'Forming a Private Fund: Entity Structure and Core Documents',
    date: 'August 22, 2025',
    readTime: '8 min read',
    excerpt: 'Launching a fund involves more than raising capital. Before your first close, you need the right legal structure and investor-facing documents. A comprehensive guide to fund formation.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Launching a venture capital fund, private equity vehicle, or SPV involves more than raising capital and sourcing deals. Before your first close, you need to establish the right legal structure and prepare investor-facing documents. Getting this foundation right sets up your fund for efficient operations and institutional credibility.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide walks through the key components of fund formation, from entity setup to the documents you'll need to close your first investors.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Choosing Your Structure</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          The right structure depends on whether you're raising a traditional blind-pool fund or syndicating deal-by-deal through SPVs.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Traditional Fund Structure</h3>
        <p className="leading-relaxed text-text-secondary mb-8">
          Most venture capital and private equity funds use a <strong className="text-accent font-medium">Delaware Limited Partnership (LP)</strong> with a layered entity structure:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">The Fund (LP)</h4>
            <p className="text-text-secondary">Holds investments and investor capital. Pass-through taxation means gains and losses flow to investors without entity-level tax. Limited partners have liability capped at their capital commitment.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">The General Partner (GP)</h4>
            <p className="text-text-secondary">A Delaware LLC that manages the fund and makes investment decisions. Structured as an LLC to shield principals from the partnership's unlimited liability.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">The Management Company (Adviser)</h4>
            <p className="text-text-secondary">A Delaware LLC that employs the investment team, receives management fees, and serves as the investment adviser to the fund.</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          This structure separates roles and liability: the fund holds assets, the GP controls the fund, and the management company provides advisory services.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Why Delaware?</h4>
          <p className="text-text-secondary mb-4">
            Delaware law offers maximum flexibility in structuring fees, carry, and governance terms. Institutional LPs and their counsel are familiar with Delaware structures, which streamlines diligence. Delaware also has no state income tax on funds operating outside the state.
          </p>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">SPV Structures</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          For deal-by-deal syndication, SPVs are typically structured as <strong className="text-accent font-medium">Delaware LLCs</strong> rather than limited partnerships. Two common approaches:
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-6">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Standalone LLC</h4>
          <p className="text-text-secondary">
            A separate LLC formed for each deal. Simple and clean: each vehicle has its own operating agreement, its own investors, and holds a single investment. The tradeoff is administrative overhead, since each SPV requires separate formation, bank accounts, and tax filings.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-8">
          <h4 className="font-serif text-xl text-text-highlight mb-4">Series LLC (Master/Series)</h4>
          <p className="text-text-secondary mb-4">
            A single master LLC with multiple series, where each series functions as a separate legal entity for liability and asset purposes. Investors subscribe to a specific series, and assets of one series are generally protected from liabilities of another.
          </p>
          <p className="text-text-secondary">
            Series LLCs reduce formation costs and administrative burden. However, not all states recognize series LLC segregation, and some institutional investors or service providers are less comfortable with the structure.
          </p>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          <strong className="text-text-highlight">Which to choose?</strong> Standalone LLCs offer maximum legal clarity and institutional acceptance. Series LLCs offer efficiency for high-volume syndication. Many platforms use series structures; managers doing occasional SPVs alongside a main fund often prefer standalone LLCs.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Entity Formation</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Each entity in your structure requires formation filings with the Delaware Division of Corporations.
        </p>
        <ul className="space-y-4 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>For a limited partnership, you file a Certificate of Limited Partnership.</li>
          <li>For LLCs (GP, management company, or SPV), you file a Certificate of Formation for each entity.</li>
          <li>For a series LLC, you file one certificate for the master LLC; individual series don't require separate state filings.</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware requires every entity to maintain a registered agent with a physical address in the state. Each entity also needs an EIN from the IRS before you can open bank accounts or file tax returns.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Delaware LPs and LLCs must pay an annual franchise tax, due June 1 each year.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Core Documents: Traditional Fund</h2>

        <div className="space-y-8 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Limited Partnership Agreement (LPA)</h3>
            <p className="text-text-secondary mb-4">
              The LPA is the governing document of the fund. It defines the rights and obligations of the GP and LPs and covers virtually every aspect of fund operations:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Investment objective and strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Management fees and carried interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Capital contributions, drawdowns, and distributions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>GP removal and fund termination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Transfers of LP interests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Indemnification and exculpation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Key person provisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Reporting and audit requirements</span>
              </li>
            </ul>
            <p className="text-text-secondary mt-4">
              The LPA is heavily negotiated, particularly with institutional LPs who may request modifications through side letters. It must align precisely with your PPM.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Private Placement Memorandum (PPM)</h3>
            <p className="text-text-secondary mb-4">
              The PPM is your primary disclosure document. It provides prospective LPs the information they need to make an informed investment decision:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Fund structure and terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Investment strategy and target sectors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Management team backgrounds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Fee structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Risk factors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Conflicts of interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Tax considerations</span>
              </li>
            </ul>
            <p className="text-text-secondary mt-4">
              The PPM is written in plain English and ensures full and fair disclosure. Inadequate risk disclosure or inconsistencies with the LPA are common sources of problems.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Subscription Agreement</h3>
            <p className="text-text-secondary">
              The subscription agreement is the contract through which each investor commits capital. It includes the capital commitment amount, representations and warranties (accredited investor status, authority to invest), power of attorney, and agreement to be bound by the LPA.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Investor Questionnaire</h3>
            <p className="text-text-secondary">
              Collects information to verify accreditation status, ERISA status, tax information, and bad actor disqualification for Reg D compliance.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Investment Management Agreement</h3>
            <p className="text-text-secondary">
              Formalizes the relationship between the fund and the management company: scope of advisory services, management fee calculation, expense allocation, and standard of care.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">GP and Management Company Operating Agreements</h3>
            <p className="text-text-secondary">
              Internal documents governing each LLC, covering ownership among principals, decision-making authority, carry allocation, and transfers of membership interests. Not shared with fund LPs.
            </p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Core Documents: SPVs</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          SPV documentation is simpler than a traditional fund but follows the same principles.
        </p>

        <div className="space-y-8 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Operating Agreement</h3>
            <p className="text-text-secondary mb-4">
              For an LLC-structured SPV, the operating agreement is the governing document. It covers:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>The specific investment being made</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Member capital contributions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Allocation of profits, losses, and distributions (including carry)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Manager authority and decision-making</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Fees and expenses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Transfer restrictions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Dissolution and liquidation</span>
              </li>
            </ul>
            <p className="text-text-secondary mt-4">
              For a series LLC, you'll have a Master Operating Agreement establishing the overall structure, plus a Series Designation for each series specifying that series' investment, members, and economics.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Private Placement Memorandum (PPM)</h3>
            <p className="text-text-secondary">
              SPVs still require disclosure, though the PPM is typically shorter since you're disclosing a specific known investment rather than a general strategy. Key sections include description of the target company, deal terms, manager background, fees, and risk factors.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 py-2">
            <h3 className="font-serif text-2xl text-text-highlight mb-3">Subscription Agreement and Investor Questionnaire</h3>
            <p className="text-text-secondary">
              Same function as in a traditional fund: commits the investor's capital and collects representations, accreditation status, and tax information.
            </p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Regulatory Filings</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          Beyond entity formation and fund documents, you'll need to make regulatory filings at the federal and state level.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-6">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Form ADV</h3>
          <p className="text-text-secondary mb-4">
            Most private fund managers must file Form ADV with the SEC, either as a Registered Investment Adviser (RIA) or an Exempt Reporting Adviser (ERA). Filing is due within 60 days of your first fund's initial close.
          </p>
          <p className="text-text-secondary">
            Many emerging managers qualify for ERA status under the venture capital fund adviser exemption (no AUM cap, but strict strategy limits) or the private fund adviser exemption (under $150M AUM). See our Form ADV guide for details.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">State Filings</h3>
          <p className="text-text-secondary">
            Depending on your location and investor base, you may need state-level adviser notice filings or registrations even if you're a federal ERA. You'll also have securities filing obligations (Form D and blue sky filings) covered in our separate guide.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We support private fund managers and syndicators through the full formation process:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Entity formation', desc: 'Delaware LP and LLC formation (including series LLCs), registered agent setup, EIN applications, bank account opening' },
            { title: 'Fund document preparation', desc: 'LPA/operating agreements, PPMs, subscription documents, investor questionnaires, investment management agreements, GP and management company operating agreements' },
            { title: 'SPV documentation', desc: 'Standalone and series LLC structures, master operating agreements, series designations, deal-specific PPMs' },
            { title: 'Regulatory filings', desc: 'Form ADV/ERA registration, state adviser notice filings' },
            { title: 'Ongoing compliance', desc: 'Annual Form ADV amendments, state filing maintenance' }
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

        <p className="leading-relaxed text-text-secondary mb-8">
          We work with your legal counsel or can recommend experienced fund formation attorneys to ensure your documents meet institutional standards.
        </p>

        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">
          *This article is for informational purposes only and does not constitute legal advice.
        </p>
      </>
    )
  },
  {
    id: 'adv-era-registration',
    title: 'Form ADV and Exempt Reporting Adviser Registration: What Private Fund Managers Need to Know',
    date: 'August 8, 2025',
    readTime: '6 min read',
    excerpt: "Understanding your regulatory obligations under the Investment Advisers Act of 1940 is essential—but it doesn't have to be overwhelming. A guide for emerging managers.",
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          If you're launching a venture capital fund or managing private fund assets, understanding your regulatory obligations under the Investment Advisers Act of 1940 is essential—but it doesn't have to be overwhelming. The registration landscape for private fund managers offers multiple pathways, and for many emerging managers, Exempt Reporting Adviser (ERA) status provides a streamlined alternative to full SEC registration while maintaining regulatory compliance.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide breaks down the key concepts, filing requirements, and strategic considerations to help fund managers make informed decisions about their regulatory approach.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is Form ADV?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Form ADV is the disclosure document investment advisers file with the SEC and state regulators. It's publicly available on the SEC's IAPD website, where investors can research your firm's ownership, fees, disciplinary history, and key personnel.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          For most private fund managers, Form ADV isn't about full registration—it's the mechanism for maintaining ERA status and staying compliant with lighter-touch reporting requirements.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Do You Need to File?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Yes, if you're a fund manager advising private funds.</strong> The question is whether you file as a Registered Investment Adviser (RIA) or an Exempt Reporting Adviser (ERA).
        </p>
        <p className="leading-relaxed text-text-secondary mb-8">
          You likely qualify for ERA status—sometimes called "ADV Lite"—if you fall into one of two exemption categories:
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-8">
            <h3 className="font-serif text-2xl text-text-highlight mb-4">Venture Capital Fund Adviser Exemption</h3>
            <p className="text-text-secondary mb-6">
                This is the preferred path for VC managers because <strong className="text-text-highlight">it has no AUM cap</strong>. You can manage $500 million and still qualify, provided you stick to the VC strategy definition.
            </p>
            <p className="text-sm uppercase tracking-widest text-text-muted mb-4 font-mono">Requirements:</p>
            <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Represent to investors that it pursues a venture capital strategy</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Invest at least 80% of assets in qualifying portfolio companies (private operating companies)</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Hold no more than 20% in "non-qualifying" investments (public securities, crypto, certain debt)</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Limit borrowing to 15% of capital commitments, repaid within 120 days</span>
                </li>
            </ul>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
            <h3 className="font-serif text-2xl text-text-highlight mb-4">Private Fund Adviser Exemption</h3>
            <p className="text-text-secondary mb-6">
                This exemption offers more flexibility on strategy but caps your size. You qualify if you:
            </p>
            <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Advise only private funds (no separate accounts or retail clients)</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Manage less than <strong className="text-text-highlight">$150 million</strong> in U.S. assets under management</span>
                </li>
            </ul>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Filing Requirements</h2>
        <div className="space-y-6 mb-12">
            <div className="border-l-2 border-accent pl-6 py-2">
                <h4 className="text-text-highlight font-medium mb-1">Initial filing</h4>
                <p className="text-text-secondary">Due within 60 days of your first fund's initial close. You'll need to set up access to FINRA's IARD system, fund your account, and submit electronically.</p>
            </div>
            <div className="border-l-2 border-accent pl-6 py-2">
                <h4 className="text-text-highlight font-medium mb-1">Annual updates</h4>
                <p className="text-text-secondary">Due within 90 days after your fiscal year-end. ERAs relying on the private fund adviser exemption must update their AUM valuation to confirm they remain below $150 million.</p>
            </div>
            <div className="border-l-2 border-accent pl-6 py-2">
                <h4 className="text-text-highlight font-medium mb-1">Material changes</h4>
                <p className="text-text-secondary">Significant developments during the year—changes in ownership, address, disciplinary events, or organizational structure—may require prompt "other-than-annual" amendments.</p>
            </div>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">State Filing Requirements</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
            Federal ERA status does not automatically exempt you from state requirements. This is one of the most common compliance gaps we see.
        </p>
        <ul className="space-y-4 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
            <li>
                <strong className="text-text-highlight">Notice filings:</strong> Many states require ERAs to file notice filings and pay fees if you have a "place of business" in the state or a minimum number of advisory clients (typically 5-6 funds) located there.
            </li>
            <li>
                <strong className="text-text-highlight">State registration:</strong> Some states haven't adopted exemptions parallel to the federal ERA rules. Depending on where you're located and where your investors are, you may need to register as a state investment adviser even if you're a federal ERA.
            </li>
        </ul>
        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
            Bottom line: map out your state footprint early. Getting this wrong can mean fines or fundraising delays.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Related Filings: Form D and Blue Sky</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
            Form ADV isn't your only filing obligation. Your fund's securities offering triggers separate requirements:
        </p>
        <ul className="space-y-4 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
            <li>
                <strong className="text-text-highlight">Form D:</strong> Must be filed with the SEC within 15 days after your first sale of securities (typically your first close).
            </li>
            <li>
                <strong className="text-text-highlight">State blue sky filings:</strong> Required in states where you sell to investors. These are fund-level filings, separate from your adviser-level Form ADV.
            </li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
            We handle Form ADV and ERA compliance for private fund managers so you can focus on fundraising and deploying capital.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
            {[
                { title: 'Initial ERA filing', desc: 'Form ADV preparation and submission, IARD account setup, and state notice filing coordination.' },
                { title: 'Annual amendments', desc: 'We track your deadline, update your filing, and confirm continued exemption eligibility.' },
                { title: 'State registration analysis', desc: 'We identify which states require filings based on your office locations and investor base, and flag any state registration requirements.' },
                { title: 'Ongoing support', desc: 'Questions about AUM thresholds, material changes, or exemption status? We\'re available when issues come up.' },
                { title: 'Related filings', desc: 'Form D and blue sky filing support to keep your fund-level compliance in sync.' }
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
  }
];

export const Blog: React.FC<BlogProps> = ({ onContactClick }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="bg-bg min-h-screen pt-12 pb-24"
      >
        <div className="max-w-3xl mx-auto px-6">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </button>
          
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
          
          {/* CTA Footer in Blog */}
          <div className="mt-20 p-8 bg-surface/20 border border-grid text-center">
              <h3 className="font-serif text-2xl text-text-highlight mb-4">Need help with your filing?</h3>
              <p className="text-text-secondary mb-8">Contact us for a consultation tailored to your fund's structure.</p>
              <button 
                onClick={onContactClick}
                className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors text-xs font-bold uppercase tracking-widest"
              >
                  Discuss Requirements
              </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="blog" className="bg-bg py-20 md:py-28 border-b border-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-grid pb-12">
            <div>
                <h2 className="font-serif text-4xl md:text-6xl text-text-highlight mb-6">
                    Insights
                </h2>
                <p className="text-text-secondary text-lg font-light max-w-xl">
                    Technical guidance and strategic updates for the modern fund manager.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <motion.article 
                    key={post.id}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer flex flex-col h-full border border-grid bg-surface/20 hover:border-accent/50 transition-colors duration-300"
                    onClick={() => setSelectedPost(post)}
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
            ))}
        </div>
      </div>
    </section>
  );
};