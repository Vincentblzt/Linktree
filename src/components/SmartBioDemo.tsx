import React from 'react';
import { SmartBio } from './SmartBio';
import { SmartBioConfig } from '../types/smartbio';

const DEMO_CONFIG: SmartBioConfig = {
  title: 'Vincent BALAZUT',
  bio: 'Founder helping B2B companies scale revenue and operations.',
  avatar: '/vincent-avatar.webp',
  website: 'https://vincent-balazut.com',
  portfolio: '#',
  email: 'vincent.balazut@icloud.com',
  bookingUrl: '#',
  socials: {
    twitter: 'https://x.com/Vincentbalazut',
    linkedin: 'https://www.linkedin.com/in/vincentbalazut/',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  links: [
    {
      id: '1',
      label: 'Visit my website',
      url: 'https://vincent-balazut.com',
      icon: 'fa-solid fa-globe text-base',
      variant: 'light',
    },
    {
      id: '2',
      label: 'My portfolio',
      url: '#',
      icon: 'fa-regular fa-bookmark text-base',
      variant: 'light',
    },
    {
      id: '3',
      label: 'Message me',
      url: 'https://wa.me/33614224708',
      icon: 'fa-brands fa-whatsapp',
      variant: 'gradient',
    },
    {
      id: '4',
      label: 'Email me',
      url: 'mailto:vincent.balazut@icloud.com',
      icon: 'fa-regular fa-envelope',
      variant: 'dark',
    },
  ],
};

export const SmartBioDemo: React.FC = () => {
  return <SmartBio initialConfig={DEMO_CONFIG} shareUrl="https://smarbio.ai/vincent" />;
};
