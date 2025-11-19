import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType, View } from './types';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [view, setView] = useState<View>('home');

  const handleReturnToContact = () => {
    setView('home');
    // Timeout allows the Home view (and Contact component) to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans flex flex-col relative overflow-x-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col max-w-[1600px] mx-auto border-l border-r border-grid min-h-screen shadow-2xl shadow-black bg-bg/50 backdrop-blur-[2px]">
        <Navbar currentView={view} onNavigate={setView} />
        
        <main className="flex-grow">
          {view === 'home' ? (
            <>
              <Hero />
              <div id="process" className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Services />
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Contact />
            </>
          ) : (
            <Blog onContactClick={handleReturnToContact} />
          )}
        </main>

        <Footer openModal={setModalType} />
      </div>
      
      <LegalModal isOpen={modalType} onClose={() => setModalType(null)} />
    </div>
  );
};

export default App;