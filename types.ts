import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export type ModalType = 'privacy' | 'terms' | null;

export type View = 'home' | 'blog';