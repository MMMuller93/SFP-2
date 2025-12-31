import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Registrations: React.FC = () => {
  const services = [
    'Foreign qualification filings and research',
    'Registered agent coordination in each state',
    'Annual report filings and compliance',
    'Business license identification and applications',
    'State tax registration support',
    'Good standing certificate requests',
    'Withdrawal filings when no longer operating',
    'Multi-state compliance tracking'
  ];

  return (
    <>
      <div className="border-b border-grid bg-bg px-8 md:px-12 py-6">
        <Link to="/startup-legal" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm">
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
              State Registrations
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl">
              Foreign qualification and compliance filings to operate legally across multiple states.
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

      <section className="bg-bg py-24 md:py-32">
        <div className="px-8 md:px-16 lg:px-24 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl text-text-highlight mb-6">
            Register Nationwide
          </h2>
          <p className="text-text-secondary text-lg mb-12 font-light">
            Discuss your multi-state compliance needs.
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
              to="/startup-legal"
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
