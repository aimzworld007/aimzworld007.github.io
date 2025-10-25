import React, { useState, useEffect } from 'react';
import { personalData, navLinks } from '../constants';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('main section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-card-background/80 dark:bg-card-background/80 backdrop-blur-sm shadow-md h-18' : 'h-20'}`}>
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-3xl font-signature text-light-text-dark dark:text-text-dark hover:text-primary transition-colors">
          {personalData.name}
        </a>
        <ul className="flex items-center space-x-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={`font-semibold transition-colors ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-light-text-medium dark:text-text-medium hover:text-primary'}`}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
            <a href={personalData.cvUrl} target="_blank" rel="noopener noreferrer" download="Ainul_Islam_CV.pdf" className="px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white dark:hover:text-text-dark transition-colors text-sm flex items-center gap-2">
                <i className="fa-solid fa-download"></i>
                <span>CV</span>
            </a>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;