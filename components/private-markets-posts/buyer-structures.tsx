import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../Blog';

export const BUYER_STRUCTURE_POSTS: BlogPost[] = [
  {
    id: 'buying-private-company-shares',
    title: 'Buying Private Company Shares: A Guide for Investors',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'How investors buy private company shares through financings, secondary purchases and SPVs, from evaluating an opportunity to completing the investment.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">An investment in a private company can take several forms: newly issued stock, shares purchased from an existing holder, or an interest in a fund that owns the shares. Your route into the company affects the price, the information available to you and the decisions you can make after investing.</p>
        <p className="leading-relaxed text-text-secondary mb-8">For an investor comparing opportunities, the first task is to identify the security being offered and the parties involved. A recognizable company name can appear in proposals with substantially different economics and ownership rights.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The main routes to an investment</h2>
        <p className="leading-relaxed text-text-secondary mb-6">In a primary financing, the company issues securities and receives the investment proceeds. Participation depends on the round, investor eligibility and the allocation the company is prepared to accept. The company and its lead investors negotiate the financing terms, which determine the rights offered to participating investors.</p>
        <p className="leading-relaxed text-text-secondary mb-6">In a secondary purchase, an existing shareholder sells a position. The buyer negotiates with that seller, directly or through an intermediary, while the company's governing documents determine the applicable transfer conditions. The seller could be an employee, founder, early investor or fund with its own reasons for seeking liquidity.</p>
        <p className="leading-relaxed text-text-secondary mb-8">Either transaction can be made through a special purpose vehicle, or SPV. In that arrangement, the vehicle acquires the shares and you acquire an interest in the vehicle. <Link to="/insights/primary-vs-secondary-investments/" className="text-accent hover:text-accent/80 underline">Primary versus secondary</Link> describes where the shares come from; <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:text-accent/80 underline">direct ownership versus an SPV</Link> describes how you hold the investment.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Finding an opportunity and confirming availability</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Investors encounter opportunities through company relationships, existing shareholders, fund sponsors, brokers and private-market platforms. Each introduction should lead to a specific proposed transaction: an issuer allocation, a seller's block of shares or a subscription to a named vehicle.</p>
        <p className="leading-relaxed text-text-secondary mb-6">When <Link to="/insights/choosing-private-share-broker/" className="text-accent hover:text-accent/80 underline">assessing a broker</Link>, ask what supports the indicated availability. A broker might have a seller engagement, be working through another intermediary, or be collecting interest before approaching holders. A sponsor might already own the underlying shares or still need to acquire them. Those circumstances affect how much time and money it makes sense to commit to the review.</p>
        <p className="leading-relaxed text-text-secondary mb-8">Before treating a proposal as executable, establish the share class, quantity, price, legal seller and remaining conditions. Where confidentiality limits what can initially be disclosed, agree on when the documents needed to verify the proposal will become available.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Investment size and liquidity</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Decide how much capital you can leave invested if the company remains private for several more years. A family office may be able to wait; a fund nearing the end of its term may need to sell or distribute the position before the company exits. Size the purchase so a delayed IPO would not force a sale to meet other obligations.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Another financing could dilute your ownership or give new investors priority over your shares in a sale. Calculate how those terms would affect your proceeds, including at a lower exit valuation.</p>
        <p className="leading-relaxed text-text-secondary mb-8">For U.S. transactions, eligibility follows the exemption used for the offering or resale, any fund-level requirements and the conditions imposed by the issuer or platform. Confirm those requirements for the actual buyer, especially when investing through a family entity or fund. The label “pre-IPO” supplies no timetable for a public offering.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Company information and investment terms</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Check whether the financial information is current enough to assess the company's growth, cash needs and proposed valuation. If the available figures predate a major financing or change in the business, request updated information before relying on them to set a price.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Then calculate the total capital required and the amount that will actually purchase shares. Broker compensation, vehicle expenses and carried interest belong in the comparison. The same dollar commitment can buy a different underlying position depending on how those charges are applied.</p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Two proposals for the same company</h3>
          <p className="text-text-secondary mb-4">Suppose one proposal offers a direct purchase from a shareholder, while another offers an SPV interest. Before comparing the headline prices, establish whether both acquire the same class of shares, whether the SPV already owns its position, and what deductions apply to the SPV investment.</p>
          <p className="text-text-secondary">With direct shares, you can seek a buyer when you want to sell, subject to the applicable restrictions. With an SPV, the manager generally decides when to sell the underlying position; check whether you can transfer your vehicle interest if you need cash sooner.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">From an agreed price to ownership</h2>
        <p className="leading-relaxed text-text-secondary mb-6">The purchase documents should identify the security, consideration, representations, closing conditions and consequences of a failed closing. Confirm who obtains any required waivers or consents, who receives the money and what evidence will establish the completed transfer or issuance.</p>
        <p className="leading-relaxed text-text-secondary mb-6">For a fund subscription, the additional question is what happens if the vehicle cannot acquire the intended shares. Review acquisition deadlines, refund provisions, expense deductions and the manager's ability to change the investment. Those provisions govern what happens to your capital while the underlying purchase remains incomplete.</p>
        <p className="leading-relaxed text-text-secondary mb-8">After <Link to="/insights/closing-private-company-secondary/" className="text-accent hover:text-accent/80 underline">completing the purchase</Link>, retain the executed documents and ownership records, and establish how you will receive company or vehicle reporting. A future sale will require another review of the restrictions and conditions then in effect.</p>
        <p className="text-sm leading-relaxed text-text-muted mb-8">Further reading: <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/private-placements-under-regulation-d-updated-investor-bulletin" className="text-accent underline">SEC investor bulletin on private placements</a>.</p>
        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">This article is for informational purposes only and does not constitute legal, tax or investment advice.</p>
      </>
    ),
  },
  {
    id: 'primary-vs-secondary-investments',
    title: 'Primary vs. Secondary Investments in Private Companies',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Compare primary financings and secondary share purchases: who receives the capital, how ownership changes, and which terms and rights require review.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">A primary investment provides capital to a company in exchange for newly issued securities. A secondary investment purchases an existing holder's securities, with the proceeds paid to that seller.</p>
        <p className="leading-relaxed text-text-secondary mb-8">A private financing can include both components. When a company announces a round that combines new capital and shareholder liquidity, the amount going onto its balance sheet may be less than the total transaction value.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Where the capital goes</h2>
        <p className="leading-relaxed text-text-secondary mb-6">In a primary round, assess the proposed use of proceeds and the company's financing needs. New cash can fund growth, acquisitions, debt repayment or operating losses. The investment case should explain what the raise is expected to accomplish and whether another financing is likely to be required.</p>
        <p className="leading-relaxed text-text-secondary mb-6">A secondary purchase changes the ownership of existing securities. The company receives no investment proceeds from that sale, so its ability to execute its business plan still depends on its existing resources and any separate financing. The seller's motivation matters for the negotiation, but a need for personal liquidity does not by itself establish an attractive price.</p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Reading a combined financing</h3>
          <p className="text-text-secondary">Assume a transaction totals $100 million: $80 million purchases new shares and $20 million purchases existing shares from employees and early investors. Before transaction expenses, the company receives $80 million. A runway analysis using the full $100 million would overstate the new cash available to the business.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Ownership and dilution</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Issuing new shares increases the share count and dilutes holders who do not participate sufficiently to maintain their percentage. Buying existing shares transfers the seller's position to the buyer without increasing the share count by that transfer alone.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Calculate ownership using the share count after all changes that will occur at closing. A primary financing may include an option-pool increase, conversion of outstanding instruments or other capitalization changes. A secondary purchase may close alongside the same financing, leaving the buyer exposed to those changes as well.</p>
        <p className="leading-relaxed text-text-secondary mb-8">For a simplified example, assume a company has 10 million shares and no options, convertibles or other securities. Buying 1 million existing shares gives the buyer 10% ownership. Buying 1 million newly issued shares brings the total to 11 million and gives the buyer approximately 9.09%. The price and use of the new capital are additional parts of the comparison.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The rights attached to the investment</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A venture financing can establish a new preferred-stock series with its own liquidation, conversion and voting terms. Information rights, participation in future financings and board arrangements can also be negotiated in separate agreements. A smaller participant in the round may receive fewer contractual rights than the lead investor.</p>
        <p className="leading-relaxed text-text-secondary mb-6">In a secondary transaction, identify both the shares and the rights that will accompany them. Common and preferred shares can produce different outcomes at the same company valuation. Some contractual rights depend on the holder's identity, minimum ownership or an approved assignment, so the seller's original investment package may exceed what the buyer receives.</p>
        <p className="leading-relaxed text-text-secondary mb-8">The share class must be established from the actual documents. A secondary can involve preferred stock, and a primary issuance can involve common stock. Review the <Link to="/insights/reviewing-investment-documents/" className="text-accent hover:text-accent/80 underline">purchase, governance and investor agreements</Link> for the proposed security.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Information and negotiating leverage</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A company raising money participates directly in the financing process. The negotiated documents can require company representations, access to specified information and satisfaction of closing conditions.</p>
        <p className="leading-relaxed text-text-secondary mb-6">A shareholder selling an existing position may have limited access to current financials and limited authority to disclose what it holds. The seller can address ownership and its ability to transfer, but may decline to stand behind the company's operating performance. Establish what information and assurances are available before assuming that a lower price compensates for the difference.</p>
        <p className="leading-relaxed text-text-secondary mb-8">A primary investor can negotiate with the issuer over newly created rights. A secondary buyer usually negotiates price and purchase terms with the seller while seeking any necessary company cooperation. If you need information or participation rights beyond those transferable by the seller, negotiate them with the company before committing.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Pricing and closing conditions</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A recent financing price is a reference point for a secondary proposal. Compare the security, valuation date, capitalization and contractual protections when <Link to="/insights/pricing-private-company-secondaries/" className="text-accent hover:text-accent/80 underline">evaluating a secondary price</Link> against that benchmark.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Primary closing conditions center on the issuance and financing documents. Secondary conditions also need to address the seller's title, applicable transfer restrictions and any required waivers or consents. A financing and secondary sale negotiated together should state whether one can close without the other.</p>
        <p className="leading-relaxed text-text-secondary mb-8">Either investment can be held <Link to="/insights/direct-shares-vs-spvs/" className="text-accent hover:text-accent/80 underline">directly or through an SPV</Link>. Compare the underlying transaction first, then assess the vehicle's fees, control and distribution terms.</p>
        <p className="text-sm leading-relaxed text-text-muted mb-8">Further reading: <a href="https://nvca.org/model-legal-documents/" className="text-accent underline">NVCA's model financing documents</a>.</p>
        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">This article is for informational purposes only and does not constitute legal, tax or investment advice.</p>
      </>
    ),
  },
  {
    id: 'direct-shares-vs-spvs',
    title: 'Direct Shares vs. SPVs in Pre-IPO Investing',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Compare direct ownership with an SPV investment in a private company, including fees, shareholder rights, manager control and distributions.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">With a direct share purchase, you or your investing entity owns stock in the company. With an SPV investment, you own an interest in a separate vehicle that holds the investment. That additional layer determines how you receive information, who makes decisions about the position and how proceeds reach you.</p>
        <p className="leading-relaxed text-text-secondary mb-8">An SPV can pool investors into a position they could not each acquire on the same terms. That access comes with vehicle expenses and decisions delegated to the manager.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Establish the ownership chain</h2>
        <p className="leading-relaxed text-text-secondary mb-6">For a direct purchase, confirm the legal owner that will appear in the company's records and the class and number of shares being acquired. Holding stock through your own wholly owned entity still differs from subscribing to a sponsor-managed vehicle alongside other investors.</p>
        <p className="leading-relaxed text-text-secondary mb-6">For an SPV, identify what the vehicle owns or intends to acquire. It could hold company shares directly, an interest in another vehicle, or a contract for future delivery. Ask for an ownership diagram that reaches the company and identifies the documents supporting each link.</p>
        <p className="leading-relaxed text-text-secondary mb-8">A second vehicle creates another set of expenses, governing terms and decision-makers to examine. If the SPV has yet to acquire its position, review the purchase conditions and the treatment of subscriptions if that acquisition fails. Check that the offering materials describe the asset the vehicle will actually hold, including any intervening vehicle or forward contract.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Separate shareholder rights from vehicle rights</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A direct holder exercises the rights attached to its shares and any applicable investor agreements. Those rights can be limited: a small common-stock position may carry little information access and no board representation. Direct ownership alone does not provide the rights negotiated by a company's lead investors.</p>
        <p className="leading-relaxed text-text-secondary mb-6">In an SPV, the manager typically exercises the rights held by the vehicle, subject to its governing documents. Your right to reports, votes, consent or removal of the manager comes from those documents. Ask how company information can be shared with investors and whether confidentiality restrictions limit reporting.</p>
        <p className="leading-relaxed text-text-secondary mb-8">Read the provisions addressing conflicts and affiliated transactions. A sponsor may manage several vehicles in the same company, face different investor liquidity preferences or have a separate commercial relationship with a counterparty. Check who approves affiliated transactions, whether investors receive notice, and whether the manager can proceed without investor consent.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Model the capital invested and the proceeds retained</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Direct purchases can involve <Link to="/insights/broker-fees-private-share-transactions/" className="text-accent hover:text-accent/80 underline">brokerage, legal and transfer expenses</Link>. An SPV can add formation and administration expenses, management fees and carried interest. Calculate the amount that reaches the underlying investment and the deductions that apply when it is sold.</p>
        <p className="leading-relaxed text-text-secondary mb-6">The fee base and distribution order matter as much as the stated percentages. Confirm whether fees come out of your contribution or are payable in addition, how ongoing expenses are funded, and whether carried interest is calculated after returning your entire contribution or a narrower investment amount.</p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Illustrative SPV economics</h3>
          <p className="text-text-secondary mb-4">Assume a $100,000 contribution, with $5,000 deducted for a one-time expense and $95,000 invested. The agreement returns the full $100,000 contribution before charging 20% carried interest on profit. Assume no other fees, taxes or expenses.</p>
          <p className="text-text-secondary mb-4">If the underlying position doubles and produces $190,000, the profit after returning contributed capital is $90,000. Carry is $18,000, leaving $172,000 for the investor. If the position instead loses half its value, the investor receives $47,500 and no carry is payable under these assumptions.</p>
          <p className="text-text-secondary">A hypothetical $100,000 direct investment with no costs would produce $200,000 or $50,000 in those same scenarios. The comparison isolates the assumed SPV charges; an actual direct offer needs its own cost calculation. These figures illustrate mechanics, not market-standard terms or expected returns.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Who decides when to sell</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A direct holder can seek a buyer for its position, subject to the applicable securities-law and contractual restrictions. An SPV investor generally relies on the manager to sell the underlying shares. Selling the SPV interest itself is a separate transaction with its own restrictions and a potentially limited pool of buyers.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Review the manager's discretion to hold, sell, distribute stock, extend the vehicle's term or retain reserves. If the company goes public, lockups and resale restrictions may affect the shares, while the vehicle's documents determine how and when any sale proceeds or shares reach investors.</p>
        <p className="leading-relaxed text-text-secondary mb-8">If you may need to sell before the manager does, check whether you can transfer your SPV interest and what consent that requires. A sale of the underlying company shares remains subject to their own <Link to="/insights/secondary-sale-approvals-restrictions/" className="text-accent hover:text-accent/80 underline">transfer restrictions</Link>.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Compare executable alternatives</h2>
        <p className="leading-relaxed text-text-secondary mb-6">A <Link to="/insights/comparing-pre-ipo-broker-offers/" className="text-accent hover:text-accent/80 underline">comparison of offers</Link> should use terms actually available to the investor. A direct block might exceed the intended commitment or require a different share class. An SPV might provide a workable investment size and consolidated administration, with costs and delegated authority the investor is willing to accept.</p>
        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">This article is for informational purposes only and does not constitute legal, tax or investment advice.</p>
      </>
    ),
  },
  {
    id: 'pricing-private-company-secondaries',
    title: 'Pricing Private Company Secondaries',
    date: 'November 4, 2026',
    readTime: '4 min read',
    excerpt: 'Assess a private-company secondary price against financing rounds, share rights, transaction evidence and the total cost of acquiring the position.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">A secondary offer at a discount to the last financing price may involve a different security, older information and fewer investor rights. To judge the price, establish what the reference transaction purchased and what has changed since it closed.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Identify what the quoted valuation measures</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Ask how an implied company valuation was calculated. Multiplying a price per share by a share count requires a defined capitalization basis and date. Check whether each quote uses the same treatment of options, warrants and convertible instruments before comparing implied company valuations.</p>
        <p className="leading-relaxed text-text-secondary mb-6">A financing valuation reflects the securities and terms sold in that round. A compensation valuation values common stock for a different purpose; a secondary price reflects a particular negotiated sale. A headline valuation may also be pre-money or post-money, which changes whether the financing proceeds are included.</p>
        <p className="leading-relaxed text-text-secondary mb-8">If a broker quotes an implied valuation rather than a share price, request the price per share and the share count used to calculate the valuation. Reconcile that count with the most current capitalization information, including shares issued in any subsequent <Link to="/insights/primary-vs-secondary-investments/" className="text-accent hover:text-accent/80 underline">primary financing</Link>.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Compare the securities and their exit economics</h2>
        <p className="leading-relaxed text-text-secondary mb-6">The latest primary round may have sold preferred stock while the proposed secondary offers common stock. Review the preference amount, seniority, participation and conversion provisions, together with the other securities already outstanding. Those terms determine how a sale of the company would allocate value.</p>
        <p className="leading-relaxed text-text-secondary mb-6">A seller may also have information or participation rights that do not accompany the shares being transferred. Establish which rights remain available to the buyer before using the original holder's terms as a benchmark.</p>
        <div className="bg-surface/30 border border-grid p-6 md:p-8 mb-12">
          <h3 className="font-serif text-2xl text-text-highlight mb-4">Why the same company can support different share values</h3>
          <p className="text-text-secondary mb-4">Assume a company has 8 million common shares and 2 million preferred shares. The preferred was issued at $20 per share with a 1x non-participating liquidation preference and a one-for-one conversion right. Assume a sale leaves $70 million for shareholders after all other claims, with no other securities or accrued dividends.</p>
          <p className="text-text-secondary mb-4">The preferred holders choose between their $40 million preference and $14 million if they convert and receive 20% of the proceeds. Taking the preference leaves $30 million for common holders, or $3.75 per common share.</p>
          <p className="text-text-secondary mb-4">At a $250 million exit under the same assumptions, preferred holders convert to receive $50 million instead of taking the $40 million preference. All shares then receive $25 each.</p>
          <p className="text-text-secondary">A proposed common-share price of $12 is 40% below the preferred issuance price. It produces a loss in the first scenario and a gain in the second. Assessing the price requires a view of plausible exit values and the allocation of proceeds at each value.</p>
        </div>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Assess the evidence behind the price</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Distinguish completed transactions from indications of interest, asking prices and valuation marks. For an observed trade, identify the date, share class, size, structure and any available information about fees. An asking price shows what a seller is seeking; a completed purchase provides evidence of terms a buyer accepted.</p>
        <p className="leading-relaxed text-text-secondary mb-6">A single transaction may reflect a holder's urgency, a block-size requirement or terms unavailable to other buyers. Several recent, comparable transactions provide a firmer basis for a range, although private-market information can remain incomplete.</p>
        <p className="leading-relaxed text-text-secondary mb-8">When a data provider supplies a valuation or composite price, review its methodology and observation date. State the uncertainty explicitly in the investment analysis rather than treating an estimate as an executable quote.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Account for changes since the last financing</h2>
        <p className="leading-relaxed text-text-secondary mb-6">Since the reference financing, revenue growth, margins, cash consumption and funding needs may have changed. Review the available evidence for those developments, along with debt, competitive conditions and any new securities issued. A price anchored to an earlier round can become less informative as the company changes.</p>
        <p className="leading-relaxed text-text-secondary mb-6">Model a further financing if the business is likely to need one. Consider both dilution and the rights a new investor might demand. If the purchase depends on a near-term IPO, also assess the effect of holding the position substantially longer.</p>
        <p className="leading-relaxed text-text-secondary mb-8">If current cash balances, financing plans or capitalization details are unavailable, record how their absence limits the valuation. Further <Link to="/insights/private-share-purchase-due-diligence/" className="text-accent hover:text-accent/80 underline">due diligence</Link> may resolve those gaps; a larger discount supplies none of the missing information.</p>

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Calculate the cost and proceeds after fees</h2>
        <p className="leading-relaxed text-text-secondary mb-6">When <Link to="/insights/comparing-pre-ipo-broker-offers/" className="text-accent hover:text-accent/80 underline">comparing broker proposals</Link>, add acquisition costs to the amount paid for the shares. For a direct purchase, dividing the total acquisition outlay by the number of shares gives an initial effective cost per share. Include any known ongoing costs separately when modeling returns.</p>
        <p className="leading-relaxed text-text-secondary mb-6">For an SPV, calculate the underlying shares attributable to the subscription after expenses, then apply the vehicle's distribution terms to the exit scenarios. Carried interest affects the proceeds retained when the investment succeeds and can change the comparison between two apparently similar entry prices.</p>
        <p className="text-sm leading-relaxed text-text-muted mb-8">Further reading: <a href="https://nvca.org/model-legal-documents/" className="text-accent underline">NVCA model charter and financing documents</a> and <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks" className="text-accent underline">SEC guidance on common and preferred stock</a>.</p>
        <p className="text-xs text-text-muted border-t border-grid pt-6 mt-12">This article is for informational purposes only and does not constitute legal, tax or investment advice.</p>
      </>
    ),
  },
];
