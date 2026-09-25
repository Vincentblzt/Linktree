import React from 'react';
import { SmartBioConfig, LinkItem } from '../types/smartbio';
import TopologyField from './TopologyField';

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
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 rounded-full bg-black text-white flex items-center justify-between px-5 group transition-all active:scale-[0.99] hover:opacity-90"
    >
      <span className="font-semibold text-sm whitespace-nowrap">{label}</span>
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black ml-4 group-hover:scale-110 transition-transform flex-shrink-0">
        <i className="fa-solid fa-arrow-up-right text-xs"></i>
      </div>
    </a>
  );
};

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ isMockupView, config, title, bio }) => {
  const containerClass = isMockupView
    ? 'w-[375px] h-[780px] bg-black rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[4px] border-[#2d2f36]'
    : 'w-[380px] h-[750px] bg-transparent';

  return (
    <div className={`relative ${containerClass} transition-all duration-300`}>
      {/* iPhone Hardware Buttons */}
      {isMockupView && (
        <>
          <div className="absolute -left-[7px] top-[115px] w-[3px] h-[26px] bg-gray-700 rounded-l-md"></div>
          <div className="absolute -left-[7px] top-[155px] w-[3px] h-[50px] bg-gray-700 rounded-l-md"></div>
          <div className="absolute -left-[7px] top-[215px] w-[3px] h-[50px] bg-gray-700 rounded-l-md"></div>
          <div className="absolute -right-[7px] top-[180px] w-[3px] h-[70px] bg-gray-700 rounded-r-md"></div>
        </>
      )}

      {/* Screen Frame */}
      <div id="screenFrame" className="relative w-full h-full bg-white rounded-[42px] overflow-hidden flex flex-col justify-between select-none">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 z-40 px-7 pt-3.5 pb-2 flex justify-between items-center text-white text-xs font-semibold pointer-events-none">
          <div></div>
          <div className="w-[96px] h-[25px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/60 border border-blue-900/40"></div>
          </div>
          <div></div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative no-scrollbar pb-16">
          {/* Topology Field Background */}
          <div className="relative h-[220px] w-full">
            <TopologyField />
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

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-40"></div>
      </div>
    </div>
  );
};
