import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative border-b border-grid bg-bg flex flex-col min-h-[90vh]">
      
      {/* Main Content Area - Centered & clean */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-12 text-center">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl mx-auto"
        >
           <div className="flex flex-col items-center gap-6 mb-12">
              <span className="px-3 py-1 border border-accent/20 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                Advisory for Private Funds
              </span>
           </div>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-highlight tracking-tight mb-10 text-balance">
            Strategic Guidance <br/>
            for the <span className="text-accent italic font-light">Modern Fund Manager.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 font-light max-w-2xl mx-auto text-balance">
            Strategic support for the next generation of asset managers.
          </p>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg text-xs font-bold uppercase tracking-widest hover:bg-accentHover transition-colors duration-500 min-w-[200px]"
          >
            Start Conversation
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Ticker - Cleaner integration of fund types */}
      <div className="h-16 border-t border-grid bg-surface/30 backdrop-blur-sm flex items-center overflow-hidden relative">
          <div className="absolute inset-0 flex items-center whitespace-nowrap mask-image-gradient">
              <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="flex gap-16 items-center"
              >
                  {[...Array(4)].map((_, i) => (
                      <React.Fragment key={i}>
                          <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Private Equity</span>
                          <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                          <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Venture Capital</span>
                          <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                          <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Syndicates</span>
                          <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                          <span className="text-sm font-mono uppercase tracking-widest text-text-muted">SPVs</span>
                          <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                          <span className="text-sm font-mono uppercase tracking-widest text-text-muted">Exempt Reporting Advisers</span>
                          <span className="w-1 h-1 rounded-full bg-accent/30"></span>
                      </React.Fragment>
                  ))}
              </motion.div>
          </div>
      </div>
    </section>
  );
};