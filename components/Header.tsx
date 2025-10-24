import React from 'react';
import { PersonalData } from '../types';
import ThemeSwitcher from './ThemeSwitcher';

interface ProfileSidebarProps {
  data: PersonalData;
  theme: string;
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#resume', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
];

const SocialLink: React.FC<{href: string, iconSrc: string, label: string}> = ({ href, iconSrc, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 flex items-center justify-center rounded-full text-light-text-medium dark:text-text-medium bg-light-background dark:bg-background hover:bg-primary hover:text-white transition-all duration-300">
        <lord-icon
            src={iconSrc}
            trigger="loop-on-hover"
            colors="primary:#A0A0A0,secondary:#00a896"
            style={{width:'24px', height:'24px'}}>
        </lord-icon>
    </a>
);

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data, theme, toggleTheme, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      <header 
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-light-card-background dark:bg-card-background shadow-2xl z-[60] p-8 lg:p-12 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-start">
            <h1 className="text-3xl font-extrabold text-light-text-dark dark:text-text-dark">
                {data.name.split(' ')[0]}<span className="text-primary">.</span>
            </h1>
            <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden text-light-text-medium dark:text-text-medium text-2xl"
                aria-label="Close sidebar"
            >
                <i className="fa-solid fa-times"></i>
            </button>
        </div>
        
        <div className="text-center my-8">
          <img src={data.photoUrl} alt={data.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-primary/50" />
          <h2 className="text-2xl font-bold text-light-text-dark dark:text-text-dark">{data.name}</h2>
          <p className="text-light-text-medium dark:text-text-medium mt-1">{data.title}</p>
        </div>
        
        <div className="flex-grow overflow-y-auto -mx-8 px-8">
            {/* Mobile navigation */}
            <nav className="lg:hidden my-8">
                <ul className="space-y-4">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a 
                                href={link.href} 
                                className="text-xl font-semibold hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Contact Info */}
            <div className="space-y-4 text-left my-8">
                <div className="flex items-center space-x-4 p-1">
                    <lord-icon
                        src="https://cdn.lordicon.com/xtbioyje.json"
                        trigger="loop-on-hover"
                        colors={`primary:${theme === 'dark' ? '#ffffff' : '#212529'},secondary:#00a896`}
                        style={{width:'24px', height:'24px'}}>
                    </lord-icon>
                    <div>
                        <span className="text-xs text-light-text-light dark:text-text-light">Email</span>
                        <a href={`mailto:${data.email}`} className="block text-sm font-semibold text-light-text-dark dark:text-text-dark hover:text-primary transition-colors break-all">{data.email}</a>
                    </div>
                </div>
                 <div className="flex items-center space-x-4 p-1">
                     <lord-icon
                        src="https://cdn.lordicon.com/jxwksgwv.json"
                        trigger="loop-on-hover"
                        colors={`primary:${theme === 'dark' ? '#ffffff' : '#212529'},secondary:#00a896`}
                        style={{width:'24px', height:'24px'}}>
                    </lord-icon>
                    <div>
                        <span className="text-xs text-light-text-light dark:text-text-light">Phone</span>
                        <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="block text-sm font-semibold text-light-text-dark dark:text-text-dark hover:text-primary transition-colors">{data.phone}</a>
                    </div>
                </div>
                 <div className="flex items-center space-x-4 p-1">
                     <lord-icon
                        src="https://cdn.lordicon.com/iikoxwld.json"
                        trigger="loop-on-hover"
                        colors={`primary:${theme === 'dark' ? '#ffffff' : '#212529'},secondary:#00a896`}
                        style={{width:'24px', height:'24px'}}>
                    </lord-icon>
                    <div>
                        <span className="text-xs text-light-text-light dark:text-text-light">Location</span>
                        <p className="text-sm font-semibold text-light-text-dark dark:text-text-dark">{data.location}</p>
                    </div>
                </div>
            </div>
            <hr className="border-light-border dark:border-border" />
        </div>

        <div className="mt-auto pt-6 text-center">
            <div className="flex justify-center space-x-3 mb-6">
                <SocialLink href={data.linkedin} iconSrc="https://cdn.lordicon.com/pdwpcpge.json" label="LinkedIn" />
                <SocialLink href={data.github} iconSrc="https://cdn.lordicon.com/xhwznzox.json" label="GitHub" />
                <SocialLink href={data.facebook} iconSrc="https://cdn.lordicon.com/btnwoboo.json" label="Facebook" />
                <SocialLink href={data.website} iconSrc="https://cdn.lordicon.com/surjmvsc.json" label="Website" />
            </div>

            <a 
                href="/Ainul_Islam_CV.pdf"
                download
                className="group flex items-center justify-center w-full px-6 py-4 mb-6 bg-primary text-text-dark font-bold rounded-lg hover:bg-primary-hover transition-all duration-300"
            >
                <lord-icon
                    src="https://cdn.lordicon.com/dxnllioo.json"
                    trigger="loop-on-hover"
                    colors="primary:#ffffff"
                    style={{width:'24px', height:'24px', marginRight:'12px'}}>
                </lord-icon>
                Download CV
            </a>

            <div className="flex justify-between items-center">
                 <p className="text-xs text-light-text-medium dark:text-text-medium">© {new Date().getFullYear()} {data.name}</p>
                 <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
      </header>
    </>
  );
};

export default ProfileSidebar;