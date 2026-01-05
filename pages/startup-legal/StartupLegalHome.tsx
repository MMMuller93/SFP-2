import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, TrendingUp, FileText, MapPin } from 'lucide-react';

export const StartupLegalHome: React.FC = () => {
  const services = [
    {
      id: 'formation',
      title: 'Company Formation',
      description: 'Delaware C-Corp formation with founder equity, governance documents, and equity plans',
      icon: Building2,
      href: '/startups/formation'
    },
    {
      id: 'governance',
      title: 'Corporate Governance',
      description: 'Board and stockholder documentation, corporate records, and compliance maintenance',
      icon: Users,
      href: '/startups/governance'
    },
    {
      id: 'equity',
      title: 'Equity Management',
      description: 'Stock and option grants, RSAs, 409A coordination, and cap table management',
      icon: TrendingUp,
      href: '/startups/equity'
    },
    {
      id: 'fundraising',
      title: 'Fundraising Preparation',
      description: 'SAFEs, convertible notes, priced rounds, due diligence, and investor documentation',
      icon: FileText,
      href: '/startups/fundraising'
    },
    {
      id: 'registrations',
      title: 'State Registrations',
      description: 'Foreign qualification, registered agents, and multi-state compliance',
      icon: MapPin,
      href: '/startups/registrations'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative border-b border-grid bg-bg flex flex-col min-h-[90vh]">
        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12 text-center">

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-5xl mx-auto"
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-highlight tracking-tight mb-10 text-balance">
              Legal Infrastructure <br/>
              for <span className="text-accent italic font-light">Ambitious Startups.</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 font-light max-w-2xl mx-auto text-balance">
              From formation to fundraising, we provide the corporate foundation your startup needs to scale with confidence.
            </p>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-500 min-w-[200px]"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Ticker */}
        <div className="h-16 border-t border-grid bg-surface/30 backdrop-blur-sm flex items-center overflow-hidden relative">
          <div className="absolute inset-0 flex items-center whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-16 items-center"
            >
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Delaware C-Corps</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                  <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Equity Management</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                  <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Fundraise Ready</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                  <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Founder Focused</span>
                  <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="border-b border-grid bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6">
              Our Services
            </h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Comprehensive legal support for every stage of your startup journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.href}
                className="group border border-grid bg-surface/30 p-8 hover:bg-surface/50 hover:border-accent/30 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-serif text-2xl text-text-highlight mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Formation Tool CTA */}
      <section className="border-b border-grid bg-surface/10 py-20 md:py-28">
        <div className="px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
          <div className="border border-accent/30 bg-bg/80 backdrop-blur-sm p-12 md:p-16 relative overflow-hidden">
            {/* Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-6">
                  Free Tool
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6 leading-tight">
                  Get Your Formation Documents <span className="text-accent italic">Free</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Not ready for full-service formation? Generate your complete Delaware C-Corp incorporation package in minutes. Answer a few questions and receive professionally drafted documents—Certificate of Incorporation, Bylaws, Stock Purchase Agreement, and more—delivered to your inbox.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-text-secondary text-sm">Complete incorporation package with all essential documents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-text-secondary text-sm">Customized to your company structure and founder equity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-text-secondary text-sm">Generated in under 10 minutes, delivered instantly via email</p>
                  </div>
                </div>
                <motion.a
                  href="https://formation.strategicfundpartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300"
                >
                  Generate Documents Free
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
              
              <div className="hidden lg:block">
                <div className="space-y-4">
                  <div className="border border-grid bg-surface/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-accent" />
                      <h4 className="font-medium text-text-primary">Certificate of Incorporation</h4>
                    </div>
                    <p className="text-text-secondary text-sm">Official Delaware filing document</p>
                  </div>
                  <div className="border border-grid bg-surface/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-accent" />
                      <h4 className="font-medium text-text-primary">Bylaws</h4>
                    </div>
                    <p className="text-text-secondary text-sm">Corporate governance rules</p>
                  </div>
                  <div className="border border-grid bg-surface/50 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-5 h-5 text-accent" />
                      <h4 className="font-medium text-text-primary">Stock Purchase Agreement</h4>
                    </div>
                    <p className="text-text-secondary text-sm">Founder equity documentation</p>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-text-muted text-xs font-mono">+ 5 more documents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="border-b border-grid bg-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-16 lg:p-24 border-r border-grid">
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-8">
              Why Work With Us
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-accent mb-3">Founder-First Approach</h3>
                <p className="text-text-secondary leading-relaxed">
                  We understand startup constraints. Fixed-fee packages, clear timelines, and documentation designed for founders, not lawyers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-accent mb-3">Complete Packages</h3>
                <p className="text-text-secondary leading-relaxed">
                  Everything you need in one engagement. No surprise fees, no hourly billing anxiety, no gaps in your corporate records.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-accent mb-3">Investor Ready</h3>
                <p className="text-text-secondary leading-relaxed">
                  Documentation structured for fundraising from day one. Clean cap tables, proper governance, and diligence-ready records.
                </p>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-16 lg:p-24 flex flex-col justify-center bg-surface/20">
            <h3 className="font-serif text-3xl text-text-highlight mb-8">
              Typical Formation Timeline
            </h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent font-mono text-sm">01</div>
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Intake & Planning</h4>
                  <p className="text-text-secondary text-sm">Gather founder details, equity split, and company information</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent font-mono text-sm">02</div>
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Document Preparation</h4>
                  <p className="text-text-secondary text-sm">We prepare all formation documents and equity plans</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent font-mono text-sm">03</div>
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Review & Filing</h4>
                  <p className="text-text-secondary text-sm">You review, we file with Delaware and obtain EIN</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent font-mono text-sm">04</div>
                <div>
                  <h4 className="text-text-primary font-medium mb-2">Delivery</h4>
                  <p className="text-text-secondary text-sm">Complete package delivered in 5-7 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl text-text-highlight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary text-lg mb-12 font-light">
            Let's discuss your startup's legal needs and find the right solution.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>
    </>
  );
};
