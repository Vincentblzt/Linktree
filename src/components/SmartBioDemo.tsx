import React from 'react';
import { SmartBio } from './SmartBio';
import { SmartBioConfig } from '../types/smartbio';

const DEMO_CONFIG: SmartBioConfig = {
  title: 'Vincent BALAZUT',
  bio: 'I help B2B companies scale revenue and operations.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  website: 'https://example.com',
  portfolio: '#',
  email: 'vincent@example.com',
  bookingUrl: '#',
  socials: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  links: [
    {
      id: '1',
      label: 'Visit my website',
      url: 'https://example.com',
      icon: 'fa-solid fa-globe text-base',
      variant: 'light',
    },
    {
      id: '2',
      label: 'See portfolio',
      url: '#',
      icon: 'fa-regular fa-folder text-base',
      variant: 'light',
    },
    {
      id: '3',
      label: 'Book a call',
      url: '#',
      icon: 'fa-regular fa-calendar-check',
      variant: 'gradient',
    },
    {
      id: '4',
      label: 'Email me',
      url: 'mailto:vincent@example.com',
      icon: 'fa-regular fa-envelope',
      variant: 'dark',
    },
  ],
};

export const SmartBioDemo: React.FC = () => {
  return <SmartBio initialConfig={DEMO_CONFIG} shareUrl="https://smarbio.ai/vincent" />;
};
