import React from 'react';
import { personalData } from '../constants';
import { IconGlobe, IconLinkedin } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-light-text-medium dark:text-text-medium border-t border-light-border dark:border-border mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-4">
          <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <IconLinkedin className="w-6 h-6" />
          </a>
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
             <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a href={personalData.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-primary transition-colors">
            <IconGlobe className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
