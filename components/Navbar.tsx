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
      setIsScrolled(window.scrollY > 50);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/70 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-light hover:text-primary transition-colors">
            AINUL ISLAM
          </a>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeSection === link.href.substring(1) ? 'text-white bg-primary' : 'text-medium hover:text-light hover:bg-white/10'}`}
              >
                {link.icon}
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
