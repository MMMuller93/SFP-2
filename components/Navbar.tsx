import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect if we're in the startup legal section
  const isStartupLegal = location.pathname.startsWith('/startup-legal');

  const handleNavigation = (view: View, href?: string) => {
    setIsOpen(false);

    if (view === 'home' && href) {
      navigate(isStartupLegal ? '/startup-legal' : '/');
      // Small timeout to allow home component to mount before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (view === 'blog') {
      navigate('/insights');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(isStartupLegal ? '/startup-legal' : '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Different navigation links based on context
  const navLinks = isStartupLegal ? [
    { name: 'Services', href: '/startup-legal', view: 'home' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ] : [
    { name: 'Expertise', href: '#services', view: 'home' as const },
    { name: 'Insights', href: '/insights', view: 'blog' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-grid">
        <div className="grid grid-cols-12 h-20">
          
          {/* Brand / Logo Area */}
          <div className="col-span-8 md:col-span-4 lg:col-span-3 flex items-center px-6 md:px-8 border-r border-grid bg-bg/50">
            <Link to={isStartupLegal ? "/startup-legal" : "/"} className="flex items-center gap-3 group">
              <Logo className="w-6 h-6 text-text-highlight group-hover:text-accent transition-colors duration-300" />
              <span className="font-serif text-xl text-text-highlight group-hover:text-accent transition-colors duration-300 tracking-tight">SFP</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-6 items-center justify-center border-r border-grid">
            <div className="flex gap-12">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavigation(link.view, link.href)}
                  className={`relative text-sm font-medium transition-colors group py-2 ${
                    (currentView === link.view && !link.href.startsWith('#')) || (currentView === 'blog' && link.name === 'Insights') 
                      ? 'text-accent' 
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    (currentView === link.view && !link.href.startsWith('#')) || (currentView === 'blog' && link.name === 'Insights') 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Area */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-3 items-center justify-end px-8 bg-bg/50">
             <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21Bp23fIf0-8CWI6LvBUlR_LvGg2nuP5jXz4BFcCnzintnxEHdzarI54pXAzwqVQTBWfI3OEkz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-highlight hover:text-bg transition-colors border border-border px-5 py-2.5 hover:bg-accent hover:border-accent"
            >
              Book Consultation
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="col-span-4 md:hidden flex items-center justify-end px-6">
            <button 
              className="p-2 text-text-secondary hover:text-accent transition-colors"
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
            className="fixed top-20 left-0 right-0 bg-bg border-b border-grid z-40 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={() => handleNavigation(link.view, link.href)}
                  className="text-left font-serif text-3xl text-text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              ))}
               <a 
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21Bp23fIf0-8CWI6LvBUlR_LvGg2nuP5jXz4BFcCnzintnxEHdzarI54pXAzwqVQTBWfI3OEkz"
                target="_blank"
                onClick={() => setIsOpen(false)}
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