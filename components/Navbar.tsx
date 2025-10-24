import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', text: 'About', iconSrc: "https://cdn.lordicon.com/wmwqvixz.json" },
  { href: '#resume', text: 'Resume', iconSrc: "https://cdn.lordicon.com/frjgvxce.json" },
  { href: '#portfolio', text: 'Portfolio', iconSrc: "https://cdn.lordicon.com/sbiheqdr.json" },
  { href: '#contact', text: 'Contact', iconSrc: "https://cdn.lordicon.com/rhvddzym.json" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'portfolio', 'contact'];
      let currentSection = 'about';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = sectionId;
                break;
            }
        }
      }
      setActiveSection(currentSection);
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 z-30 hidden lg:block">
       <div className="bg-light-card-background dark:bg-card-background p-2 rounded-l-full shadow-lg border border-r-0 border-light-border dark:border-border">
          <div className="flex flex-col items-center space-y-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
              <a 
                key={link.href} 
                href={link.href} 
                aria-label={link.text}
                className={`group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 ${isActive ? 'bg-primary text-white' : 'text-light-text-medium dark:text-text-medium hover:bg-light-background dark:hover:bg-background'}`}
              >
                <lord-icon
                    src={link.iconSrc}
                    trigger="hover"
                    colors={`primary:${isActive ? '#ffffff' : '#00a896'}`}
                    style={{width:'28px', height:'28px'}}>
                </lord-icon>
                <div className="absolute right-full mr-4 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {link.text}
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-primary"></div>
                </div>
              </a>
            )})}
          </div>
       </div>
    </nav>
  );
};

export default Navbar;