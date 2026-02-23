import React from 'react';

export type Category =
  | 'foundations'
  | 'agent-guides'
  | 'jurisdictions'
  | 'services'
  | 'technical'
  | 'post-formation'
  | 'faqs'
  | 'use-cases';

export type Audience = 'developer' | 'agent' | 'both';

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  category: Category;
  audience: Audience;
  date: string;
  readTime: string;
  excerpt: string;
  tags?: string[];
  content: React.ReactNode;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  'foundations': 'Foundations',
  'agent-guides': 'Agent Guides',
  'jurisdictions': 'Jurisdictions',
  'services': 'Services',
  'technical': 'Technical',
  'post-formation': 'Post-Formation',
  'faqs': 'FAQs',
  'use-cases': 'Use Cases',
};

export const AUDIENCE_LABELS: Record<Audience, string> = {
  developer: 'Developer',
  agent: 'Agent',
  both: 'All',
};
