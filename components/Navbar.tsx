
import React, { useState, useEffect } from 'react';
import { personalData, navLinks } from '../constants';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 bg-light-card-background/80 dark:bg-card-background/80 backdrop-blur-sm shadow-md h-16 rounded-full">
      <div className="flex items-center px-6">
        <a href="#home" onClick={handleSmoothScroll} className="whitespace-nowrap text-3xl font-signature text-light-text-dark dark:text-text-dark hover:text-primary transition-colors pr-8 border-r border-light-border dark:border-border">
          {personalData.name}
        </a>
        <ul className="flex items-center space-x-6 pl-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={handleSmoothScroll} className={`flex items-center gap-2 font-semibold transition-colors text-sm ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-light-text-medium dark:text-text-medium hover:text-primary'}`}>
                <i className={`${link.icon} text-base`} aria-hidden="true"></i>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
