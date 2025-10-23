import React from 'react';
import { IconGlobe, IconLinkedin } from './icons';
import { personalData } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-20 py-8 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
            <a href={personalData.website} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-primary transition-colors transform hover:scale-110">
                <IconGlobe className="h-7 w-7" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-primary transition-colors transform hover:scale-110">
                <IconLinkedin className="h-7 w-7" />
            </a>
        </div>
      <p className="text-medium">&copy; {new Date().getFullYear()} Ainul Islam. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
