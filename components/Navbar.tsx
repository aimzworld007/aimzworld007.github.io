import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-1/2 right-0 transform -translate-y-1/2 z-30 hidden lg:block">
       <div className="bg-light-card-background dark:bg-card-background p-2 rounded-l-full shadow-lg border border-r-0 border-light-border dark:border-border">
          <div className="flex flex-col items-center">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
       </div>
    </nav>
  );
};

export default Navbar;