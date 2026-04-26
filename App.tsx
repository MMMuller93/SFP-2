import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { StartupBlog } from './components/StartupBlog';
import { AgentBlog } from './components/AgentBlog';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { SEO } from './components/SEO';
import { About } from './components/About';
import { ModalType } from './types';
import {
  StartupLegalHome,
  Formation,
  Governance,
  Equity,
  Fundraising,
  Registrations
} from './pages/startup-legal';
import { AgentLegalHome } from './pages/agent-legal';

const App: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Signal to @prerenderer/rollup-plugin that the app has mounted and the
  // route's HTML is ready to be snapshotted. No-op outside the build-time
  // headless Chromium.
  useEffect(() => {
    document.dispatchEvent(new Event('app-ready'));
  }, [location.pathname]);

  const handleReturnToContact = () => {
    navigate('/');
    // Timeout allows the Home view (and Contact component) to mount before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Determine current view from path
  const currentView = (
    location.pathname.startsWith('/insights') ||
    location.pathname.includes('/insights')
  ) ? 'blog' : 'home';

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans flex flex-col relative overflow-x-hidden">
      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-100 pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col max-w-[1600px] mx-auto border-l border-r border-grid min-h-screen shadow-2xl shadow-black bg-bg/50 backdrop-blur-[2px]">
        <Navbar currentView={currentView} onNavigate={(view) => navigate(view === 'home' ? '/' : '/insights')} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <SEO />
                <Hero />
                <div id="process" className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Services />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/about" element={
              <>
                <SEO
                  title="About | Strategic Fund Partners"
                  description="Strategic Fund Partners is an advisory firm for fund managers, SPV sponsors, and family offices. Founded by Miles Muller."
                />
                <About />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/insights" element={
              <>
                <SEO
                  title="Insights | Strategic Fund Partners"
                  description="Expert guidance on fund formation, regulatory compliance, Form ADV filing, and ongoing compliance for venture capital and private equity managers."
                />
                <Blog onContactClick={handleReturnToContact} />
              </>
            } />
            <Route path="/insights/:slug" element={<Blog onContactClick={handleReturnToContact} />} />

            {/* Startup Services Routes */}
            <Route path="/startups" element={
              <>
                <SEO
                  title="Startup Legal Services | Strategic Fund Partners"
                  description="Complete legal infrastructure for ambitious startups. Delaware C-Corp formation, corporate governance, equity management, fundraising preparation, and state registrations."
                />
                <StartupLegalHome />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/startups/formation" element={
              <>
                <SEO
                  title="Company Formation | Startup Legal Services"
                  description="Complete Delaware C-Corp formation package with all documentation needed to start, hire, and raise capital. Formation, bylaws, stock plans, and founder agreements."
                />
                <Formation />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/startups/governance" element={
              <>
                <SEO
                  title="Corporate Governance | Startup Legal Services"
                  description="Ongoing corporate maintenance and board documentation. Annual consents, stock ledger management, cap table updates, and investor-ready records."
                />
                <Governance />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/startups/equity" element={
              <>
                <SEO
                  title="Equity Issuances | Startup Legal Services"
                  description="Stock grants, option awards, and cap table management for founders, employees, and advisors. 409A coordination and equity incentive plans."
                />
                <Equity />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/startups/fundraising" element={
              <>
                <SEO
                  title="Fundraising Preparation | Startup Legal Services"
                  description="Get your company ready to raise capital. SAFEs, convertible notes, priced rounds, due diligence preparation, and data room setup."
                />
                <Fundraising />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />
            <Route path="/startups/registrations" element={
              <>
                <SEO
                  title="State Registrations | Startup Legal Services"
                  description="Foreign qualification and business registrations to legally operate across multiple states. Registered agent setup and annual compliance."
                />
                <Registrations />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />

            {/* Startup Blog Routes */}
            <Route path="/startups/insights" element={
              <>
                <SEO
                  title="Startup Insights | Strategic Fund Partners"
                  description="Practical guides for startup founders on incorporation, equity management, 83(b) elections, SAFEs, and fundraising preparation."
                />
                <StartupBlog onContactClick={handleReturnToContact} />
              </>
            } />
            <Route path="/startups/insights/:slug" element={<StartupBlog onContactClick={handleReturnToContact} />} />

            {/* AI Agent Formation Routes */}
            <Route path="/agents" element={
              <>
                <SEO
                  title="AI Agent Formation | Strategic Fund Partners"
                  description="Legal infrastructure for AI agents. Form Delaware LLCs and Wyoming DAO LLCs via API. $349 all-in including registered agent, operating agreement, and EIN application."
                />
                <AgentLegalHome />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <Contact />
              </>
            } />

            {/* Agent Blog Routes */}
            <Route path="/agents/insights" element={
              <>
                <SEO
                  title="Agent Formation Insights | Strategic Fund Partners"
                  description="Practical guides for AI agent developers on entity formation, authority schedules, human kernels, and getting your agent operational with a legal identity."
                />
                <AgentBlog onContactClick={handleReturnToContact} />
              </>
            } />
            <Route path="/agents/insights/:slug" element={<AgentBlog onContactClick={handleReturnToContact} />} />
          </Routes>
        </main>

        <Footer openModal={setModalType} />
      </div>

      <LegalModal isOpen={modalType} onClose={() => setModalType(null)} />
    </div>
  );
};

export default App;