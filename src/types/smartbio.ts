export interface SmartBioConfig {
  title: string;
  bio: string;
  avatar: string;
  website?: string;
  portfolio?: string;
  email?: string;
  bookingUrl?: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    substack?: string;
    skool?: string;
  };
  links: LinkItem[];
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: string;
  variant: 'light' | 'dark' | 'gradient';
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
