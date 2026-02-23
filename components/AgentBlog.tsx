import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight, Bot, Code, Globe } from 'lucide-react';
import { SEO } from './SEO';
import { POSTS, CATEGORY_LABELS, AUDIENCE_LABELS, type Category, type Audience } from './agent-blog-posts';

interface AgentBlogProps {
  onContactClick: () => void;
}

const AUDIENCE_COLORS: Record<Audience, string> = {
  agent: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  developer: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  both: 'bg-accent/10 text-accent border-accent/30',
};

const AUDIENCE_ICONS: Record<Audience, React.ReactNode> = {
  agent: <Bot className="w-3 h-3" />,
  developer: <Code className="w-3 h-3" />,
  both: <Globe className="w-3 h-3" />,
};

export const AgentBlog: React.FC<AgentBlogProps> = ({ onContactClick }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<typeof POSTS[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  useEffect(() => {
    if (slug) {
      const post = POSTS.find(p => p.id === slug);
      if (post) {
        setSelectedPost(post);
      } else {
        navigate('/agents/insights', { replace: true });
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug, navigate]);

  const filteredPosts = activeCategory === 'all'
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  // Detail view
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
              to="/agents/insights"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>

            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {selectedPost.readTime}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest border ${AUDIENCE_COLORS[selectedPost.audience]}`}>
                {AUDIENCE_ICONS[selectedPost.audience]}
                {AUDIENCE_LABELS[selectedPost.audience]}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                {CATEGORY_LABELS[selectedPost.category]}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-text-highlight mb-12 text-balance">
              {selectedPost.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              {selectedPost.content}
            </div>

            <div className="mt-20 p-8 bg-surface/20 border border-grid text-center">
              <h3 className="font-serif text-2xl text-text-highlight mb-4">Building an agent that needs a legal entity?</h3>
              <p className="text-text-secondary mb-8">Contact us to discuss agent formation and the API integration.</p>
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

  // List view
  const categories: (Category | 'all')[] = ['all', 'foundations', 'agent-guides', 'jurisdictions', 'services', 'technical', 'post-formation', 'faqs', 'use-cases'];

  return (
    <section id="agent-blog" className="bg-bg py-20 md:py-28 border-b border-grid min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-grid pb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-highlight mb-6">
              Insights
            </h2>
            <p className="text-text-secondary text-lg">
              Guides for agents and developers on entity formation, legal infrastructure, and autonomous operation
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors border ${
                activeCategory === cat
                  ? 'bg-accent text-bg border-accent'
                  : 'text-text-muted border-grid hover:text-accent hover:border-accent/50'
              }`}
            >
              {cat === 'all' ? 'All' : CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <p className="text-xs text-text-muted mb-8 font-mono">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/agents/insights/${post.id}`}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group cursor-pointer flex flex-col h-full border border-grid bg-surface/20 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border ${AUDIENCE_COLORS[post.audience]}`}>
                      {AUDIENCE_ICONS[post.audience]}
                      {AUDIENCE_LABELS[post.audience]}
                    </span>
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
