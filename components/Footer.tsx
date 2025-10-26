
import React from 'react';
import { personalData } from '../constants';

const TooltipIcon: React.FC<{ href: string; label: string; iconClass: string }> = ({ href, label, iconClass }) => {
  const isExternal = !href.startsWith('mailto:');
  const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <div className="relative group">
      <a href={href} aria-label={label} className="block w-12 h-12 flex items-center justify-center hover:text-primary transition-colors" {...linkProps}>
        <i className={`${iconClass} text-2xl`} aria-hidden="true"></i>
      </a>
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-light-text-dark dark:bg-card-background text-light-background dark:text-text-dark text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
        {label}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-light-text-dark dark:border-t-card-background"></div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-light-text-medium dark:text-text-medium border-t border-light-border dark:border-border mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <TooltipIcon href={personalData.linkedin} label="LinkedIn" iconClass="fa-brands fa-linkedin-in" />
          <TooltipIcon href={personalData.github} label="GitHub" iconClass="fa-brands fa-github" />
          <TooltipIcon href={personalData.facebook} label="Facebook" iconClass="fa-brands fa-facebook-f" />
          <TooltipIcon href={personalData.website} label="Website" iconClass="fa-solid fa-globe" />
          <TooltipIcon href={`mailto:${personalData.email}`} label="Email" iconClass="fa-solid fa-envelope" />
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
