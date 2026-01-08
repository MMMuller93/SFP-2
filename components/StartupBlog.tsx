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

interface StartupBlogProps {
  onContactClick: () => void;
}

const posts: BlogPost[] = [
  {
    id: 'incorporating-your-startup',
    title: 'Incorporating Your Startup: The Complete Guide to Delaware C-Corps',
    date: 'December 15, 2025',
    readTime: '10 min read',
    excerpt: 'Delaware C-corp is the standard structure for VC-backed startups. This guide explains why, walks through the incorporation process, and covers what you need to get started.',
    content: (
      <>
        <p className="text-lg leading-relaxed text-text-secondary mb-8">
          If you're building a startup that plans to raise venture capital, your company structure isn't a detail to figure out later. It's foundational. Nearly every VC-backed company incorporates as a Delaware C-corporation before raising institutional capital, and for good reason.
        </p>
        <p className="text-lg leading-relaxed text-text-secondary mb-12">
          This guide explains why Delaware C-corp is the standard, what the incorporation process involves, and what documents and decisions you'll need to make before you can start hiring, issuing equity, and raising capital.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Why Delaware C-Corp?</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Investor expectations</h4>
            <p className="text-text-secondary">VCs expect Delaware C-corps. Their legal teams know Delaware law, their templates are written for Delaware entities, and their due diligence process assumes this structure. Incorporating elsewhere creates friction and questions.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Legal framework</h4>
            <p className="text-text-secondary">Delaware corporate law is well-developed, predictable, and business-friendly. Courts resolve disputes quickly. Statutes provide maximum flexibility for structuring board rights, preferred stock terms, and protective provisions.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Equity structures</h4>
            <p className="text-text-secondary">Delaware law makes it straightforward to issue multiple classes of stock with different rights. This is essential for venture financings, where investors receive preferred stock with liquidation preferences, anti-dilution protection, and board seats.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Exit readiness</h4>
            <p className="text-text-secondary">Acquirers and underwriters expect Delaware C-corps. Converting from an LLC or non-Delaware entity before an exit creates tax complications, timing delays, and additional legal costs.</p>
          </div>
        </div>

        <p className="italic text-text-secondary mb-12 bg-surface/50 p-6 border border-grid">
          <strong className="text-text-highlight">What about LLCs?</strong> LLCs offer tax advantages for profitable businesses, but they don't work well for VC-backed startups. Investors don't want pass-through tax treatment, and LLC equity structures are harder to manage with multiple financing rounds and option pools.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">The Incorporation Process</h2>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">1. Choose a Name</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          Your corporate name must be distinguishable from existing Delaware entities. Search Delaware's entity database before filing. You'll also want to check domain availability and USPTO trademark records.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          The name on your Certificate of Incorporation is your legal name. You can operate under a different name (DBA) but the legal name appears on contracts, cap tables, and SEC filings.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">2. File Certificate of Incorporation</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The Certificate of Incorporation is the foundational document filed with Delaware. It specifies:
        </p>
        <ul className="space-y-3 text-text-secondary mb-8 pl-5 list-disc marker:text-accent">
          <li>Company name</li>
          <li>Registered agent address in Delaware</li>
          <li>Authorized shares: typically 10-15 million common shares authorized at formation, with par value of $0.0001 per share</li>
          <li>Incorporator name (your lawyer or a founder)</li>
        </ul>
        <p className="leading-relaxed text-text-secondary mb-12">
          <strong className="text-accent font-medium">Why authorize 10-15 million shares?</strong> You'll issue founders a few million shares and reserve 1-2 million for an employee option pool. The rest provides headroom for future rounds without needing to amend the certificate and pay filing fees.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">3. Adopt Bylaws</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Bylaws are the internal operating rules. They cover board size and election, officer roles, stockholder meetings, and procedures for amending bylaws. Bylaws aren't filed publicly—they're maintained internally and provided to investors during due diligence.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">4. Appoint Initial Directors</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          The incorporator appoints the initial board. For founder-stage companies, this is typically the founders. Board size is usually 1-3 at formation, expanding as you raise capital and add outside directors or investor representatives.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">5. Issue Founder Stock</h3>
        <p className="leading-relaxed text-text-secondary mb-6">
          The board issues common stock to founders under restricted stock purchase agreements. Shares are typically priced at par value ($0.0001 per share), which means 1 million shares costs $100.
        </p>
        <p className="leading-relaxed text-text-secondary mb-6">
          <strong className="text-accent font-medium">Vesting is standard.</strong> Even for founders. The typical schedule is four years with a one-year cliff. This protects the company if a co-founder leaves early.
        </p>
        <p className="leading-relaxed text-text-secondary mb-12">
          Founders must file 83(b) elections within 30 days of purchasing stock. See our guide <Link to="/startups/insights/83b-election" className="text-accent hover:text-accent/80 underline">The 83(b) Election</Link> for details.
        </p>

        <h3 className="font-serif text-2xl text-text-highlight mb-6">6. Adopt Stock Plan</h3>
        <p className="leading-relaxed text-text-secondary mb-12">
          Adopt an equity incentive plan before hiring employees. The plan reserves shares for option grants. A typical size is 10-20% of fully diluted capitalization at formation. For more, see <Link to="/startups/insights/founder-equity" className="text-accent hover:text-accent/80 underline">Founder Equity: Stock, Vesting, and 83(b)</Link>.
        </p>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">Post-Incorporation Essentials</h2>

        <div className="space-y-6 mb-12">
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">EIN (Employer Identification Number)</h4>
            <p className="text-text-secondary">Apply for an EIN from the IRS immediately after incorporation. You need it to open bank accounts, file tax returns, and hire employees.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Bank account</h4>
            <p className="text-text-secondary">Open a corporate bank account in the company's name. Keep founder funds separate. Commingling personal and business funds creates piercing-the-veil risks and tax problems.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">IP assignment</h4>
            <p className="text-text-secondary">All founders must assign pre-existing IP to the company. Any code, designs, or inventions developed before incorporation should be formally transferred. Investors will look for this in due diligence.</p>
          </div>
          <div className="border-l-2 border-accent pl-6 py-2">
            <h4 className="text-text-highlight font-medium mb-2">Registered agent</h4>
            <p className="text-text-secondary">You need a registered agent with a physical Delaware address to receive legal notices. Most companies use a commercial service ($100-300 annually).</p>
          </div>
        </div>

        <hr className="border-grid mb-12" />

        <h2 className="font-serif text-3xl text-text-highlight mb-6">How We Help</h2>
        <p className="leading-relaxed text-text-secondary mb-8">
          We handle Delaware C-corp formation for early-stage startups:
        </p>
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { title: 'Entity formation', desc: 'Certificate of Incorporation drafting and filing, bylaws, initial board resolutions, registered agent setup' },
            { title: 'Founder equity', desc: 'Restricted stock purchase agreements, 83(b) election coordination, equity splits and vesting schedules' },
            { title: 'Stock plans', desc: 'Equity incentive plan adoption, option templates, 409A coordination' },
            { title: 'Corporate setup', desc: 'EIN application, IP assignment agreements, initial governance documents' }
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

export const StartupBlog: React.FC<StartupBlogProps> = ({ onContactClick }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const post = posts.find(p => p.id === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        navigate('/startups/insights', { replace: true });
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug, navigate]);

  if (selectedPost) {
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
              to="/startups/insights"
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

            <div className="mt-20 p-8 bg-surface/20 border border-grid text-center">
              <h3 className="font-serif text-2xl text-text-highlight mb-4">Forming your startup?</h3>
              <p className="text-text-secondary mb-8">Contact us to discuss your incorporation and founder equity needs.</p>
              <button
                onClick={onContactClick}
                className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors text-xs font-bold uppercase tracking-widest"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <section id="startup-blog" className="bg-bg py-20 md:py-28 border-b border-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-grid pb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-highlight mb-6">
              Insights
            </h2>
            <p className="text-text-secondary text-lg">
              Guides for startup founders on formation, equity, and fundraising
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/startups/insights/${post.id}`}>
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
