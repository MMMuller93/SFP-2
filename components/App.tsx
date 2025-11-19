import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans flex flex-col relative overflow-x-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col max-w-[1600px] mx-auto border-l border-r border-grid min-h-screen shadow-2xl shadow-black bg-bg/50 backdrop-blur-[2px]">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Contact />
        </main>
        <Footer openModal={setModalType} />
      </div>
      
      <LegalModal isOpen={modalType} onClose={() => setModalType(null)} />
    </div>
  );
};

export default App;