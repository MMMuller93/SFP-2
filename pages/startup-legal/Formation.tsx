import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ServiceSchema } from '../../components/ServiceSchema';

export const Formation: React.FC = () => {
  const services = [
    'Delaware C-Corp formation and filing',
    'Certificate of Incorporation and Bylaws',
    'Founder stock purchase agreements and 83(b) elections',
    'Board and stockholder consents',
    'Equity Incentive Plan with option and grant templates',
    'IP assignment agreements for all founders',
    'Employment offer letters and consultant agreements',
    'NDA and confidentiality templates',
    'Federal EIN application and initial tax consultation'
  ];

  return (
    <>
      <ServiceSchema
        name="Company Formation"
        description="Complete Delaware C-Corp formation package with all documentation needed to start, hire, and raise capital."
        serviceType="Corporate Formation and Incorporation Services"
      />
      <div className="border-b border-grid bg-bg px-8 md:px-12 py-6">
        <Link to="/startups" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      <section className="border-b border-grid bg-bg py-20 md:py-28">
        <div className="px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-highlight mb-8 leading-tight">
              Company Formation
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl">
              Complete Delaware C-Corp formation with founder equity, governance documentation, and employee templates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-grid bg-bg py-20 md:py-28">
        <div className="px-8 md:px-16 lg:px-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-1 h-1 bg-accent rounded-full mt-2.5" />
                <span className="text-text-secondary leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tool CTA */}
      <section className="border-b border-grid bg-surface/10 py-20 md:py-28">
        <div className="px-8 md:px-16 lg:px-24 max-w-4xl mx-auto">
          <div className="border border-accent/30 bg-bg/80 backdrop-blur-sm p-12 md:p-16 text-center relative overflow-hidden">
            {/* Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-6">
                Free Tool • No Credit Card Required
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-6 leading-tight">
                Generate Your Documents <span className="text-accent italic">Free</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Not ready for full-service formation? Try our free document generator. Answer a few questions and receive your complete Delaware C-Corp incorporation package—Certificate of Incorporation, Bylaws, Stock Purchase Agreement, and more—delivered instantly to your inbox.
              </p>
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
              <p className="text-text-muted text-xs mt-6 font-mono">Takes less than 10 minutes • Delivered via email</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl text-text-highlight mb-6">
            Need Full-Service Formation?
          </h2>
          <p className="text-text-secondary text-lg mb-12 font-light">
            Discuss your formation needs and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <Link
              to="/startups"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-text-primary text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
