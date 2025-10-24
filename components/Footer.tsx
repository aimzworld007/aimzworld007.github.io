import React from 'react';
import { personalData } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-light-border dark:border-border mt-24 py-10 text-center">
        <div className="flex justify-center items-center space-x-6 mb-6">
            <a 
                href={personalData.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center bg-light-card-background dark:bg-card-background rounded-full shadow-card dark:hover:shadow-glow transition-all duration-300 border border-light-border dark:border-border"
                aria-label="Website"
            >
                <lord-icon
                    src="https://cdn.lordicon.com/surjmvno.json"
                    trigger="loop-on-hover"
                    colors="primary:#00a896"
                    style={{width:'32px', height:'32px'}}>
                </lord-icon>
            </a>
            <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center bg-light-card-background dark:bg-card-background rounded-full shadow-card dark:hover:shadow-glow transition-all duration-300 border border-light-border dark:border-border"
                aria-label="LinkedIn Profile"
            >
                <lord-icon
                    src="https://cdn.lordicon.com/gmzxduhd.json"
                    trigger="loop-on-hover"
                    colors="primary:#00a896"
                    style={{width:'32px', height:'32px'}}>
                </lord-icon>
            </a>
        </div>
      <p className="text-light-text-medium dark:text-text-medium text-sm">&copy; {new Date().getFullYear()} Ainul Islam. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;