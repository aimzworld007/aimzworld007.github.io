import React from 'react';
import { PersonalData } from '../types';
import ThemeSwitcher from './ThemeSwitcher';

interface ProfileSidebarProps {
  data: PersonalData;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
];

export default function ProfileSidebar({ data, isOpen, setIsOpen, theme, toggleTheme }: ProfileSidebarProps) {
  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      <header 
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[60%] md:w-[45%] bg-light-card-background dark:bg-card-background shadow-2xl z-[60] p-8 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
                <img src={data.photoUrl} alt={data.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                <div>
                    <h1 className="text-xl font-extrabold text-light-text-dark dark:text-text-dark leading-tight">
                        {data.name}
                    </h1>
                    <p className="text-xs text-light-text-medium dark:text-text-medium">{data.title.split(' | ')[0]}</p>
                </div>
            </div>
            <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden text-light-text-medium dark:text-text-medium text-2xl"
                aria-label="Close sidebar"
            >
                <i className="fa-solid fa-times"></i>
            </button>
        </div>
        
        <nav className="flex-grow">
            <ul className="space-y-4">
                {navLinks.map(link => (
                    <li key={link.href} className="relative group">
                        <a 
                            href={link.href} 
                            className="block text-xl font-semibold hover:text-primary transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.text}
                        </a>
                        <div className="absolute left-full ml-4 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                            {link.text}
                            <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-primary"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-light-border dark:border-border">
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-light-text-medium dark:text-text-medium">Switch Theme</span>
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
      </header>
    </>
  );
};