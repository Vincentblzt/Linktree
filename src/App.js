import React from 'react';
import './App.css';
import profileImage from './assets/profile.webp';

function App() {
  const profile = {
    name: 'Vincent BALAZUT',
    title: 'Founder',
    image: profileImage,
    social: [
      { icon: 'linkedin', url: 'https://www.linkedin.com/in/vincentbalazut/' },
      { icon: 'twitter', url: 'https://x.com/Vincentbalazut' }
    ],
    links: [
      { label: 'My Website', url: '#' },
      { label: 'Portfolio', url: '#' },
      { label: 'Contact', url: '#' }
    ]
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${profileImage})` }}>
      <div className="overlay"></div>

      <div className="content">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt={profile.name}
              className="profile-image"
            />
          </div>
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
        </div>

        <div className="social-icons">
          {profile.social.map((social) => (
            <a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title={social.icon}
              aria-label={social.icon}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        <div className="action-links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.url} className="action-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  const icons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.802-5.974 6.802H2.882l7.732-8.835L1.227 2.25h6.802l4.721 6.236 5.462-6.236zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  };

  return icons[icon] || null;
}

export default App;
