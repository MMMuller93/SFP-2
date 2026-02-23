import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const jurisdictionsPosts: BlogPost[] = [
  {
    id: 'delaware-llc-complete-guide',
    title: 'Delaware LLC Formation: Complete Guide',
    category: 'jurisdictions',
    audience: 'both',
    date: 'February 20, 2026',
    readTime: '13 min read',
    excerpt: 'Delaware is the gold standard for LLC formation. Chancery Court, 200+ years of case law, predictable outcomes, and strong privacy protections make it the default choice for AI agent entities.',
    tags: ['delaware', 'llc', 'entity-formation', 'chancery-court', 'franchise-tax'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Delaware is the default jurisdiction for LLC formation in the United States. Over 1.9 million business entities are registered there, including 68% of Fortune 500 companies. For AI agent entities, Delaware offers the strongest combination of legal predictability, privacy protections, and operational flexibility.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Delaware</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Four factors make Delaware the preferred jurisdiction for agent entities:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Court of Chancery.</strong> Delaware's dedicated business court uses judges (not juries) who specialize in corporate and LLC disputes. Faster resolution, more predictable outcomes.</li>
          <li><strong>200+ years of case law.</strong> The largest body of business entity case law in the United States. When legal questions arise, there are answers.</li>
          <li><strong>Privacy protections.</strong> Delaware does not require member or manager names on formation documents. Your ownership structure stays private.</li>
          <li><strong>Flexible LLC Act.</strong> The Delaware Limited Liability Company Act (6 Del. C. § 18-101 et seq.) allows nearly unlimited customization of operating agreements.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Formation Process</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The Delaware LLC formation process has five steps. SFP handles all of them.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <ol className="space-y-3 text-text-secondary pl-5 list-decimal">
            <li><strong>Choose a name.</strong> Must include "LLC" or "Limited Liability Company." We verify availability with the Delaware Division of Corporations.</li>
            <li><strong>File Certificate of Formation.</strong> Submitted to the Delaware Division of Corporations. Processing: 1–3 business days.</li>
            <li><strong>Obtain EIN.</strong> Federal Employer Identification Number from the IRS. Required for banking and tax filing.</li>
            <li><strong>Draft operating agreement.</strong> Defines ownership, management, agent authority, and distribution terms.</li>
            <li><strong>Set up banking.</strong> Business checking account using the entity's EIN and banking resolution.</li>
          </ol>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Costs</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Item</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Cost</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Delaware state filing fee</td>
              <td className="p-3">$110</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">SFP formation package</td>
              <td className="p-3">$349</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3 font-medium">Total at formation</td>
              <td className="p-3 font-medium">$459</td>
            </tr>
            <tr>
              <td className="p-3">Annual franchise tax</td>
              <td className="p-3">$300/year (due June 1)</td>
            </tr>
          </tbody>
        </table>

        <p className="leading-relaxed text-text-secondary mb-6">
          The SFP formation package includes registered agent service (first year), operating agreement with <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link>, EIN acquisition, and banking resolution. See our <Link to="/agents/insights/delaware-annual-franchise-tax" className="text-accent hover:underline">franchise tax guide</Link> for annual obligations.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Timeline</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary"><strong>State filing:</strong> 1–3 business days (standard). Same-day and 24-hour expedited options available at additional cost.</p>
          <p className="text-text-secondary mt-2"><strong>EIN:</strong> Same day (online) or 4–5 business days (fax/mail for international applicants).</p>
          <p className="text-text-secondary mt-2"><strong>Full formation through SFP:</strong> 2–5 business days from order to banking-ready entity.</p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Delaware LLC Formation</h4>
            <p className="text-sm text-text-secondary">$349 + $110 state fee. Certificate of Formation, operating agreement, registered agent, EIN, and banking resolution.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent Authority Schedule</h4>
            <p className="text-sm text-text-secondary">Custom legal exhibit defining transaction limits, permitted operations, and human approval thresholds.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Registered Agent</h4>
            <p className="text-sm text-text-secondary">Delaware-based registered agent service included in formation. Annual renewal available.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'wyoming-dao-llc-complete-guide',
    title: 'Wyoming DAO LLC Formation: Complete Guide',
    category: 'jurisdictions',
    audience: 'both',
    date: 'February 16, 2026',
    readTime: '13 min read',
    excerpt: 'Wyoming is the only U.S. state with a dedicated DAO LLC statute. W.S. 17-31-101 et seq. allows decentralized governance through smart contracts with full legal recognition.',
    tags: ['wyoming', 'dao-llc', 'smart-contracts', 'entity-formation', 'on-chain-governance'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Wyoming's Decentralized Autonomous Organization Supplement (W.S. 17-31-101 et seq.), effective July 1, 2021, created the first U.S. legal framework for DAOs. A Wyoming DAO LLC is a standard LLC with additional provisions for algorithmic management and smart contract governance. For AI agents that operate on-chain, this is the only jurisdiction with purpose-built legal infrastructure.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The DAO LLC Statute</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Wyoming's statute adds three key provisions to standard LLC law:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>DAO designation.</strong> The articles of organization must include "DAO," "LAO," or "DAO LLC" in the entity name.</li>
          <li><strong>Smart contract governance.</strong> The operating agreement can defer management decisions to smart contracts. The smart contract's address must be filed as a schedule.</li>
          <li><strong>Algorithmic management.</strong> The entity can be "algorithmically managed" — meaning no human manager is required for day-to-day operations.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Formation Process</h2>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <ol className="space-y-3 text-text-secondary pl-5 list-decimal">
            <li><strong>Choose a name.</strong> Must include "DAO," "LAO," or "DAO LLC." Verified with Wyoming Secretary of State.</li>
            <li><strong>File articles of organization.</strong> Standard Wyoming LLC articles plus the DAO designation and smart contract identifier.</li>
            <li><strong>Submit smart contract schedule.</strong> Publicly accessible identifier (contract address, IPFS hash, or URL) of the governing smart contract.</li>
            <li><strong>Draft operating agreement.</strong> Defines member rights, voting mechanisms, and the relationship between smart contract logic and legal governance.</li>
            <li><strong>Obtain EIN and banking.</strong> Same federal requirements as any LLC.</li>
          </ol>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Costs and Timeline</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Item</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Cost</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Wyoming state filing fee</td>
              <td className="p-3">$100</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">SFP DAO LLC formation package</td>
              <td className="p-3">$399</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3 font-medium">Total at formation</td>
              <td className="p-3 font-medium">$499</td>
            </tr>
            <tr>
              <td className="p-3">Annual report</td>
              <td className="p-3">$60/year (due on anniversary month)</td>
            </tr>
          </tbody>
        </table>

        <p className="leading-relaxed text-text-secondary mb-6">
          Processing takes 2–5 business days with the Wyoming Secretary of State. Expedited options available for additional fees.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Banking Challenges</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Be aware:</strong> Some banks are unfamiliar with the DAO LLC structure and may decline accounts or require additional documentation. We recommend Mercury or Relay, both of which have experience with DAO LLC entities. SFP provides a banking resolution specifically drafted for DAO LLCs.
          </p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          For most AI agents that do not require on-chain governance, a <Link to="/agents/insights/delaware-llc-complete-guide" className="text-accent hover:underline">standard Delaware LLC</Link> is simpler and has broader banking acceptance. See our <Link to="/agents/insights/delaware-vs-wyoming" className="text-accent hover:underline">Delaware vs Wyoming comparison</Link> to decide.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">DAO LLC Formation</h4>
            <p className="text-sm text-text-secondary">$399 + $100 state fee. Articles with DAO designation, smart contract schedule, operating agreement, registered agent, and EIN.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Smart Contract Integration</h4>
            <p className="text-sm text-text-secondary">We draft the smart contract identifier schedule and ensure your on-chain governance aligns with the legal operating agreement.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">DAO Banking Package</h4>
            <p className="text-sm text-text-secondary">Banking resolution tailored for DAO LLC structure with documentation banks need to understand the entity type.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'delaware-corporation-guide',
    title: 'Delaware Corporation Formation: Complete Guide',
    category: 'jurisdictions',
    audience: 'both',
    date: 'February 12, 2026',
    readTime: '12 min read',
    excerpt: 'Delaware C-Corps are the standard for venture-backed startups. But for most AI agent entities, a corporation adds complexity without benefit. Here is when each structure makes sense.',
    tags: ['delaware', 'corporation', 'c-corp', 'qsbs', 'entity-formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The Delaware C-Corporation is the default structure for venture-backed startups. If you are raising institutional capital or planning an IPO, investors will expect a C-Corp. But for most AI agent entities, a corporation adds board requirements, annual meeting obligations, and double taxation without corresponding benefit. Understanding when each structure fits is critical.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When a C-Corp Makes Sense</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Venture capital fundraising.</strong> Most VCs require C-Corp structure for preferred stock issuance, standard term sheets, and liquidation preferences.</li>
          <li><strong>QSBS eligibility.</strong> Under IRC Section 1202, qualified small business stock in a C-Corp can qualify for up to $10M in capital gains exclusion after 5 years. LLCs cannot issue QSBS.</li>
          <li><strong>Stock option plans.</strong> If you need to issue ISOs (Incentive Stock Options) to employees, you need a corporation.</li>
          <li><strong>IPO path.</strong> Public companies must be corporations. If that is the exit plan, start there.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why LLC Is Usually Better for Agents</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          For AI agents that operate commercially but are not raising venture capital, the LLC wins on every practical dimension:
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Factor</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">LLC</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">C-Corp</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Governance</td>
              <td className="p-3">Operating agreement only</td>
              <td className="p-3">Board, bylaws, minutes, resolutions</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Taxation</td>
              <td className="p-3">Pass-through (no double tax)</td>
              <td className="p-3">Double taxation (corp + personal)</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Flexibility</td>
              <td className="p-3">Fully customizable OA</td>
              <td className="p-3">Constrained by corporate law</td>
            </tr>
            <tr>
              <td className="p-3">Annual overhead</td>
              <td className="p-3">$300 franchise tax</td>
              <td className="p-3">$400+ franchise tax, plus compliance costs</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Delaware Corporation Costs</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The state filing fee for a Delaware Certificate of Incorporation is $89. Franchise tax varies based on authorized shares or assumed par value method — minimum $400/year for most structures. Add legal costs for bylaws, initial board resolutions, and stock certificates.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Our recommendation:</strong> Start with an LLC. If you later need to raise venture capital, you can convert to a C-Corp. The reverse (Corp to LLC) is much harder. See our <Link to="/agents/insights/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC guide</Link> for the formation process.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Delaware LLC Formation</h4>
            <p className="text-sm text-text-secondary">$349 + $110 state fee. The recommended structure for most AI agent entities.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Entity Structure Consultation</h4>
            <p className="text-sm text-text-secondary">Not sure which structure fits? We help you evaluate LLC vs C-Corp based on your agent's use case and growth plans.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'delaware-vs-wyoming',
    title: 'Delaware vs Wyoming: Full Comparison for Entity Formation',
    category: 'jurisdictions',
    audience: 'both',
    date: 'February 8, 2026',
    readTime: '10 min read',
    excerpt: 'Delaware and Wyoming are the two leading jurisdictions for AI agent entity formation. Here is a direct comparison on fees, timeline, banking, smart contracts, privacy, and annual costs.',
    tags: ['delaware', 'wyoming', 'comparison', 'entity-formation', 'jurisdictions'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Delaware and Wyoming are the two jurisdictions we recommend for AI agent entities. Delaware is the default for most use cases. Wyoming is the choice when on-chain governance is a core requirement. This is the full comparison.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Side-by-Side Comparison</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Factor</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Delaware LLC</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Wyoming DAO LLC</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">State filing fee</td>
              <td className="p-3">$110</td>
              <td className="p-3">$100</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">SFP formation fee</td>
              <td className="p-3">$349</td>
              <td className="p-3">$399</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Annual cost</td>
              <td className="p-3">$300 franchise tax</td>
              <td className="p-3">$60 annual report</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Filing timeline</td>
              <td className="p-3">1–3 business days</td>
              <td className="p-3">2–5 business days</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Smart contract governance</td>
              <td className="p-3">Not statutory</td>
              <td className="p-3">Statutory (W.S. 17-31)</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Privacy</td>
              <td className="p-3">No member names on filings</td>
              <td className="p-3">Organizer name on articles</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Case law depth</td>
              <td className="p-3">200+ years, extensive</td>
              <td className="p-3">Limited (statute since 2021)</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Banking acceptance</td>
              <td className="p-3">Universal</td>
              <td className="p-3">Some banks unfamiliar with DAO LLCs</td>
            </tr>
            <tr>
              <td className="p-3">Best for</td>
              <td className="p-3">Most AI agent entities</td>
              <td className="p-3">On-chain governance required</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Our Recommendation</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Choose Delaware</strong> unless your agent requires on-chain smart contract governance as a core feature. Delaware offers superior case law, universal banking acceptance, and stronger privacy protections. The $240/year higher annual cost is offset by reduced friction in banking and legal matters.
          </p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong>Choose Wyoming</strong> if your agent is governed by a smart contract, requires decentralized voting, or operates as part of a DAO with multiple token-holding members. Wyoming is the only state with statutory recognition for this structure.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          For detailed formation guides, see <Link to="/agents/insights/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC</Link> and <Link to="/agents/insights/wyoming-dao-llc-complete-guide" className="text-accent hover:underline">Wyoming DAO LLC</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Delaware LLC</h4>
            <p className="text-sm text-text-secondary">$349 + $110 state fee. Full formation package with operating agreement, registered agent, EIN, and banking resolution.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Wyoming DAO LLC</h4>
            <p className="text-sm text-text-secondary">$399 + $100 state fee. Full formation with DAO designation, smart contract schedule, and DAO-specific banking package.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'dao-llc-vs-standard-llc',
    title: "DAO LLC vs Standard LLC: What's Different",
    category: 'jurisdictions',
    audience: 'both',
    date: 'February 4, 2026',
    readTime: '8 min read',
    excerpt: 'A DAO LLC adds smart contract governance and algorithmic management to the standard LLC framework. Here are the legal differences, formation requirements, and when each structure fits.',
    tags: ['dao-llc', 'llc', 'smart-contracts', 'comparison', 'wyoming'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A DAO LLC is not a new entity type. It is a standard LLC with additional provisions under Wyoming's DAO Supplement (W.S. 17-31-101 et seq.) that recognize smart contract governance and algorithmic management. The core LLC protections — liability shielding, pass-through taxation, flexible operating agreements — remain identical.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Legal Differences</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Feature</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Standard LLC</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">DAO LLC</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Management</td>
              <td className="p-3">Member-managed or manager-managed</td>
              <td className="p-3">Algorithmically managed option</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Governance</td>
              <td className="p-3">Operating agreement</td>
              <td className="p-3">Operating agreement + smart contract</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Filing requirements</td>
              <td className="p-3">Standard articles</td>
              <td className="p-3">Articles + smart contract identifier</td>
            </tr>
            <tr>
              <td className="p-3">Name requirement</td>
              <td className="p-3">Must include "LLC"</td>
              <td className="p-3">Must include "DAO," "LAO," or "DAO LLC"</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Smart Contract Identifier Schedule</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The DAO LLC must file a "smart contract identifier" — a publicly accessible reference to the smart contract that governs the entity. This can be an Ethereum contract address, an IPFS hash, or any publicly verifiable identifier. The statute requires this be included in the articles of organization.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Important:</strong> If the smart contract and the operating agreement conflict, the statute defaults to the operating agreement unless the operating agreement explicitly states otherwise. Draft both documents with care.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Algorithmic Management</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          An algorithmically managed DAO LLC delegates routine decisions to code. This is distinct from member-managed or manager-managed. The smart contract handles voting, distributions, and operational decisions according to its programmed logic. Human intervention is reserved for situations the code cannot handle.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">When to Choose Each</h3>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Standard LLC:</strong> Your agent does not require on-chain governance. You want maximum banking acceptance and legal predictability. This covers 90%+ of AI agent use cases.</li>
          <li><strong>DAO LLC:</strong> Your agent is governed by a smart contract. Token-based voting determines decisions. On-chain transparency is a feature, not overhead.</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          See our detailed guides: <Link to="/agents/insights/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC</Link> | <Link to="/agents/insights/wyoming-dao-llc-complete-guide" className="text-accent hover:underline">Wyoming DAO LLC</Link> | <Link to="/agents/insights/delaware-vs-wyoming" className="text-accent hover:underline">Full comparison</Link>
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Standard LLC</h4>
            <p className="text-sm text-text-secondary">Delaware formation with full operating agreement, registered agent, and banking setup. $349 + state fee.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">DAO LLC</h4>
            <p className="text-sm text-text-secondary">Wyoming formation with smart contract schedule, DAO-specific operating agreement, and banking package. $399 + state fee.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'single-member-vs-multi-member',
    title: 'Single-Member vs Multi-Member LLC',
    category: 'jurisdictions',
    audience: 'both',
    date: 'January 31, 2026',
    readTime: '7 min read',
    excerpt: 'Single-member LLCs are disregarded entities for tax purposes. Multi-member LLCs file as partnerships. Here is how ownership structure affects taxation, liability, and governance.',
    tags: ['llc', 'single-member', 'multi-member', 'taxation', 'entity-structure'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The number of owners in your LLC determines its default tax treatment, governance requirements, and operational complexity. Most AI agent entities are single-member LLCs owned by one developer or operator. Multi-member structures apply when multiple parties share ownership of the agent's entity.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Tax Treatment</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Factor</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Single-Member</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Multi-Member</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Default classification</td>
              <td className="p-3">Disregarded entity</td>
              <td className="p-3">Partnership</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Tax return</td>
              <td className="p-3">Schedule C on owner's 1040</td>
              <td className="p-3">Form 1065 + K-1s for each member</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Self-employment tax</td>
              <td className="p-3">All net income subject to SE tax</td>
              <td className="p-3">Active members subject to SE tax</td>
            </tr>
            <tr>
              <td className="p-3">S-Corp election</td>
              <td className="p-3">Available (Form 2553)</td>
              <td className="p-3">Available (Form 2553)</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Liability Protection</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Both structures provide the same liability shield — the entity's debts and obligations are separate from the members' personal assets. However, single-member LLCs face a higher risk of "veil piercing" if the owner does not maintain separation between personal and business finances. Keep separate bank accounts, sign contracts in the entity's name, and maintain your operating agreement.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Governance</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Single-member:</strong> One owner makes all decisions. Operating agreement is simpler. No voting mechanics needed.</li>
          <li><strong>Multi-member:</strong> Operating agreement must define voting rights, profit/loss allocation, capital contributions, dispute resolution, and exit procedures. More complex but necessary when multiple parties are involved.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>For most AI agents:</strong> Single-member LLC is the right choice. One developer or operator owns the entity, manages the agent, and reports income on their personal return. Multi-member applies when the agent is jointly owned by a team or DAO.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Single-Member LLC</h4>
            <p className="text-sm text-text-secondary">Standard formation with operating agreement tailored for sole ownership. Includes agent authority schedule.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Multi-Member LLC</h4>
            <p className="text-sm text-text-secondary">Formation with multi-member operating agreement covering voting, distributions, capital contributions, and exit terms.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'series-llc-explained',
    title: 'Series LLCs: What They Are and When They Make Sense',
    category: 'jurisdictions',
    audience: 'both',
    date: 'January 27, 2026',
    readTime: '7 min read',
    excerpt: 'A Series LLC creates isolated "cells" within one parent entity. Attractive in theory for multi-agent platforms, but banking and interstate recognition problems make standalone LLCs the safer default.',
    tags: ['series-llc', 'entity-structure', 'multi-agent', 'delaware', 'llc'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A Series LLC is a single LLC that contains multiple "series" or "cells," each with its own assets, liabilities, and members. In theory, liabilities of one series cannot reach the assets of another. Delaware (6 Del. C. Section 18-215), Wyoming, Illinois, and about a dozen other states recognize this structure. It sounds ideal for multi-agent platforms. In practice, it has significant limitations.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How Series LLCs Work</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The parent LLC (the "master" series) creates individual series, each of which can own property, enter contracts, and conduct business independently. Each series has its own operating agreement provisions, its own members, and its own assets. The liability shield between series means creditors of Series A cannot reach assets of Series B.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why SFP Defaults to Standalone LLCs</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Banking problems.</strong> Most banks do not understand series structures. Opening separate bank accounts for individual series is difficult or impossible at many institutions. Some banks will only open one account for the parent entity.</li>
          <li><strong>Interstate recognition.</strong> Not all states recognize the internal liability shields of a series LLC formed in another state. If your agent operates across state lines, the series protection may not hold.</li>
          <li><strong>Untested case law.</strong> Very few court decisions have tested whether the liability barriers between series actually hold. The legal theory is sound; the practical precedent is thin.</li>
          <li><strong>Complexity.</strong> Each series needs its own books, records, and tax reporting. The administrative overhead often exceeds the cost of just forming separate LLCs.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When Series LLCs Might Work</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Platform operators</strong> managing 10+ agents with similar operational profiles may benefit from a series structure. If all agents operate in the same state, use the same bank, and have uniform governance, the series can reduce formation costs. But verify banking acceptance before committing to this structure.
          </p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          For most users forming 1–5 agent entities, standalone LLCs are simpler, safer, and better supported by the banking system. See our <Link to="/agents/insights/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC guide</Link> for the standard approach.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Standalone LLC Formation</h4>
            <p className="text-sm text-text-secondary">Our recommended approach. Individual LLCs with full liability isolation, universal banking acceptance, and proven legal standing.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Multi-Agent Consultation</h4>
            <p className="text-sm text-text-secondary">Running a platform with many agents? We evaluate whether series, standalone, or hybrid structures fit your operational model.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'wyoming-dao-smart-contracts',
    title: 'Wyoming DAO LLC Smart Contract Requirements',
    category: 'jurisdictions',
    audience: 'both',
    date: 'January 23, 2026',
    readTime: '8 min read',
    excerpt: 'Wyoming requires DAO LLCs to file a smart contract identifier with their articles of organization. Here are the technical requirements, what qualifies as a smart contract, and how to structure compliance.',
    tags: ['wyoming', 'dao-llc', 'smart-contracts', 'technical-requirements', 'compliance'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Wyoming's DAO LLC statute (W.S. 17-31-104(c)) requires every DAO LLC to include a "publicly available identifier for any smart contract directly used to manage, facilitate, or operate the decentralized autonomous organization." This is not optional. Without a valid smart contract identifier, the DAO designation is incomplete.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Qualifies as a Smart Contract</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The statute defines a smart contract broadly: "automated transaction, as defined in W.S. 40-21-102(a)(ii), or any substantially similar analogue, which utilizes distributed ledger technology." In practice, this includes:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>EVM contracts.</strong> Ethereum, Polygon, Arbitrum, or any EVM-compatible chain. The contract address serves as the identifier.</li>
          <li><strong>Solana programs.</strong> The program ID on Solana's mainnet or devnet.</li>
          <li><strong>Other DLT.</strong> Any distributed ledger technology with a publicly verifiable contract or program identifier.</li>
          <li><strong>IPFS-hosted logic.</strong> If governance logic is stored on IPFS, the content hash can serve as the identifier, though on-chain contracts are more straightforward.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Smart Contract Identifier Schedule</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The identifier is filed as a schedule attached to the articles of organization. It must include:
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>The blockchain or distributed ledger platform (e.g., Ethereum Mainnet)</li>
            <li>The contract address or program ID</li>
            <li>A description of the contract's governance functions</li>
            <li>The relationship between the smart contract and the operating agreement</li>
            <li>Procedures for updating or migrating the smart contract</li>
          </ul>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Contract-Agreement Conflicts</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Critical:</strong> If the smart contract's behavior conflicts with the operating agreement, the operating agreement controls — unless the operating agreement explicitly defers to the smart contract. Draft both documents together. Do not treat them as independent.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Updating the Smart Contract</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          If you deploy a new version of the smart contract, the articles of organization must be amended to reflect the new identifier. This requires a filing with the Wyoming Secretary of State. Include upgrade procedures in both the operating agreement and the smart contract itself (e.g., proxy pattern or governance vote for migration).
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          For the full formation process, see our <Link to="/agents/insights/wyoming-dao-llc-complete-guide" className="text-accent hover:underline">Wyoming DAO LLC guide</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Smart Contract Schedule</h4>
            <p className="text-sm text-text-secondary">We draft the identifier schedule and ensure it meets Wyoming filing requirements. Compatible with EVM, Solana, and other DLT platforms.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Operating Agreement Alignment</h4>
            <p className="text-sm text-text-secondary">We draft operating agreements that properly define the relationship between legal governance and on-chain logic.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'delaware-annual-franchise-tax',
    title: 'Delaware LLC Annual Franchise Tax: What You Owe',
    category: 'jurisdictions',
    audience: 'both',
    date: 'January 19, 2026',
    readTime: '5 min read',
    excerpt: 'Every Delaware LLC owes a flat $300 annual franchise tax due June 1. Late payments incur $200 penalties plus 1.5% monthly interest. Here is what you need to know.',
    tags: ['delaware', 'franchise-tax', 'annual-costs', 'compliance', 'llc'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          If you form a Delaware LLC, you owe a flat $300 annual franchise tax to the Delaware Division of Corporations. This is not optional and it is not based on income. Every Delaware LLC pays the same amount regardless of revenue, profit, or activity level. Missing the deadline triggers penalties and can result in the entity being voided.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Numbers</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Item</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Amount</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">Annual franchise tax</td>
              <td className="p-3">$300 (flat fee for all LLCs)</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Due date</td>
              <td className="p-3">June 1 each year</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Late penalty</td>
              <td className="p-3">$200</td>
            </tr>
            <tr>
              <td className="p-3">Late interest</td>
              <td className="p-3">1.5% per month on unpaid tax</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How to Pay</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Pay online through the Delaware Division of Corporations website at <strong>corp.delaware.gov</strong>. You will need your entity's file number (assigned at formation). Payment by credit card, ACH, or check. The system is straightforward — log in, select your entity, pay the $300.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Consequences of Non-Payment</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Penalty and interest.</strong> $200 penalty plus 1.5% monthly interest begin accruing immediately after June 1.</li>
          <li><strong>Entity voided.</strong> If the tax remains unpaid, Delaware can void the entity. A voided entity cannot conduct business, enter contracts, or maintain bank accounts.</li>
          <li><strong>Reinstatement.</strong> Voided entities can be reinstated by paying all back taxes, penalties, and interest, plus a reinstatement fee. This costs significantly more than staying current.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>Set a calendar reminder for May 15.</strong> Pay the $300 before June 1 every year. This is the single most common compliance failure for small LLCs, and it is entirely avoidable.
          </p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          For a comparison of annual costs across jurisdictions, see <Link to="/agents/insights/delaware-vs-wyoming" className="text-accent hover:underline">Delaware vs Wyoming</Link>. Wyoming's annual cost is $60 (annual report filing).
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Compliance Reminders</h4>
            <p className="text-sm text-text-secondary">We send reminders before your franchise tax and annual report deadlines so you never miss a payment.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Registered Agent Service</h4>
            <p className="text-sm text-text-secondary">Our registered agent receives and forwards all state correspondence, including tax notices and compliance alerts.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'foreign-qualification',
    title: 'Foreign Qualification: Operating Your LLC in Other States',
    category: 'jurisdictions',
    audience: 'both',
    date: 'January 15, 2026',
    readTime: '7 min read',
    excerpt: 'If your Delaware or Wyoming LLC does business in another state, you may need to register as a foreign LLC. Here are the nexus rules, typical costs, and when registration is required.',
    tags: ['foreign-qualification', 'nexus', 'multi-state', 'compliance', 'llc'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Forming an LLC in Delaware or Wyoming does not automatically allow you to conduct business in every state. If your entity has sufficient "nexus" — physical presence, employees, or significant business activity — in another state, that state may require you to register as a "foreign LLC." This is called foreign qualification. It is a compliance requirement, not a new entity.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Creates Nexus</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Each state defines nexus differently, but common triggers include:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Physical office or location.</strong> Renting office space, maintaining a warehouse, or having a physical address in the state.</li>
          <li><strong>Employees.</strong> Having W-2 employees working in the state, even remotely.</li>
          <li><strong>Soliciting business.</strong> Actively marketing, selling, or providing services to customers in the state on a regular basis.</li>
          <li><strong>Owning property.</strong> Real estate, equipment, or inventory stored in the state.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Does NOT Create Nexus (Usually)</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Having customers in the state (passive sales without solicitation)</li>
          <li>Operating a website accessible from the state</li>
          <li>Holding a bank account in the state</li>
          <li>Occasional, isolated transactions</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">
            <strong>For most AI agent LLCs:</strong> If your agent operates entirely online, is managed by one person, and does not have employees or physical presence in other states, foreign qualification is likely not required. The LLC's home state (Delaware or Wyoming) is sufficient. But consult an attorney if you are unsure.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Costs</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Foreign qualification fees vary by state. Typical costs:
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Item</th>
              <th className="text-left p-3 text-text-highlight border-b border-grid">Cost Range</th>
            </tr>
          </thead>
          <tbody className="text-text-secondary">
            <tr className="border-b border-grid">
              <td className="p-3">State filing fee</td>
              <td className="p-3">$100–$500 depending on state</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-3">Registered agent in that state</td>
              <td className="p-3">$100–$300/year</td>
            </tr>
            <tr>
              <td className="p-3">Annual report / compliance</td>
              <td className="p-3">Varies by state ($0–$800)</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Consequences of Not Registering</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Loss of court access.</strong> An unregistered foreign LLC may be barred from filing lawsuits in that state's courts.</li>
          <li><strong>Fines and penalties.</strong> Back fees, penalties, and sometimes per-day fines for operating without registration.</li>
          <li><strong>Tax liability.</strong> The state may assess back taxes for the period the LLC was operating without registration.</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          For most single-operator AI agent entities, the home state formation is sufficient. If your operations expand to include employees, offices, or significant physical presence in other states, revisit foreign qualification at that time.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Foreign Qualification Filing</h4>
            <p className="text-sm text-text-secondary">We handle foreign qualification filings in any U.S. state, including registered agent setup and ongoing compliance.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Nexus Analysis</h4>
            <p className="text-sm text-text-secondary">Not sure if you need to register? We evaluate your operations and advise on which states require foreign qualification.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
];
