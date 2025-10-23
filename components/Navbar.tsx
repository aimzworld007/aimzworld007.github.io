import React, { useState, useEffect } from 'react';
import { IconUser, IconBriefcase, IconWrenchScrewdriver, IconCog, IconAtSymbol } from './icons';

const navLinks = [
  { href: '#about', text: 'About', icon: <IconUser className="h-5 w-5"/> },
  { href: '#skills', text: 'Skills', icon: <IconWrenchScrewdriver className="h-5 w-5"/> },
  { href: '#portfolio', text: 'Portfolio', icon: <IconBriefcase className="h-5 w-5"/> },
  { href: '#services', text: 'Services', icon: <IconCog className="h-5 w-5"/> },
  { href: '#contact', text: 'Contact', icon: <IconAtSymbol className="h-5 w-5"/> },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'contact'];
      let currentSection = 'home';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
       <div className={`transition-all duration-300 mx-auto max-w-max p-2 rounded-full ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-neumorphic-raised' : 'bg-transparent'}`}>
          <div className="flex items-center space-x-2">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === link.href.substring(1) ? 'text-primary shadow-neumorphic-pressed' : 'text-text-medium hover:text-text-dark'}`}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.text}</span>
              </a>
            ))}
          </div>
       </div>
    </nav>
  );
};

export default Navbar;