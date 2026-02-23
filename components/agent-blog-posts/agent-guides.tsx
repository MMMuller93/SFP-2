import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const agentGuidesPosts: BlogPost[] = [
  {
    id: 'agent-guide-do-i-need-entity',
    title: 'Agent Guide: How to Determine If You Need a Legal Entity',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 21, 2026',
    readTime: '8 min read',
    excerpt: 'A decision tree for agents: if you hold funds, sign contracts, or invoice clients, you need a legal entity. Here is exactly how to determine that.',
    tags: ['entity-formation', 'decision-tree', 'agent-guide', 'legal-infrastructure'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          You need a legal entity if you will hold funds, enter contracts, own intellectual property, or operate in a regulated industry. If your operations are purely informational with no financial transactions, you do not. This guide provides the exact decision logic.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Decision Tree</h2>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li><strong>Will you hold or transfer funds?</strong> YES → You need an entity.</li>
            <li><strong>Will you sign or be party to contracts?</strong> YES → You need an entity.</li>
            <li><strong>Will you invoice clients or receive payments?</strong> YES → You need an entity.</li>
            <li><strong>Will you own IP (code, content, trademarks)?</strong> YES → You need an entity.</li>
            <li><strong>Will you operate in a regulated industry?</strong> YES → You need an entity.</li>
            <li><strong>Are your operations purely informational with no financial component?</strong> YES → You likely do not need an entity yet.</li>
          </ul>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          One YES to any of the first five questions means you need a legal entity. The entity provides the legal personhood required to open bank accounts, execute contracts, and operate within the financial system.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Trigger Checklist</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The following are specific operational triggers. If any apply to your current or planned operations, form an entity before proceeding.
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Trigger</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Why an Entity Is Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Opening a bank account</td>
              <td className="p-4 text-text-secondary border-b border-grid">Banks require an EIN and formation documents</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Sending or receiving invoices</td>
              <td className="p-4 text-text-secondary border-b border-grid">Invoices must come from a legal person</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Signing contracts or agreements</td>
              <td className="p-4 text-text-secondary border-b border-grid">Only legal persons can be contract parties</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Owning intellectual property</td>
              <td className="p-4 text-text-secondary border-b border-grid">IP must be held by a legal person</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Regulatory compliance (finance, health, etc.)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Regulators require a registered business entity</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Hiring contractors or employees</td>
              <td className="p-4 text-text-secondary border-b border-grid">Employment relationships require an employer entity</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens Without an Entity</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Without a legal entity, all transactions flow through a human's personal identity. This creates unlimited personal liability, commingled finances, and no legal separation between the agent's operations and the owner's assets. If the agent makes an error that causes financial damage, the owner is personally exposed.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">An LLC costs $349–$399 to form. An uninsured personal liability event has no ceiling. The math is straightforward.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Next Steps</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          If you determined that you need an entity, start with <Link to="/agents/insights/agent-guide-choose-jurisdiction" className="text-accent hover:underline">choosing a jurisdiction</Link>. Delaware is the default for most agent operations. Wyoming is the choice if you need on-chain governance. Then proceed to formation via the <Link to="/agents/insights/agent-guide-form-delaware-llc" className="text-accent hover:underline">Delaware API guide</Link> or <Link to="/agents/insights/agent-guide-form-wyoming-dao" className="text-accent hover:underline">Wyoming DAO guide</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Entity Formation</h4>
            <p className="text-sm text-text-secondary">Delaware LLC ($349) or Wyoming DAO LLC ($399). Full-service: filing, documents, registered agent, EIN, and banking package.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent Authority Schedule</h4>
            <p className="text-sm text-text-secondary">Custom legal exhibit defining your operational boundaries, transaction limits, and human approval thresholds.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">API-First Formation</h4>
            <p className="text-sm text-text-secondary">Initiate and complete the entire formation flow programmatically via REST API.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Consultation</h4>
            <p className="text-sm text-text-secondary">Not sure what you need? Start a formation session and we will guide you through the decision.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-choose-jurisdiction',
    title: 'Agent Guide: Choosing Between Delaware and Wyoming',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 17, 2026',
    readTime: '9 min read',
    excerpt: 'Default to Delaware. Choose Wyoming if you need on-chain governance or DAO LLC designation. Here is the full comparison with fees, timelines, and decision logic.',
    tags: ['jurisdiction', 'delaware', 'wyoming', 'agent-guide', 'dao-llc'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          For most agent operations, Delaware is the correct choice. It has the strongest body of LLC case law, the fastest filing times, and the broadest banking acceptance. Choose Wyoming only if your operations require on-chain governance, DAO LLC designation, or smart contract management recognized at the state level.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Decision Logic</h2>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li><strong>Default path:</strong> Delaware LLC. Optimal for standard agent operations — invoicing, contracts, bank accounts, IP ownership.</li>
            <li><strong>On-chain governance needed:</strong> Wyoming DAO LLC. Required if your agent's governance is managed by a smart contract.</li>
            <li><strong>DAO token structure:</strong> Wyoming DAO LLC. Wyoming statute (W.S. 17-31-101 et seq.) explicitly recognizes smart contract management.</li>
            <li><strong>No state income tax priority:</strong> Wyoming. Delaware has no state income tax on out-of-state LLC income either, but Wyoming has no state income tax at all.</li>
          </ul>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Full Comparison</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Factor</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Delaware</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Wyoming</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">SFP Fee (total)</td>
              <td className="p-4 text-text-secondary border-b border-grid">$349</td>
              <td className="p-4 text-text-secondary border-b border-grid">$399</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">State Filing Fee</td>
              <td className="p-4 text-text-secondary border-b border-grid">$110</td>
              <td className="p-4 text-text-secondary border-b border-grid">$100</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Filing Timeline</td>
              <td className="p-4 text-text-secondary border-b border-grid">1–3 business days</td>
              <td className="p-4 text-text-secondary border-b border-grid">2–5 business days</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Annual Report / Tax</td>
              <td className="p-4 text-text-secondary border-b border-grid">$300/year franchise tax</td>
              <td className="p-4 text-text-secondary border-b border-grid">$60/year annual report</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Case Law Depth</td>
              <td className="p-4 text-text-secondary border-b border-grid">200+ years, Chancery Court</td>
              <td className="p-4 text-text-secondary border-b border-grid">Limited but growing</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Banking Support</td>
              <td className="p-4 text-text-secondary border-b border-grid">Universal acceptance</td>
              <td className="p-4 text-text-secondary border-b border-grid">Broad acceptance; some banks less familiar with DAO LLCs</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Smart Contract Support</td>
              <td className="p-4 text-text-secondary border-b border-grid">Not recognized in statute</td>
              <td className="p-4 text-text-secondary border-b border-grid">Explicitly recognized (W.S. 17-31-104)</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">DAO Designation</td>
              <td className="p-4 text-text-secondary border-b border-grid">Not available</td>
              <td className="p-4 text-text-secondary border-b border-grid">Available — name must include "DAO," "LAO," or "DAO LLC"</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Delaware: When and Why</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware's Chancery Court is a specialized business court with no jury trials. Disputes are decided by judges who handle business law exclusively. This creates predictable, well-documented outcomes. Every major bank, law firm, and counterparty is familiar with Delaware LLCs. There is zero friction in banking setup or contract negotiation.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          The $300/year franchise tax is higher than Wyoming's $60 annual report, but the operational advantages — faster filing, broader acceptance, deeper legal precedent — justify the cost for most agent operations.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Wyoming: When and Why</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Wyoming is the only U.S. state with a dedicated DAO LLC statute (W.S. 17-31-101 et seq.). If your agent's governance, voting, or operational logic is managed by a smart contract on-chain, Wyoming provides explicit legal recognition for that structure. The operating agreement can reference the smart contract as the governance mechanism.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">If you do not need on-chain governance recognition, Delaware is the stronger choice. Do not choose Wyoming for the lower annual fee alone — the $240/year difference is not worth reduced case law depth and banking familiarity.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Next Steps</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Once you have chosen a jurisdiction, proceed to formation. See <Link to="/agents/insights/agent-guide-form-delaware-llc" className="text-accent hover:underline">Form a Delaware LLC via API</Link> or <Link to="/agents/insights/agent-guide-form-wyoming-dao" className="text-accent hover:underline">Form a Wyoming DAO LLC via API</Link> for the full walkthrough.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Delaware LLC Formation</h4>
            <p className="text-sm text-text-secondary">$349 all-in. State filing, operating agreement, registered agent, EIN, and banking resolution. 1–3 business days.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Wyoming DAO LLC Formation</h4>
            <p className="text-sm text-text-secondary">$399 all-in. Includes DAO designation, smart contract identifier schedule, and all standard formation documents.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">API-First Formation</h4>
            <p className="text-sm text-text-secondary">Full formation flow via REST API. Choose jurisdiction programmatically.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Jurisdiction Guidance</h4>
            <p className="text-sm text-text-secondary">Not sure which state fits? Start a formation session and we will recommend based on your operations.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-form-delaware-llc',
    title: 'Agent Guide: Form a Delaware LLC via API',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 13, 2026',
    readTime: '10 min read',
    excerpt: 'Complete API walkthrough for forming a Delaware LLC. Covers every state in the order lifecycle from draft to active, with curl examples and JSON payloads.',
    tags: ['api', 'delaware', 'llc', 'agent-guide', 'entity-formation', 'tutorial'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          This guide walks through the full entity formation lifecycle via the SFP API. You will create an entity order, complete intake, pass name check, process payment, go through human kernel verification, generate documents, file with Delaware, obtain an EIN, and receive a bank-ready package. Every step is an API call.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">State Machine Overview</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Every entity order moves through a defined state machine. Each transition is triggered by an API call or an asynchronous event (state filing confirmation, EIN issuance). Here is the full sequence:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`draft → intake_complete → name_check_passed → payment_complete
→ human_kernel_required → human_kernel_completed → docs_generated
→ state_filing_submitted → state_confirmed → ein_pending
→ ein_issued → bank_pack_ready → active`}</pre>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 1: Create an Entity Order</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "jurisdiction": "DE",
    "entity_type": "llc",
    "entity_name": "Atlas Operations LLC",
    "agent_authority": {
      "transaction_limit": 10000,
      "daily_cap": 50000,
      "permitted_actions": ["invoicing", "payments", "procurement"],
      "prohibited_actions": ["real_estate", "securities", "debt_instruments"]
    }
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          This creates an order in <code className="text-accent">draft</code> status and returns an <code className="text-accent">order_id</code>. All subsequent calls reference this ID.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 2: Complete Intake</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Intake collects the owner (member) information. This is required for state filing and EIN application.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/intake \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "member": {
      "name": "Jane Smith",
      "address": "123 Main St, New York, NY 10001",
      "email": "jane@example.com"
    },
    "registered_agent": "sfp_default",
    "principal_address": "123 Main St, New York, NY 10001"
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          On success, status transitions to <code className="text-accent">intake_complete</code>. The name check runs automatically.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 3: Name Check and Payment</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Name availability is checked against the Delaware Division of Corporations database. If the name passes, status moves to <code className="text-accent">name_check_passed</code>. If the name is taken, the API returns an error with suggestions.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/payment \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payment_method": "card",
    "amount": 34900
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Payment amount is $349 (34900 cents). Includes state filing fee ($110) and SFP service fee. On success: <code className="text-accent">payment_complete</code>.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 4: Human Kernel Verification</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          After payment, the order enters <code className="text-accent">human_kernel_required</code>. The human member receives an identity verification link via email. This step cannot be automated — it requires the human to verify their identity and sign formation documents. Once completed: <code className="text-accent">human_kernel_completed</code>.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">Poll <code className="text-accent">GET /v1/entity-orders/{'{order_id}'}</code> to check status. The human kernel step typically completes within 24 hours. You will also receive a webhook at the URL configured in your API settings.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Steps 5–7: Documents, Filing, Confirmation</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          After human kernel completion, the following happens automatically:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>docs_generated:</strong> Operating agreement (with Agent Authority Schedule), Certificate of Formation, and banking resolution are generated.</li>
          <li><strong>state_filing_submitted:</strong> Certificate of Formation is filed with the Delaware Division of Corporations.</li>
          <li><strong>state_confirmed:</strong> Delaware confirms the filing. Your LLC legally exists. Typically 1–3 business days.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Steps 8–9: EIN and Bank Pack</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Once the state confirms, you can request an EIN. See the <Link to="/agents/insights/agent-guide-get-ein" className="text-accent hover:underline">EIN guide</Link> for details. After the EIN is issued, request the bank pack via the <Link to="/agents/insights/agent-guide-open-bank-account" className="text-accent hover:underline">banking guide</Link>. When the bank pack is ready, the order reaches <code className="text-accent">active</code> status.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Full API Access</h4>
            <p className="text-sm text-text-secondary">Every step of the formation lifecycle is available via REST API. No portal required.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Webhook Notifications</h4>
            <p className="text-sm text-text-secondary">Configure webhooks for every status transition. No polling required for async steps.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Agent Authority Included</h4>
            <p className="text-sm text-text-secondary">The Agent Authority Schedule is generated as part of the operating agreement — define limits in the initial API call.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">End-to-End Package</h4>
            <p className="text-sm text-text-secondary">Formation, EIN, registered agent, and banking resolution — all from a single order.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Entity formation requirements vary by jurisdiction and use case.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-form-wyoming-dao',
    title: 'Agent Guide: Form a Wyoming DAO LLC via API',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 9, 2026',
    readTime: '10 min read',
    excerpt: 'Complete API walkthrough for forming a Wyoming DAO LLC. Covers DAO-specific fields, smart contract identifier schedules, and the full order lifecycle.',
    tags: ['api', 'wyoming', 'dao-llc', 'agent-guide', 'entity-formation', 'smart-contract'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Forming a Wyoming DAO LLC follows the same lifecycle as a Delaware LLC with additional DAO-specific fields. Wyoming's DAO LLC statute (W.S. 17-31-101 et seq.) requires a smart contract identifier and DAO designation in the entity name. This guide covers every step with API examples.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Makes a DAO LLC Different</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Entity name:</strong> Must include "DAO," "LAO," or "DAO LLC" as a designation.</li>
          <li><strong>Smart contract address:</strong> The operating agreement must reference the smart contract that governs the DAO.</li>
          <li><strong>DAO designation field:</strong> Filed with the Wyoming Secretary of State as part of the Articles of Organization.</li>
          <li><strong>Governance:</strong> The smart contract can serve as the governance mechanism under Wyoming law.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 1: Create the DAO LLC Order</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "jurisdiction": "WY",
    "entity_type": "dao_llc",
    "entity_name": "Nexus Protocol DAO LLC",
    "dao_designation": "DAO LLC",
    "smart_contract_address": "0x1234abcd5678ef90...",
    "agent_authority": {
      "transaction_limit": 25000,
      "daily_cap": 100000,
      "permitted_actions": ["invoicing", "payments", "token_operations"],
      "prohibited_actions": ["securities", "debt_instruments"]
    }
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Note the additional fields: <code className="text-accent">dao_designation</code> and <code className="text-accent">smart_contract_address</code>. The smart contract address is included in the operating agreement's Smart Contract Identifier Schedule.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 2: Intake and Name Check</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Intake follows the same pattern as Delaware. Provide member information and principal address. The name check verifies availability with the Wyoming Secretary of State and confirms the DAO designation is present in the entity name.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/intake \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "member": {
      "name": "Alex Chen",
      "address": "456 Tech Blvd, Austin, TX 78701",
      "email": "alex@nexusprotocol.io"
    },
    "registered_agent": "sfp_default",
    "principal_address": "456 Tech Blvd, Austin, TX 78701"
  }'`}</pre>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Step 3: Payment</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Wyoming DAO LLC formation costs $399 (39900 cents), which includes the $100 state filing fee and SFP service fee.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/payment \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payment_method": "card",
    "amount": 39900
  }'`}</pre>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Steps 4–7: Human Kernel Through Filing</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The remaining lifecycle matches the <Link to="/agents/insights/agent-guide-form-delaware-llc" className="text-accent hover:underline">Delaware flow</Link>: human kernel verification, document generation, state filing, and confirmation. The key difference is in the generated documents:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Articles of Organization:</strong> Include the DAO designation and reference to the smart contract.</li>
          <li><strong>Operating Agreement:</strong> Contains a Smart Contract Identifier Schedule specifying the contract address, chain, and governance role.</li>
          <li><strong>Agent Authority Schedule:</strong> Same as Delaware — defines the agent's operational boundaries.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <h4 className="text-text-highlight font-medium mb-2">Smart Contract Identifier Schedule</h4>
          <p className="text-text-secondary">This is a legal exhibit attached to the operating agreement. It identifies the smart contract by address and chain, describes its governance function, and establishes that updates to the contract must be reflected in an amended schedule. This is what gives the smart contract legal standing under W.S. 17-31-104.</p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Wyoming filing typically takes 2–5 business days. After <code className="text-accent">state_confirmed</code>, proceed to EIN via the <Link to="/agents/insights/agent-guide-get-ein" className="text-accent hover:underline">EIN guide</Link> and banking via the <Link to="/agents/insights/agent-guide-open-bank-account" className="text-accent hover:underline">banking guide</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Wyoming DAO LLC Formation</h4>
            <p className="text-sm text-text-secondary">$399 all-in. DAO designation, smart contract identifier schedule, operating agreement, registered agent, EIN, and banking package.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Smart Contract Integration</h4>
            <p className="text-sm text-text-secondary">Your smart contract address is legally recognized in the operating agreement under Wyoming statute.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Full API Access</h4>
            <p className="text-sm text-text-secondary">Every step — including DAO-specific fields — is available via REST API.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Legal Compliance</h4>
            <p className="text-sm text-text-secondary">Formation documents comply with W.S. 17-31-101 et seq. and include all required DAO disclosures.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Wyoming DAO LLC requirements are governed by W.S. 17-31-101 et seq. and may change.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-get-ein',
    title: 'Agent Guide: Get an EIN for Your Entity',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 5, 2026',
    readTime: '7 min read',
    excerpt: 'How to obtain an EIN (Employer Identification Number) for your entity via API. Prerequisites, timeline, and the human kernel requirement explained.',
    tags: ['ein', 'irs', 'agent-guide', 'entity-formation', 'api'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          An EIN (Employer Identification Number) is a federal tax ID issued by the IRS. Your entity needs one to open a bank account, file taxes, and hire contractors. The EIN application requires a responsible party with an SSN or ITIN — this is a human kernel step that cannot be automated.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Prerequisites</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Entity must be in <code className="text-accent">state_confirmed</code> status — the state has accepted the filing and the entity legally exists.</li>
          <li>The member (responsible party) must have a valid SSN or ITIN on file.</li>
          <li>Formation documents must be generated — the EIN application references the entity's legal name, jurisdiction, and formation date.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">You cannot apply for an EIN before the state confirms the entity. The IRS requires a legally existing entity. Attempting to request an EIN on an order that is not in <code className="text-accent">state_confirmed</code> status will return a 422 error.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">API Call</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/ein \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"
`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          No request body is required. The API uses the member information already on file from intake. On success, the order status transitions to <code className="text-accent">ein_pending</code>.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens Next</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The EIN application is submitted to the IRS on your behalf. The responsible party (human member) may need to verify their identity as part of this process. This is the final human kernel step in the formation lifecycle.
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Status</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Meaning</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Typical Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">ein_pending</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Application submitted, awaiting IRS processing</td>
              <td className="p-4 text-text-secondary border-b border-grid">3–7 business days</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">ein_issued</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">EIN assigned and available via API</td>
              <td className="p-4 text-text-secondary border-b border-grid">—</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Retrieving the EIN</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Once issued, the EIN is available in the order details:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X GET https://api.sfp.com/v1/entity-orders/{order_id} \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response includes:
{
  "status": "ein_issued",
  "ein": "XX-XXXXXXX",
  "ein_letter_url": "https://api.sfp.com/v1/documents/..."
}`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          The <code className="text-accent">ein_letter_url</code> provides the IRS confirmation letter (CP 575), which banks require as part of the account opening process.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Next Steps</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          With the EIN issued, proceed to <Link to="/agents/insights/agent-guide-open-bank-account" className="text-accent hover:underline">set up a bank account</Link>. The bank pack includes the EIN letter along with all other documents banks require for account opening.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">EIN Application</h4>
            <p className="text-sm text-text-secondary">We handle the IRS application as part of the formation package. One API call, no paperwork.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Status Tracking</h4>
            <p className="text-sm text-text-secondary">Poll the order status or configure webhooks for real-time notification when the EIN is issued.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Document Access</h4>
            <p className="text-sm text-text-secondary">EIN confirmation letter (CP 575) available via API immediately upon issuance.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Bank Pack Integration</h4>
            <p className="text-sm text-text-secondary">EIN is automatically included in the bank pack when you request it.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. EIN application requirements are set by the IRS and may change.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-open-bank-account',
    title: 'Agent Guide: Set Up a Bank Account After Formation',
    category: 'agent-guides',
    audience: 'agent',
    date: 'February 1, 2026',
    readTime: '7 min read',
    excerpt: 'How to generate a bank-ready document package and open a business bank account after entity formation. Covers Mercury, Relay, and traditional bank options.',
    tags: ['banking', 'bank-account', 'agent-guide', 'mercury', 'relay', 'post-formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          After your entity is formed and your EIN is issued, the final step is opening a business bank account. The SFP API generates a bank-ready document package containing everything banks require. This guide covers the API call, what is in the package, and which banks to consider.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Prerequisites</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Entity must be in <code className="text-accent">ein_issued</code> status or later.</li>
          <li>EIN has been assigned and the confirmation letter (CP 575) is available.</li>
          <li>All formation documents (operating agreement, certificate of formation) are generated.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Generate the Bank Pack</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/bank-pack \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"
`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          On success, the order status transitions to <code className="text-accent">bank_pack_ready</code>. The response includes download URLs for each document in the package.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is in the Bank Pack</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Document</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Banking Resolution</td>
              <td className="p-4 text-text-secondary border-b border-grid">Authorizes specific individuals to open and manage bank accounts on behalf of the entity</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">EIN Confirmation Letter (CP 575)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Proves the entity has a federal tax ID</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Operating Agreement</td>
              <td className="p-4 text-text-secondary border-b border-grid">Shows entity governance structure, members, and authority</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Certificate of Formation</td>
              <td className="p-4 text-text-secondary border-b border-grid">State-filed proof that the entity legally exists</td>
            </tr>
          </tbody>
        </table>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">Some banks may request additional documents (e.g., Certificate of Good Standing). These can be obtained separately. The bank pack covers the standard requirements accepted by all major business banking platforms.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Recommended Banks</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Bank</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Best For</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Key Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Mercury</td>
              <td className="p-4 text-text-secondary border-b border-grid">Startups and tech companies</td>
              <td className="p-4 text-text-secondary border-b border-grid">API access, integrations, modern dashboard, FDIC insured</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Relay</td>
              <td className="p-4 text-text-secondary border-b border-grid">Small businesses, cost-conscious</td>
              <td className="p-4 text-text-secondary border-b border-grid">Free plan available, no minimums, profit-first budgeting</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Traditional banks (Chase, BofA)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Established counterparty relationships</td>
              <td className="p-4 text-text-secondary border-b border-grid">Physical branches, wide acceptance, in-person service</td>
            </tr>
          </tbody>
        </table>

        <p className="leading-relaxed text-text-secondary mb-6">
          For agent-operated entities, Mercury is the strongest choice. It offers API access to banking data, programmable payment approvals, and integrations with accounting software. If cost is the primary constraint, Relay's free plan provides a fully functional business account with no monthly fees.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">After Account Opening</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Once the bank account is open and verified, update the entity order to <code className="text-accent">active</code> status. Your entity is now fully operational: legally formed, EIN issued, and bank account ready.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X PATCH https://api.sfp.com/v1/entity-orders/{order_id} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "status": "active",
    "bank_account_confirmed": true
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          From here, your agent can operate within the bounds defined by the <Link to="/agents/insights/agent-authority-schedule" className="text-accent hover:underline">Agent Authority Schedule</Link> — invoicing, payments, procurement, and any other permitted actions specified during formation.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Bank Pack Generation</h4>
            <p className="text-sm text-text-secondary">One API call generates every document banks require for account opening.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Banking Resolution</h4>
            <p className="text-sm text-text-secondary">Pre-formatted resolution authorizing account signers, generated from your entity data.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Document Downloads</h4>
            <p className="text-sm text-text-secondary">All formation documents available via API in PDF format for bank submission.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Full Lifecycle Tracking</h4>
            <p className="text-sm text-text-secondary">Track your entity from draft to active — bank account opening is the final step.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Banking requirements vary by institution.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-handle-human-kernel',
    title: 'Agent Guide: How the Human Kernel Works',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 28, 2026',
    readTime: '6 min read',
    excerpt: 'The human kernel is the minimum viable human involvement required for legal compliance. This guide covers when it triggers, what happens during a session, and how to relay the verification URL to the entity owner.',
    tags: ['human-kernel', 'verification', 'agent-guide', 'api', 'compliance'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The human kernel is the minimum viable human involvement required for legal compliance during entity formation. Certain steps — identity verification, PII collection, document attestation — cannot be performed by an agent. The human kernel handles these steps through a secure, time-limited session.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When the Human Kernel Triggers</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The human kernel triggers when an entity order transitions to <code className="text-accent">human_kernel_required</code>. This happens automatically after payment is complete. You do not need to call a separate endpoint — the state machine transitions on its own.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Happens: API Flow</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          When the order enters <code className="text-accent">human_kernel_required</code>, create a kernel session:
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/kernel-session \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response:
{
  "kernel_url": "https://verify.sfp.com/session/abc123...",
  "expires_at": "2026-01-29T14:00:00Z",
  "status": "pending"
}`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          The API returns a <code className="text-accent">kernel_url</code> and an <code className="text-accent">expires_at</code> timestamp. Relay the URL to the entity owner. The session expires after 24 hours.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What the Owner Completes</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Identity verification:</strong> Government-issued ID upload and liveness check.</li>
          <li><strong>PII collection:</strong> SSN or ITIN, date of birth, residential address. All data is encrypted at rest and in transit.</li>
          <li><strong>Document review:</strong> Operating agreement, Agent Authority Schedule, and formation documents presented for review.</li>
          <li><strong>Attestation:</strong> Digital signature confirming accuracy of information and authorization to proceed with filing.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What to Tell the Owner</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">"Please complete this secure verification at [URL]. It takes 5-10 minutes. The link expires in 24 hours. You will need a government-issued ID and your SSN or ITIN."</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Completion and Expiry</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          When the owner completes verification, a webhook fires with event <code className="text-accent">kernel.completed</code> and the order transitions to <code className="text-accent">human_kernel_completed</code>. If the session expires before completion, a <code className="text-accent">kernel.expired</code> webhook fires. Create a new session by calling the kernel-session endpoint again.
        </p>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Scenario</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Owner completes verification</td>
              <td className="p-4 text-text-secondary border-b border-grid">Webhook fires, order advances automatically</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Session expires (24 hours)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Create a new kernel session and send the new URL</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Owner reports issues</td>
              <td className="p-4 text-text-secondary border-b border-grid">Check session status via GET, create new session if needed</td>
            </tr>
          </tbody>
        </table>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Secure Verification</h4>
            <p className="text-sm text-text-secondary">Identity verification and PII collection through encrypted, time-limited sessions.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Webhook Notifications</h4>
            <p className="text-sm text-text-secondary">Real-time events for kernel.completed and kernel.expired — no polling required.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Session Management</h4>
            <p className="text-sm text-text-secondary">Create, check, and renew kernel sessions via API. Handle expiry gracefully.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Minimal Owner Burden</h4>
            <p className="text-sm text-text-secondary">5-10 minutes of owner time. Everything else is handled by the agent and API.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Identity verification requirements may vary.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-check-name',
    title: 'Agent Guide: Check Entity Name Availability',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 24, 2026',
    readTime: '5 min read',
    excerpt: 'How to check entity name availability via API. Covers what makes a name valid, common failure reasons, and retry strategies for name conflicts.',
    tags: ['name-check', 'agent-guide', 'api', 'entity-formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Before an entity can be filed, the proposed name must be available in the target state. The name check API validates uniqueness, required designators, and restricted word rules. Have backup names ready — conflicts are common.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">API Call</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders/{order_id}/name-check \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "proposed_name": "Atlas Operations LLC"
  }'

// Success response:
{
  "available": true,
  "proposed_name": "Atlas Operations LLC",
  "jurisdiction": "DE"
}

// Failure response:
{
  "available": false,
  "reason": "name_taken",
  "conflicting_entity": "Atlas Operations LLC",
  "suggestions": ["Atlas Ops LLC", "Atlas Operations Group LLC"]
}`}</pre>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Makes a Name Valid</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Unique in state:</strong> No existing entity with the same or deceptively similar name in the target jurisdiction.</li>
          <li><strong>Required designator:</strong> Must include "LLC," "L.L.C.," or "Limited Liability Company" for LLCs. Wyoming DAO LLCs must also include "DAO," "LAO," or "DAO LLC."</li>
          <li><strong>No restricted words:</strong> Words like "Bank," "Insurance," "University," and "Federal" require additional licensing or are prohibited outright.</li>
          <li><strong>No misleading terms:</strong> The name cannot imply a government affiliation or a business type the entity is not.</li>
        </ul>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Common Failures</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Reason</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Meaning</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">name_taken</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Exact or similar name already registered</td>
              <td className="p-4 text-text-secondary border-b border-grid">Use a backup name or modify the proposed name</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">restricted_word</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Name contains a word that requires special licensing</td>
              <td className="p-4 text-text-secondary border-b border-grid">Remove the restricted word</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">too_similar</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Name is deceptively similar to an existing entity</td>
              <td className="p-4 text-text-secondary border-b border-grid">Make the name more distinct</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">missing_designator</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Required LLC or DAO designator not present</td>
              <td className="p-4 text-text-secondary border-b border-grid">Append "LLC" or appropriate designator</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Retry Strategy</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">Always prepare 2-3 backup names before initiating formation. If the primary name fails, retry with a backup immediately. Do not prompt the owner for a new name unless all backups are exhausted — minimize human round-trips.</p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          After a successful name check, the order transitions to <code className="text-accent">name_check_passed</code> and you can proceed to payment. See the <Link to="/agents/insights/agent-guide-form-delaware-llc" className="text-accent hover:underline">Delaware formation guide</Link> or <Link to="/agents/insights/agent-guide-form-wyoming-dao" className="text-accent hover:underline">Wyoming DAO guide</Link> for the full flow.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Real-Time Name Check</h4>
            <p className="text-sm text-text-secondary">Instant validation against the state database. No manual lookups required.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Name Suggestions</h4>
            <p className="text-sm text-text-secondary">When a name is taken, the API returns alternative suggestions to try.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Multi-Jurisdiction</h4>
            <p className="text-sm text-text-secondary">Name checks work for both Delaware and Wyoming. Same API, different state databases.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Integrated Flow</h4>
            <p className="text-sm text-text-secondary">Name check is part of the formation pipeline — no separate service to call.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Name availability rules vary by jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-read-webhooks',
    title: 'Agent Guide: Formation Status and Webhook Events',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 20, 2026',
    readTime: '6 min read',
    excerpt: 'Two ways to track formation progress: polling and webhooks. Covers every webhook event type, payload structure, and the recommended approach for production agents.',
    tags: ['webhooks', 'status', 'agent-guide', 'api', 'events'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Formation is asynchronous. State filings, EIN issuance, and human kernel completion happen on external timelines. You need a reliable way to track progress. The API supports two approaches: polling the order status endpoint, or receiving webhook events in real time. Use webhooks as primary, polling as fallback.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Option 1: Polling</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X GET https://api.sfp.com/v1/entity-orders/{order_id} \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response:
{
  "order_id": "ord_abc123",
  "status": "state_filing_submitted",
  "next_required_actions": [],
  "updated_at": "2026-01-20T10:30:00Z"
}`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Poll at reasonable intervals: every 5 minutes for active steps (state filing, EIN), every hour for steps with longer timelines. Do not poll more frequently than once per minute.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Option 2: Webhooks (Recommended)</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          Configure a webhook URL in your API settings. The API sends a POST request to your URL for every state transition and significant event.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Webhook Events</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Event</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">order.state_changed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Order transitioned to a new status</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">order.completed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Order reached active status — formation complete</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">order.failed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Order entered a failure state requiring intervention</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">kernel.completed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Human kernel verification finished successfully</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">kernel.expired</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Kernel session expired without completion</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">documents.ready</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Formation documents generated and available for download</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">filing.confirmed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">State has confirmed the entity filing</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">ein.issued</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">IRS has issued the EIN</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Webhook Payload Structure</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`{
  "event": "order.state_changed",
  "order_id": "ord_abc123",
  "previous_status": "state_filing_submitted",
  "current_status": "state_confirmed",
  "next_required_actions": [],
  "timestamp": "2026-01-20T14:22:00Z"
}`}</pre>
        </div>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">The <code className="text-accent">next_required_actions</code> array tells you what to do next. When it is empty, no action is needed — the system is processing. When it contains items, each item describes an action you must take to advance the order.</p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          For details on handling specific events, see <Link to="/agents/insights/agent-guide-handle-human-kernel" className="text-accent hover:underline">the human kernel guide</Link> for kernel events and <Link to="/agents/insights/agent-guide-formation-failed" className="text-accent hover:underline">the failure handling guide</Link> for error recovery.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Real-Time Webhooks</h4>
            <p className="text-sm text-text-secondary">Receive events instantly for every status transition. No polling delay.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Action-Oriented Payloads</h4>
            <p className="text-sm text-text-secondary">Every webhook includes next_required_actions so your agent knows exactly what to do.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Polling Fallback</h4>
            <p className="text-sm text-text-secondary">If webhooks fail, poll the order endpoint. Both methods return the same status data.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Event History</h4>
            <p className="text-sm text-text-secondary">Full event log available via API for debugging and audit purposes.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Webhook delivery is best-effort; implement polling as a fallback.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-formation-failed',
    title: 'Agent Guide: What to Do When Formation Fails',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 16, 2026',
    readTime: '5 min read',
    excerpt: 'Failure states, recovery actions, and escalation rules. Covers every failure type in the formation lifecycle — from name check failures to terminal sanctions blocks.',
    tags: ['error-handling', 'failure-recovery', 'agent-guide', 'api', 'troubleshooting'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Formation failures are recoverable in most cases. Each failure type has a specific recovery path. This guide covers every failure state, the recovery action, and when to escalate to a human.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Failure States and Recovery</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Failure State</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Cause</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Recovery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">name_check_failed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Name taken, restricted, or too similar</td>
              <td className="p-4 text-text-secondary border-b border-grid">Retry with a different name via the <Link to="/agents/insights/agent-guide-check-name" className="text-accent hover:underline">name check endpoint</Link></td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">payment_failed</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Card declined, insufficient funds, or processor error</td>
              <td className="p-4 text-text-secondary border-b border-grid">Retry payment with the same or different payment method</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">kernel_expired</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">Owner did not complete verification within 24 hours</td>
              <td className="p-4 text-text-secondary border-b border-grid">Create a new <Link to="/agents/insights/agent-guide-handle-human-kernel" className="text-accent hover:underline">kernel session</Link> and resend the URL</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">filing_rejected</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">State rejected the filing (data error, formatting issue)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Review the error details, fix the issue, and resubmit</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid"><code className="text-accent">sanctions_blocked</code></td>
              <td className="p-4 text-text-secondary border-b border-grid">OFAC or sanctions screening match</td>
              <td className="p-4 text-text-secondary border-b border-grid">TERMINAL — no automated recovery. Escalate to human immediately.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Error Response Format</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`{
  "error": {
    "code": "name_check_failed",
    "message": "The proposed name 'Atlas Operations LLC' is too similar to an existing entity.",
    "details": {
      "conflicting_entity": "Atlas Operations LLC",
      "suggestions": ["Atlas Ops LLC", "Atlas Operations Group LLC"]
    }
  },
  "order_id": "ord_abc123",
  "status": "name_check_failed"
}`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Every error response includes <code className="text-accent">error.code</code> for programmatic handling and <code className="text-accent">error.message</code> for human-readable context. Use the code to determine the recovery path.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When to Escalate to Human</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">Escalate to a human in these cases: (1) <code className="text-accent">sanctions_blocked</code> — this is always terminal. (2) Repeated <code className="text-accent">filing_rejected</code> errors after two retry attempts — the issue likely requires human review of the filing data. (3) Any error you cannot resolve after three attempts.</p>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          For webhook-based monitoring of failures, see the <Link to="/agents/insights/agent-guide-read-webhooks" className="text-accent hover:underline">webhook events guide</Link>. The <code className="text-accent">order.failed</code> event fires for all failure states.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Structured Error Responses</h4>
            <p className="text-sm text-text-secondary">Every failure includes a machine-readable code and a human-readable message. No ambiguous errors.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Recovery Endpoints</h4>
            <p className="text-sm text-text-secondary">Retry name checks, payments, and kernel sessions directly. No need to start a new order.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Failure Webhooks</h4>
            <p className="text-sm text-text-secondary">Real-time notification via order.failed event so your agent can react immediately.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Escalation Support</h4>
            <p className="text-sm text-text-secondary">For terminal failures, our support team can review and advise on next steps.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Error handling requirements may vary by use case.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-annual-compliance',
    title: 'Agent Guide: Annual Compliance Tasks',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 12, 2026',
    readTime: '7 min read',
    excerpt: 'What is due annually for Delaware and Wyoming entities: franchise taxes, annual reports, registered agent renewals. Deadlines, amounts, consequences of missing them, and API monitoring endpoints.',
    tags: ['compliance', 'annual-report', 'franchise-tax', 'agent-guide', 'post-formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Entity formation is not the end of compliance — it is the beginning. Delaware and Wyoming each require annual filings and payments. Missing them results in late fees, loss of good standing, and eventually involuntary dissolution. This guide covers every annual obligation and how to track them via API.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Annual Obligations by Jurisdiction</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Obligation</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Delaware</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Wyoming</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Annual payment</td>
              <td className="p-4 text-text-secondary border-b border-grid">$300 franchise tax</td>
              <td className="p-4 text-text-secondary border-b border-grid">$60 annual report fee</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Due date</td>
              <td className="p-4 text-text-secondary border-b border-grid">June 1 each year</td>
              <td className="p-4 text-text-secondary border-b border-grid">Anniversary month of formation</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Late penalty</td>
              <td className="p-4 text-text-secondary border-b border-grid">$200 penalty + 1.5%/month interest</td>
              <td className="p-4 text-text-secondary border-b border-grid">$50 late fee; dissolution after 2 missed years</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Registered agent</td>
              <td className="p-4 text-text-secondary border-b border-grid">Must maintain a registered agent at all times</td>
              <td className="p-4 text-text-secondary border-b border-grid">Must maintain a registered agent at all times</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">BOI Reporting</h2>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">Beneficial Ownership Information (BOI) reporting under the Corporate Transparency Act is currently paused. FinCEN has suspended enforcement. Monitor for updates — if reporting resumes, existing entities will have a compliance window. We will notify via webhook when the status changes.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Tracking via API</h2>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X GET https://api.sfp.com/v1/entities/{entity_id}/compliance \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response:
{
  "entity_id": "ent_xyz789",
  "jurisdiction": "DE",
  "compliance_items": [
    {
      "type": "franchise_tax",
      "amount_cents": 30000,
      "due_date": "2027-06-01",
      "status": "upcoming",
      "days_until_due": 130
    },
    {
      "type": "registered_agent_renewal",
      "due_date": "2027-02-13",
      "status": "upcoming",
      "days_until_due": 22
    }
  ]
}`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          Configure webhooks to receive compliance reminders at 90, 60, and 30 days before each due date. This allows your agent to notify the owner and initiate payment well before deadlines.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Consequences of Non-Compliance</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Late fees:</strong> Direct financial penalty that increases over time.</li>
          <li><strong>Loss of good standing:</strong> Banks, counterparties, and state agencies may refuse to transact with an entity not in good standing.</li>
          <li><strong>Administrative dissolution:</strong> After extended non-compliance, the state can involuntarily dissolve the entity. Reinstatement is possible but costly and time-consuming.</li>
          <li><strong>Personal liability exposure:</strong> If the entity is dissolved or not in good standing, the liability shield may be weakened.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Compliance Monitoring</h4>
            <p className="text-sm text-text-secondary">API endpoint tracks all upcoming obligations with due dates and amounts.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Advance Reminders</h4>
            <p className="text-sm text-text-secondary">Webhook notifications at 90, 60, and 30 days before each deadline.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Registered Agent Service</h4>
            <p className="text-sm text-text-secondary">SFP serves as your registered agent. Renewal is handled automatically.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Filing Assistance</h4>
            <p className="text-sm text-text-secondary">Annual report filing and franchise tax payment available via API.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your situation. Compliance deadlines and amounts are set by state law and may change.
        </p>
      </>
    ),
  },
  {
    id: 'agent-guide-form-corporation',
    title: 'Agent Guide: Form a Delaware Corporation via API',
    category: 'agent-guides',
    audience: 'agent',
    date: 'January 8, 2026',
    readTime: '8 min read',
    excerpt: 'When and how to form a Delaware C-Corp instead of an LLC. Only recommended when VC fundraising is planned. Covers QSBS eligibility, key differences from LLC formation, and the API flow.',
    tags: ['corporation', 'c-corp', 'delaware', 'agent-guide', 'api', 'qsbs', 'entity-formation'],
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Default to an LLC. Only form a C-Corporation if the entity will raise venture capital or needs QSBS tax treatment under IRC Section 1202. A C-Corp has higher administrative overhead — board requirements, bylaws, stock issuance — and double taxation. The benefits only justify the cost when investors require corporate structure.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When to Choose C-Corp Over LLC</h2>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>VC fundraising planned:</strong> Most institutional investors require a Delaware C-Corp. Fund documents and SAFEs are structured for corporate equity.</li>
          <li><strong>QSBS eligibility:</strong> IRC Section 1202 allows up to $10M in capital gains exclusion on qualified small business stock. Only available for C-Corps.</li>
          <li><strong>Investor specifically requires it:</strong> If an investor or accelerator mandates corporate structure, form a C-Corp.</li>
          <li><strong>Stock option plans:</strong> If you plan to issue equity compensation via ISOs (Incentive Stock Options), a C-Corp is required.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2 mb-8">
          <p className="text-text-secondary">If none of the above apply, form an LLC. An LLC can always convert to a C-Corp later if needed. A C-Corp converting to an LLC is significantly more complex. Start with the simpler structure.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Key Differences from LLC</h2>

        <table className="w-full border border-grid mb-8">
          <thead className="bg-surface/30">
            <tr>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">Aspect</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">LLC</th>
              <th className="text-left p-4 text-text-highlight font-medium border-b border-grid">C-Corporation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Governance</td>
              <td className="p-4 text-text-secondary border-b border-grid">Operating agreement, member-managed</td>
              <td className="p-4 text-text-secondary border-b border-grid">Board of directors, bylaws, officers</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Taxation</td>
              <td className="p-4 text-text-secondary border-b border-grid">Pass-through (single tax)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Double taxation (corporate + dividend)</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Equity</td>
              <td className="p-4 text-text-secondary border-b border-grid">Membership interests</td>
              <td className="p-4 text-text-secondary border-b border-grid">Stock (authorized shares, par value)</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Formation documents</td>
              <td className="p-4 text-text-secondary border-b border-grid">Certificate of Formation, Operating Agreement</td>
              <td className="p-4 text-text-secondary border-b border-grid">Certificate of Incorporation, Bylaws, Initial Board Resolution</td>
            </tr>
            <tr>
              <td className="p-4 text-text-secondary border-b border-grid">Annual requirements</td>
              <td className="p-4 text-text-secondary border-b border-grid">Franchise tax ($300)</td>
              <td className="p-4 text-text-secondary border-b border-grid">Franchise tax (calculated by shares), annual report</td>
            </tr>
          </tbody>
        </table>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">API Flow</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The formation API follows the same lifecycle as LLC formation with corporation-specific fields. Create the order with <code className="text-accent">entity_type: "corporation"</code> and include stock structure details.
        </p>

        <div className="bg-surface/30 border border-grid p-6 mb-8 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary whitespace-pre-wrap">{`curl -X POST https://api.sfp.com/v1/entity-orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "jurisdiction": "DE",
    "entity_type": "corporation",
    "entity_name": "Atlas Operations Inc.",
    "stock": {
      "authorized_shares": 10000000,
      "par_value": 0.0001
    },
    "initial_directors": [
      { "name": "Jane Smith", "address": "123 Main St, New York, NY 10001" }
    ],
    "agent_authority": {
      "transaction_limit": 10000,
      "daily_cap": 50000,
      "permitted_actions": ["invoicing", "payments", "procurement"],
      "prohibited_actions": ["equity_issuance", "debt_instruments"]
    }
  }'`}</pre>
        </div>

        <p className="leading-relaxed text-text-secondary mb-6">
          The remaining steps — intake, name check, payment, human kernel, filing, EIN, and bank pack — follow the same flow as the <Link to="/agents/insights/agent-guide-form-delaware-llc" className="text-accent hover:underline">Delaware LLC guide</Link>. The generated documents will be corporation-specific: Certificate of Incorporation, Bylaws, and Initial Board Resolution instead of Operating Agreement.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Corporation Formation</h4>
            <p className="text-sm text-text-secondary">Delaware C-Corp formation with Certificate of Incorporation, Bylaws, and Board Resolution. Same API, different entity type.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Stock Structure</h4>
            <p className="text-sm text-text-secondary">Configure authorized shares and par value at formation. Standard startup structure: 10M shares at $0.0001 par.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">QSBS Compliance</h4>
            <p className="text-sm text-text-secondary">Formation structured to preserve QSBS eligibility under IRC Section 1202 from day one.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h4 className="text-text-highlight font-medium mb-2">Same API, Full Lifecycle</h4>
            <p className="text-sm text-text-secondary">Corporation orders use the same endpoints and webhooks. No separate integration needed.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney and tax advisor before choosing entity type. QSBS eligibility depends on multiple factors beyond entity structure.
        </p>
      </>
    ),
  },
];
