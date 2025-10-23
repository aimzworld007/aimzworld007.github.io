import React from 'react';
import { IconGlobe, IconLinkedin } from './icons';
import { personalData } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300/50 mt-24 py-8 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
            <a href={personalData.website} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-shadow duration-300 text-text-medium hover:text-primary">
                <IconGlobe className="h-6 w-6" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-shadow duration-300 text-text-medium hover:text-primary">
                <IconLinkedin className="h-6 w-6" />
            </a>
        </div>
      <p className="text-text-medium text-sm">&copy; {new Date().getFullYear()} Ainul Islam. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;