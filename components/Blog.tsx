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
    id: 'adv-era-registration',
    title: 'Form ADV and Exempt Reporting Adviser Registration: What Private Fund Managers Need to Know',
    date: 'January 15, 2025',
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