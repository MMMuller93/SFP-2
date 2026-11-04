import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../Blog';

export const OWNERSHIP_LIQUIDITY_POSTS: BlogPost[] = [
  {
    id: 'private-share-purchase-due-diligence',
    title: 'Due Diligence Before Buying Private Company Shares',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Assess the business, verify the seller’s ownership, and trace the rights and restrictions attached to the specific private shares you plan to buy.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A seller can own genuine shares in a strong company and still offer an investment with weak information rights, expensive intermediation, or an uncertain transfer path. Check both whether the business justifies the price and whether the seller can deliver the shares and rights you expect.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Verify the asset and its owner</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Start with the legal issuer, share class, quantity, and registered holder. Reconcile the proposed sale against the seller’s acquisition documents and current ownership records, with confirmation through the company or its authorized administrator where available. An account screenshot or an intermediary’s allocation summary needs corroboration before it supports a funding decision.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Establish whether the seller holds issued shares, unexercised options, an interest in a fund, or a contract for future delivery. Check for pledges, prior sale commitments, and repurchase rights that could affect delivery. If an entity owns the shares, verify that the person signing can bind it and that the proposed selling entity matches the ownership evidence.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          An SPV adds another ownership relationship to examine: the vehicle’s interest in the company and your interest in the vehicle. Confirm whether the SPV already owns its investment or must acquire it after collecting subscriptions. The distinction between <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:underline">direct shares and SPV interests</Link> determines which documents establish your rights.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Assess the business using current information</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Request financial statements, recent operating results, cash balances, debt terms, and management’s financing plan. Record the period each item covers and whether the figures are audited, management-prepared, or an intermediary’s estimate. Private investments can offer materially less disclosure than registered offerings; a familiar brand does not fill those gaps.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Examine the assumptions driving value. For a subscription business, that might mean customer retention, revenue concentration, gross margin, and the cost of winning new customers. For a capital-intensive business, production capacity and financing needs may matter more than reported bookings. Request definitions and reconciliations for the metrics used in the sales materials.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">A cash figure can become stale quickly</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume a company reported $48 million in cash three months ago and has since used $4 million a month, with no financing or other cash movements. The implied current balance is $36 million, or nine months of cash at that spending rate. Calculating twelve months from the old balance overstates the time available to raise capital.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            This simplified calculation excludes minimum operating cash, debt payments, and changes in spending. They can shorten the company’s runway and bring forward a financing that dilutes your ownership or introduces securities with priority over your shares.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Connect the price to the capital structure</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Obtain the current charter and enough capitalization information to understand debt, preferred stock, common stock, and outstanding rights to acquire shares. A financing headline alone cannot show what your shares would receive in a sale. Preferred holders can have payment priorities and conversion choices that change the proceeds available to common holders.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Model a range of outcomes using the rights of the class you are buying. Include a lower-value sale, another financing, and a longer holding period, alongside the anticipated exit. Treat any unavailable preference terms or share counts as unresolved assumptions rather than silently filling them with the latest round’s headline valuation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Reconcile the proposed share price with your total cash outlay. Transaction fees, vehicle expenses, and carried interest can separate the underlying share performance from your eventual return. <Link to="/insights/pricing-private-company-secondaries/" className="text-accent hover:underline">Pricing private company secondaries</Link> requires that comparison before a quoted discount becomes meaningful.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Identify what you can enforce after closing</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Read the rights attached to the shares and any separate investor agreements. Information rights, participation rights in future financings, and registration rights can depend on ownership thresholds or permitted assignment. The seller’s access to quarterly financials does not establish that you will receive them after the transfer.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Compare the investment presentation with the <Link to="/insights/reviewing-investment-documents/" className="text-accent hover:underline">purchase agreement</Link>. Identify who makes each representation, what it covers, and the remedy if it proves false. A seller’s promise of clean title provides different protection from a company representation about its financial statements; a liability cap or short claim period can further limit recovery.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          For a fund or SPV, also establish who decides when to sell, what information the manager must provide, and how cash or shares reach investors. A public listing does not itself require a vehicle to distribute its holdings.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Resolve the conditions for funding</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Before releasing money, establish the applicable transfer approvals, purchase rights, securities-law basis for the resale, and evidence required at closing. Confirm the payment recipient independently and tie the release of funds to documented closing conditions. If a required approval fails, the agreement should explain what happens to the purchase obligation and any money already deposited.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Record any missing information that could change the price you would pay or your willingness to proceed. Some gaps can be addressed through additional documents or contractual protection; others leave a business risk that the buyer must accept or decline. A lower price does not establish ownership or cure an inability to transfer the shares.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: the SEC’s <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" className="text-accent hover:underline">private placement risk bulletin</a>, FINRA’s <a href="https://syndication.finra.org/content/know-risks-pre-ipo-funds-and-potential-fraud" className="text-accent hover:underline">discussion of pre-IPO fund risks</a>, and the NVCA’s <a href="https://nvca.org/model-legal-documents/" className="text-accent hover:underline">model financing documents</a>.
        </p>
        <p className="text-xs text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute legal, tax, or investment advice.
        </p>
      </>
    ),
  },
  {
    id: 'secondary-sale-approvals-restrictions',
    title: 'Company Approval and Transfer Restrictions in Secondary Sales',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Company consent, rights of first refusal, and co-sale rights can each affect a secondary sale. Identify which requirements apply before committing.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A company can decline its opportunity to buy a shareholder’s stock while still withholding the consent needed to transfer it to someone else. A secondary purchase agreement should identify every applicable approval and purchase right before either party treats the sale as certain.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Find the restrictions that bind these shares</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Review the current charter, bylaws, stock purchase or award agreement, and shareholder agreements, together with amendments and relevant notices. Restrictions can sit in more than one document and can differ by share class, seller, or proposed buyer. Ask the company which transfer process applies to the particular holding, then reconcile that process with the governing documents.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Delaware law permits several kinds of transfer restrictions, including prior purchase rights and consent requirements. It does not impose a universal company-consent requirement on every private share sale. Whether a restriction binds a particular holder or transfer requires examination of the documents and applicable law, including relevant notice requirements.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Identify the proposed purchaser early. Approval for an individual may not extend to an SPV, an affiliated fund, or a substituted buyer. Competitor exclusions and other purchaser restrictions can affect the transaction even when the selling shareholder and price remain unchanged.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Separate the decisions each party controls</h2>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li><strong>Transfer consent.</strong> A company, board, or other specified party approves the transfer or the proposed buyer under the governing provision. The agreement determines who decides and whether any conditions limit that discretion.</li>
          <li><strong>Right of first refusal.</strong> A right holder can elect to buy offered shares under the agreed mechanism after receiving notice of a proposed transaction. Exercise can displace the outside buyer for some or all of the shares, depending on the terms.</li>
          <li><strong>Co-sale rights.</strong> Eligible holders can participate in a proposed sale under a contractual allocation formula. Their participation can reduce the quantity the original seller is able to sell to a buyer with a fixed purchase commitment.</li>
          <li><strong>Joining shareholder agreements.</strong> A purchaser may need to join voting, transfer, or other shareholder agreements. The buyer must understand the obligations it assumes and confirm separately which investor rights it receives.</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-6">
          A document described as a “waiver” should state the rights being waived, the parties giving it, and the transaction it covers. Do not treat a failure to respond as consent unless the applicable provision gives it that effect. Expiration of one election period does not resolve a separate consent requirement or another holder’s rights.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Make the notice match the actual transaction</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A transfer notice can require the buyer’s identity, share quantity, price, form of payment, and other material terms. Check the delivery method and recipients as well as the deadline. An incomplete notice can leave the parties disagreeing about whether an election period ever began.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Track the permitted closing period and the consequences of changing the deal. A reduced price, revised payment arrangement, or different buyer can require a new notice or consent under the relevant agreement. Side arrangements that change the economics also need to be considered when describing the offer to right holders.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">A waiver tied to one offer</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume a seller notifies the company of a sale of 10,000 shares at $20 each, and the company waives its ROFR for that specific transaction. The buyer then negotiates an $18 price. If the agreement permits the outside sale only at the notified price or a higher price, the $180,000 revised sale does not fit the original permission.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            Check whether the revised price requires a new notice or waiver before closing. The result could be a renewed waiver, exercise of the purchase right, or no completed sale; the original waiver alone does not settle it.
          </p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Address both contracts and securities law</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Company approval addresses the company’s contractual process. The resale also needs an applicable securities-law basis. Rule 144 provides one resale safe harbor with conditions that depend on the circumstances, but it is not the exclusive route and does not override private contractual restrictions.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Likewise, delaying delivery through a forward agreement does not establish that a transaction falls outside the restrictions. Review whether the documents cover a contract to sell, a pledge, or a transfer of economic exposure, and what will be required when delivery becomes due. <Link to="/insights/forward-contracts-private-company-shares/" className="text-accent hover:underline">Forward contracts for private shares</Link> require analysis at both points.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Document the result before releasing funds</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The <Link to="/insights/closing-private-company-secondary/" className="text-accent hover:underline">closing record</Link> should show how each applicable condition was satisfied: written consent, a valid waiver, completion of an election period, buyer joinders, and any required legal opinion. Confirm who will update the ownership records and what evidence the buyer will receive.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          If a right holder exercises or the company refuses a required consent, the purchase agreement should allocate the consequences. Address release of deposits, responsibility for incurred expenses, and whether either party remains bound to pursue an alternative. Shareholders comparing <Link to="/insights/selling-pre-ipo-shares/" className="text-accent hover:underline">liquidity options</Link> should resolve these contingencies before relying on the expected proceeds.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://delcode.delaware.gov/title8/c001/sc06/index.html#202" className="text-accent hover:underline">Delaware’s stock transfer restriction statute</a>, the NVCA’s <a href="https://nvca.org/model-legal-documents/" className="text-accent hover:underline">model ROFR and co-sale documents</a>, and the SEC’s <a href="https://www.sec.gov/reports/rule-144-selling-restricted-control-securities" className="text-accent hover:underline">Rule 144 overview</a>.
        </p>
        <p className="text-xs text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute legal, tax, or investment advice.
        </p>
      </>
    ),
  },
  {
    id: 'selling-pre-ipo-shares',
    title: 'Selling Pre-IPO Shares: Options for Employees and Founders',
    date: 'November 4, 2026',
    readTime: '5 min read',
    excerpt: 'Compare company liquidity programs, negotiated secondary sales, and forward arrangements through the cash, timing, and obligations each creates.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          Selling part of a private-company holding can fund a near-term goal and reduce exposure to the business that also pays your salary. The amount you can sell and the cash you retain depend on your equity, the company’s rules, the available buyer, and taxes.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Establish what is available to sell</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Assemble your grant documents, exercise confirmations, vesting records, and current share statement. Separate issued shares from options and unsettled restricted stock units. An option is a right to acquire stock, and a vested award does not necessarily mean you already hold transferable shares.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          If exercise is required, establish its cash cost, tax consequences, and timing relative to the sale. Check expiration and post-employment exercise provisions in the award documents. Paying to exercise before a buyer and transfer path are established can leave you with a cash outlay and shares you cannot sell on the expected timetable.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Ask the stock administrator about current liquidity programs and the rules for outside sales. Review the applicable <Link to="/insights/secondary-sale-approvals-restrictions/" className="text-accent hover:underline">company approvals and transfer restrictions</Link> before soliciting offers or sharing confidential materials. A prospective buyer’s willingness to pay does not resolve those requirements.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Company-sponsored liquidity programs</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A company-sponsored tender or other liquidity program can give eligible holders a defined opportunity to sell. The purchaser may be the company, outside investors, or a combination. Program documents establish who can participate, eligible securities, the price or pricing mechanism, and limits on the amount each holder can sell.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Read the conditions behind the advertised allocation. Oversubscription can lead to cutbacks, and being eligible does not necessarily mean every share you submit will be purchased. Check the election deadline, any withdrawal provisions, expected payment arrangements, and how options or other awards are handled within the program.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          A company-run program can coordinate approvals and ownership records, but you still need to decide whether the net proceeds justify selling at its price. Consider how much company stock you would retain and the information available to assess its value. A past program also creates no assurance that another will occur when you next need cash.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">A negotiated secondary sale</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A negotiated sale pairs you with an outside purchaser, either directly or through an intermediary. It can allow discussion of quantity and price outside a company program, where permitted. The buyer still needs to complete its review, and the transaction remains subject to the restrictions attached to your shares.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Compare offers on net proceeds and conditions. A higher price subject to unresolved funding or approvals carries a different likelihood of completion from a funded offer with a documented transfer path. If you engage a broker, review exclusivity, when fees become payable, and whether fees survive an unsuccessful transaction or a later sale to an introduced buyer.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Your sale agreement will also address ownership representations, liability, and closing obligations. Check whether you are being asked to make statements about company performance that you cannot independently support. The questions in <Link to="/insights/choosing-private-share-broker/" className="text-accent hover:underline">choosing a private-share broker</Link> help clarify the intermediary’s role and compensation.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Calculate usable cash before choosing a quantity</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Build a proceeds estimate for the actual shares or awards you expect to sell. Subtract exercise funding where applicable, transaction costs, loan repayments secured by the shares, and a tax reserve based on your circumstances. The tax basis and holding history can differ across grants, even when every share has the same sale price.
        </p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">From an offer to available cash</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume you sell 5,000 shares for $30 each, fund a $5-per-share option exercise, and pay $5,000 in total transaction expenses. The sale generates $150,000 gross and $120,000 after those two cash costs, before taxes. The assumed fee is an illustration, not a market rate.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            A tax reserve reduces the amount available to spend further. This cash calculation does not determine taxable gain: option type, exercise value, basis, timing, and treatment of expenses require a separate tax calculation.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          U.S. tax treatment differs between incentive stock options and nonstatutory options. Exercising an incentive stock option can trigger alternative minimum tax. For a nonstatutory option without a readily determinable market value, exercise generally creates compensation income on the difference between the stock’s fair market value and the exercise price. Obtain the calculation before committing to an exercise or sale whose proceeds you need for another purpose.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Deferred delivery and the choice to keep holding</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A prepaid forward can provide cash now in exchange for an obligation to deliver shares or other agreed consideration later. Review the delivery trigger, retained upside, collateral, repayment or default provisions, and tax treatment. <Link to="/insights/forward-contracts-private-company-shares/" className="text-accent hover:underline">A forward arrangement</Link> can create obligations that continue long after you spend the proceeds, and it does not automatically avoid transfer restrictions.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Continuing to hold preserves your economic exposure and avoids the costs of a current transaction. It also leaves the timing and value of future liquidity uncertain. Even an IPO can be followed by lockups and other resale limitations, so an anticipated listing date should not serve as a firm payment date for a personal obligation.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Assess a partial sale against the cash it would secure and the exposure you would retain. Keep any shares needed for existing contractual delivery obligations out of the amount you treat as freely available. Compare how much each route leaves available to spend, when payment can occur, and whether you could later owe money or shares.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: the IRS’s <a href="https://www.irs.gov/taxtopics/tc427" className="text-accent hover:underline">stock option tax overview</a> and the SEC’s <a href="https://www.investor.gov/introduction-investing/investing-basics/glossary/tender-offer" className="text-accent hover:underline">tender offer overview</a>.
        </p>
        <p className="text-xs text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute legal, tax, or investment advice.
        </p>
      </>
    ),
  },
  {
    id: 'forward-contracts-private-company-shares',
    title: 'Forward Contracts for Private Company Shares',
    date: 'November 4, 2026',
    readTime: '5 min read',
    excerpt: 'A private-share forward separates payment and delivery. Examine settlement terms, counterparty obligations, transfer restrictions, and tax claims.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          A forward contract for private-company shares creates an obligation to deliver shares or other specified consideration in the future. In a prepaid arrangement, the buyer pays before that delivery occurs. The buyer can lose money if the shares fall in value or if the seller cannot deliver what was promised.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Specify the payment and delivery promises</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          The agreement should identify the underlying company, security, delivery amount or formula, payment schedule, and settlement trigger. A fixed-share forward specifies the number of shares to be delivered; a variable-share forward uses a formula that can change that number. “Prepaid” describes when money changes hands; it does not, by itself, describe the seller’s retained upside or the buyer’s ultimate entitlement.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Establish what rights the buyer receives before settlement. A claim against a shareholder for future delivery does not itself put the buyer on the company’s stock ledger or provide company information and voting rights. Any such rights need their own basis in the documents and must be consistent with the company’s arrangements.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          If a fund owns the forward, its investors hold a <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:underline">fund interest</Link> whose value depends on that contract. They must also examine the manager’s authority, fees, expenses, and distribution terms.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Follow the economics through two outcomes</h2>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-6">A simplified fixed-share prepaid forward</h3>
          <p className="leading-relaxed text-text-secondary mb-6">
            Assume a buyer pays $100,000 today for delivery of 10,000 specified shares at a future settlement, with no additional payment. Assume the contract is permitted, both parties perform, and no fees, taxes, dividends, share adjustments, or time-value effects apply.
          </p>
          <p className="leading-relaxed text-text-secondary mb-6">
            If the delivered shares are worth $18 each, the buyer receives $180,000 of value and the seller has exchanged that holding for the earlier $100,000 payment. If they are worth $6 each, the buyer receives $60,000 of value while the seller retains the $100,000 already received.
          </p>
        </div>
        <p className="leading-relaxed text-text-secondary mb-6">
          The outcome changes if the share count varies with price, a party can settle in cash, or the agreement sets price thresholds that change what must be delivered. Request calculations at lower, middle and higher share values using the actual terms, including the effect of a later delivery date. A prepaid buyer may wait years longer than expected to receive the shares, with no right to a refund during that period.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Define settlement beyond an anticipated IPO</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Determine whether settlement follows a public listing, expiration of restrictions, an acquisition, a fixed date, or a combination of events. “After the IPO” leaves unanswered what happens during a lockup or when the seller cannot yet lawfully deliver. The contract should address the applicable conditions and the period allowed to complete delivery once they are satisfied.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Read the treatment of a cash acquisition, a stock-for-stock transaction, dividends, stock splits, and a company failure. Establish whether the buyer receives successor securities, cash proceeds, or another agreed amount. Also identify what happens if no qualifying event occurs: continued waiting, an extension, a termination payment, or another contractual result.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          A termination or repayment clause has practical value only to the extent the obligated party can perform it. Verify who owes the money, whether any guarantor or collateral supports the obligation, and what enforcement would require. A shareholder’s promise cannot make the company complete an IPO or approve a transfer.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Check restrictions when signing and delivering</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          Review the company documents before entering the forward. A restriction can extend to contracts to sell, pledges, or arrangements transferring economic exposure, even when the registered owner stays the same. An IPO lockup can also restrict such arrangements during its term. The applicable language determines whether consent is needed and which party can provide it.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Future delivery requires its own assessment of transfer restrictions and securities-law requirements. A term delaying settlement until shares become transferable does not establish that signing the forward was permitted in the first place. Check the <Link to="/insights/secondary-sale-approvals-restrictions/" className="text-accent hover:underline">applicable transfer restrictions</Link> against the entire arrangement, including collateral and any rights granted before delivery.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Examine the counterparty and continuing obligations</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          A prepaid buyer should verify the seller’s ownership and identify existing pledges, competing commitments, and any remaining steps needed to acquire the deliverable shares. Review promises to preserve the holding, provide relevant notices, and cooperate at settlement. If the shares secure the seller’s obligation, examine whether that arrangement is permitted and enforceable, and whether another lender has a prior claim to the same shares.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          As a seller, you may be barred from selling or pledging the promised shares elsewhere, required to sign transfer documents later, or obliged to repay money if delivery fails. Before spending the prepayment, allow for any option exercise cost, tax bill or potential repayment you would still have to fund.
        </p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Evaluate tax treatment on the actual terms</h2>
        <p className="leading-relaxed text-text-secondary mb-6">
          U.S. tax timing does not follow automatically from deferred share delivery. Under constructive-sale rules, entering a qualifying forward can trigger taxable gain on an appreciated position before the shares are delivered. Those rules include a limited exception for certain nonmarketable property contracts settling within one year; the exception does not establish the treatment of every private-share forward or resolve other sale-recognition rules.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          IRS Revenue Ruling 2003-7 addressed a specific variable prepaid forward involving publicly traded stock. Its facts included significant variation in the deliverable share count, an unrestricted right to substitute cash or other shares, and no economic compulsion to deliver the pledged shares. Its conclusion cannot simply be applied to a fixed-share pre-IPO contract.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          Obtain a tax analysis of the proposed agreement before signing and receiving money. Compare the forward with an <Link to="/insights/selling-pre-ipo-shares/" className="text-accent hover:underline">outright sale</Link> based on how much cash each leaves you, when taxes become payable, and what shares, cash or repayments the forward could require later.
        </p>
        <p className="text-sm leading-relaxed text-text-secondary mb-8">
          Further reading: <a href="https://www.irs.gov/pub/irs-drop/rr-03-7.pdf" className="text-accent hover:underline">IRS Revenue Ruling 2003-7</a>, the U.S. Code’s <a href="https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-title26-section1259&amp;num=0&amp;edition=prelim" className="text-accent hover:underline">constructive-sale provisions</a>, and an SEC-filed fund’s <a href="https://www.sec.gov/Archives/edgar/data/2155226/000139834426017121/fp0100817-1_n2.htm" className="text-accent hover:underline">disclosure of fixed prepaid forward risks</a>.
        </p>
        <p className="text-xs text-text-secondary border-t border-grid pt-6 mt-12">
          This article is for informational purposes only and does not constitute legal, tax, or investment advice.
        </p>
      </>
    ),
  },
];
