import React from 'react';
import { X } from 'lucide-react';
import { ModalType } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const title = isOpen === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  
  const renderContent = () => {
    if (isOpen === 'privacy') {
      return (
        <div className="space-y-8 text-text-secondary leading-relaxed font-light text-sm">
          <p>Effective Date: January 1, 2025</p>
          <p>Strat Fund Partners LLC ("us", "we", or "our") operates the Strategic Fund Partners website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">1. Information Collection and Use</h4>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Business name.</li>
                <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">2. Use of Data</h4>
            <p>Strat Fund Partners LLC uses the collected data for various purposes:</p>
             <ul className="list-disc pl-5 space-y-1">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">3. Security of Data</h4>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </div>

           <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">4. Contact Us</h4>
            <p>If you have any questions about this Privacy Policy, please contact us: <br/> By email: contact@strategicfundpartners.com</p>
          </div>
        </div>
      );
    }
    return (
      <div className="space-y-8 text-text-secondary leading-relaxed font-light text-sm">
         <p>Last updated: January 1, 2025</p>
         <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Strat Fund Partners LLC ("us", "we", or "our").</p>
         
         <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">1. Conditions of Use</h4>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">2. Intellectual Property</h4>
            <p>The Service and its original content, features and functionality are and will remain the exclusive property of Strat Fund Partners LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Strat Fund Partners LLC.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">3. Links To Other Web Sites</h4>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Strat Fund Partners LLC. Strat Fund Partners LLC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Strat Fund Partners LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          </div>

           <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">4. Disclaimer</h4>
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-lg text-white">5. Governing Law</h4>
            <p>These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions.</p>
          </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          
          {/* Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-lg bg-bg border-l border-border z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-border bg-bg">
              <h2 className="font-serif font-semibold text-2xl text-white">{title}</h2>
              <button onClick={onClose} className="p-2 text-text-muted hover:text-white hover:bg-white/5 rounded transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-10 overflow-y-auto flex-1">
              {renderContent()}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};