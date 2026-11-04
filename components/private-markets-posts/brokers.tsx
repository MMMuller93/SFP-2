import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../Blog';

export const BROKER_POSTS: BlogPost[] = [
  {
    id: 'choosing-private-share-broker',
    title: 'Choosing a Broker for a Private Share Purchase',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Evaluate a private share broker by its role, seller access, compensation and ability to manage the steps between an offer and completed ownership.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A broker's offer to find shares in a private company can mean several things: a specific seller has engaged the firm, a shareholder has expressed interest, or the broker is still searching for supply. Before choosing a broker for a private share purchase, establish what it can deliver and what remains conditional. An unconfirmed indication can disappear before you have a transaction to sign.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Establish the firm's role in your purchase</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask which legal entity will enter into the engagement and in what capacity it will act. A broker can arrange a trade as agent for a buyer, a seller or both. A firm selling from its own account acts as principal, so it is also your counterparty.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          A fund manager has a different job: managing the vehicle through which investors hold their investment. If a brokerage group also offers an affiliated special purpose vehicle, identify the entity performing each function. The broker's transaction work and the manager's continuing authority over the vehicle require separate evaluation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          The choice between <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:underline">direct shares and an SPV</Link> can matter more to your ownership rights than the platform through which you found the offer.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Verify the firm and the individual</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Use FINRA's BrokerCheck to research both the brokerage firm and the professional handling your transaction. Review their current registrations, the individual's firm affiliation and disclosed regulatory or customer matters. Match those records to the legal entity in the proposed engagement, rather than relying on a brand name or a registration number in a presentation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Confirm contact information independently when someone approaches you claiming to represent a registered firm. A genuine registration record does not establish that the person who contacted you works there, and registration does not validate the investment. If the engagement includes investment advisory services, check the relevant adviser record as well.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Determine what access actually means</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask whether the broker has a specific seller willing to transact, an instruction to find a buyer, or only an indication that shares might become available. Establish the proposed share class, quantity and ownership route. For a fund offer, distinguish a vehicle that already holds the investment from one raising money to acquire it.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Seller confidentiality can limit what the broker shares at an early stage. The broker should still explain when ownership evidence and counterparty details become available, who verifies them, and what remains unresolved. A refusal to disclose a seller publicly is different from an inability to explain how ownership will be verified before you become bound.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask what company information supports the offer and when it was produced. A broker able to arrange a sale might have little access to current financial information. Identify that limit early, so your investment decision does not depend on documents nobody has agreed to provide.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Test the proposed transaction process</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Have the broker describe the remaining steps for the actual offer. The answer should identify the required company or holder approvals, who submits notices, who coordinates documents, and who confirms delivery. Experience with an issuer is useful evidence of familiarity with its process; it is not a commitment by that company to approve your purchase.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">Evaluate the work behind a quote</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Suppose two brokers offer the same share class for a direct purchase. One has a written selling instruction and has verified the seller's ownership and available quantity; the other is passing along an indication through another intermediary that has yet to confirm the quantity. Neither has obtained the required company approval.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            The first offer has firmer evidence of available supply. The second could develop into a valid transaction, but another party still needs to confirm its terms. Ask who communicates with the seller, coordinates the company submission and resolves changes before committing capital or incurring further transaction costs.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          Agree how often the broker will update you and who is responsible for each outstanding approval or document. Your own counsel, investment team and custodian may have work to complete. A clear allocation of responsibilities prevents a broker's coordination role from being mistaken for legal review or an independent assessment of value.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Read the engagement before accepting an offer</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Request the <Link to="/insights/broker-fees-private-share-transactions/" className="text-accent hover:underline">complete compensation arrangement</Link>, including payments from the seller, fund or affiliates. Identify any principal markup, separate vehicle fees and expenses payable even if the purchase fails.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Review exclusivity, termination rights and any obligation to pay fees on transactions completed after the engagement ends. A clause covering introduced counterparties can affect a later purchase through another channel. Clarify its duration, covered parties and exceptions before circulating the same order to several firms.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Get the broker's role, compensation and responsibilities in writing. Then <Link to="/insights/comparing-pre-ipo-broker-offers/" className="text-accent hover:underline">compare the actual offers</Link>: a well-run transaction can still leave you with fees, rights or an exit timetable that do not suit your investment.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://brokercheck.finra.org/" className="text-accent hover:underline">FINRA BrokerCheck</a>; <a href="https://www.sec.gov/divisions/marketreg/bdguide.htm" className="text-accent hover:underline">SEC guidance on broker and dealer roles</a>; <a href="https://syndication.finra.org/content/know-risks-pre-ipo-funds-and-potential-fraud" className="text-accent hover:underline">FINRA on pre-IPO funds and investment risks</a>.
        </p>
        <p className="text-xs leading-relaxed text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute investment, legal or tax advice.
        </p>
      </>
    ),
  },
  {
    id: 'comparing-pre-ipo-broker-offers',
    title: 'Comparing Broker Offers for Pre-IPO Shares',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Compare pre-IPO offers using the same share class, ownership structure, total cash cost and closing conditions before deciding which price is better.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Two brokers can quote different prices for exposure to the same private company without offering the same investment. One quote may buy company shares directly; another may buy a fund interest with ongoing expenses and a share of profits payable to the manager. Compare the ownership and cash flows before treating the lower price as the better offer.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Put the offers on the same basis</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Start with the exact security each offer delivers. Record the issuer, share class and series, quantity, and whether you acquire shares or an interest in another entity. If a vehicle holds an interest in a second vehicle, follow that chain through to the company shares and identify the costs and restrictions at each level.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          A price per fund unit needs an explanation of what that unit represents. Confirm how many underlying shares your subscription represents after acquisition expenses and any cash reserve. A unit count that happens to equal a share count does not give you the same contractual rights as a direct shareholder.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Keep <Link to="/insights/primary-vs-secondary-investments/" className="text-accent hover:underline">primary and secondary purchases</Link> distinct in the comparison. A primary investment supplies capital to the company; a secondary purchase pays an existing holder. Either can involve a vehicle, so describing an offer as an SPV does not answer where the purchase money goes.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Calculate the full amount required at closing</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          For directly comparable shares, add the purchase price, buyer-paid commission and allocated expenses. Divide the result by the number of shares you receive. Keep the quoted share price visible alongside this total so you can identify which part of a difference comes from the seller and which comes from transaction costs.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">The lower share price costs more</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume two offers each deliver 10,000 shares of the same class directly, with identical rights and closing conditions. Offer A quotes $20 per share plus a buyer-paid commission of 4% of the share purchase price. Its total is $208,000, or $20.80 per share.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            Offer B quotes $20.50 per share plus a 1% commission on that purchase price. Its total is $207,050, or $20.705 per share, saving $950. These assumed rates are illustrations, not market benchmarks, and the calculation excludes taxes and any other expenses.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          If one route includes recurring fees or carried interest, extend the comparison through possible exits. A lower acquisition cost can be offset by charges during the holding period or deductions from gains. Use the <Link to="/insights/broker-fees-private-share-transactions/" className="text-accent hover:underline">full fee calculation</Link> to compare net proceeds under the same investment outcome and holding period.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Reconcile the valuation and share rights</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A quoted company valuation is difficult to compare without the share count used to calculate it. Ask whether the figure uses outstanding shares or a fully diluted calculation, what securities enter that calculation, and when the capitalization information was prepared. Two brokers can show different implied valuations for the same per-share price if they use different denominators.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Compare any discount to a financing round with the security issued in that round. Preferred shares can have rights that change their payout relative to common shares. A lower price for common stock may compensate for weaker rights rather than offer a cheaper version of the same investment.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Record which information, voting and participation rights you actually receive. For a vehicle, check how the manager exercises rights held at the company level and what information reaches investors. Compare liquidation and conversion terms separately when <Link to="/insights/pricing-private-company-secondaries/" className="text-accent hover:underline">calculating what each security would receive at different exit values</Link>.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Compare executable terms and available information</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Separate an indication of interest from an offer with an identified seller, confirmed quantity and stated conditions. Ask when the price expires, whether a partial allocation is possible, and when your acceptance becomes binding. An attractive price for a smaller position may leave much of your intended allocation unfilled.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Record outstanding approvals and the evidence supporting the proposed closing schedule. Include the outside date, refund provisions and expenses you retain if a transaction cannot close. Where a vehicle must first acquire shares, establish what happens if its acquisition fails or completes on different terms.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Compare the information package as carefully as the price. Current financial statements may reveal cash needs or operating changes that an earlier financing announcement omits. List the missing information and decide whether you can responsibly make the investment without it; assigning a speculative discount does not resolve an unknown fact.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Use the same exit assumptions</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Model at least a loss, a flat outcome and a gain, with the same timing for both offers. For an SPV, use its distribution provisions to determine what reaches you and when. A public listing alone does not establish an immediate sale date or require a vehicle to distribute its shares.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Set any non-negotiable requirements before choosing between offers. If you require direct ownership, a confirmed quantity or a refund if approval fails, exclude offers that cannot meet that requirement before comparing price.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://syndication.finra.org/content/know-risks-pre-ipo-funds-and-potential-fraud" className="text-accent hover:underline">FINRA on indirect pre-IPO ownership and resale limits</a>; <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" className="text-accent hover:underline">SEC guidance on private placement information and risks</a>; <a href="https://delcode.delaware.gov/title8/c001/sc05/index.html" className="text-accent hover:underline">Delaware law on stock classes and their rights</a>.
        </p>
        <p className="text-xs leading-relaxed text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute investment, legal or tax advice.
        </p>
      </>
    ),
  },
  {
    id: 'broker-fees-private-share-transactions',
    title: 'Broker Fees in Private Share Transactions',
    date: 'November 4, 2026',
    readTime: '5 min read',
    excerpt: 'Understand commissions, embedded compensation and vehicle charges, then calculate what a private share purchase costs at closing and through exit.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A quoted commission tells you only part of the cost of a private share transaction. Your cash outlay can also include legal and transfer expenses, while an investment through a vehicle can carry continuing fees and a manager's share of gains. Ask for a calculation in dollars that follows your money from purchase through distribution.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Identify the compensation and its recipient</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          In an agency transaction, the broker's transaction compensation is a commission. A broker-dealer acting as principal sells or buys for its own account, and its compensation can be reflected in a markup or markdown in the price. A quote without a separate commission line therefore needs an explanation of the firm's capacity and compensation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask whether the buyer, seller, issuer or vehicle pays the intermediary, and whether affiliated entities receive additional compensation. A seller-paid fee does not appear as a separate buyer invoice, but it affects the seller's net proceeds and the economics being negotiated. Identify both the contractual payer and the recipient without counting a seller's fee twice in your own cash budget.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Separate transaction compensation from the fees of a fund or SPV manager. The manager may receive an initial charge, recurring fees or carried interest, which gives it a contractual share of investment profits. Those amounts belong in the analysis even when the brokerage and management businesses share a brand.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Read the calculation behind the percentage</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Establish the base for every percentage: share purchase price, total subscription, committed capital, invested capital or another defined amount. Check minimum charges, caps and whether the rate changes with transaction size. For a recurring charge, confirm when it starts, how it changes after a sale, and when it stops.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Determine whether fees are paid in addition to the stated investment or deducted from it. If a $100,000 subscription includes a $3,000 charge, only $97,000 remains before any other deductions. If the charge is additional to a $100,000 share purchase, you need $103,000 and acquire $100,000 of shares at the agreed price.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For carried interest, read the actual distribution formula. Establish which capital and expenses must be returned before the manager participates, whether a preferred return applies, and how earlier distributions affect later calculations. The same carry percentage can produce different payments under different definitions of profit.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Model fees through both gains and losses</h2>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">A three-year illustration</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume a direct purchase invests $100,000 in shares and costs an additional $3,000 commission. A separate SPV offer invests $100,000 in the same shares, also charges $3,000 initially, and requires three annual payments of $1,000. Its manager receives 20% of proceeds above the $100,000 share cost, with no preferred return and no deduction of fees in that carry calculation.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            If each holding sells for $160,000 after three years, the direct buyer receives $160,000 against $103,000 paid, a $57,000 cash gain. The SPV pays $12,000 in carry and distributes $148,000. Its investor has paid $106,000 in total, leaving a $42,000 cash gain.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            If each holding instead sells for $80,000, the assumed SPV pays no carry. The direct buyer loses $23,000 and the SPV investor loses $26,000 after fees. If the shares sell for their original $100,000 cost, the losses are $3,000 and $6,000 respectively.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            These are hypothetical terms, not typical fee levels. The example assumes identical shares, sale timing and gross proceeds, all fees paid separately, immediate final distributions, and no taxes, other expenses or exit charges. It compares cash outcomes without calculating annualized returns.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          Actual <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:underline">direct and SPV offers</Link> can differ in minimum size, access and administration as well as cost. A lower minimum investment or having the manager handle administration may justify a vehicle's additional charges. Calculate those charges over the expected holding period and a longer wait for liquidity.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Allocate expenses and unsuccessful transaction costs</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask who pays company transfer charges, legal opinions, escrow costs and document preparation expenses when they arise. For a vehicle, also review formation, administration, tax reporting and winding-up expenses. Establish which costs the quoted fee includes, which pass through separately, and how shared expenses are allocated among investors or vehicles.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          A reserve withheld from your subscription reduces the amount initially invested. Request its purpose, permitted uses and treatment of unused cash. A cap on a manager's fee does not necessarily cap expenses charged by third parties or affiliates.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Confirm when each payment becomes earned and whether it is refundable. Distinguish a success fee contingent on completion from an engagement charge or third-party expense already incurred. Address company rejection, exercise of a right of first refusal, a reduced allocation and your own withdrawal separately; the contracts can assign different consequences to each.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Reconcile the quote with the final documents</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Put the agreed charges into the engagement, purchase or subscription documents as appropriate. A useful fee schedule identifies the recipient, calculation base, amount or rate, payment date and refund treatment. If a charge remains variable, record who can approve it and the applicable limit.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Before <Link to="/insights/closing-private-company-secondary/" className="text-accent hover:underline">closing the transaction</Link>, reconcile that schedule with the funds flow and any broker confirmation. For an indirect investment, confirm the share exposure remaining after deductions and retain the vehicle's distribution formula.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-62" className="text-accent hover:underline">SEC guidance on broker capacity and transaction confirmations</a>; <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/private-investment-funds/private-equity" className="text-accent hover:underline">SEC guidance on private fund fees and expenses</a>.
        </p>
        <p className="text-xs leading-relaxed text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute investment, legal or tax advice.
        </p>
      </>
    ),
  },
  {
    id: 'closing-private-company-secondary',
    title: 'Closing a Private Company Secondary Transaction',
    date: 'November 4, 2026',
    readTime: '5 min read',
    excerpt: 'Coordinate the agreements, transfer approvals, funding and ownership records needed to complete a private company secondary purchase.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Signing, funding and recording ownership can occur at different stages of a private company secondary purchase. The purchase agreement sets the conditions for each step, including when money can be released and what the seller must deliver. Agree who holds the money while approvals are pending, what permits its release and how delivery will be confirmed.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Fix the parties and the asset before signing</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Confirm the buyer's legal entity, the seller's ownership and authority, and the exact class and number of shares. Decide whether the buyer will hold directly or through an agreed nominee or custodian arrangement. Changing the acquiring entity late can require revised documents, eligibility checks and a fresh review under company transfer procedures.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Match the seller's ownership evidence to the asset described in the agreement. An option grant is not evidence that the holder already owns the resulting shares. If an exercise, release of a lien or another step must precede transfer, assign responsibility and make its completion part of the agreed closing mechanics.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Complete investor eligibility and account onboarding requirements for the actual purchaser. Those requirements depend on the transaction's exemption, the structure and the intermediary's policies. An individual's prior approval on a platform does not answer whether a newly formed purchasing entity qualifies for this transaction.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Make the purchase agreement match the sequence</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Establish when the agreement becomes binding, which obligations apply before closing, and which conditions must be satisfied before funds or shares are released. State who can waive a condition and which conditions cannot be waived by the buyer and seller alone. The documents should reflect the intended sequence, including any advance funding arrangement.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Negotiate an outside date and the consequences of reaching it without closing. Address extension rights, termination notices, return of funds and expenses that remain payable. A projected completion date in an email gives you less certainty than contractual provisions describing what happens if the process takes longer.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Review the <Link to="/insights/reviewing-investment-documents/" className="text-accent hover:underline">purchase agreement's representations</Link> about the seller's title, authority and encumbrances, together with the remedy for a breach. Before payment, settle which company agreements the buyer must join and which rights will transfer.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Track every applicable transfer condition</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The governing documents determine whether a company consent, right of first refusal, co-sale process or other restriction applies. Counsel should identify the relevant provisions and the separate securities-law basis for the resale. Company permission and an available resale exemption address different requirements.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For each required notice or approval, record the responsible party, delivery requirements, response period and evidence of completion. A right of first refusal gives its holder an opportunity to purchase on the applicable terms; its waiver or expiry does not satisfy a separate company consent requirement. A co-sale right can also affect the sellers or quantities involved.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">An approval that remains outstanding</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Suppose the company waives its right of first refusal, but the applicable agreement separately requires board consent to the transfer. The broker reports that the ROFR process is complete and circulates funding instructions. Before authorizing release, the closing team still needs evidence of board consent and confirmation that the other release conditions are satisfied.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            If the contract permits advance funding into escrow while consent is pending, check the escrow instructions and refund provisions. The waiver alone does not authorize release of those funds to the seller.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          Prepare documents and onboarding in parallel where possible, while preserving conditions that control payment and transfer. Follow the specific <Link to="/insights/secondary-sale-approvals-restrictions/" className="text-accent hover:underline">company approval and transfer restrictions</Link> instead of assuming a standard timetable will apply.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Control funding and delivery</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Prepare a funds flow showing the purchase amount, fees, expenses, recipients and release conditions. Confirm who holds money before completion and what instructions authorize its release. If escrow is used, check that its release conditions require the approvals and delivery evidence you negotiated.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Verify wire instructions through an independently established contact channel. Treat a change in bank details as a fresh verification task, even if it arrives in an existing email thread. For a family office, separate the person confirming the transaction's readiness from the person authorizing payment where the team's staffing permits.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Agree what evidence demonstrates delivery: the relevant stock ledger or transfer-agent record, a certificate or book-entry confirmation where applicable, and the completed transfer instruments. Reconcile the registered holder, share class and quantity with the purchase agreement. A payment receipt alone does not establish that the transfer was completed.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Distinguish a vehicle closing from its share acquisition</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          If you buy an <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:underline">SPV interest</Link>, confirm your admission or transfer into the vehicle separately from the vehicle's acquisition of company shares. The underlying acquisition might already be complete, occur alongside your subscription, or follow it. The documents should describe the actual sequence and the treatment of your funds if the acquisition fails.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Obtain confirmation of your vehicle interest and the agreed evidence of its underlying holding. Record who will provide subsequent statements and tax documents, and who decides when to sell or distribute assets.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Retain one closing file containing signed agreements, approvals, notices, payment evidence, ownership confirmation and the final fee reconciliation. Record any remaining deliverable with an owner and due date. Your investment and accounting teams should be able to establish what was acquired, what was paid and what obligations continue without reconstructing the email chain.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://delcode.delaware.gov/title8/c001/sc06/index.html" className="text-accent hover:underline">Delaware law on stock transfer restrictions</a>; <a href="https://www.ic3.gov/CrimeInfo/BEC" className="text-accent hover:underline">FBI guidance on verifying payment changes</a>.
        </p>
        <p className="text-xs leading-relaxed text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute investment, legal or tax advice.
        </p>
      </>
    ),
  },
];
