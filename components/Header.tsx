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

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data, theme, toggleTheme, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside className={`fixed top-0 left-0 h-screen w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-light-card-background dark:bg-card-background border-r border-light-border dark:border-border p-8 flex flex-col justify-between items-center text-center transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <div>
          <div className="mt-8 mb-6">
            <img
              src={data.photoUrl}
              alt={data.name}
              className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-light-border dark:border-border shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-light-text-dark dark:text-text-dark">{data.name}</h1>
          <div className="mt-3">
            <span className="bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium text-sm font-semibold px-4 py-1.5 rounded-full">{data.title}</span>
          </div>

          <hr className="my-8 border-light-border dark:border-border" />
          
          {/* Contact & Social Info */}
          <div className="w-full space-y-6">
            <div className="flex justify-center items-center gap-4">
              <a 
                  href={data.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-light-background dark:bg-background rounded-full text-primary"
                  aria-label="Website"
              >
                  <lord-icon
                      src="https://cdn.lordicon.com/surjmvno.json"
                      trigger="loop-on-hover"
                      colors={`primary:${theme === 'dark' ? '#00a896' : '#00a896'}`}
                      style={{width:'32px', height:'32px'}}>
                  </lord-icon>
              </a>
              <a 
                  href={data.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-light-background dark:bg-background rounded-full text-primary"
                  aria-label="LinkedIn Profile"
              >
                  <lord-icon
                      src="https://cdn.lordicon.com/gmzxduhd.json"
                      trigger="loop-on-hover"
                      colors={`primary:${theme === 'dark' ? '#00a896' : '#00a896'}`}
                      style={{width:'32px', height:'32px'}}>
                  </lord-icon>
              </a>
            </div>

            <div className="text-left space-y-4 text-sm">
              <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 flex justify-center mr-2">
                      <lord-icon
                          src="https://cdn.lordicon.com/rhvddzym.json"
                          trigger="hover"
                          colors={`primary:${theme === 'dark' ? '#A0A0A0' : '#6c757d'}`}
                          style={{width:'24px', height:'24px'}}>
                      </lord-icon>
                  </div>
                  <span className="text-light-text-medium dark:text-text-medium break-all">{data.email}</span>
              </div>
              <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 flex justify-center mr-2">
                      <lord-icon
                          src="https://cdn.lordicon.com/ssvybplt.json"
                          trigger="hover"
                          colors={`primary:${theme === 'dark' ? '#A0A0A0' : '#6c757d'}`}
                          style={{width:'24px', height:'24px'}}>
                      </lord-icon>
                  </div>
                  <span className="text-light-text-medium dark:text-text-medium">{data.phone}</span>
              </div>
              <div className="flex items-center">
                  <div className="w-10 flex-shrink-0 flex justify-center mr-2">
                      <lord-icon
                          src="https://cdn.lordicon.com/zzcjjxal.json"
                          trigger="hover"
                          colors={`primary:${theme === 'dark' ? '#A0A0A0' : '#6c757d'}`}
                          style={{width:'24px', height:'24px'}}>
                      </lord-icon>
                  </div>
                  <span className="text-light-text-medium dark:text-text-medium">{data.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <a 
              href="https://i.imgur.com/TBEkIhy.jpeg" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Ainul-Islam-CV.jpeg"
              className="flex items-center justify-center text-text-dark font-bold px-6 py-4 rounded-lg bg-primary hover:bg-primary-hover transition-all duration-300 w-full"
          >
              <lord-icon
                  src="https://cdn.lordicon.com/pbrgppbb.json"
                  trigger="loop-on-hover"
                  colors="primary:#ffffff"
                  style={{width:'24px', height:'24px', marginRight: '10px'}}>
              </lord-icon>
              Download CV
          </a>
          <p className="text-light-text-light dark:text-text-light text-xs mt-6">&copy; {new Date().getFullYear()} Ainul Islam. All Rights Reserved.</p>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;