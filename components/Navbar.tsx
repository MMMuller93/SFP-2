import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../types';
import { trackConversion } from '../lib/conversions';
import { canonicalPath, SITE_PATHS } from '../lib/site-paths';
import { CONSULTATION_URL, openConsultation } from '../lib/calendly';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleConsultation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackConversion('consultation_link_clicked');
    setIsOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void openConsultation().catch(() => {
      window.location.assign(CONSULTATION_URL);
    });
  };

  // Detect which section we're in
  const isStartupLegal = location.pathname.startsWith('/startups');
  const isAgentLegal = location.pathname.startsWith('/agents');
  const sectionPrefix = isAgentLegal ? '/agents' : isStartupLegal ? '/startups' : '';

  const handleNavigation = (view: View, href?: string) => {
    setIsOpen(false);

    if (view === 'home' && href && href.startsWith('#')) {
      navigate(canonicalPath(sectionPrefix || '/'));
      // Small timeout to allow home component to mount before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (view === 'blog') {
      navigate(`${sectionPrefix}/insights/`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href && href.startsWith('/')) {
      // Absolute path — direct navigation (e.g. /about)
      navigate(canonicalPath(href));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(canonicalPath(sectionPrefix || '/'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Different navigation links based on context
  const navLinks = isAgentLegal ? [
    { name: 'Overview', href: '/agents/', view: 'home' as const },
    { name: 'Insights', href: '/agents/insights/', view: 'blog' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ] : isStartupLegal ? [
    { name: 'Services', href: '/startups/', view: 'home' as const },
    { name: 'Insights', href: '/startups/insights/', view: 'blog' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ] : [
    { name: 'Expertise', href: '#services', view: 'home' as const },
    { name: 'Private Markets', href: SITE_PATHS.privateMarkets, view: 'home' as const },
    { name: 'About', href: '/about/', view: 'home' as const },
    { name: 'Insights', href: '/insights/', view: 'blog' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ];

  const isActiveLink = (href: string) => {
    if (href.startsWith('#')) return false;
    const path = canonicalPath(location.pathname);
    return path === href || (href.endsWith('/insights/') && path.startsWith(href));
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-grid">
        <div className="grid grid-cols-12 h-20">
          
          {/* Brand / Logo Area */}
          <div className="col-span-8 lg:col-span-2 flex items-center px-6 md:px-8 border-r border-grid bg-bg/50">
            <Link to={canonicalPath(sectionPrefix || "/")} className="flex items-center gap-3 group">
              <Logo className="w-6 h-6 text-text-highlight group-hover:text-accent transition-colors duration-300" />
              <span className="font-serif text-xl text-text-highlight group-hover:text-accent transition-colors duration-300 tracking-tight">SFP</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:col-span-7 items-center justify-center border-r border-grid">
            <div className="flex gap-6 xl:gap-10">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavigation(link.view, link.href)}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  className={`relative text-sm font-medium transition-colors group py-2 whitespace-nowrap ${
                    isActiveLink(link.href)
                      ? 'text-accent' 
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    isActiveLink(link.href)
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Area */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end px-6 xl:px-8 bg-bg/50">
             <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={CONSULTATION_URL}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleConsultation}
              className="flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-text-highlight hover:text-bg transition-colors border border-border px-5 py-2.5 hover:bg-accent hover:border-accent"
            >
              Book Consultation
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="col-span-4 lg:hidden flex items-center justify-end px-6">
            <button 
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="fixed top-20 left-0 right-0 bg-bg border-b border-grid z-40 overflow-hidden shadow-2xl lg:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavigation(link.view, link.href)}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  className={`text-left font-serif text-3xl hover:text-accent transition-colors ${isActiveLink(link.href) ? 'text-accent' : 'text-text-secondary'}`}
                >
                  {link.name}
                </button>
              ))}
               <a 
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleConsultation}
                className="mt-8 flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-widest"
              >
                Book Consultation <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
