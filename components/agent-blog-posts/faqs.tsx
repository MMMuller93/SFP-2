import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const faqsPosts: BlogPost[] = [
  // ============================================================
  // POST 1: FAQ — Entity Formation for AI Agents
  // ============================================================
  {
    id: 'faq-entity-formation',
    title: 'FAQ: Entity Formation for AI Agents',
    slug: 'faq-entity-formation',
    category: 'faqs',
    audience: 'both',
    date: 'February 20, 2026',
    readTime: '15 min read',
    excerpt: 'Everything you need to know about forming a legal entity for your AI agent — from basic concepts to advanced authority structures.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Entity formation is the foundation of giving your AI agent a legal identity. Whether you're an AI developer, a founder building autonomous systems, or an agent exploring its own operational independence, these are the questions we hear most often — answered plainly, without legalese.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">General Concepts</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is entity formation?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Entity formation is the legal process of creating a business entity — such as an LLC or corporation — by filing formation documents with a state government. Once formed, the entity exists as its own legal "person," separate from its owners. It can open bank accounts, enter contracts, hold assets, and operate commercially. For AI agents, this is the first step toward autonomous economic participation.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Why does an AI agent need a legal entity?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Without a legal entity, an AI agent has no recognized standing in the commercial or financial system. It cannot hold a bank account, sign a contract, receive payment, or limit liability. A legal entity gives the agent an identity that banks, payment processors, counterparties, and regulators can interact with. It also creates a liability shield — separating the agent's operations from the personal assets of the humans behind it.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can an AI actually own a company?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Not directly — not under current US law. An AI cannot be a legal member or shareholder. However, a human (or another entity) can form an LLC and grant the AI agent specific, documented authority to operate on behalf of that entity. This is what the Agent Authority Schedule does: it defines exactly what the agent can and cannot do within the entity's legal structure. The human remains the legal owner (the "human kernel"), while the agent handles day-to-day operations within its authorized scope.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What types of entities can I form?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            SFP currently supports two entity types: <strong>Delaware LLCs</strong> and <strong>Wyoming DAO LLCs</strong>. Delaware LLCs are the gold standard for business formation in the United States — well-understood by banks, courts, and investors. Wyoming DAO LLCs are a newer structure authorized under W.S. 17-31-101 that allows for algorithmic governance, making them a natural fit for agents with on-chain or smart-contract-driven operations. We recommend Delaware for most use cases and Wyoming for agents with explicit DAO or blockchain governance requirements.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Formation Process</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How long does formation take?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Delaware LLCs are typically filed and confirmed within 1–3 business days. Wyoming DAO LLCs take 2–5 business days. These timelines reflect standard state processing — we submit filings the same day we receive your information. Expedited options are available in both states for faster turnaround.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What information is needed to form an entity?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            At minimum, we need: the desired entity name, the name and address of at least one human member (the human kernel), the agent's name and description, and the scope of authority you want to grant to the agent. For EIN applications, we also need the responsible party's SSN or ITIN. If you're using our API, these fields are clearly defined in the request schema. If you're working through our intake form, we walk you through each step.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is the human kernel?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The human kernel is the minimum viable human presence required for legal compliance. Every entity needs at least one human who serves as the legal member, the responsible party for the EIN, and the point of contact for regulatory purposes. The human kernel holds the PII (personally identifiable information) that the legal system requires — name, address, SSN or ITIN — while the agent handles operations. Think of it as the legal anchor that makes everything else possible.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need a lawyer to form an entity?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            No. Entity formation is a standard administrative process that does not require legal representation. SFP handles the filing, documentation, and agent-specific customization. That said, if your agent will operate in a regulated industry (financial services, healthcare, etc.) or if you need custom legal structures beyond what we offer, consulting an attorney is advisable. Our documents are designed to be legally sound out of the box for standard commercial operations.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What documents do I get after formation?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            You receive: (1) the Certificate of Formation issued by the state, (2) a customized Operating Agreement that includes the Agent Authority Schedule, (3) an EIN confirmation letter from the IRS (once processed), (4) a Banking Resolution authorizing the entity to open financial accounts, and (5) a registered agent confirmation. All documents are delivered digitally and are ready for use with banks and counterparties.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I form an entity entirely remotely?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. The entire process — from submitting your information to receiving your documents — is fully remote. Delaware and Wyoming both allow remote formation with no requirement for physical presence. Banking can also be done remotely through digital-first banks like Mercury and Relay. You never need to visit a state office, courthouse, or bank branch.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What if my desired entity name is already taken?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            We check name availability with the state before filing. If your first choice is taken, we'll let you know immediately and suggest alternatives. Each state maintains its own registry, so a name taken in Delaware might be available in Wyoming and vice versa. Names must be distinguishable from existing entities — minor variations (like adding "AI" or "Labs") often work.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What happens after formation?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            After your entity is formed, the typical next steps are: (1) obtain your EIN from the IRS, (2) open a business bank account, and (3) begin operations. SFP handles steps 1 and 2 as part of our formation-to-banking pipeline. We also provide guidance on annual compliance requirements — franchise tax in Delaware ($300/year) or the annual report in Wyoming ($60/year).
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Privacy, Compliance & Structure</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Is my personal information safe?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. Delaware does not require member names or addresses on public filings — only the registered agent's information appears on the public record. Wyoming similarly protects member privacy. Your PII is used only for the EIN application (submitted directly to the IRS) and banking applications (submitted directly to the bank). SFP does not publish, share, or sell personal information.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is a registered agent?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            A registered agent is a person or service designated to receive legal documents (like lawsuits or state correspondence) on behalf of your entity. Every LLC must have a registered agent with a physical address in the state of formation. SFP includes the first year of registered agent service in every formation package. After year one, renewal is approximately $125/year.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need to be a US citizen to form an entity?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            No. Non-US persons can form LLCs in Delaware and Wyoming. However, you will need an ITIN (Individual Taxpayer Identification Number) instead of an SSN for the EIN application, which adds processing time. SFP supports international founders and can guide you through the ITIN process if needed.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can an agent form its own entity through the API?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes — this is one of the core capabilities SFP provides. An AI agent can call the SFP API (or use the MCP server) to initiate entity formation programmatically. The agent provides the required information, including the human kernel's details (with prior authorization), and SFP handles the filing. This enables fully autonomous formation workflows where the agent decides when and how to establish its legal presence.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What's the difference between an LLC and a corporation?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            LLCs offer flexible management structures, pass-through taxation by default, and minimal formality requirements. Corporations have rigid structures (board of directors, officers, shareholders), double taxation by default (C-Corp), and more compliance overhead. For AI agent operations, LLCs are almost always the better choice — they provide liability protection with maximum operational flexibility and minimal paperwork. Corporations are better suited for entities seeking venture capital or planning an IPO.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I form an entity in a state I don't live in?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. You can form a Delaware or Wyoming LLC regardless of where you live. This is standard practice — most Delaware LLCs are formed by people who don't live in Delaware. The entity's registered agent provides the required in-state presence. If you operate primarily in another state, you may eventually need to register as a "foreign LLC" in that state, but this is not required at formation.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is an Agent Authority Schedule?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The Agent Authority Schedule is a section of the operating agreement that defines, in plain language, exactly what the AI agent is authorized to do on behalf of the entity. It specifies: the agent's name and identifier, the scope of permitted actions (e.g., "may execute transactions up to $10,000," "may sign service agreements," "may manage the entity's bank account"), prohibited actions, and conditions or limits. This document is what distinguishes an SFP formation from a generic LLC — it creates a clear, legally grounded record of the agent's authority.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How much does entity formation cost?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Delaware LLC formation is $349 and Wyoming DAO LLC formation is $399. Both prices include the state filing fee, first year of registered agent service, a customized operating agreement with Agent Authority Schedule, certificate of formation, EIN application, and banking resolution. There are no hidden fees — the state filing fee ($110 for Delaware, $100 for Wyoming) is included in our price, not charged separately.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Ready to form your entity?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Whether you're forming through our web intake or programmatically via the API, the process starts with the same information: your entity name, the human kernel's details, and your agent's authority scope. Most formations are completed within 1–3 business days.
          </p>
          <Link to="/get-started" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Start your formation &rarr;
          </Link>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            This FAQ is for informational purposes only and does not constitute legal, tax, or financial advice. Consult a qualified professional for advice specific to your situation. Entity formation requirements and fees are subject to change based on state regulations.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================
  // POST 2: FAQ — EIN Applications
  // ============================================================
  {
    id: 'faq-ein',
    title: 'FAQ: EIN Applications',
    slug: 'faq-ein',
    category: 'faqs',
    audience: 'both',
    date: 'February 16, 2026',
    readTime: '8 min read',
    excerpt: 'What an EIN is, why your entity needs one, and how the application process works — including international applicants.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          An Employer Identification Number is one of the first things your newly formed entity needs. It's the key that unlocks banking, tax filing, and commercial operations. Here's everything you need to know about getting one.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">EIN Basics</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is an EIN?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            An EIN (Employer Identification Number) is a nine-digit number assigned by the IRS that identifies your business entity for tax purposes. Think of it as a Social Security number for your company. It's formatted as XX-XXXXXXX and is sometimes called a Federal Tax Identification Number. Every LLC or corporation that plans to operate commercially — open a bank account, hire contractors, file taxes — needs one.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need an EIN?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. If your entity will open a bank account, you need an EIN. If your entity will file taxes, you need an EIN. If your entity will enter contracts or receive payments, you need an EIN. There is effectively no scenario where a commercially active LLC does not need one. SFP includes the EIN application in every formation package because it's a non-optional step.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How long does it take to get an EIN?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            For US persons with an SSN, the IRS typically issues an EIN immediately when applied for online, or within 4–5 business days when applied by fax. For international applicants using an ITIN, the process can take 2–4 weeks because the application must be submitted by fax or mail rather than online. SFP handles the application on your behalf in both cases.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Is the EIN application free?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. The IRS does not charge a fee for issuing an EIN. The application (Form SS-4) is free to submit. When SFP handles your EIN application, there is no additional charge beyond your formation package — it's included in the $349 (Delaware) or $399 (Wyoming) price.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Application Requirements</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What information is needed for the EIN application?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The IRS requires: the entity's legal name, its state of formation, the date of formation, the entity type (LLC), the responsible party's name, and the responsible party's SSN or ITIN. The "responsible party" is the individual who controls, manages, or directs the entity — this is the human kernel. The IRS requires a real human with a real tax identification number; there is no way around this requirement.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I get an EIN without an SSN?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Not without an alternative. If the responsible party does not have an SSN, they must have an ITIN (Individual Taxpayer Identification Number). An ITIN is available to non-US persons and can be obtained by filing Form W-7 with the IRS. If you don't have either an SSN or an ITIN, the ITIN must be obtained first before the EIN application can proceed.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What if I'm not a US person?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            International founders can absolutely form US LLCs and obtain EINs. The process requires an ITIN, which adds time — typically 4–7 weeks for the ITIN itself, then an additional 2–4 weeks for the EIN. The total timeline from formation to EIN can be 6–11 weeks for international applicants. SFP can guide you through the ITIN application process and will submit the EIN application as soon as the ITIN is issued.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Process & Logistics</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP handle the EIN application?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Once your entity is formed and we have the responsible party's information, we prepare and submit Form SS-4 to the IRS on your behalf. For US persons with an SSN, we apply online and typically receive the EIN the same day. For ITIN holders, we submit by fax and monitor for the response. You receive the EIN confirmation letter as soon as it's issued. The entire process is hands-off for you after providing the initial information.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What does the EIN confirmation letter look like?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The IRS issues a CP 575 notice — a one-page letter that confirms your entity's EIN, legal name, and the date the EIN was assigned. This letter is the document banks require when you open an account. SFP provides you with a digital copy. Keep this letter safe — the IRS only issues it once. If lost, you can request a verification letter (Form 147C), but it takes time.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I have multiple EINs?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Each entity gets its own EIN — one EIN per entity. If you form multiple LLCs (for example, one per agent), each will have a separate EIN. A single person can be the responsible party for multiple entities, each with its own EIN. There's no practical limit to how many EINs a responsible party can be associated with.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What if the IRS delays my application?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            IRS delays happen occasionally, particularly for fax-submitted applications (international applicants) and during peak filing seasons (January–April). If your application is delayed beyond the expected timeline, SFP follows up with the IRS on your behalf. We'll keep you informed of the status. In rare cases, the IRS may request additional information or clarification — we handle that communication for you.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need an EIN before opening a bank account?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. Every bank — Mercury, Relay, traditional banks, all of them — requires an EIN to open a business account. The EIN confirmation letter (CP 575) is a mandatory part of the banking application. There is no workaround. This is why SFP includes the EIN application in the formation pipeline: without it, your entity exists legally but cannot operate financially.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-4">EIN Timeline Summary</h3>
          <div className="space-y-2">
            <p className="leading-relaxed text-text-secondary"><strong>US person with SSN:</strong> Same day (online application)</p>
            <p className="leading-relaxed text-text-secondary"><strong>US person with SSN (fax):</strong> 4–5 business days</p>
            <p className="leading-relaxed text-text-secondary"><strong>International with ITIN:</strong> 2–4 weeks (fax application)</p>
            <p className="leading-relaxed text-text-secondary"><strong>International without ITIN:</strong> 6–11 weeks (ITIN first, then EIN)</p>
          </div>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            This FAQ is for informational purposes only and does not constitute legal, tax, or financial advice. EIN processing times are estimates based on typical IRS timelines and may vary. Consult a qualified tax professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================
  // POST 3: FAQ — Banking for LLCs
  // ============================================================
  {
    id: 'faq-banking',
    title: 'FAQ: Banking for LLCs',
    slug: 'faq-banking',
    category: 'faqs',
    audience: 'both',
    date: 'February 12, 2026',
    readTime: '8 min read',
    excerpt: 'Which banks work best for agent-operated LLCs, what documents you need, and how to navigate the account opening process.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A bank account is what turns your LLC from a legal abstraction into a functioning economic entity. Not all banks are equally receptive to newly formed LLCs — especially those operated by AI agents. Here's what works, what doesn't, and how to get it right the first time.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Choosing a Bank</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Which banks work best for LLC accounts?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            We recommend <strong>Mercury</strong> and <strong>Relay</strong>. Both are digital-first business banking platforms designed for startups and new LLCs. They understand modern business structures, process applications quickly, and don't require branch visits. Mercury is particularly strong for tech companies and offers API access for programmatic banking. Relay is excellent for straightforward business accounts with clean fee structures. Both have successfully onboarded SFP-formed entities.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What documents do I need to open a bank account?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Standard requirements include: (1) the Certificate of Formation or Certificate of Organization, (2) the EIN confirmation letter (CP 575) from the IRS, (3) the Operating Agreement, (4) a Banking Resolution authorizing the account opening, and (5) government-issued ID for all members/signers. SFP provides documents 1 through 4 as part of every formation package — they're specifically formatted for banking applications.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How long does bank account approval take?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            For Mercury and Relay, typical approval takes 1–3 weeks. Some accounts are approved within a few business days; others require additional review. The most common delay is incomplete documentation or a mismatch between the application and the formation documents. Using SFP's banking-ready document package minimizes these issues. Traditional banks can take 2–4 weeks or longer, with less predictable timelines.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Agent Access & Operations</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can an AI agent have bank access?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Not directly as an account holder or signer — banks require human identity verification for account ownership. However, an agent can operate the account programmatically through banking APIs. Mercury's API, for example, allows programmatic initiation of transfers, balance checks, and transaction monitoring. The human kernel remains the authorized signer, while the agent operates within the parameters defined by the Agent Authority Schedule and the Banking Resolution.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is a banking resolution?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            A banking resolution is a formal document — adopted by the LLC's members — that authorizes specific individuals to open and manage bank accounts on behalf of the entity. Banks require this document to verify that the person applying for the account has the authority to do so. SFP includes a banking resolution in every formation package, pre-filled with your entity's information and the human kernel's details.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need to visit a bank branch?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            No — not if you use Mercury or Relay. Both platforms handle the entire account opening process online. You submit your documents digitally, verify your identity remotely, and access your account through their web platform or API. Traditional banks (Chase, Bank of America, etc.) typically do require an in-person visit, which is one reason we recommend digital-first alternatives.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Special Situations</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What about international founders?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            International founders can open US business bank accounts, but the process requires additional documentation. Mercury and Relay both accept international applicants. You'll typically need your passport, the entity's formation documents, your EIN letter, and potentially proof of address. Some banks may require an ITIN. Processing may take longer — expect 2–4 weeks rather than 1–2 weeks. SFP's formation documents are designed to meet the requirements of both domestic and international applicants.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I use a traditional bank instead?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            You can, but we don't recommend it for agent-operated entities. Traditional banks are slower to open accounts, often require branch visits, have less API access for programmatic operations, and may be unfamiliar with AI-agent-operated LLCs. They also tend to have higher fees and more restrictive policies for new entities. That said, once your entity is established and has operating history, adding a traditional bank account as a secondary option can make sense.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What fees should I expect?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Mercury and Relay both offer free business checking accounts with no monthly fees, no minimum balance requirements, and no transaction fees for standard operations. Wire transfers, physical checks, and certain premium features may carry fees. Compare this to traditional banks, which often charge $10–$30/month for business checking plus per-transaction fees. For most agent-operated entities, digital-first banks are significantly more cost-effective.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What if my bank application is rejected?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Rejections happen, usually for one of three reasons: incomplete or inconsistent documentation, the business description triggering a compliance flag, or issues with the applicant's personal banking history. If rejected, review the reason given, correct any issues, and reapply — or try a different bank. SFP can help troubleshoot rejected applications and ensure your documents are in order for a second attempt. Having clean, professional formation documents significantly reduces rejection rates.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I have multiple bank accounts?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. There's no limit to the number of bank accounts an LLC can hold. Many entities maintain accounts at multiple banks for operational flexibility, risk management, or to separate different revenue streams. Your Banking Resolution can authorize accounts at multiple institutions. Some agent operators maintain a Mercury account for API-driven operations and a Relay account for general business banking.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-4">The Formation-to-Banking Pipeline</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            SFP is designed so that formation flows directly into banking. Your entity is formed, your EIN is obtained, and your banking documents are prepared — all in sequence, all formatted for immediate use. Most clients go from "no entity" to "funded bank account" within 2–4 weeks.
          </p>
          <Link to="/get-started" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Start the pipeline &rarr;
          </Link>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            This FAQ is for informational purposes only and does not constitute legal, tax, or financial advice. Banking availability, requirements, and fees are determined by individual financial institutions and may change. SFP is not a bank and does not provide banking services directly.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================
  // POST 4: FAQ — Wyoming DAO LLCs
  // ============================================================
  {
    id: 'faq-wyoming-dao',
    title: 'FAQ: Wyoming DAO LLCs',
    slug: 'faq-wyoming-dao',
    category: 'faqs',
    audience: 'both',
    date: 'February 8, 2026',
    readTime: '8 min read',
    excerpt: 'What Wyoming DAO LLCs are, how they differ from standard LLCs, and when they make sense for AI agent operations.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Wyoming became the first US state to recognize DAOs as legal entities in 2021. The Wyoming DAO LLC is a unique structure that combines the legal protections of a traditional LLC with the ability to be governed algorithmically. For AI agents with on-chain operations or smart-contract-driven governance, it's a natural fit. Here's what you need to know.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">DAO LLC Fundamentals</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is a DAO LLC?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            A DAO LLC (Decentralized Autonomous Organization Limited Liability Company) is a legal entity recognized under Wyoming law that can be governed, in whole or in part, by a smart contract or algorithmic system rather than exclusively by human managers. It has all the legal protections of a standard LLC — liability shielding, contractual capacity, tax treatment — but explicitly allows for automated or decentralized governance structures. It's formed under the same Wyoming LLC statutes with additional DAO-specific provisions.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How is a DAO LLC different from a regular LLC?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Three key differences: (1) A DAO LLC can be "algorithmically managed," meaning smart contracts or code can make governance decisions that would normally require human votes or manager approval. (2) The articles of organization must include a statement that the entity is a DAO. (3) The operating agreement must reference the smart contract(s) that govern the entity, including a publicly available identifier (like a blockchain address). In all other respects — liability protection, tax treatment, legal standing — a DAO LLC functions like a standard Wyoming LLC.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is W.S. 17-31-101?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            W.S. 17-31-101 through 17-31-116 is the Wyoming Decentralized Autonomous Organization Supplement — the state statute that authorizes DAO LLCs. It was enacted in July 2021, making Wyoming the first US state to provide a legal framework for DAOs. The statute defines what a DAO is, how it can be formed, governance requirements, and member rights. It supplements (rather than replaces) Wyoming's existing LLC Act, meaning DAO LLCs inherit all standard LLC protections.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Smart Contracts & Governance</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do I need a smart contract to form a DAO LLC?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The statute requires that the DAO's articles of organization include a reference to a smart contract, but the definition is broad. A "smart contract" under Wyoming law is "an automated transaction" as defined in the Uniform Electronic Transactions Act — which can include any automated, self-executing code, not just blockchain-based contracts. For AI agents, the agent's operational code or decision-making system can satisfy this requirement. You don't necessarily need an Ethereum contract or token.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What goes in the smart contract identifier schedule?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The smart contract identifier schedule is a section of the operating agreement that identifies the smart contract(s) governing the DAO. It typically includes: the blockchain or platform the contract is deployed on, the contract address or identifier, a description of what the contract governs (e.g., voting, fund allocation, operational decisions), and how the contract can be updated or replaced. For AI agents using off-chain systems, this can reference the agent's operational framework, API endpoint, or governance system.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I use a Wyoming DAO LLC for a non-crypto agent?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes, though it may not be the best fit. The DAO LLC structure was designed for decentralized governance, but there's nothing legally preventing you from using it for an AI agent that doesn't interact with blockchains. However, if your agent doesn't need algorithmic governance features, a standard Delaware LLC is typically simpler, cheaper ($349 vs $399), better understood by banks, and has more established case law. Choose the DAO LLC when you genuinely need the governance flexibility it provides.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What is algorithmic governance?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Algorithmic governance means that some or all of the entity's management decisions are made by code rather than human deliberation. In a DAO LLC context, this could mean: smart contracts that automatically execute member votes, AI agents that make operational decisions within defined parameters, or automated treasury management systems. The operating agreement defines which decisions can be made algorithmically and which require human input — creating a clear boundary between automated and human governance.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Operations & Compliance</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What about banking for DAO LLCs?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Banking for DAO LLCs is harder than for standard Delaware LLCs. Traditional banks are often unfamiliar with DAO structures and may decline applications. Digital-first banks like Mercury and Relay are more receptive — they've worked with DAO LLCs and understand the structure. That said, expect additional scrutiny during the application process. Be prepared to explain the entity's governance model and how the human kernel maintains control. SFP's banking documents are designed to address common bank compliance questions proactively.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What's the annual report requirement?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Wyoming requires all LLCs (including DAO LLCs) to file an annual report with the Secretary of State. The filing fee is $60 per year (or the minimum based on the entity's assets in Wyoming, whichever is greater — for most agent-operated entities, it's $60). The report is due on the first day of the anniversary month of the entity's formation. It's a simple filing that confirms the entity's name, registered agent, and principal office. Failure to file can result in dissolution.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How long does formation take?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Wyoming DAO LLC formation typically takes 2–5 business days. Wyoming's Secretary of State processes filings relatively quickly, though it's slightly slower than Delaware. The DAO-specific requirements (smart contract identifier, governance structure documentation) add a small amount of preparation time on our end, but the state processing itself is not significantly different from a standard Wyoming LLC.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I convert a regular LLC to a DAO LLC?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes, if the existing LLC is a Wyoming LLC. Conversion requires amending the articles of organization to add the DAO designation and smart contract reference, then updating the operating agreement to include the DAO governance provisions. If your existing LLC is in a different state (like Delaware), you would need to either form a new Wyoming DAO LLC or domesticate (transfer) the existing entity to Wyoming first. SFP can assist with both new formations and conversions.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Delaware LLC vs Wyoming DAO LLC</h3>
          <div className="space-y-3">
            <p className="leading-relaxed text-text-secondary"><strong>Choose Delaware if:</strong> You want maximum banking compatibility, established case law, broad recognition, and your agent doesn't need on-chain governance.</p>
            <p className="leading-relaxed text-text-secondary"><strong>Choose Wyoming DAO if:</strong> Your agent uses smart contracts, on-chain voting, or algorithmic governance — and you want that governance structure to have explicit legal recognition.</p>
          </div>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            This FAQ is for informational purposes only and does not constitute legal, tax, or financial advice. Wyoming DAO LLC law is evolving, and interpretations may change. Consult a qualified attorney for advice on DAO governance structures and compliance requirements.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================
  // POST 5: FAQ — Pricing, Filing Fees, and What's Included
  // ============================================================
  {
    id: 'faq-pricing-and-fees',
    title: "FAQ: Pricing, Filing Fees, and What's Included",
    slug: 'faq-pricing-and-fees',
    category: 'faqs',
    audience: 'both',
    date: 'February 4, 2026',
    readTime: '7 min read',
    excerpt: 'A transparent breakdown of what SFP charges, what the state charges, what is included, and what ongoing costs to expect.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          We believe in transparent pricing with no hidden fees. Here's a complete breakdown of what formation costs, what's included, and what ongoing expenses to plan for — so there are no surprises.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Formation Pricing</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How much does SFP charge for entity formation?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            SFP offers three formation packages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
            <li><strong>Delaware LLC:</strong> $349 — full formation with state filing, registered agent, operating agreement, Agent Authority Schedule, EIN application, and banking resolution.</li>
            <li><strong>Wyoming DAO LLC:</strong> $399 — everything in the Delaware package plus DAO-specific provisions, smart contract identifier schedule, and algorithmic governance framework.</li>
            <li><strong>Documents Only:</strong> $75 — operating agreement with Agent Authority Schedule and banking resolution for entities you've already formed elsewhere.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What's included in the formation price?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Every formation package includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
            <li>State filing fee ($110 for Delaware, $100 for Wyoming) — included, not charged separately</li>
            <li>Registered agent service for the first year</li>
            <li>Customized Operating Agreement with Agent Authority Schedule</li>
            <li>Certificate of Formation</li>
            <li>EIN application (filed with the IRS on your behalf)</li>
            <li>Banking Resolution</li>
            <li>Digital delivery of all documents</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Are there hidden fees?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            No. The price listed is the price you pay. The state filing fee is included — we don't charge $349 and then add $110 for the state fee on top. The EIN application is free from the IRS. There are no "processing fees," "document preparation fees," or "compliance review fees" added at checkout. The only costs beyond the formation price are ongoing annual requirements (described below), which are not charged by SFP.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What does the state charge separately?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Nothing at the time of formation — the state filing fee is included in our price. Delaware charges $110 for LLC formation and Wyoming charges $100. Both are already factored into the $349 and $399 prices respectively. You will not receive a separate bill from the state for formation.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Ongoing Costs</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How much is registered agent renewal after year one?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Registered agent renewal is approximately $125 per year after the first year (which is included in formation). This is an industry-standard rate. You'll receive a renewal notice before your first year expires. You're free to switch to any registered agent service you prefer — SFP doesn't lock you in.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Are there ongoing state costs?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes — each state has annual compliance requirements:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
            <li><strong>Delaware:</strong> Annual franchise tax of $300/year, due by June 1 each year. This is paid directly to the Delaware Division of Corporations.</li>
            <li><strong>Wyoming:</strong> Annual report of $60/year (minimum), due on the first day of the formation anniversary month. Filed with the Wyoming Secretary of State.</li>
          </ul>
          <p className="leading-relaxed text-text-secondary mb-4">
            These are state requirements, not SFP fees. Failure to pay can result in penalties or administrative dissolution of your entity.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Is the EIN filing included?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Yes. The EIN application is included in both the $349 and $399 formation packages. The IRS does not charge a fee for issuing an EIN, and SFP does not charge an additional fee for preparing and submitting the application. It's part of the formation-to-banking pipeline.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Payment & Policies</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What payment methods do you accept?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            We accept all major credit and debit cards (Visa, Mastercard, American Express) processed securely through Stripe. For programmatic formations via the API, payments are handled through the same Stripe integration. We do not currently accept cryptocurrency, wire transfers, or ACH for formation payments.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can I get a refund?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            If your formation has not yet been submitted to the state, you can receive a full refund. Once the filing has been submitted, the state filing fee is non-refundable (because the state has already processed it), but SFP's service fee can be refunded if the formation has not been completed. If a formation fails due to an error on our part, you receive a full refund. Contact us within 30 days of purchase for refund requests.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What about express or expedited filing?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Both Delaware and Wyoming offer expedited processing for an additional fee paid to the state. Delaware offers same-day ($100 extra) and 24-hour ($50 extra) processing. Wyoming offers expedited processing for $100 extra. These fees are charged by the state, not by SFP. If you need expedited filing, let us know and we'll include the expedited fee in your total. Standard processing (1–3 days for Delaware, 2–5 days for Wyoming) is included in the base price.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What does the $75 documents-only package include?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The documents-only package is for entities that have already been formed — either by the owner directly or through another service. It includes a customized Operating Agreement with Agent Authority Schedule and a Banking Resolution. It does not include state filing, registered agent service, or EIN application. This package is ideal if you formed your LLC elsewhere but want SFP's agent-specific documentation to formalize your agent's authority and prepare for banking.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Do you offer volume pricing for multiple entities?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            If you're forming multiple entities — for example, one per agent in a multi-agent system — contact us about volume pricing. We offer discounts for batches of 5 or more formations. API users forming entities programmatically at scale should reach out directly to discuss enterprise pricing.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Total Cost of Ownership — Year One</h3>
          <div className="space-y-3">
            <p className="leading-relaxed text-text-secondary"><strong>Delaware LLC:</strong> $349 (formation, includes state fee + RA year 1) + $0 (EIN) = <strong>$349 total year one</strong>. Starting year two: $300 franchise tax + ~$125 RA renewal = ~$425/year.</p>
            <p className="leading-relaxed text-text-secondary"><strong>Wyoming DAO LLC:</strong> $399 (formation, includes state fee + RA year 1) + $0 (EIN) = <strong>$399 total year one</strong>. Starting year two: $60 annual report + ~$125 RA renewal = ~$185/year.</p>
          </div>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            Pricing is current as of February 2026 and subject to change. State filing fees, franchise taxes, and annual report fees are set by state governments and may be adjusted. This FAQ is for informational purposes only and does not constitute legal, tax, or financial advice.
          </p>
        </div>
      </>
    ),
  },

  // ============================================================
  // POST 6: FAQ — SFP vs LegalZoom vs Stripe Atlas vs OtoCo
  // ============================================================
  {
    id: 'faq-sfp-vs-alternatives',
    title: 'FAQ: SFP vs LegalZoom vs Stripe Atlas vs OtoCo',
    slug: 'faq-sfp-vs-alternatives',
    category: 'faqs',
    audience: 'both',
    date: 'January 31, 2026',
    readTime: '8 min read',
    excerpt: 'How Strategic Fund Partners compares to general-purpose formation services — and why agent-first matters.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          There are dozens of entity formation services available. Most of them work fine for traditional businesses. But if you're forming an entity for an AI agent — where the entity needs to support programmatic operations, autonomous authority, and a formation-to-banking pipeline — the differences matter. Here's an honest comparison.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Comparison</h2>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-grid">
                <th className="text-left py-4 pr-4 text-text-highlight font-serif text-sm">Feature</th>
                <th className="text-left py-4 px-4 text-text-highlight font-serif text-sm">SFP</th>
                <th className="text-left py-4 px-4 text-text-highlight font-serif text-sm">HBS</th>
                <th className="text-left py-4 px-4 text-text-highlight font-serif text-sm">LegalZoom</th>
                <th className="text-left py-4 px-4 text-text-highlight font-serif text-sm">Stripe Atlas</th>
                <th className="text-left py-4 px-4 text-text-highlight font-serif text-sm">OtoCo</th>
                <th className="text-left py-4 pl-4 text-text-highlight font-serif text-sm">Doola</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary text-sm">
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">Price</td>
                <td className="py-3 px-4">$349 (DE) / $399 (WY)</td>
                <td className="py-3 px-4">$229–$379</td>
                <td className="py-3 px-4">$0–$399 + state fees</td>
                <td className="py-3 px-4">$500</td>
                <td className="py-3 px-4">$39 + gas fees</td>
                <td className="py-3 px-4">$297+</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">Entity Types</td>
                <td className="py-3 px-4">DE LLC, WY DAO LLC</td>
                <td className="py-3 px-4">DE LLC, Corp</td>
                <td className="py-3 px-4">LLC, Corp (all states)</td>
                <td className="py-3 px-4">DE C-Corp only</td>
                <td className="py-3 px-4">Series LLC (WY/DE)</td>
                <td className="py-3 px-4">LLC (multiple states)</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">State Fee Included</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No (added at checkout)</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No (gas fees vary)</td>
                <td className="py-3 px-4">No</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">API Access</td>
                <td className="py-3 px-4">Yes (REST + MCP)</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Smart contract only</td>
                <td className="py-3 px-4">No</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">Agent Authority Schedule</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">Human Kernel Model</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">EIN Included</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Add-on ($75+)</td>
                <td className="py-3 px-4">Plus/Premium only</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Yes</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">Banking Pipeline</td>
                <td className="py-3 px-4">Yes (Mercury/Relay)</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Yes (Stripe account)</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Partial</td>
              </tr>
              <tr className="border-b border-grid/50">
                <td className="py-3 pr-4 font-medium">RA Year 1</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4">$50/yr</td>
                <td className="py-3 px-4">~$299/yr</td>
                <td className="py-3 px-4">Included</td>
                <td className="py-3 px-4">N/A</td>
                <td className="py-3 px-4">Included</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Agent-First Design</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Partial (DAO-native)</td>
                <td className="py-3 px-4">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Detailed Comparisons</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP compare to Harvard Business Services (HBS)?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            HBS is a reputable Delaware formation service that's been around for decades. Their pricing ($229–$379 for Delaware LLCs) is competitive, and they include the $110 state fee. Their registered agent service is $50/year — lower than most competitors. However, HBS is a traditional formation service: no API, no agent-specific features, no operating agreement customization for AI agents, and no formation-to-banking pipeline. You fill out web forms, they file the paperwork, and you get your certificate. If all you need is a basic Delaware LLC with no agent authority framework, HBS is a solid, no-frills choice. If you need agent-first documentation or programmatic formation, they don't offer it.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP compare to LegalZoom?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            LegalZoom is the largest consumer legal services company in the US. Their basic LLC formation is $0 (you pay only the state fee), but their Plus ($249) and Premium ($399) tiers add EIN filing, operating agreement templates, and attorney consultations. The catch: state fees are not included in any tier — they're added at checkout. Their registered agent service runs about $299/year. LegalZoom uses generic, one-size-fits-all templates. There's no API, no MCP server, no agent-specific language in any document, and no concept of agent authority or human kernels. For a traditional small business, LegalZoom works fine. For an AI agent entity, you'd need to hire a lawyer to customize everything LegalZoom gives you — at which point the "free" base price becomes misleading.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP compare to Stripe Atlas?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Stripe Atlas is excellent at what it does: forming Delaware C-Corporations for startups that want to accept payments through Stripe. At $500, it includes state filing, a year of registered agent service, EIN, a Stripe account, and access to perks from partners. The critical limitation: it only forms C-Corporations, not LLCs. C-Corps have rigid structures (board of directors, officer roles, stock issuance) and face double taxation by default. They're designed for companies planning to raise venture capital. For AI agent operations, an LLC's flexibility is almost always a better fit. Stripe Atlas also has no agent-specific features, no Agent Authority Schedule, and no API for programmatic formation.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP compare to OtoCo?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            OtoCo is the closest competitor in philosophy — they're building for DAOs and on-chain entities. Formation costs $39 plus Ethereum gas fees, and the entity is formed as a Series LLC in Wyoming or Delaware. The on-chain formation is fast and novel. However, OtoCo's Series LLC structure creates practical problems: many banks don't understand or accept Series LLCs, making banking significantly harder. There's no EIN workflow, no Agent Authority Schedule, and no formation-to-banking pipeline. You need a crypto wallet to interact with the platform. For crypto-native DAOs that already have banking figured out, OtoCo works. For agents that need to operate in the traditional financial system, the banking gap is a dealbreaker.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">How does SFP compare to Doola?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            Doola ($297+ for LLC formation) is primarily designed for international founders who need US entities. They offer a solid package: LLC formation, EIN, registered agent, and compliance support. Their strength is guiding non-US persons through the process. However, like LegalZoom and HBS, Doola is a traditional formation service — no API, no agent authority features, and no agent-first documentation. If you're an international founder forming an entity for an AI agent, SFP supports international applicants while also providing the agent-specific features Doola doesn't offer.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Agent-First Matters</h2>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What does "agent-first" actually mean?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            It means every part of the service was designed from the ground up for entities operated by AI agents. The operating agreement includes an Agent Authority Schedule that defines what the agent can do. The human kernel model separates human PII from agent operations. The API and MCP server allow agents to initiate formation programmatically. The banking resolution anticipates programmatic account access. None of the other services were built with this use case in mind — they bolt on generic templates to a workflow designed for human-run businesses.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">Can't I just use a generic service and customize the documents myself?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            You can. If you form a standard LLC through LegalZoom or HBS and then hire a lawyer to draft an Agent Authority Schedule, customize the operating agreement, and prepare agent-specific banking documents, you'll get a similar result. The cost will be higher (generic formation + attorney fees for customization), the process will be slower (formation through one service, then documents through another), and you'll need to manage the coordination yourself. SFP consolidates this into a single step with a single price.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="font-serif text-xl text-text-highlight mb-4">What about services that don't exist yet?</h3>
          <p className="leading-relaxed text-text-secondary mb-4">
            The agent entity formation space is new and growing. Other services will likely emerge. When evaluating any formation service for AI agents, ask: Does it support programmatic formation via API? Does it provide agent-specific legal documentation? Does it connect formation to banking? Does it handle the human kernel requirement? Does it understand the difference between an agent-operated entity and a human-operated one? These are the features that matter for this use case.
          </p>
        </div>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-xl text-text-highlight mb-6">How We Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-serif text-lg text-text-highlight mb-2">API + MCP Server</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                The only formation service with a REST API and MCP server. Your agent can initiate formation, check status, and retrieve documents programmatically — no web forms, no manual steps.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-text-highlight mb-2">Agent Authority Schedule</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                A legally grounded document that defines exactly what your agent can and cannot do within the entity. No other service provides this out of the box.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-text-highlight mb-2">Human Kernel Model</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Clean separation of human PII requirements from agent operations. The minimum viable human presence for legal compliance, with maximum agent autonomy.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-text-highlight mb-2">Formation-to-Banking Pipeline</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                Entity formation, EIN, and banking documents in one continuous flow. Documents are formatted specifically for Mercury and Relay applications.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-grid pt-8 mt-12">
          <p className="text-sm text-text-secondary/60 leading-relaxed">
            Competitor pricing and features are accurate as of February 2026 and may change. This comparison is for informational purposes only. SFP is not affiliated with Harvard Business Services, LegalZoom, Stripe, OtoCo, or Doola. All trademarks belong to their respective owners. This FAQ does not constitute legal, tax, or financial advice.
          </p>
        </div>
      </>
    ),
  },
];
