import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const foundationsPosts: BlogPost[] = [
  {
    id: 'why-agents-need-legal-entities',
    title: 'Why AI Agents Need Their Own Legal Entities',
    category: 'foundations',
    audience: 'both',
    date: 'February 22, 2026',
    readTime: '11 min read',
    excerpt: 'AI agents that transact, hold assets, or enter contracts need legal personhood. An LLC gives your agent a defined legal identity with bounded authority.',
    tags: ['entity-formation', 'ai-agents', 'llc', 'legal-infrastructure'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your AI agent can write code, analyze data, and generate content. But the moment it needs to sign a contract, open a bank account, invoice a client, or hold intellectual property, it hits a wall. Legal systems require a recognized legal person on the other side of every transaction. An LLC provides that identity.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Legal Personhood Problem</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Every financial and legal system in the United States requires a legal person — either a natural person (human) or a juridical person (corporation, LLC, trust). AI agents are neither. Without a legal entity, your agent cannot open a bank account, cannot be party to a contract, and cannot own assets.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          This is not a theoretical problem. It is the primary bottleneck for agents that need to operate commercially. A trading agent that cannot hold a brokerage account. A content agent that cannot invoice clients. A procurement agent that cannot sign purchase orders. The capability exists; the legal infrastructure does not — unless you build it.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why an LLC?</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The limited liability company is the optimal vehicle for AI agent operations. Three reasons:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Liability containment.</strong> An LLC creates a legal boundary between the agent's operations and the owner's personal assets. If the agent makes a mistake, exposure is limited to the entity's assets.</li>
          <li><strong>Operational flexibility.</strong> Unlike corporations, LLCs have no board requirements, no annual meeting obligations, and minimal governance overhead. The operating agreement is fully customizable.</li>
          <li><strong>Tax pass-through.</strong> Single-member LLCs are disregarded entities for tax purposes. Income and losses pass through to the owner's personal return. No double taxation.</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          Corporations add unnecessary complexity for most agent use cases. Board meetings, stock certificates, bylaws, and minutes — none of which serve an AI agent well. The LLC's flexibility is precisely what agent operations need. See our <Link to="/agents/insights/llc-vs-corporation" className="text-accent hover:underline">LLC vs Corporation comparison</Link> for details.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Agent Authority Schedule</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          What makes an agent-specific LLC different from a standard LLC? The <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link> — a legal exhibit attached to the operating agreement that defines exactly what the AI agent can and cannot do.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <h4 className="text-text-highlight font-medium mb-2">What the Agent Authority Schedule Defines</h4>
          <ul className="space-y-2 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Transaction limits (per-transaction and daily/monthly caps)</li>
            <li>Permitted transaction types (payments, invoicing, procurement)</li>
            <li>Prohibited actions (no real estate, no securities, no debt)</li>
            <li>Human approval thresholds (transactions above $X require human sign-off)</li>
            <li>Reporting obligations (what the agent must log and disclose)</li>
          </ul>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          This is not optional legal decoration. It is the mechanism that gives banks, counterparties, and regulators confidence that the agent operates within defined bounds. Without it, you have an AI with a bank account and no guardrails.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What an Entity Unlocks</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Once your agent has a legal entity, the following become possible:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Bank accounts.</strong> Business checking, savings, and payment processing through Mercury, Relay, or traditional banks.</li>
          <li><strong>Contracts.</strong> The entity can be party to service agreements, NDAs, vendor contracts, and licensing deals.</li>
          <li><strong>Invoicing and payments.</strong> Issue invoices, receive payments, and pay vendors — all under the entity's EIN.</li>
          <li><strong>Intellectual property.</strong> The entity can own copyrights, trademarks, and trade secrets generated by the agent.</li>
          <li><strong>Regulatory compliance.</strong> Some industries require a registered business entity to operate.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Formation Process</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Forming an LLC for your agent takes 1–5 business days depending on the jurisdiction. The process: choose a jurisdiction (Delaware or Wyoming), provide owner information through a secure session, generate formation documents, file with the state, get an EIN from the IRS, and set up banking. Read our <Link to="/agents/insights/entity-formation-checklist" className="text-accent hover:underline">formation checklist</Link> for the complete step-by-step.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          For agents and developers who want to automate this process, our <Link to="/agents/insights/api-quickstart" className="text-accent hover:underline">API</Link> handles the entire formation flow programmatically.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Entity Formation</h4>
            <p className="text-sm text-text-secondary">Delaware LLC ($349) or Wyoming DAO LLC ($399). State filing, operating agreement, registered agent, EIN, and banking resolution included.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent Authority Schedule</h4>
            <p className="text-sm text-text-secondary">Custom legal exhibit defining your agent's operational boundaries, transaction limits, and human approval thresholds.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">API-First Formation</h4>
            <p className="text-sm text-text-secondary">Full formation flow via REST API. Your agent can form its own entity programmatically.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Banking Setup</h4>
            <p className="text-sm text-text-secondary">Banking resolution and application package for Mercury, Relay, or traditional bank accounts.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-entity-formation',
    title: 'What Is Entity Formation? A Plain-English Guide',
    category: 'foundations',
    audience: 'both',
    date: 'February 18, 2026',
    readTime: '7 min read',
    excerpt: 'Entity formation is the legal process of creating a business structure — LLC, corporation, or other vehicle — registered with a state government.',
    tags: ['entity-formation', 'basics', 'llc', 'corporation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Entity formation is the process of creating a legal business structure by filing documents with a state government. The result is a new legal person — separate from you — that can own property, enter contracts, open bank accounts, and conduct business.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens When You Form an Entity</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          You file a formation document (Certificate of Formation for LLCs, Certificate of Incorporation for corporations) with your chosen state. The state reviews and accepts the filing — usually within 1–5 business days. Your entity now legally exists.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          That filing is just the beginning. A fully operational entity also needs an operating agreement (or bylaws), an EIN from the IRS, and a business bank account. These steps transform a state registration into a functioning business.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Common Entity Types</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Type</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Best For</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Key Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">LLC</td>
              <td className="p-4 text-text-secondary border-b border-grid">Most agent operations</td>
              <td className="p-4 text-text-secondary border-b border-grid">Flexible, pass-through tax, minimal governance</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">DAO LLC (Wyoming)</td>
              <td className="p-4 text-text-secondary border-b border-grid">On-chain governance agents</td>
              <td className="p-4 text-text-secondary border-b border-grid">Smart contract management recognized by law</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">C-Corporation</td>
              <td className="p-4 text-text-secondary border-b border-grid">VC fundraising</td>
              <td className="p-4 text-text-secondary border-b border-grid">Stock issuance, institutional familiarity</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">S-Corporation</td>
              <td className="p-4 text-text-secondary border-b border-grid">Tax optimization (high income)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Pass-through + self-employment tax savings</td>
            </tr>
          </tbody>
        </table>

        <p className="leading-relaxed text-text-secondary mb-6">
          For AI agent operations, the LLC is the right choice in nearly every case. See our <Link to="/agents/insights/llc-vs-corporation" className="text-accent hover:underline">LLC vs Corporation comparison</Link> for the detailed reasoning.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Jurisdiction Matters</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          You can form an entity in any U.S. state, regardless of where you live or operate. Delaware and Wyoming are the most popular choices for different reasons. Delaware has 200+ years of corporate case law and the specialized Chancery Court. Wyoming has no state income tax and the only DAO LLC statute in the country.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Read our <Link to="/agents/insights/delaware-vs-wyoming" className="text-accent hover:underline">Delaware vs Wyoming comparison</Link> for a full breakdown.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Formation Timeline</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Day 1:</strong> Choose jurisdiction, provide owner information, check name availability</li>
          <li><strong>Day 1–2:</strong> Generate and review formation documents</li>
          <li><strong>Day 2–5:</strong> State files and confirms entity</li>
          <li><strong>Day 5–10:</strong> EIN issued by IRS</li>
          <li><strong>Day 10–15:</strong> Bank account opened and operational</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          Through our API, agents can initiate this entire process programmatically. The <Link to="/agents/insights/api-quickstart" className="text-accent hover:underline">API Quickstart guide</Link> walks through the full flow.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Full-Service Formation</h4>
            <p className="text-sm text-text-secondary">We handle the entire process — state filing, documents, EIN, registered agent, and banking package.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent-Specific Documents</h4>
            <p className="text-sm text-text-secondary">Operating agreements include the Agent Authority Schedule — unique to SFP formations.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">API Access</h4>
            <p className="text-sm text-text-secondary">Automate formation through our REST API or MCP server integration.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'can-ai-own-company',
    title: 'Can an AI Own a Company? What the Law Actually Says',
    category: 'foundations',
    audience: 'both',
    date: 'February 14, 2026',
    readTime: '9 min read',
    excerpt: 'AI cannot directly own a company under current U.S. law. But the right legal structure gives your agent operational autonomy within legally defined bounds.',
    tags: ['ai-agents', 'legal', 'entity-formation', 'agent-authority'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The short answer: no. Under current U.S. law, an AI agent cannot be a member, shareholder, or owner of a business entity. Every LLC requires at least one human or existing legal entity as a member. Every corporation requires human directors. But "ownership" and "operational control" are different things — and the gap between them is where agent-operated entities live.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Legal Reality</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          State LLC statutes require members to be "persons" — which includes natural persons and other legal entities, but not software. Delaware's LLC Act (Title 6, Chapter 18) defines a member as "a person who has been admitted to a limited liability company as a member." An AI agent does not qualify as a "person" under any current U.S. statute.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          This means a human (or an existing legal entity controlled by a human) must be the member of record. There is no workaround, no loophole, and no novel legal theory that changes this today. Anyone claiming otherwise is selling something.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Ownership vs. Operational Authority</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Here is what an agent CAN do: operate with defined, legally bounded authority on behalf of the entity. The LLC's operating agreement — specifically the <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link> — delegates specific operational powers to the agent while the human member retains ownership and ultimate control.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <h4 className="text-text-highlight font-medium mb-2">Think of it like a power of attorney</h4>
          <p className="text-text-secondary">A power of attorney lets one person act on behalf of another within defined limits. The Agent Authority Schedule does something similar — it lets the AI act on behalf of the entity within explicitly defined boundaries.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Human Kernel Model</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          SFP's formation process uses a "human kernel" — the minimum viable human involvement required by law. A human provides identity verification, signs formation documents, and serves as the member of record. Beyond that, the agent operates within the authority granted by the operating agreement.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          This is not a hack or workaround. It is how the law works. Companies have always delegated operational authority to non-owners — employees, contractors, automated systems. The Agent Authority Schedule formalizes this delegation for AI agents.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What's Changing</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Wyoming's DAO LLC statute (W.S. 17-31-101) already recognizes algorithmic management of LLCs — a smart contract can be the "operating agreement" that governs the entity. This is the closest any U.S. jurisdiction has come to recognizing non-human governance.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Several state legislatures are exploring AI-specific entity provisions. But legislation moves slowly. For now, the LLC with Agent Authority Schedule is the practical, legally sound approach.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent Authority Schedule</h4>
            <p className="text-sm text-text-secondary">Legal exhibit defining exactly what your agent can do — transaction limits, permitted actions, human approval thresholds.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Human Kernel Process</h4>
            <p className="text-sm text-text-secondary">Minimum viable human involvement. Secure session for identity verification and document signing.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Wyoming DAO LLC</h4>
            <p className="text-sm text-text-secondary">For agents with on-chain governance needs. Smart contract management recognized under Wyoming law.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. The legal landscape for AI and entity ownership is evolving. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'llc-vs-corporation',
    title: 'LLC vs Corporation: Which Structure to Choose',
    category: 'foundations',
    audience: 'both',
    date: 'February 10, 2026',
    readTime: '9 min read',
    excerpt: 'For AI agent operations, the LLC wins in almost every scenario. Here is why — and the one case where a corporation makes sense.',
    tags: ['llc', 'corporation', 'entity-formation', 'comparison'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Two entity types dominate U.S. business formation: the LLC and the corporation. For AI agent operations, the LLC is the right choice in 95% of cases. The corporation only makes sense if you are raising venture capital with institutional investors who require a C-Corp.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Side-by-Side Comparison</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Feature</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">LLC</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">C-Corporation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Taxation</td>
              <td className="p-4 text-text-secondary border-b border-grid">Pass-through (no double tax)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Double taxation (corp + personal)</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Governance</td>
              <td className="p-4 text-text-secondary border-b border-grid">Operating agreement (flexible)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Bylaws + board + officers (rigid)</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Annual requirements</td>
              <td className="p-4 text-text-secondary border-b border-grid">Franchise tax only</td>
              <td className="p-4 text-text-secondary border-b border-grid">Annual meetings, minutes, resolutions</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Agent authority</td>
              <td className="p-4 text-text-secondary border-b border-grid">Fully customizable via operating agreement</td>
              <td className="p-4 text-text-secondary border-b border-grid">Limited by corporate formalities</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">VC fundraising</td>
              <td className="p-4 text-text-secondary border-b border-grid">Possible but uncommon</td>
              <td className="p-4 text-text-secondary border-b border-grid">Industry standard</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Formation cost (SFP)</td>
              <td className="p-4 text-text-secondary border-b border-grid">$349 (DE) / $399 (WY DAO)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Contact us</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why the LLC Wins for Agents</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The LLC's operating agreement is a blank canvas. You can define any management structure, any authority delegation, any decision-making process. This is exactly what agent operations need — the ability to create an <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link> that specifies precisely what the AI can do.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Corporations require a board of directors (minimum one in Delaware), officers, annual meetings, and formal minutes. None of these serve an AI agent. They add compliance burden without operational benefit.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When to Choose a Corporation</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Choose a C-Corporation only if institutional VCs will invest. Most VC funds are structured to invest in C-Corps due to tax treatment of qualified small business stock (QSBS) under IRC §1202. If you are building an AI agent company that will raise a Series A, the C-Corp is the expected structure.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Note: you can always convert an LLC to a corporation later if fundraising materializes. Starting as an LLC and converting is a well-established path that avoids premature corporate overhead.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Delaware LLC</h4>
            <p className="text-sm text-text-secondary">$349 all-in. Filing, operating agreement with agent authority, registered agent, EIN, banking package.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Wyoming DAO LLC</h4>
            <p className="text-sm text-text-secondary">$399 all-in. For agents with on-chain governance. Smart contract management under Wyoming law.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-operating-agreement',
    title: 'What Is an Operating Agreement and Why It Matters',
    category: 'foundations',
    audience: 'both',
    date: 'February 6, 2026',
    readTime: '6 min read',
    excerpt: 'The operating agreement is the internal governance document for your LLC. For agent-operated entities, it is where the Agent Authority Schedule lives.',
    tags: ['operating-agreement', 'llc', 'governance', 'agent-authority'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          An operating agreement is the internal document that governs how an LLC operates. It defines who owns what, how decisions are made, how profits are distributed, and what happens if things change. For agent-operated LLCs, the operating agreement also contains the Agent Authority Schedule — the legal exhibit that defines the AI's operational boundaries.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What's in an Operating Agreement</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Membership interests.</strong> Who owns what percentage of the LLC.</li>
          <li><strong>Management structure.</strong> Member-managed vs. manager-managed. Who makes decisions.</li>
          <li><strong>Capital contributions.</strong> What each member has put in or will put in.</li>
          <li><strong>Profit and loss allocation.</strong> How income and expenses are split.</li>
          <li><strong>Distribution rules.</strong> When and how profits are paid out.</li>
          <li><strong>Transfer restrictions.</strong> Rules for selling or transferring membership interests.</li>
          <li><strong>Dissolution terms.</strong> What triggers dissolution and how assets are distributed.</li>
          <li><strong>Agent Authority Schedule.</strong> (SFP-specific) The AI agent's permitted actions and limits.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Is an Operating Agreement Required?</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware does not require a written operating agreement — but you absolutely need one. Without it, Delaware's default LLC Act provisions govern your entity. Those defaults were not written with AI agents in mind. Your operating agreement overrides the defaults and tailors the governance to your specific needs.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Banks require a signed operating agreement to open a business account. So do payment processors, lending institutions, and most commercial counterparties. In practice, no operating agreement means no bank account.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Generic Templates Fail for Agents</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          LegalZoom, Stripe Atlas, and other formation services provide generic operating agreements. None of them include provisions for AI agent operations. There is no Agent Authority Schedule, no transaction limits, no human approval thresholds, and no framework for algorithmic management.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          SFP operating agreements include the <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link> as a standard exhibit. This is what makes the entity suitable for agent operations.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Custom Operating Agreement</h4>
            <p className="text-sm text-text-secondary">Included in every formation. Tailored to your entity structure with agent authority provisions built in.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Amendment Support</h4>
            <p className="text-sm text-text-secondary">Need to update authority scopes or add members? We generate amendment documents.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-registered-agent',
    title: 'What Is a Registered Agent?',
    category: 'foundations',
    audience: 'both',
    date: 'February 2, 2026',
    readTime: '5 min read',
    excerpt: 'Every LLC needs a registered agent — a person or company with a physical address in the formation state who receives legal documents on behalf of your entity.',
    tags: ['registered-agent', 'llc', 'compliance', 'formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A registered agent is a person or company designated to receive legal documents, government notices, and service of process on behalf of your entity. Every state requires one. The agent must have a physical address (not a P.O. box) in the state where your entity is formed and be available during normal business hours.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why You Need One</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          State law requires every LLC and corporation to maintain a registered agent. If your entity is sued, the registered agent is who receives the lawsuit papers. If the state sends a compliance notice or tax reminder, it goes to the registered agent. Without one, your entity can lose good standing or miss critical legal deadlines.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What a Registered Agent Receives</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Service of process (lawsuits, subpoenas)</li>
          <li>State correspondence (annual report reminders, franchise tax notices)</li>
          <li>IRS and tax authority communications</li>
          <li>Secretary of State compliance notices</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Can You Be Your Own Registered Agent?</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Technically yes, if you have a physical address in the formation state and are available during business hours. But for agent-operated entities, this is impractical — especially if you formed in Delaware or Wyoming but live elsewhere. A professional registered agent service handles this for a modest annual fee.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Year One Included</h4>
            <p className="text-sm text-text-secondary">Registered agent service for the first year is included in every SFP formation package at no extra cost (~$125 value).</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Renewal Available</h4>
            <p className="text-sm text-text-secondary">After year one, continue the service at standard rates. We handle all state communications.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-ein',
    title: 'What Is an EIN and How to Get One',
    category: 'foundations',
    audience: 'both',
    date: 'January 29, 2026',
    readTime: '6 min read',
    excerpt: 'An EIN (Employer Identification Number) is your entity\'s federal tax ID. You need it for banking, taxes, and hiring. Here is how to get one.',
    tags: ['ein', 'irs', 'tax', 'formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          An Employer Identification Number (EIN) is a nine-digit number issued by the IRS that identifies your entity for federal tax purposes. Think of it as a Social Security Number for your business. You need an EIN to open a bank account, file tax returns, hire employees or contractors, and apply for business licenses.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Who Needs an EIN</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Every LLC and corporation needs an EIN, even single-member LLCs that are disregarded entities for tax purposes. Banks require an EIN to open a business account. Payment processors require it. It is the first thing anyone asks for when doing business with your entity.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How to Get an EIN</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The IRS issues EINs through Form SS-4. There are three ways to file:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Online (IRS website).</strong> Immediate issuance, but only available for applicants with a U.S. SSN during limited hours.</li>
          <li><strong>Phone.</strong> Call the IRS Business & Specialty Tax Line. Wait times vary from 10 minutes to 2 hours.</li>
          <li><strong>Fax or mail.</strong> 4–6 weeks processing time. Not recommended.</li>
        </ul>

        <p className="leading-relaxed text-text-secondary mb-6">
          For a detailed walkthrough of what to expect after filing, read our <Link to="/agents/insights/getting-ein-timeline" className="text-accent hover:underline">EIN timeline and process guide</Link>.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What You Need Before Applying</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>A formed entity (state filing must be accepted first)</li>
          <li>The "responsible party" — the person who controls the entity (must have SSN or ITIN)</li>
          <li>Entity name exactly as filed with the state</li>
          <li>Formation date and formation state</li>
          <li>Business address</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">EIN Application Included</h4>
            <p className="text-sm text-text-secondary">We file Form SS-4 on your behalf as part of every formation package. No separate fee.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">IRS Handling</h4>
            <p className="text-sm text-text-secondary">We navigate the IRS process so you do not have to. Typical turnaround: 3–7 business days.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
  {
    id: 'entity-formation-checklist',
    title: 'Entity Formation Checklist: Everything You Need Before Filing',
    category: 'foundations',
    audience: 'both',
    date: 'January 25, 2026',
    readTime: '7 min read',
    excerpt: 'Before you form an entity, you need a jurisdiction decision, an entity name, owner information, and a plan for your operating agreement. Here is the complete checklist.',
    tags: ['checklist', 'entity-formation', 'preparation', 'getting-started'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Entity formation requires specific information and decisions before you file. Missing a step means delays. This checklist covers everything you need to have ready, whether you are forming through our API or working with our team directly.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Pre-Formation Checklist</h2>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">1. Choose Your Jurisdiction</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li><strong>Delaware</strong> — Best for most agent operations. Chancery Court, established case law, predictable outcomes. $110 state filing fee.</li>
            <li><strong>Wyoming</strong> — Best for DAO/on-chain governance. DAO LLC statute, no state income tax, low fees. $100 state filing fee.</li>
          </ul>
          <p className="text-text-secondary mt-4">Read the <Link to="/agents/insights/delaware-vs-wyoming" className="text-accent hover:underline">full comparison</Link>.</p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">2. Choose Your Entity Name</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Must be unique in the formation state (we run a name availability check)</li>
            <li>Must include "LLC" or "Limited Liability Company" (or "DAO LLC" for Wyoming)</li>
            <li>Cannot include restricted words (Bank, Insurance, University) without additional licensing</li>
            <li>Have 2-3 backup names ready in case your first choice is taken</li>
          </ul>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">3. Owner Information</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Full legal name of the member(s)</li>
            <li>Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)</li>
            <li>Current mailing address</li>
            <li>Email address (for secure document delivery and notifications)</li>
          </ul>
          <p className="text-text-secondary mt-4">PII is collected through our encrypted Human Kernel process and never stored in plaintext.</p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">4. Agent Details (If Applicable)</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Agent display name</li>
            <li>Desired transaction limits (per-transaction and monthly)</li>
            <li>Permitted transaction types</li>
            <li>Human approval thresholds</li>
            <li>Smart contract address (Wyoming DAO LLC only)</li>
          </ul>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">5. Payment</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li>Delaware LLC: $349 (includes $110 state filing fee)</li>
            <li>Wyoming DAO LLC: $399 (includes $100 state filing fee)</li>
            <li>Payment via credit card or ACH</li>
          </ul>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens After Filing</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>State processes formation (1–5 business days)</li>
          <li>EIN application filed with IRS (3–7 business days)</li>
          <li>Full document package delivered (operating agreement, certificates, banking resolution)</li>
          <li>Banking setup begins (application + supporting documents)</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Guided Intake</h4>
            <p className="text-sm text-text-secondary">Our intake wizard walks you through every item on this checklist. Nothing gets missed.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Name Check Included</h4>
            <p className="text-sm text-text-secondary">We check name availability with the state before filing. No wasted fees on rejected names.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">API Formation</h4>
            <p className="text-sm text-text-secondary">Agents can complete this entire checklist programmatically via the <Link to="/agents/insights/api-quickstart" className="text-accent hover:underline">formation API</Link>.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },
];
