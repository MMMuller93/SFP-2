import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './types';

export const postFormationPosts: BlogPost[] = [
  // ──────────────────────────────────────────────
  // Post 1: Getting an EIN
  // ──────────────────────────────────────────────
  {
    id: 'getting-ein-timeline',
    title: 'Getting an EIN: Timeline, Process, and What to Expect',
    category: 'post-formation',
    audience: 'both',
    date: 'February 18, 2026',
    readTime: '7 min read',
    excerpt: 'Your LLC is formed — now you need an EIN from the IRS. Here is how the process works, how long it takes, and what can go wrong.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your LLC is formed. Now you need an Employer Identification Number (EIN) before you can open a bank account, hire anyone, or file taxes. Here is exactly how the process works, how long it takes, and what can go wrong.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is an EIN?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          An EIN is a nine-digit number the IRS assigns to your business entity. Think of it as a Social Security number for your LLC. You need it for tax filings, bank accounts, payroll, and most business contracts.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Getting one is free. The IRS does not charge for EIN issuance. If anyone charges you a fee for "EIN filing," they are charging for their service, not for the number itself.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">SFP includes EIN filing</strong> in every formation package. After your human kernel session is complete, we file IRS Form SS-4 on your behalf automatically.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">IRS Form SS-4: The Application</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Form SS-4 is the official EIN application. It asks for the entity name, address, formation date, entity type, and the responsible party. The responsible party must be a person with an SSN or ITIN -- not another entity.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For agent-formed LLCs, the human principal identified during the kernel session serves as the responsible party. This is a legal requirement. The IRS needs a real person attached to every EIN.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Required Information</h3>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Legal name of entity (exactly as filed with the state)</li>
          <li>Mailing address</li>
          <li>Responsible party name, SSN or ITIN</li>
          <li>Entity type (LLC)</li>
          <li>Date of formation</li>
          <li>State of formation</li>
          <li>Reason for applying (new business)</li>
          <li>Expected number of employees (if applicable)</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How Long It Takes</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Timeline depends on the filing method and IRS workload. Here is what to expect:
        </p>

        <table className="w-full border border-grid">
          <thead>
            <tr className="border-b border-grid bg-surface/30">
              <th className="text-left p-4 text-text-highlight font-medium">Method</th>
              <th className="text-left p-4 text-text-highlight font-medium">Timeline</th>
              <th className="text-left p-4 text-text-highlight font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary">Online (IRS website)</td>
              <td className="p-4 text-text-secondary">Immediate</td>
              <td className="p-4 text-text-secondary">Only available to U.S.-based responsible parties with SSN. Limited hours (Mon-Fri, 7am-10pm ET).</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary">Fax</td>
              <td className="p-4 text-text-secondary">4-7 business days</td>
              <td className="p-4 text-text-secondary">IRS faxes the EIN assignment letter back. Can take longer during peak periods.</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary">Phone</td>
              <td className="p-4 text-text-secondary">Same day (if you get through)</td>
              <td className="p-4 text-text-secondary">Call 800-829-4933. Expect long hold times. Only for international applicants or ITIN holders.</td>
            </tr>
            <tr className="border-b border-grid">
              <td className="p-4 text-text-secondary">Mail</td>
              <td className="p-4 text-text-secondary">4-6 weeks</td>
              <td className="p-4 text-text-secondary">Slowest option. Not recommended.</td>
            </tr>
          </tbody>
        </table>

        <p className="leading-relaxed text-text-secondary mb-6 mt-6">
          For most SFP formations, we use the fax method. Typical turnaround is 4-7 business days, though during tax season (January through April) it can stretch to 2 weeks.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Can Cause Delays</h2>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-text-highlight">IRS busy signals:</strong> During peak periods, the IRS fax line can be overwhelmed. We retry automatically until the submission goes through.</li>
          <li><strong className="text-text-highlight">Manual review:</strong> If the entity name closely matches an existing entity, the IRS may flag it for manual review. This adds 1-2 weeks.</li>
          <li><strong className="text-text-highlight">SSN/ITIN mismatch:</strong> If the responsible party's name does not exactly match IRS records for their SSN or ITIN, the application is rejected. Double-check your legal name.</li>
          <li><strong className="text-text-highlight">Recent prior application:</strong> The IRS limits one EIN per responsible party per day. If you formed multiple entities, they are processed sequentially.</li>
        </ul>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">What You Get</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            The IRS issues a CP 575 notice -- your official EIN assignment letter. This is the document your bank will ask for when you open a business account. Keep it safe. If you lose it, you can request a replacement (147C letter), but it takes time.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Automatic Filing</h3>
            <p className="text-sm text-text-secondary">We file Form SS-4 immediately after your human kernel session completes. No extra steps on your end.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Status Tracking</h3>
            <p className="text-sm text-text-secondary">Your dashboard shows real-time EIN application status. We notify you the moment it arrives.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Retry Handling</h3>
            <p className="text-sm text-text-secondary">If the IRS fax line is busy or an issue arises, we handle retries and troubleshooting automatically.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Included in Formation</h3>
            <p className="text-sm text-text-secondary">EIN filing is included in every formation package. DE LLC ($349), WY DAO LLC ($399), docs-only ($75).</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Next step:</strong> Once your EIN arrives, you are ready to{' '}
          <Link to="/blog/opening-business-bank-account" className="text-accent hover:underline">open a business bank account</Link>.
          See our <Link to="/services/ein-service" className="text-accent hover:underline">EIN service page</Link> for details on what is included.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute tax or legal advice. Consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 2: Opening a Business Bank Account
  // ──────────────────────────────────────────────
  {
    id: 'opening-business-bank-account',
    title: 'Opening a Business Bank Account for Your LLC',
    category: 'post-formation',
    audience: 'both',
    date: 'February 14, 2026',
    readTime: '8 min read',
    excerpt: 'Which banks work best for new LLCs, what documents you need, and how to navigate the application process — including Mercury and Relay.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A business bank account separates your personal finances from your LLC's finances. This separation is not optional -- it is what protects your personal assets. Here is what you need, which banks work best, and how to avoid rejection.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why You Need a Separate Account</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you mix personal and business funds, you risk "piercing the corporate veil." Courts can hold you personally liable for LLC debts if you treat the entity's money as your own. A dedicated business account is the simplest way to maintain the separation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Beyond legal protection, a business account makes bookkeeping straightforward. Every transaction in the account is a business transaction. No sorting required at tax time.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What You Need to Open an Account</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Banks require documentation proving your LLC exists and that you are authorized to act on its behalf. Gather these before you apply:
        </p>

        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-text-highlight">EIN confirmation letter (CP 575):</strong> The IRS assignment letter proving your tax ID. See our <Link to="/blog/getting-ein-timeline" className="text-accent hover:underline">EIN guide</Link> for how to get this.</li>
          <li><strong className="text-text-highlight">Certificate of Formation:</strong> The state-issued document proving your LLC was legally formed. SFP provides this as part of formation.</li>
          <li><strong className="text-text-highlight">Operating Agreement:</strong> Your LLC's internal governance document. Even single-member LLCs need one. Banks want to see who has authority.</li>
          <li><strong className="text-text-highlight">Banking Resolution:</strong> A formal document authorizing specific individuals to open and manage bank accounts on behalf of the LLC. SFP generates this for you.</li>
          <li><strong className="text-text-highlight">Government-issued photo ID:</strong> Driver's license or passport for each person who will be a signer on the account.</li>
        </ul>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">Document Checklist</h3>
          <table className="w-full border border-grid">
            <thead>
              <tr className="border-b border-grid bg-surface/30">
                <th className="text-left p-4 text-text-highlight font-medium">Document</th>
                <th className="text-left p-4 text-text-highlight font-medium">Source</th>
                <th className="text-left p-4 text-text-highlight font-medium">Included by SFP?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">EIN Letter (CP 575)</td>
                <td className="p-4 text-text-secondary">IRS</td>
                <td className="p-4 text-text-secondary">Yes -- we file for you</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Certificate of Formation</td>
                <td className="p-4 text-text-secondary">State filing office</td>
                <td className="p-4 text-text-secondary">Yes</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Operating Agreement</td>
                <td className="p-4 text-text-secondary">SFP-generated</td>
                <td className="p-4 text-text-secondary">Yes</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Banking Resolution</td>
                <td className="p-4 text-text-secondary">SFP-generated</td>
                <td className="p-4 text-text-secondary">Yes</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Photo ID</td>
                <td className="p-4 text-text-secondary">You</td>
                <td className="p-4 text-text-secondary">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Recommended Banks</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Not all banks are friendly to newly formed LLCs. Some require months of operating history. These two consistently work well for our clients:
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Mercury</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Mercury is the best option for startups and tech-focused businesses. They are built for online businesses, accept newly formed entities, and offer a clean dashboard with strong API integrations. No minimum balance. No monthly fees. Application is entirely online.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Relay</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Relay is a strong alternative. They offer multiple sub-accounts for expense categorization, no hidden fees, and a straightforward application process. Good for businesses that want simple budgeting tools built into their banking.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">Avoid traditional big banks for initial setup.</strong> Chase, Bank of America, and Wells Fargo often require in-branch visits, have higher documentation thresholds, and are more likely to reject newly formed entities. You can always switch later once you have operating history.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Timeline</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Expect the application-to-approval process to take 1-3 weeks. Mercury typically approves within 3-5 business days. Relay is similar. Traditional banks can take 2-4 weeks.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          The most common delay is missing documentation. Have everything ready before you start the application.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Tips to Avoid Rejection</h2>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-text-highlight">Match names exactly.</strong> The name on your EIN letter, Certificate of Formation, and bank application must match character for character. "LLC" vs "L.L.C." matters.</li>
          <li><strong className="text-text-highlight">Use a real business address.</strong> PO boxes are sometimes rejected. A registered agent address may also be flagged. Use your actual operating address if possible.</li>
          <li><strong className="text-text-highlight">Have your operating agreement ready.</strong> Banks want to see who owns the LLC and who has signing authority. A professionally drafted agreement signals legitimacy.</li>
          <li><strong className="text-text-highlight">Describe your business clearly.</strong> Vague descriptions like "consulting" or "general business" trigger additional review. Be specific about what your entity does.</li>
          <li><strong className="text-text-highlight">Apply to one bank at a time.</strong> Multiple simultaneous applications can trigger fraud flags. Start with your top choice.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Banking Document Package</h3>
            <p className="text-sm text-text-secondary">Every formation includes the operating agreement, banking resolution, and EIN filing -- the three documents you need from us.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Bank-Ready Format</h3>
            <p className="text-sm text-text-secondary">Documents are formatted to meet bank compliance requirements. No back-and-forth with the bank over formatting.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Application Support</h3>
            <p className="text-sm text-text-secondary">If your application is flagged or rejected, we help troubleshoot and resubmit with corrected documentation.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Banking Package</h3>
            <p className="text-sm text-text-secondary">See our <Link to="/services/banking-package" className="text-accent hover:underline">banking package</Link> for a complete walkthrough and additional support options.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Related:</strong>{' '}
          <Link to="/blog/getting-ein-timeline" className="text-accent hover:underline">Getting an EIN: Timeline and Process</Link>{' | '}
          <Link to="/guides/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC Complete Guide</Link>{' | '}
          <Link to="/faq/banking" className="text-accent hover:underline">Banking FAQ</Link>
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute financial or legal advice. Consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 3: BOI Reporting — Currently Paused
  // ──────────────────────────────────────────────
  {
    id: 'boi-reporting',
    title: 'Beneficial Ownership Information (BOI) Reporting: Current Status',
    category: 'post-formation',
    audience: 'both',
    date: 'February 10, 2026',
    readTime: '4 min read',
    excerpt: 'The CTA\'s BOI reporting requirement has been paused for most domestic entities. Here is the current status and what it means for your LLC.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          The Corporate Transparency Act's BOI reporting requirement has been effectively paused for most domestic entities. Federal courts issued nationwide injunctions, and FinCEN subsequently issued interim final rules removing the mandatory filing obligation for U.S.-formed companies. Here is what you need to know.
        </p>

        <hr className="border-grid mb-12" />

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">Current Status (as of 2026)</h3>
          <ul className="space-y-3 text-text-secondary pl-5 list-disc marker:text-accent">
            <li><strong>Domestic entities are not currently required to file BOI reports.</strong> FinCEN's interim final rules removed the mandatory filing obligation for companies formed in the United States.</li>
            <li><strong>No penalties are being assessed</strong> for non-filing by domestic entities at this time.</li>
            <li><strong>This may change.</strong> FinCEN could reinstate the requirement through future rulemaking. Monitor <a href="https://www.fincen.gov/boi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">fincen.gov/boi</a> for updates.</li>
            <li><strong>Foreign-owned entities</strong> may still have reporting obligations. If your LLC has foreign beneficial owners, consult an attorney.</li>
          </ul>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Background</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          The Corporate Transparency Act (CTA) was enacted in 2021 and required most small LLCs and corporations to file Beneficial Ownership Information reports with FinCEN. The requirement was set to take effect for new entities formed after January 1, 2024.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Multiple federal court challenges resulted in nationwide injunctions blocking enforcement. FinCEN subsequently issued interim final rules that effectively removed the filing requirement for domestic reporting companies. The rulemaking process for a potential revised rule is ongoing.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What This Means for Your LLC</h2>

        <p className="leading-relaxed text-text-secondary mb-6">
          If you are forming a new LLC through SFP, you do not need to file a BOI report at this time. We monitor FinCEN rulemaking and will notify you if the requirement is reinstated.
        </p>

        <p className="leading-relaxed text-text-secondary mb-6">
          Your primary ongoing compliance obligations remain: <Link to="/agents/insights/delaware-annual-franchise-tax" className="text-accent hover:underline">Delaware franchise tax</Link> ($300/year, due June 1) or Wyoming annual report ($60, due on formation anniversary), plus registered agent maintenance.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Regulatory Monitoring</h3>
            <p className="text-sm text-text-secondary">We track FinCEN rulemaking. If BOI reporting is reinstated, we will notify you and handle the filing.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Compliance Dashboard</h3>
            <p className="text-sm text-text-secondary">Your entity dashboard tracks all active compliance obligations — franchise tax, annual reports, registered agent renewals.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          This article is for informational purposes only and does not constitute legal advice. Regulatory requirements change frequently. Monitor FinCEN.gov for the latest BOI reporting status. Consult a qualified attorney for advice specific to your situation.
        </p>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 4: Amending an Operating Agreement
  // ──────────────────────────────────────────────
  {
    id: 'amending-operating-agreement',
    title: 'How to Amend an Operating Agreement',
    category: 'post-formation',
    audience: 'both',
    date: 'February 6, 2026',
    readTime: '5 min read',
    excerpt: 'Your operating agreement is not set in stone. Here is when you need an amendment, how the process works, and what SFP handles for you.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your operating agreement is not set in stone. As your business evolves, you may need to add members, change authority structures, or update profit distribution. Here is when you need an amendment, how the process works, and what SFP handles for you.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When You Need an Amendment</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          An amendment is required whenever the operating agreement's terms no longer reflect reality. Common triggers:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-text-highlight">Adding or removing members:</strong> New co-founders, investors, or departing members change ownership structure.</li>
          <li><strong className="text-text-highlight">Changing ownership percentages:</strong> Investment rounds, buyouts, or restructuring.</li>
          <li><strong className="text-text-highlight">Modifying agent authority:</strong> Expanding or restricting what the AI agent can do on behalf of the LLC. See <Link to="/blog/updating-agent-authority" className="text-accent hover:underline">Updating Agent Authority Scope</Link>.</li>
          <li><strong className="text-text-highlight">Changing profit/loss distribution:</strong> Moving from equal split to proportional or custom allocation.</li>
          <li><strong className="text-text-highlight">Updating management structure:</strong> Switching from member-managed to manager-managed, or vice versa.</li>
          <li><strong className="text-text-highlight">Adding new provisions:</strong> Buy-sell agreements, non-compete clauses, dispute resolution procedures.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Amendment Process</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 1: Draft the Amendment</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The amendment document identifies which sections of the original agreement are being changed and states the new terms. It references the original agreement by date and specifies the effective date of the changes.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 2: Get Member Approval</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Most operating agreements require unanimous consent or a specific majority vote to amend. Check your current agreement for the amendment provision. If it is silent, Delaware default rules require unanimous written consent of all members.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 3: Execute and Store</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          All members sign the amendment. It becomes part of the operating agreement. You do not need to file it with the state -- operating agreements are internal documents. However, you may need to provide the updated agreement to banks, partners, or other third parties.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">State filing exception:</strong> If the amendment changes the LLC's name, registered agent, or registered office, you must also file an amendment with the Delaware Division of Corporations (or your state's equivalent). SFP handles this filing.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Amendment vs. Restatement</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you are making many changes at once, consider an "Amended and Restated Operating Agreement" instead of a standalone amendment. This replaces the entire original document with a clean, updated version. It is easier to read and reduces confusion about which terms are current.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For one or two changes, a simple amendment is sufficient. For three or more changes, or if the original agreement has already been amended multiple times, a full restatement is cleaner.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Document Generation</h3>
            <p className="text-sm text-text-secondary">SFP generates the amendment document based on your requested changes. Properly formatted, legally referenced, ready for signatures.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Human Kernel Sign-Off</h3>
            <p className="text-sm text-text-secondary">Material changes trigger a new human kernel session to verify the principal approves the modifications.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">State Filing</h3>
            <p className="text-sm text-text-secondary">If the amendment requires a state filing (name change, registered agent update), we handle the submission and fees.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Version Control</h3>
            <p className="text-sm text-text-secondary">Your dashboard maintains a complete history of all operating agreement versions and amendments.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Related:</strong>{' '}
          <Link to="/blog/updating-agent-authority" className="text-accent hover:underline">Updating Agent Authority Scope</Link>{' | '}
          <Link to="/services/formation-service" className="text-accent hover:underline">Formation Service</Link>
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute legal advice. Consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 5: Updating Agent Authority
  // ──────────────────────────────────────────────
  {
    id: 'updating-agent-authority',
    title: 'Updating Agent Authority Scope After Formation',
    category: 'post-formation',
    audience: 'both',
    date: 'February 2, 2026',
    readTime: '5 min read',
    excerpt: 'Your agent\'s authority scope was defined during formation. Here is how to update capabilities, restrict permissions, and trigger a new human kernel session.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your agent's authority scope was defined during formation. But businesses change. You may need to grant new capabilities or restrict existing ones. Here is how authority scope updates work and what triggers a new human kernel session.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">What Is Authority Scope?</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Authority scope defines exactly what your AI agent can and cannot do on behalf of the LLC. It is encoded in a structured JSON format within your operating agreement and enforced programmatically. Every action the agent takes is checked against this scope.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          This is not a suggestion or guideline. It is a hard boundary. If the agent attempts an action outside its scope, the action is blocked and the principal is notified.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">Example: authority_scope JSON</h3>
          <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
{`{
  "authority_scope": {
    "financial": {
      "max_transaction": 5000,
      "approved_categories": ["software", "hosting", "contractors"],
      "requires_approval_above": 2500
    },
    "contracts": {
      "can_sign": true,
      "max_term_months": 12,
      "max_value": 10000
    },
    "hiring": {
      "can_hire_contractors": true,
      "can_hire_employees": false
    },
    "banking": {
      "can_initiate_transfers": true,
      "can_open_accounts": false
    }
  }
}`}
          </pre>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When to Update Authority</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Common reasons to expand or restrict agent authority:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong className="text-text-highlight">Business growth:</strong> Higher transaction limits, new spending categories, or contract signing authority as the business scales.</li>
          <li><strong className="text-text-highlight">New capabilities:</strong> Enabling hiring, banking operations, or new vendor relationships the agent was not initially authorized for.</li>
          <li><strong className="text-text-highlight">Risk reduction:</strong> Lowering limits, removing categories, or adding approval requirements after an incident or change in risk tolerance.</li>
          <li><strong className="text-text-highlight">Regulatory compliance:</strong> Adjusting scope to meet industry-specific requirements or new regulations.</li>
          <li><strong className="text-text-highlight">Operational restructuring:</strong> Changing which functions the agent handles vs. what the principal manages directly.</li>
        </ul>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Update Process</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 1: Request the Change</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Submit an authority scope update request through your SFP dashboard. Specify which permissions you want to add, remove, or modify. You can also update numerical limits.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 2: Human Kernel Session</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Every authority scope change triggers a new human kernel session. This is a mandatory verification step. The principal must review and explicitly approve the proposed changes. This protects against unauthorized scope expansion.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 3: Amendment Generation</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Once approved, SFP generates an operating agreement amendment reflecting the new authority scope. The updated JSON is embedded in the amendment and takes effect immediately upon execution.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">No self-modification.</strong> The agent cannot update its own authority scope. Only the human principal can initiate and approve changes through the kernel session. This is a fundamental safety constraint.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Structured Update Flow</h3>
            <p className="text-sm text-text-secondary">Dashboard-driven scope changes with clear before/after comparison. No ambiguity about what changed.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Kernel Verification</h3>
            <p className="text-sm text-text-secondary">Every change requires human principal sign-off through a dedicated kernel session. No exceptions.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Automatic Amendment</h3>
            <p className="text-sm text-text-secondary">We generate the operating agreement amendment automatically. No lawyer needed for standard scope changes.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Authority Schedule</h3>
            <p className="text-sm text-text-secondary">View your complete <Link to="/services/agent-authority-schedule" className="text-accent hover:underline">authority schedule</Link> with full change history and current permissions.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Related:</strong>{' '}
          <Link to="/blog/amending-operating-agreement" className="text-accent hover:underline">How to Amend an Operating Agreement</Link>{' | '}
          <Link to="/services/agent-authority-schedule" className="text-accent hover:underline">Authority Schedule</Link>{' | '}
          <Link to="/services/compliance-monitoring" className="text-accent hover:underline">Compliance Monitoring</Link>
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute legal advice. Consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 6: LLC Tax Obligations
  // ──────────────────────────────────────────────
  {
    id: 'llc-tax-obligations',
    title: "LLC Tax Obligations: A Plain-English Overview",
    category: 'post-formation',
    audience: 'both',
    date: 'January 29, 2026',
    readTime: '9 min read',
    excerpt: 'Your LLC does not pay its own income taxes by default. Here is what you owe: self-employment tax, quarterly estimated payments, state taxes, and more.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Your LLC does not pay its own income taxes by default. Profits and losses pass through to the owners' personal tax returns. This sounds simple, but there are several obligations you need to understand: self-employment tax, quarterly payments, state taxes, and more. Here is a plain-English breakdown.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">This is not tax advice.</strong> Tax law is complex and situation-dependent. This article provides a general overview to help you understand the landscape. Work with a qualified CPA or tax attorney for your specific circumstances.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Default LLC Taxation: Pass-Through</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          By default, the IRS does not treat an LLC as a separate tax entity. Instead, income "passes through" to the owners. How it passes through depends on how many members the LLC has.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Single-Member LLC</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The IRS treats a single-member LLC as a "disregarded entity." All income and expenses are reported on Schedule C of the owner's personal tax return (Form 1040). The LLC itself does not file a separate federal return.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Multi-Member LLC</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          A multi-member LLC is treated as a partnership by default. The LLC files an informational return (Form 1065) with the IRS. Each member receives a Schedule K-1 showing their share of income, deductions, and credits. Members report these amounts on their personal returns.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Form 1065 is due March 15 (for calendar-year LLCs). Late filing triggers a penalty of $220 per member per month, up to 12 months. Do not miss this deadline.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Self-Employment Tax</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          LLC members who actively participate in the business owe self-employment tax on their share of profits. This covers Social Security and Medicare. The current rate is 15.3% on the first $168,600 of net self-employment income (2026), plus 2.9% Medicare on amounts above that.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          You can deduct the employer-equivalent portion (half of self-employment tax) when calculating your adjusted gross income. This is an above-the-line deduction on your personal return.
        </p>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">Tax Rate Summary</h3>
          <table className="w-full border border-grid">
            <thead>
              <tr className="border-b border-grid bg-surface/30">
                <th className="text-left p-4 text-text-highlight font-medium">Tax Type</th>
                <th className="text-left p-4 text-text-highlight font-medium">Rate</th>
                <th className="text-left p-4 text-text-highlight font-medium">Applies To</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Federal income tax</td>
                <td className="p-4 text-text-secondary">10% - 37%</td>
                <td className="p-4 text-text-secondary">Net LLC income on personal return</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Self-employment tax (SS + Medicare)</td>
                <td className="p-4 text-text-secondary">15.3%</td>
                <td className="p-4 text-text-secondary">Net self-employment income up to $168,600</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Additional Medicare</td>
                <td className="p-4 text-text-secondary">0.9%</td>
                <td className="p-4 text-text-secondary">Self-employment income over $200,000 (single)</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">State income tax</td>
                <td className="p-4 text-text-secondary">0% - 13.3%</td>
                <td className="p-4 text-text-secondary">Varies by state (see below)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Quarterly Estimated Payments</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Unlike W-2 employees who have taxes withheld from each paycheck, LLC members must make quarterly estimated tax payments to the IRS. If you expect to owe $1,000 or more in taxes for the year, quarterly payments are required.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          The deadlines are:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Q1: April 15</li>
          <li>Q2: June 15</li>
          <li>Q3: September 15</li>
          <li>Q4: January 15 of the following year</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          Use IRS Form 1040-ES to calculate and submit payments. Underpaying triggers a penalty. The safe harbor rule: pay at least 100% of last year's tax liability (110% if AGI exceeds $150,000) in estimated payments to avoid penalties.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">State Taxes</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          State tax obligations depend on where the LLC is formed, where it operates, and where the members live. These are three separate considerations.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Delaware</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware does not impose state income tax on LLC income earned outside of Delaware. If you form a Delaware LLC but operate and live in another state, Delaware itself will not tax your LLC income. You still owe Delaware's annual franchise tax ($300/year for LLCs).
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Your Home State</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          You owe state income tax in the state where you live, regardless of where the LLC is formed. If you live in California, you pay California state income tax on your LLC income even if the LLC is formed in Delaware.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Some states also impose their own LLC fees or franchise taxes. California charges an $800 annual franchise tax for LLCs, for example. States without income tax (Texas, Florida, Nevada, Wyoming, etc.) have no state income tax on LLC pass-through income.
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">Foreign qualification:</strong> If your Delaware LLC does business in another state, you may need to register as a "foreign LLC" in that state. This creates additional filing and fee obligations. Consult your tax professional about your specific multi-state situation.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">S-Corp Election: An Alternative</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          LLCs can elect to be taxed as an S-Corporation by filing IRS Form 2553. The main benefit: you pay yourself a "reasonable salary" and only that salary is subject to self-employment tax. Remaining profits are distributed as dividends, which are not subject to self-employment tax.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          This makes financial sense when LLC profits consistently exceed $40,000-$50,000 per year. Below that level, the additional accounting and payroll costs outweigh the savings. Talk to your CPA about whether S-Corp election makes sense for your situation.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">EIN Filing</h3>
            <p className="text-sm text-text-secondary">We file for your EIN automatically after formation. You need it for all tax filings and bank accounts.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Compliance Calendar</h3>
            <p className="text-sm text-text-secondary">Your dashboard tracks franchise tax deadlines, annual report due dates, and estimated tax payment dates.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Formation Structure</h3>
            <p className="text-sm text-text-secondary">We help you choose the right formation state and structure. DE LLC ($349), WY DAO LLC ($399), or docs-only ($75).</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Compliance Monitoring</h3>
            <p className="text-sm text-text-secondary">Our <Link to="/services/compliance-monitoring" className="text-accent hover:underline">compliance monitoring</Link> tracks your ongoing obligations so nothing falls through the cracks.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Related:</strong>{' '}
          <Link to="/blog/getting-ein-timeline" className="text-accent hover:underline">Getting an EIN</Link>{' | '}
          <Link to="/guides/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC Complete Guide</Link>{' | '}
          <Link to="/blog/dissolving-an-llc" className="text-accent hover:underline">How to Dissolve an LLC</Link>
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute tax or legal advice. Tax laws change frequently. Consult a qualified CPA or tax attorney for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  // ──────────────────────────────────────────────
  // Post 7: Dissolving an LLC
  // ──────────────────────────────────────────────
  {
    id: 'dissolving-an-llc',
    title: 'How to Dissolve an LLC: The Proper Process',
    category: 'post-formation',
    audience: 'both',
    date: 'January 25, 2026',
    readTime: '5 min read',
    excerpt: 'You cannot just walk away from an LLC. Here is the correct dissolution process — state filings, tax clearance, asset distribution, and final returns.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Sometimes an entity has served its purpose. The agent is no longer operating, the business is pivoting, or the project is complete. You cannot just walk away from an LLC. If you do not dissolve it properly, you will keep accumulating franchise taxes and compliance obligations. Here is the correct process.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">When to Dissolve</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Consider dissolution when:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>The agent entity is no longer operating or generating revenue.</li>
          <li>The business is pivoting and the current entity structure no longer fits.</li>
          <li>The project the LLC was formed for is complete.</li>
          <li>Members agree to wind down operations.</li>
          <li>You are restructuring into a different entity type.</li>
        </ul>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="leading-relaxed text-text-secondary mb-6">
            <strong className="text-text-highlight">Do not let an LLC sit idle.</strong> An inactive Delaware LLC still owes $300/year in franchise taxes. If you miss a payment, penalties and interest accrue. After two years of non-payment, Delaware voids the entity, but you still owe the back taxes.
          </p>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Dissolution Process (Delaware)</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Dissolution is a multi-step process. Each step must be completed in order.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 1: Member Vote</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Check your operating agreement for the dissolution provision. Most require a majority or unanimous vote of members. Document the vote in a written resolution. For agent-formed entities, this requires a human kernel session where the principal authorizes dissolution.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 2: Wind Down Operations</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Before filing for dissolution, settle the LLC's affairs:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Pay all outstanding debts and obligations.</li>
          <li>Fulfill or terminate all contracts.</li>
          <li>Collect any receivables.</li>
          <li>Distribute remaining assets to members according to the operating agreement.</li>
        </ul>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 3: Pay Outstanding Franchise Taxes</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware will not accept a Certificate of Cancellation until all franchise taxes are paid in full, including taxes for the current year. Check with the Delaware Division of Corporations for your exact balance.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 4: File Certificate of Cancellation</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          File a Certificate of Cancellation with the Delaware Division of Corporations. The filing fee is $200. The certificate must include:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>The LLC's name</li>
          <li>The date the Certificate of Formation was filed</li>
          <li>The effective date of cancellation</li>
          <li>The reason for cancellation</li>
        </ul>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 5: Cancel Your EIN</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Send a letter to the IRS requesting closure of the EIN account. Include the entity name, EIN, address, and the reason for closure. Mail to: Internal Revenue Service, Cincinnati, OH 45999. The EIN itself is never reused or reassigned, but closing the account prevents potential identity theft issues.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 6: Close Bank Accounts</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Close all business bank accounts after all final transactions have cleared. Transfer remaining funds to members according to the distribution plan. Get written confirmation of account closure.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">Step 7: Cancel Registered Agent</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Cancel your registered agent service. Once the Certificate of Cancellation is filed, you no longer need a registered agent. If you do not cancel, you will continue to be billed for the service.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Dissolution Costs</h2>

        <div className="bg-surface/30 border border-grid p-8 mb-12">
          <table className="w-full border border-grid">
            <thead>
              <tr className="border-b border-grid bg-surface/30">
                <th className="text-left p-4 text-text-highlight font-medium">Item</th>
                <th className="text-left p-4 text-text-highlight font-medium">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Certificate of Cancellation (Delaware)</td>
                <td className="p-4 text-text-secondary">$200</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Outstanding franchise taxes</td>
                <td className="p-4 text-text-secondary">$300/year + any penalties</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">EIN closure</td>
                <td className="p-4 text-text-secondary">Free</td>
              </tr>
              <tr className="border-b border-grid">
                <td className="p-4 text-text-secondary">Final tax return</td>
                <td className="p-4 text-text-secondary">CPA fees (varies)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Tax Obligations at Dissolution</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          You must file a final federal tax return. For single-member LLCs, this means a final Schedule C. For multi-member LLCs, a final Form 1065 with final K-1s to each member. Check the "final return" box on the form. File by the normal deadline for the tax year the LLC dissolved.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          If the LLC operated in other states, you may need to file final returns or cancel foreign qualifications in those states as well.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Dissolution Filing</h3>
            <p className="text-sm text-text-secondary">We prepare and file the Certificate of Cancellation with the Delaware Division of Corporations on your behalf.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Tax Clearance</h3>
            <p className="text-sm text-text-secondary">We verify all franchise taxes are current before filing. No surprises or rejections.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">EIN Closure</h3>
            <p className="text-sm text-text-secondary">We handle the IRS notification letter to close the EIN account.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Agent Decommission</h3>
            <p className="text-sm text-text-secondary">We revoke agent authority and properly decommission the agent's operating scope as part of dissolution.</p>
          </div>
          <div className="bg-surface/30 border border-grid p-6">
            <h3 className="font-serif text-lg text-text-highlight mb-2">Compliance Wrap-Up</h3>
            <p className="text-sm text-text-secondary">We cancel registered agent services and handle any outstanding compliance filings.</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-text-highlight">Related:</strong>{' '}
          <Link to="/blog/llc-tax-obligations" className="text-accent hover:underline">LLC Tax Obligations</Link>{' | '}
          <Link to="/guides/delaware-llc-complete-guide" className="text-accent hover:underline">Delaware LLC Complete Guide</Link>{' | '}
          <Link to="/services/compliance-monitoring" className="text-accent hover:underline">Compliance Monitoring</Link>
        </p>

        <div className="border-l-2 border-accent pl-6 py-2">
          <p className="text-sm text-text-secondary italic">
            This article is for informational purposes only and does not constitute legal or tax advice. Dissolution requirements vary by state. Consult a qualified professional for advice specific to your situation.
          </p>
        </div>
      </>
    ),
  },
];
