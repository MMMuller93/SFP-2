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

interface BlogProps {
  onContactClick: () => void;
}

const posts: BlogPost[] = [
  {
    id: 'reviewing-investment-documents',
    title: 'Reviewing Investment Documents: A Guide for Fund Managers',
    date: 'November 1, 2025',
    readTime: '12 min read',
    excerpt: 'When your fund invests in another fund or acquires private market securities, the documents you sign determine your rights, restrictions, and risk exposure for years. A comprehensive guide to reviewing LPAs, purchase agreements, and governance documents.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          When your fund invests in another fund or acquires private market securities, the documents you sign determine your rights, restrictions, and risk exposure for years. The subscription agreement you execute, the LPA you're bound by, the purchase agreement you negotiate—these aren't formalities. They're the terms you'll live with through capital calls, distributions, exits, and everything in between.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide covers what to focus on when reviewing investment documents, whether you're committing to a fund as an LP, buying shares directly from a company, or purchasing secondary shares from an existing holder.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Document Landscape</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The documents you'll review depend on the transaction type:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investing in another fund (LP commitment)</h4>
            <p className="text-text-secondary">You'll receive a Private Placement Memorandum (PPM), Limited Partnership Agreement (LPA) or Operating Agreement, Subscription Agreement, and Investor Questionnaire.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Buying shares directly from a company (primary purchase)</h4>
            <p className="text-text-secondary">You'll review and negotiate a Stock Purchase Agreement or similar instrument, plus the company's Charter, Investor Rights Agreement, Right of First Refusal and Co-Sale Agreement, and Voting Agreement.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Buying shares from an existing holder (secondary purchase)</h4>
            <p className="text-text-secondary">You'll negotiate a Share Purchase Agreement with the seller and need to review the company's existing governance documents to understand what rights transfer and what approvals are required.</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Each document type serves a different purpose and requires different scrutiny.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Fund Investment Documents</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          When your fund commits capital to another fund as an LP, the PPM is disclosure (it tells you what you're getting into) while the LPA is where to focus your attention. It's the binding contract that governs your rights for the life of the fund.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Economic Terms</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Management fee calculation</h4>
            <p className="text-text-secondary">Confirm the fee percentage, what it's calculated on, and when it changes. A fund charging 2% on committed capital for ten years costs significantly more than one that steps down to invested capital after the investment period. Also check whether transaction fees paid by portfolio companies offset management fees or go straight to the GP.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Carried interest</h4>
            <p className="text-text-secondary">Understand the carry percentage, hurdle rate, catch-up mechanics, and whether carry is calculated whole-fund or deal-by-deal. Whole-fund carry with a preferred return and GP catch-up is institutional standard. Deal-by-deal carry lets the GP take carry on winners while you absorb losses on losers, a meaningful difference over the fund's life.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Distribution waterfall</h4>
            <p className="text-text-secondary">How do distributions flow? Standard is return of capital, then preferred return to LPs, then GP catch-up, then split. Variations matter. Does the GP get early carry distributions before all capital is returned? That increases the importance of the clawback.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">GP clawback</h4>
            <p className="text-text-secondary">If the GP receives carried interest early and the fund ultimately underperforms, is the GP obligated to return excess carry? Is the clawback secured or guaranteed? An unsecured clawback against individuals who've spent the money provides limited protection.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Governance and Control</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">GP removal</h4>
            <p className="text-text-secondary">Can LPs remove the GP? Under what circumstances and what vote threshold? True no-fault removal is rare. Most funds allow removal only for cause. Understand what "cause" means and whether you'd realistically ever hit the required vote.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Key person provisions</h4>
            <p className="text-text-secondary">What triggers a key person event: departure, death, disability, reduced time commitment? What happens when it's triggered? Automatic suspension of the investment period is stronger than mere notification. Can the GP cure the event by adding new key persons without LP consent?</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">LPAC authority</h4>
            <p className="text-text-secondary">What matters require Limited Partner Advisory Committee approval? Typically conflicts of interest, valuation disputes, and certain amendments. Will you have a seat or be represented? If not, understand who will be on the LPAC and whether your interests are aligned.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Fund term and extensions</h4>
            <p className="text-text-secondary">What's the base term? How many one-year extensions are permitted? Extensions should require LP consent or at least LPAC approval. Be cautious if the GP can extend unilaterally.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Amendments</h4>
            <p className="text-text-secondary">What LP vote is required to amend the LPA? Watch for provisions allowing the GP to make amendments without consent for anything beyond truly administrative changes.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Restrictions on You</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Transfer restrictions</h4>
            <p className="text-text-secondary">Can you transfer your LP interest? To whom? Most funds heavily restrict transfers and require GP consent with no obligation to grant it. If liquidity matters to you, understand these limitations before you commit.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Default provisions</h4>
            <p className="text-text-secondary">What happens if you fail to fund a capital call? Default provisions are typically severe: forfeiture of a substantial portion of your interest, forced sale at a discount, loss of future distributions. You need internal processes to ensure you never trigger these. Also check the capital call notice period. Anything less than ten business days creates operational risk if you need to call capital from your own LPs.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Confidentiality</h4>
            <p className="text-text-secondary">What are your obligations? Can you share fund information with your own investors? With regulators? Some LPAs are more restrictive than others, and you need terms that work with your own LP reporting obligations.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Subscription Agreement</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          The subscription agreement binds you to the LPA and contains your representations and warranties. Confirm the capital commitment matches your internal authorization. More importantly, verify you can truthfully make every representation: accreditation or qualified purchaser status, authority to invest, ERISA status, source of funds, and beneficial ownership. Getting these wrong creates problems for you and potentially for the fund.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Side Letters</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you negotiated any terms that differ from the standard LPA (fee discounts, co-investment rights, enhanced reporting, better transfer terms), they'll be in a side letter. Read it carefully and confirm it reflects what you agreed to.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          If you have Most Favored Nation rights, you'll receive an MFN election package showing terms granted to other LPs. You must actively elect the terms you want before the deadline. Calendar this and review the package carefully. Terms you don't elect, you don't get.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Primary Purchase Documents</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          When your fund buys shares directly from a company, you're negotiating the purchase terms and becoming party to the company's governance structure.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Stock Purchase Agreement</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Price and structure</h4>
            <p className="text-text-secondary">Understand the valuation methodology and how the per-share price was determined. For preferred stock, understand the liquidation preference and how it stacks against existing series.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Representations and warranties</h4>
            <p className="text-text-secondary">The company represents the state of its business: financials, IP ownership, material contracts, litigation, regulatory compliance. These are your primary protection if something is wrong. Push for comprehensive reps, understand what's qualified by knowledge or materiality, and read the disclosure schedules. Knowing what's disclosed is as important as knowing what's represented.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Indemnification</h4>
            <p className="text-text-secondary">If representations prove false, what's your recourse? Understand the cap (often a percentage of purchase price), whether there's a basket or deductible before you can make claims, whether funds are held in escrow, and how long claims survive. Thin indemnification with short survival periods limits your protection.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Charter</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The company's charter establishes stock classes and their rights. For preferred stock investments:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Liquidation preference</h4>
            <p className="text-text-secondary">What's your preference multiple? 1x is standard, meaning you get your money back before common holders receive anything. Greater than 1x means you get a multiple of your investment first, which is more investor-favorable but less common. Is the preference participating or non-participating? With participating preferred, you get your preference and then share pro rata in remaining proceeds. With non-participating, you choose one or the other. Participating preferred produces better returns in most exit scenarios below a high valuation.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Anti-dilution protection</h4>
            <p className="text-text-secondary">If the company raises a future round at a lower price, weighted average anti-dilution adjusts your conversion price based on the size of the down round. Full ratchet adjusts it to the new price entirely, regardless of round size. Weighted average is standard; full ratchet is more protective but rare.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Protective provisions</h4>
            <p className="text-text-secondary">What actions require preferred stock consent? Typically issuing new equity senior to or on par with your series, amending the charter, selling the company, taking on significant debt, and changing board size. These are your governance protections as a minority shareholder. Weak protective provisions leave you exposed to adverse actions.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Investor Agreements</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investor Rights Agreement</h4>
            <p className="text-text-secondary">Grants information rights (what financials you'll receive and when), registration rights (your ability to participate in IPO or other registrations), and often pro rata rights (the right to invest in future rounds to maintain your ownership percentage). Ensure information rights meet your fund's reporting needs. Pro rata rights are critical if you want to avoid dilution in a company that keeps raising.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Right of First Refusal and Co-Sale Agreement</h4>
            <p className="text-text-secondary">If shareholders want to sell, you may have the right to buy their shares first (ROFR) or participate in their sale on the same terms (co-sale). You'll also be bound by these restrictions when you want to sell.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Voting Agreement</h4>
            <p className="text-text-secondary">Governs board composition and may include drag-along provisions. If holders above a specified threshold approve a sale, drag-along provisions can force you to sell your shares on the same terms. Understand the trigger threshold and conditions.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Secondary Purchase Documents</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Buying shares from an existing holder adds complexity. You're negotiating with a seller who may have limited information about the company, you need company consent, and not all rights transfer with shares.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Share Purchase Agreement</h3>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Seller representations</h4>
            <p className="text-text-secondary">The seller will represent that they own the shares free of encumbrances and can transfer them. Beyond that, sellers typically limit their representations about the company significantly. They'll often disclaim knowledge of company matters or represent only what's in the company's own documents. Unlike buying from a company, you may have limited recourse if company problems emerge later.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Company consent and ROFR</h4>
            <p className="text-text-secondary">Most company governance documents require board or investor consent to transfers and give existing investors a right of first refusal. If the company or existing investors exercise ROFR, your deal doesn't happen. Confirm these have been obtained or waived before you spend significant time and expense on diligence.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">What actually transfers</h4>
            <p className="text-text-secondary">Not all rights travel with shares. Information rights, pro rata rights, board seats, and registration rights are often personal to the original holder or require minimum ownership thresholds. Review the company's Investor Rights Agreement carefully to understand exactly what you're getting. Buying shares without pro rata or information rights is a different investment than buying shares with those rights.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Company Governance Documents</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Request and review the current Charter, Investor Rights Agreement, ROFR/Co-Sale Agreement, and Voting Agreement. You need to understand the company's capital structure, what rights attach to the shares you're buying, and what obligations you're assuming.
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">What class of stock?</h4>
            <p className="text-text-secondary">If you're buying common shares, understand how much preferred sits above you in the liquidation stack. In many exit scenarios, common holders receive nothing until all preferred preferences are satisfied.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Current cap table</h4>
            <p className="text-text-secondary">Request one. Understand the fully diluted share count, option pool size, and where you sit. A secondary purchase that looks cheap on a per-share basis may be less attractive when you understand the full capital structure.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We support fund managers in reviewing and negotiating investment documents:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Document review and analysis', desc: 'We review fund documents (LPAs, PPMs, subscription agreements) and transaction documents (purchase agreements, charter, governance documents) and provide plain-English summaries of key terms, non-standard provisions, and areas of concern.' },
            { title: 'Term benchmarking', desc: 'We compare terms against market standards and your fund\'s prior investments so you know where you have negotiating room.' },
            { title: 'Negotiation support', desc: 'We help you prioritize terms and prepare redlines or term sheets.' },
            { title: 'Process development', desc: 'We help you build checklists and workflows for consistent document review across investments.' }
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
    id: 'state-investment-adviser-registration',
    title: 'State Investment Adviser Registration: Exemptions, Requirements, and the 3(c)(1) Trap',
    date: 'October 16, 2025',
    readTime: '9 min read',
    excerpt: 'Federal ERA status doesn\'t exempt you from state regulation. Even if you qualify as an Exempt Reporting Adviser with the SEC, you still need to navigate state investment adviser laws in every state where you have a place of business or sufficient clients.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Federal ERA status doesn't exempt you from state regulation. This is one of the most commonly misunderstood aspects of fund compliance. Even if you qualify as an Exempt Reporting Adviser with the SEC, you still need to navigate state investment adviser laws in every state where you have a place of business or sufficient clients.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          State requirements vary dramatically. Some states offer broad exemptions that make compliance straightforward. Others exclude 3(c)(1) funds from their exemptions entirely, requiring full state registration even for small managers. Understanding your state obligations is critical to avoiding enforcement risk.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When State Laws Apply</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          State investment adviser laws apply to any adviser that isn't fully registered with the SEC as an RIA. Once you register as an RIA, federal law preempts state registration requirements (though states retain anti-fraud authority).
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          This means state laws apply to:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Exempt Reporting Advisers (ERAs) relying on the VC adviser or private fund adviser exemptions</li>
          <li>Managers below the $25 million threshold who haven't made federal filings</li>
          <li>Any manager who isn't SEC-registered</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          If you're an emerging manager operating as an ERA, you're subject to state regulation. Your federal ERA filing doesn't change that.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The NASAA Model Rule</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Many states have adopted some version of the NASAA (North American Securities Administrators Association) model rule for private fund adviser exemptions. Understanding this model helps you navigate state-by-state variations.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Core Requirements</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The model rule provides an exemption from state registration if the adviser meets these conditions:
        </p>
        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">No bad actor disqualifications</h4>
            <p className="text-text-secondary">The adviser and its affiliates can't be subject to disqualifying events under Rule 506(d)</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">ERA filing</h4>
            <p className="text-text-secondary">The adviser must file as an exempt reporting adviser through IARD and pay applicable state fees</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Private fund clients only</h4>
            <p className="text-text-secondary">The adviser can only advise private funds, not separate accounts or other clients</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Additional Requirements for 3(c)(1) Funds</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Here's where the model rule gets restrictive. If the adviser manages any 3(c)(1) fund that isn't a qualifying venture capital fund, additional requirements apply:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Qualified client requirement</h4>
            <p className="text-text-secondary mb-3">All investors in the fund must be "qualified clients." Currently this means either:</p>
            <ul className="space-y-2 text-text-secondary text-sm pl-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Net worth of at least $2.2 million (excluding primary residence), OR</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>At least $1.1 million in assets under management with the adviser</span>
              </li>
            </ul>
            <p className="text-text-secondary mt-3">This is stricter than accredited investor status. Many accredited investors don't meet qualified client thresholds.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Written disclosure</h4>
            <p className="text-text-secondary">The adviser must provide written disclosure to each investor at the time of purchase covering services provided, duties owed, and material information affecting investor rights.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Annual audit</h4>
            <p className="text-text-secondary">Each 3(c)(1) fund (other than VC funds) must have annual audited financial statements delivered to investors.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Why This Matters</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The qualified client and audit requirements can be deal-breakers for small funds. A manager raising a few million dollars may find:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Their investor base includes accredited investors who aren't qualified clients</li>
          <li>The cost of annual audits is prohibitive relative to fund size</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          These requirements don't apply to:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>3(c)(7) funds (all investors are qualified purchasers, who easily meet qualified client standards)</li>
          <li>Qualifying venture capital funds (exempt from the additional requirements)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          This creates a significant advantage for VC funds and 3(c)(7) structures under state law.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">State-by-State Variations</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          States fall across a spectrum from permissive to highly restrictive. Rather than adopting the NASAA model uniformly, states have made their own choices about which funds and advisers qualify for exemptions.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">More Permissive States</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Some states offer exemptions more generous than the NASAA model rule. These typically exempt advisers based on a simple client count (each fund counts as one client) without the additional 3(c)(1) requirements. States in this category may exempt advisers with fewer than 5, 6, or 15 fund clients in a 12-month period. A few states mirror the federal private fund adviser exemption directly (under $150M AUM). In these states, a manager with a handful of funds can operate without registration or the qualified client and audit requirements.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">NASAA Model Rule States</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Many states have adopted the model rule with minimal modification. These states provide exemptions but impose the additional requirements on non-VC 3(c)(1) funds: qualified client investors, written disclosure, and annual audits.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Modified Model Rule States</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Some states started with the model rule but made adjustments. California, for example, has a broader venture capital definition but added "retail buyer fund" requirements (discussed below). Other states have made the qualified client or audit provisions more or less restrictive.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Restrictive States</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Several states are significantly more restrictive. These states either have no private fund adviser exemption at all, or their exemptions explicitly exclude 3(c)(1) funds. In these states, managing a non-VC 3(c)(1) fund typically means you must register as an investment adviser. Delaware and Washington fall into this category and are discussed in detail below.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">States That Exclude 3(c)(1) Funds from Exemptions</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Several states have exemptions that explicitly exclude non-VC 3(c)(1) funds. In these states, managing even a single 3(c)(1) fund that doesn't meet the venture capital definition means you cannot use the exemption and must register as a state investment adviser. States with this restriction include Delaware, Washington, Kentucky, and North Dakota. Delaware and Washington are particularly important because they're common places of business for fund managers.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Delaware</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware's exemption is only available to advisers whose clients consist exclusively of "qualifying private funds." Delaware defines this to exclude all 3(c)(1) funds except qualifying venture capital funds.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          If you manage a single 3(c)(1) fund that isn't a qualifying VC fund, you must register with the Delaware Investor Protection Unit. Registration triggers significant compliance obligations including custody rule compliance (typically satisfied through annual fund audits), comprehensive recordkeeping, written compliance policies, and periodic state examinations.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Washington</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Washington's exemption only applies to 3(c)(7) funds and advisers who qualify for the federal venture capital fund adviser exemption. Critically, Washington's rule references the SEC's VC definition directly.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          This creates a trap for managers who have their principal place of business in Washington and manage 3(c)(1) funds that don't meet the SEC's venture capital fund definition. All three conditions together trigger registration.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Because Washington references the SEC definition, secondary transaction SPVs don't qualify for the VC exemption. Secondary purchases aren't "qualifying investments" under SEC rules, even when the underlying companies are startups. A manager running secondary SPVs out of Washington cannot use the state exemption. Washington registration requirements include Form ADV through IARD, investment adviser representative registration for individuals who provide advice, compliance program requirements, and custody rule compliance.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">California's Retail Buyer Fund Rules</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          California has adopted a version of the model rule with an important additional concept that specifically impacts managers of 3(c)(1) funds.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What Is a Retail Buyer Fund?</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          California defines a "retail buyer fund" as any private fund that:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Is not a venture capital fund (as defined by SEC rules), AND</li>
          <li>Relies on the 3(c)(1) exclusion rather than 3(c)(7)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          In practice, this means most private equity funds, hedge funds, and SPVs that accept accredited investors rather than limiting themselves to qualified purchasers. If you manage 3(c)(1) vehicles in California and they're not qualifying VC funds, they're retail buyer funds.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What This Means for 3(c)(1) Managers</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you manage even one retail buyer fund, California imposes additional requirements on each such fund:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Annual audit required</h4>
            <p className="text-text-secondary">Each retail buyer fund must be audited annually by an independent CPA registered with the PCAOB. Audited financials must be delivered to investors within 120 days after the fund's fiscal year-end (180 days for fund-of-funds). This is not optional and applies regardless of fund size.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investor qualifications</h4>
            <p className="text-text-secondary">All investors must be accredited investors at the time of purchase, or be employees of the adviser, or have acquired interests through gift or inheritance.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Written disclosure</h4>
            <p className="text-text-secondary">Before or at investment, the adviser must prominently disclose all material facts regarding services, duties, conflicts of interest, and compensation.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Performance fee restrictions</h4>
            <p className="text-text-secondary">Advisers cannot charge performance-based compensation (including carried interest) to any investor who isn't a qualified client. For 3(c)(1) funds, California looks through to individual investors. If you have LPs who are accredited but not qualified clients, you cannot charge them carry.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Practical Impact</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The audit requirement creates real costs for small funds. A manager raising $2-3 million for a 3(c)(1) vehicle in California must budget for annual audits regardless of fund size.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          The performance fee restriction is equally significant. You must verify qualified client status for each investor before the fund can pay carried interest to them. This requires tracking investor qualification at a more granular level than federal rules require.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Performance Fee Restrictions Generally</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Several states restrict performance-based compensation to qualified clients. This applies even when you're operating under a state exemption.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Qualified client</strong> currently means:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>At least $1.1 million in assets under management with the adviser, OR</li>
          <li>Net worth of at least $2.2 million (excluding primary residence)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          For 3(c)(1) funds, states that impose this restriction look through to individual investors. You must verify each LP's qualified client status to charge them carry.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          This creates operational complexity:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Track qualified client status for each investor</li>
          <li>Document verification in your files</li>
          <li>Potentially exclude non-qualified-client investors from performance allocations</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          3(c)(7) funds avoid this issue because qualified purchasers ($5M+ in investments) easily exceed qualified client thresholds.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Registration Consequences</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you can't qualify for an exemption in your home state or a state where you have sufficient clients, you must register. State registration typically requires:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Form ADV Parts 1 and 2 filed through IARD</li>
          <li>Investment adviser representative registration for individuals who provide advice or supervise (requires Series 65 or equivalent)</li>
          <li>Written compliance policies and designated compliance officer</li>
          <li>Custody rule compliance (usually satisfied through annual fund audits)</li>
          <li>Comprehensive recordkeeping</li>
          <li>Annual registration renewals and Form ADV updates</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          State registration is a meaningful compliance burden. But it's required if you don't fit within an exemption, and operating without proper registration creates significant enforcement risk.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We assist fund managers in navigating state investment adviser requirements:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'State exemption analysis', desc: 'We determine which exemptions apply based on your place of business, fund structures, and client count by state.' },
            { title: 'Registration support', desc: 'Where registration is required, we help with Form ADV preparation, IAR registration, and compliance infrastructure.' },
            { title: 'Qualified client verification', desc: 'We help you document investor qualification status for performance fee purposes.' },
            { title: 'Ongoing compliance', desc: 'We track state filing obligations, renewal deadlines, and regulatory changes.' },
            { title: 'Multi-state coordination', desc: 'For managers with presence in multiple states, we map requirements and identify the most efficient compliance approach.' }
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
    id: 'private-fund-exemptions',
    title: 'Private Fund Exemptions: Understanding Regulation D, 3(c)(1), 3(c)(7), and Investor Qualifications',
    date: 'October 2, 2025',
    readTime: '10 min read',
    excerpt: 'Private funds operate in a web of exemptions. You\'re exempt from registering your securities offering. You\'re exempt from registering as an investment company. But each exemption comes with its own requirements.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Private funds operate in a web of exemptions. You're exempt from registering your securities offering. You're exempt from registering as an investment company. Your adviser may be exempt from full SEC registration. But each exemption comes with its own requirements, and they interact in ways that determine how you structure your fund and who can invest.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains the key exemptions and classifications that shape private fund structures, from securities law to investor qualifications to the practical differences between fund types.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Two Layers of Exemptions</h2>
        <p className="leading-relaxed text-text-secondary mb-12">
          Private funds rely on exemptions from two separate regulatory regimes:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Securities Act exemptions</h4>
            <p className="text-text-secondary">Allow you to sell fund interests without registering the offering with the SEC. Most funds use Regulation D.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investment Company Act exemptions</h4>
            <p className="text-text-secondary">Allow your fund to operate without registering as an investment company (like a mutual fund). Most funds use Section 3(c)(1) or 3(c)(7).</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          You need both. A fund that qualifies under Regulation D but not the Investment Company Act would face mutual fund-style regulation. A fund that qualifies under 3(c)(1) but not Regulation D would need to register its securities offering.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Securities Act: Regulation D</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Regulation D provides exemptions from SEC registration for private securities offerings. The two main exemptions for private funds are Rule 506(b) and Rule 506(c).
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Rule 506(b)</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The predominant framework for private fund raising. Under 506(b):
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Unlimited capital can be raised</li>
          <li>Unlimited number of accredited investors</li>
          <li>Up to 35 non-accredited but sophisticated investors (though most funds avoid this due to additional disclosure requirements)</li>
          <li>No general solicitation or advertising</li>
          <li>Investors self-certify accreditation status</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          506(b) is simpler operationally because you don't need to take affirmative steps to verify accreditation. Investors represent their status in the subscription agreement.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Rule 506(c)</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Allows general solicitation and advertising, but with stricter requirements:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Unlimited capital can be raised</li>
          <li>All investors must be accredited (no non-accredited investors)</li>
          <li>Issuer must take "reasonable steps" to verify accreditation status</li>
          <li>Verification typically requires reviewing tax returns, bank statements, or third-party confirmation</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          506(c) appeals to managers who want to market broadly, but the verification burden is substantial. Most established funds stick with 506(b) and rely on existing LP networks.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Federal Preemption</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Rule 506 offerings are "covered securities" under federal law, which preempts state registration requirements. You don't need to register your offering in each state where you have investors. However, you still must make state notice filings (blue sky filings) and pay fees.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Investment Company Act: 3(c)(1) and 3(c)(7)</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          The Investment Company Act of 1940 requires "investment companies" to register with the SEC and comply with extensive regulations designed for mutual funds. Private funds avoid this by relying on Section 3(c)(1) or 3(c)(7) exemptions.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Section 3(c)(1)</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The 3(c)(1) exemption is available to funds that:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Are not making a public offering</li>
          <li>Have no more than 100 beneficial owners</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          This is the standard exemption for emerging managers and smaller funds. The 100-investor limit is the primary constraint.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Counting investors:</strong> Each individual or entity counts as one beneficial owner. However:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>"Knowledgeable employees" (executives, directors, and certain employees of the fund or its adviser) don't count toward the limit</li>
          <li>If an entity investor (like another fund) owns 10% or more of the fund, you must "look through" that entity and count its underlying owners</li>
          <li>Certain involuntary transfers (death, divorce) don't trigger loss of exemption</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Qualifying venture capital funds</strong> under SEC rules can have up to 250 investors instead of 100, provided the fund meets specific criteria around investment strategy, leverage, and redemption rights.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Section 3(c)(7)</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The 3(c)(7) exemption is available to funds that:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Are not making a public offering</li>
          <li>Have only "qualified purchasers" as investors</li>
          <li>Have no more than 2,000 investors</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          3(c)(7) allows significantly more investors but requires a higher investor qualification standard. It's typically used by larger funds that need to accommodate more LPs than 3(c)(1) allows.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Investor Qualifications</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Private funds require investors to meet certain qualification standards. The two main categories are accredited investors and qualified purchasers.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Accredited Investors</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Accredited investor status is defined under SEC Rule 501 of Regulation D. Individuals qualify if they meet one of the following:
        </p>

        <div className="space-y-6 mb-6">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Income test</h4>
            <p className="text-text-secondary">Individual income over $200,000 (or $300,000 joint with spouse) in each of the past two years, with expectation of the same in the current year</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Net worth test</h4>
            <p className="text-text-secondary">Individual or joint net worth over $1 million, excluding primary residence</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Professional credentials</h4>
            <p className="text-text-secondary">Holders of Series 7, 65, or 82 licenses</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Entities can also qualify based on assets (over $5 million) or if all equity owners are accredited. Accredited investors can invest in 3(c)(1) funds.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Qualified Purchasers</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Qualified purchaser status is defined under Section 2(a)(51) of the Investment Company Act. The threshold is higher:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Individuals</h4>
            <p className="text-text-secondary">Must own $5 million or more in investments (not net worth)</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Family companies</h4>
            <p className="text-text-secondary">Must own $5 million or more in investments</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Trusts</h4>
            <p className="text-text-secondary">Must have $5 million or more in investments and not be formed for the specific purpose of investing in the fund</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Institutional investors and investment managers</h4>
            <p className="text-text-secondary">Must own or manage $25 million or more in investments</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Qualified purchasers can invest in both 3(c)(1) and 3(c)(7) funds. All qualified purchasers effectively meet accredited investor standards, but most accredited investors don't meet qualified purchaser standards.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Verification Responsibility</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The fund (issuer) is responsible for confirming that investors meet the applicable standards. This is done through:
        </p>
        <ul className="space-y-3 text-text-secondary mb-12 pl-5 list-disc marker:text-accent">
          <li>Representations in the subscription agreement</li>
          <li>Investor questionnaire responses</li>
          <li>For 506(c) offerings, affirmative verification (tax returns, bank statements, third-party letters)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          Getting this wrong can jeopardize your exemptions.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Putting It Together: Common Fund Structures</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          Most private funds combine these exemptions in predictable ways:
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Emerging Manager / Small Fund</h3>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Securities exemption:</strong> Rule 506(b)</li>
          <li><strong className="text-accent font-medium">Investment Company Act exemption:</strong> Section 3(c)(1)</li>
          <li><strong className="text-accent font-medium">Investor requirement:</strong> Accredited investors</li>
          <li><strong className="text-accent font-medium">Investor limit:</strong> 100 (or 250 for qualifying VC funds)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          This is the standard structure for first-time fund managers and smaller funds. The 100-investor limit is manageable for most emerging managers.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Larger Fund</h3>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Securities exemption:</strong> Rule 506(b)</li>
          <li><strong className="text-accent font-medium">Investment Company Act exemption:</strong> Section 3(c)(7)</li>
          <li><strong className="text-accent font-medium">Investor requirement:</strong> Qualified purchasers</li>
          <li><strong className="text-accent font-medium">Investor limit:</strong> 2,000</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          Funds that outgrow 3(c)(1) or want to accommodate more institutional LPs move to 3(c)(7). The qualified purchaser requirement is more restrictive but not usually a barrier for institutional investors.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Publicly Marketed Fund</h3>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-accent font-medium">Securities exemption:</strong> Rule 506(c)</li>
          <li><strong className="text-accent font-medium">Investment Company Act exemption:</strong> Section 3(c)(1) or 3(c)(7)</li>
          <li><strong className="text-accent font-medium">Investor requirement:</strong> Accredited investors (verified) or qualified purchasers</li>
          <li><strong className="text-accent font-medium">Investor limit:</strong> 100, 250, or 2,000 depending on structure</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          Funds using general solicitation must use 506(c) and verify accreditation. This is less common for traditional PE/VC but used by some platforms and fund-of-funds.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Venture Capital vs. Private Equity: Why the Classification Matters</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          The distinction between "venture capital fund" and "private equity fund" isn't just industry terminology. It has direct regulatory consequences that affect your adviser registration, your Form ADV, your Form D, and your ongoing compliance obligations.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">The Regulatory Stakes</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The SEC defines "venture capital fund" narrowly for purposes of adviser exemptions. If your fund qualifies, you can use the <strong className="text-accent font-medium">venture capital fund adviser exemption</strong>, which allows ERA status with no AUM cap. You could manage $500 million or more and still avoid full RIA registration.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          If your fund doesn't qualify as a venture capital fund, you're a <strong className="text-accent font-medium">private fund adviser</strong>. That exemption caps out at $150 million in AUM. Once you cross that threshold, you must register as an RIA with the SEC, which brings significantly more compliance obligations.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          This matters on your Form ADV. When you file as an ERA, you must select which exemption you're relying on. Claiming the VC adviser exemption when you don't qualify creates regulatory risk. It also matters on your Form D. You'll indicate the type of fund (venture capital fund, private equity fund, hedge fund, etc.). This should align with your actual strategy and your Form ADV elections.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">What Qualifies as a Venture Capital Fund</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The SEC's definition is specific and technical. To qualify, your fund must:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Represent to investors that it pursues a venture capital strategy</li>
          <li>Invest at least 80% of capital in "qualifying investments" (equity in private operating companies, acquired directly from the company)</li>
          <li>Limit leverage to 15% of capital commitments, with borrowing repaid within 120 days</li>
          <li>Not offer redemption or withdrawal rights to investors (except in extraordinary circumstances)</li>
          <li>Not be registered under the Investment Company Act</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          The 80% requirement is where most issues arise. "Qualifying investments" means primary equity purchases in private operating companies. Several common transaction types don't count:
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Secondary transactions</h4>
            <p className="text-text-secondary">Don't qualify. If you're buying shares from existing shareholders rather than the company itself, that's not a qualifying investment. A fund or SPV focused on secondary purchases is not a venture capital fund for regulatory purposes, even if the underlying companies are startups.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Debt instruments</h4>
            <p className="text-text-secondary">Generally don't qualify, even convertible notes in some cases.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investments in other funds</h4>
            <p className="text-text-secondary">Don't qualify. Fund-of-funds structures aren't VC funds.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Public company investments</h4>
            <p className="text-text-secondary">Don't qualify once the company has gone public.</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          You have a 20% basket for non-qualifying investments. But if your strategy regularly includes secondaries, public positions, or significant debt, you may not meet the definition.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Common Misclassification Issues</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          We frequently see managers who believe they're running a venture capital fund when they actually aren't. Common scenarios:
        </p>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Secondary-focused SPVs</h4>
            <p className="text-text-secondary">A manager syndicates deals to buy shares from founders or early employees. This feels like "venture" because the companies are startups, but secondary purchases aren't qualifying investments. The SPVs are private equity vehicles.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Mixed primary/secondary funds</h4>
            <p className="text-text-secondary">A fund does mostly primary investments but routinely participates in secondary transactions or tender offers. If non-qualifying investments exceed 20%, the fund doesn't meet the VC definition.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Late-stage funds with public exposure</h4>
            <p className="text-text-secondary">A growth fund invests in late-stage companies, some of which go public during the fund's life. Holding public positions beyond a short window can push non-qualifying investments over 20%.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Funds using leverage</h4>
            <p className="text-text-secondary">A fund uses a subscription line of credit that exceeds 15% of commitments or isn't repaid within 120 days. This alone disqualifies the fund.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Funds with redemption features</h4>
            <p className="text-text-secondary">Any ordinary redemption or withdrawal rights disqualify the fund, even if rarely exercised.</p>
          </div>
        </div>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Consequences of Misclassification</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you claim the VC adviser exemption but your fund doesn't qualify:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>You may be operating as an unregistered investment adviser once you exceed $150 million AUM</li>
          <li>Your Form ADV filings are inaccurate</li>
          <li>You face potential SEC enforcement action</li>
          <li>You may need to retroactively register as an RIA and come into compliance</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          The safer approach: if there's any doubt about whether your fund meets the VC definition, treat it as a private equity fund for regulatory purposes. You can always describe your investment strategy as venture-focused in your PPM and marketing materials while correctly classifying for regulatory filings.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Form D and Form ADV Alignment</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Your classifications should be consistent across filings:
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Form D</strong> asks you to identify the fund type (venture capital fund, private equity fund, hedge fund, other). Select based on the SEC's regulatory definitions, not industry convention.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Form ADV</strong> asks which exemption you're relying on (VC adviser exemption or private fund adviser exemption) and requires you to report information about each fund you advise, including whether it's a qualifying VC fund. Mismatches between these filings, or between your filings and your actual fund terms, create problems. Review your fund documents and investment strategy carefully before making these elections.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Fund Type Classifications on Form D</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          When you file Form D, you must select the type of fund. The options include venture capital fund, private equity fund, hedge fund, liquidity fund, real estate fund, securitized asset fund, and other. This isn't just a label; it should reflect your actual fund structure and strategy.
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Venture capital fund</h4>
            <p className="text-text-secondary">Only select this if your fund meets the SEC's technical definition (80% qualifying investments, leverage limits, no redemptions, etc.). Don't select this just because you invest in startups.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Private equity fund</h4>
            <p className="text-text-secondary">The appropriate selection for buyout funds, growth equity, secondary funds, and funds that invest in startups but don't meet the VC definition.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Hedge fund</h4>
            <p className="text-text-secondary">Typically used for funds with active trading strategies, short positions, derivatives, or that offer periodic liquidity to investors.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Other investment fund</h4>
            <p className="text-text-secondary">Used for fund-of-funds, credit funds, and other strategies that don't fit the above categories.</p>
          </div>
        </div>

        <p className="leading-relaxed text-text-secondary mb-12">
          Your Form D selection should be consistent with your Form ADV and with how your fund actually operates. If the SEC reviews your filings and finds that your fund is classified as a VC fund but doesn't meet the definition, you have a compliance problem.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We help fund managers navigate exemption requirements and structure their funds appropriately:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Exemption analysis', desc: 'We help you determine which exemptions apply to your fund based on size, strategy, and investor base.' },
            { title: 'Investor qualification', desc: 'We assist with subscription documents and questionnaires that properly capture accreditation and qualified purchaser status.' },
            { title: 'Regulatory filings', desc: 'Form D, blue sky filings, and Form ADV coordinated with your exemption elections.' },
            { title: 'Ongoing compliance', desc: 'Monitoring investor counts, qualification status, and exemption requirements as your fund grows.' }
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
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const post = posts.find(p => p.id === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        // Invalid slug, redirect to insights list
        navigate('/insights', { replace: true });
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug, navigate]);

  if (selectedPost) {
    // Convert date to ISO format for SEO
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
              to="/insights"
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
      </>
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
                <Link key={post.id} to={`/insights/${post.id}`}>
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