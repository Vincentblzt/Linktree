import React from 'react';
import '../styles/SocialLinks.css';
import { LinkedInIcon, TwitterIcon } from '../icons/SocialIcons';

function SocialLinks() {
  const links = [
    {
      id: 'linkedin',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/vincentbalazut/',
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      id: 'twitter',
      icon: TwitterIcon,
      url: 'https://x.com/Vincentbalazut',
      label: 'X',
      ariaLabel: 'Visit X (Twitter) profile'
    }
  ];

  return (
    <div className="social-links">
      {links.map(link => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          title={link.label}
          aria-label={link.ariaLabel}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
