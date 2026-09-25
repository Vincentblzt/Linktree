import React from 'react';
import { SmartBioConfig, LinkItem } from '../types/smartbio';

interface DeviceFrameProps {
  isMockupView: boolean;
  config: SmartBioConfig;
  title: string;
  bio: string;
}

const LinkButton: React.FC<LinkItem> = ({ label, url, icon, variant }) => {
  const baseClass = 'w-full h-[52px] rounded-[26px] px-5 flex items-center justify-between group transition-all active:scale-[0.99]';

  const variantClass = {
    light: 'btn-light-glass text-gray-800 hover:bg-gray-50',
    dark: 'btn-dark-glass text-white hover:opacity-95',
    gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95 shadow-md',
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${variantClass[variant]}`}>
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            variant === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-white'
          }`}
        >
          <i className={icon}></i>
        </div>
        <span className={`font-${variant === 'gradient' ? 'semibold' : 'medium'} text-[14px]`}>{label}</span>
      </div>
      <i className="fa-solid fa-arrow-up-right-from-square text-xs text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
    </a>
  );
};

const CompactLinkButton: React.FC<{ label: string; url: string; icon: string; variant: 'light' | 'dark' | 'gradient' }> = ({
  label,
  url,
  icon,
  variant,
}) => {
  const variantClass = {
    light: 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50',
    dark: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95',
    gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-95',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-[52px] rounded-[26px] px-3 flex items-center justify-center gap-2 group transition-all active:scale-[0.99] ${variantClass[variant]}`}
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
          variant === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-white/20 text-white'
        }`}
      >
        <i className={icon}></i>
      </div>
      <span className="font-semibold text-[13px]">{label}</span>
    </a>
  );
};

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ isMockupView, config, title, bio }) => {
  return (
    <div id="screenFrame" className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-between select-none">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto relative no-scrollbar">
          {/* Aurora Header */}
          <div className="relative h-[220px] aurora-bg pt-12 px-6 flex flex-col justify-between">
            <svg className="absolute bottom-0 left-0 w-full overflow-hidden" viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M0,80 C150,150 350,150 500,80 L500,150 L0,150 Z" fill="#ffffff"></path>
            </svg>
          </div>

          {/* Avatar */}
          <div className="relative -mt-[62px] flex justify-center z-20">
            <div className="w-[110px] h-[110px] rounded-full p-[3px] bg-white shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-pink-200 to-purple-300 flex items-center justify-center">
                <img
                  src={config.avatar}
                  alt={config.title}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/ec4899/ffffff?text=Avatar';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center px-6 pt-3 pb-4">
            <h1 className="text-[26px] font-extrabold text-gray-900 tracking-tight mb-2">{title}</h1>
            <p className="text-[13px] leading-[1.45] text-gray-500 font-normal max-w-[290px] mx-auto tracking-normal">{bio}</p>
          </div>

          {/* Logo Row Under Bio */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="https://www.linkedin.com/in/vincentbalazut/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="/linkedin-logo.jpg" alt="LinkedIn" className="h-8 w-8 object-cover rounded" />
            </a>
            <a href="https://x.com/Vincentbalazut" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="/twitter-logo.jpg" alt="X" className="h-8 w-8 object-cover rounded" />
            </a>
            <a href="https://substack.com/@vincentbalazut" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src="/portfolio-logo.png" alt="Substack" className="h-8 w-8 object-cover rounded" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-3/4 max-w-[260px] mx-auto border-b border-gray-100 my-5"></div>

          {/* Links Section */}
          <div className="px-5 space-y-3 mb-6">
            {config.links.slice(0, 2).map((link) => (
              <LinkButton key={link.id} {...link} />
            ))}

            {config.links.length > 2 && (
              <>
                <div className="w-3/4 max-w-[260px] mx-auto border-b border-gray-100 !my-4"></div>

                {/* Contact Heading */}
                <div className="px-0 mb-2">
                  <h2 className="text-[14px] font-semibold text-gray-800">Contact</h2>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {config.links.slice(2).map((link) => (
                    <CompactLinkButton key={link.id} label={link.label} url={link.url} icon={link.icon} variant={link.variant} />
                  ))}
                </div>
              </>
            )}
          </div>
      </div>
    </div>
  );
};
