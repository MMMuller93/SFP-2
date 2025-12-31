import React from 'react';
import { useLocation } from 'react-router-dom';
import { ModalType } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  openModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const location = useLocation();
  const isStartupLegal = location.pathname.startsWith('/startup-legal');

  const tagline = isStartupLegal
    ? 'Legal infrastructure for ambitious startups.'
    : 'Providing the regulatory infrastructure for the next generation of asset managers.';

  const services = isStartupLegal
    ? ['Company Formation', 'Corporate Governance', 'Equity Management', 'Fundraising Preparation']
    : ['Fund Formation', 'Regulatory Compliance', 'Adviser Registration', 'Operational Support'];

  return (
    <footer className="border-t border-grid bg-bg py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 px-8 md:px-12 gap-12 md:gap-0">

        <div className="md:col-span-4 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
                <Logo className="w-6 h-6 text-text-muted" />
                <span className="text-text-muted font-serif text-lg">Strategic Fund Partners</span>
            </div>
            <p className="text-text-muted text-sm max-w-xs mb-8">
                {tagline}
            </p>
            <div className="text-text-muted text-xs font-mono">
                &copy; 2025 Strat Fund Partners LLC. All Rights Reserved.
            </div>
        </div>

        <div className="md:col-span-8 flex flex-col md:flex-row md:justify-end gap-12">
            <div>
                <h4 className="text-text-highlight font-medium mb-6">Services</h4>
                <ul className="space-y-3 text-sm text-text-secondary">
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-text-highlight font-medium mb-6">Legal</h4>
                <ul className="space-y-3 text-sm text-text-secondary">
                    <li><button onClick={() => openModal('privacy')} className="hover:text-text-highlight transition-colors">Privacy Policy</button></li>
                    <li><button onClick={() => openModal('terms')} className="hover:text-text-highlight transition-colors">Terms of Service</button></li>
                </ul>
            </div>
        </div>

      </div>
    </footer>
  );
};