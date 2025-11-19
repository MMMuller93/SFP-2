import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulating API call
    setTimeout(() => {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        
        {/* Left Panel - Call to Action */}
        <div className="p-10 md:p-16 lg:p-24 border-r border-grid flex flex-col justify-center relative">
            
            <h2 className="font-serif text-5xl md:text-6xl text-text-highlight mb-8">
                Get in Touch
            </h2>
            <p className="text-text-secondary text-lg font-light max-w-md mb-12">
                Discuss your fund structure or compliance requirements with our team.
            </p>

            <div className="mt-auto space-y-8">
                 <div>
                    <h4 className="text-xs font-mono uppercase text-text-muted tracking-widest mb-2">Email</h4>
                    <a href="mailto:contact@strategicfundpartners.com" className="text-xl text-text-primary hover:text-accent transition-colors">
                        contact@strategicfundpartners.com
                    </a>
                 </div>
                 
                 <div>
                    <h4 className="text-xs font-mono uppercase text-text-muted tracking-widest mb-2">Office</h4>
                    <p className="text-text-primary">
                        New York, NY
                    </p>
                 </div>
            </div>
        </div>

        {/* Right Panel - The Form */}
        <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-surface/30">
             {formState === 'success' ? (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                 >
                     <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                         <Send className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-serif text-text-highlight mb-2">Inquiry Received</h3>
                     <p className="text-text-secondary">We will be in touch within 24 hours.</p>
                     <button 
                        onClick={() => setFormState('idle')} 
                        className="mt-8 text-sm uppercase tracking-widest text-accent hover:text-white border-b border-accent hover:border-white pb-1 transition-colors"
                    >
                        Send Another
                    </button>
                 </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono uppercase text-text-muted">Name</label>
                            <input type="text" id="name" required className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-accent focus:outline-none transition-colors rounded-none placeholder-text-muted/50" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-mono uppercase text-text-muted">Firm</label>
                            <input type="text" id="company" required className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-accent focus:outline-none transition-colors rounded-none placeholder-text-muted/50" placeholder="Acme Capital" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono uppercase text-text-muted">Email</label>
                        <input type="email" id="email" required className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-accent focus:outline-none transition-colors rounded-none placeholder-text-muted/50" placeholder="john@acme.com" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-mono uppercase text-text-muted">Requirements</label>
                        <textarea id="message" rows={3} className="w-full bg-transparent border-b border-border py-3 text-text-primary focus:border-accent focus:outline-none transition-colors resize-none rounded-none placeholder-text-muted/50" placeholder="Briefly describe your fund structure or advisory needs..." />
                    </div>

                    <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="group flex items-center gap-4 text-text-primary hover:text-accent transition-colors pt-4"
                    >
                        {formState === 'submitting' ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <>
                                <span className="text-lg font-medium">Submit Inquiry</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
             )}
        </div>

      </div>
    </section>
  );
};