import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Fund Formation',
    description: 'Comprehensive guidance through fund structuring, documentation, and regulatory filings. We handle the complexity of entity optimization so you can focus on capital deployment.',
    icon: null,
    features: ['Entity formation & optimization', 'Fund & governance documentation', 'Custom structuring support']
  },
  {
    id: '02',
    title: 'Regulatory Compliance',
    description: 'Building sustainable compliance frameworks that adapt to evolving SEC regulations. We transform compliance from a burden into a strategic operational asset.',
    icon: null,
    features: ['Compliance manual development', 'Ongoing regulatory monitoring', 'Policy & procedure implementation']
  },
  {
    id: '03',
    title: 'Adviser Registration',
    description: 'End-to-end support for RIA and state adviser registration. We manage the entire lifecycle of your Form ADV filings and annual amendments.',
    icon: null,
    features: ['Form ADV preparation & filing', 'State registration coordination', 'Annual update management']
  },
  {
    id: '04',
    title: 'Operations & Governance',
    description: 'Establishing the operational infrastructure required for institutional-grade fund management, including service provider selection and ongoing governance oversight.',
    icon: null,
    features: ['Service provider coordination', 'Operational infrastructure', 'Fund governance oversight']
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>('01');

  return (
    <section id="services" className="border-b border-grid bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Sticky Header */}
        <div className="lg:col-span-4 border-r border-grid p-10 lg:p-16 lg:sticky lg:top-20 lg:h-fit">
            <h2 className="font-serif text-4xl md:text-5xl text-text-highlight mb-8">
                Expertise
            </h2>
            <p className="text-text-secondary leading-relaxed font-light">
                We design and implement the regulatory infrastructure that allows private funds to operate with certainty and scale.
            </p>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-8">
            {services.map((service) => (
                <div key={service.id} className="group border-b border-grid last:border-b-0">
                    <button 
                        onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                        className="w-full text-left p-8 md:p-12 flex justify-between items-start transition-colors hover:bg-surface/50"
                    >
                        <div className="flex gap-6 md:gap-10">
                            <span className={`font-mono text-sm pt-2 transition-colors duration-300 ${activeService === service.id ? 'text-accent' : 'text-text-muted'}`}>{service.id}</span>
                            <h3 className={`font-serif text-3xl md:text-4xl transition-colors duration-300 ${activeService === service.id ? 'text-accent' : 'text-text-secondary group-hover:text-text-highlight'}`}>
                                {service.title}
                            </h3>
                        </div>
                        <span className={`p-2 transition-all duration-300 ${activeService === service.id ? 'rotate-45 text-accent' : 'text-text-muted group-hover:text-text-highlight'}`}>
                            <Plus className="w-5 h-5" />
                        </span>
                    </button>

                    <AnimatePresence>
                        {activeService === service.id && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pl-20 md:pl-28 pr-8 md:pr-12 pb-12">
                                    <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                                                <span className="w-1 h-1 bg-accent rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};