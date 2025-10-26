import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeCustomizer from './ThemeCustomizer';

interface DesktopSidebarProps {
  theme: string;
  toggleTheme: () => void;
  currentPrimaryColor: string;
  setPrimaryColor: (color: string) => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ theme, toggleTheme, currentPrimaryColor, setPrimaryColor, isHighContrast, toggleHighContrast }) => {
  return (
    <div className="hidden lg:flex fixed top-0 right-0 h-screen w-20 bg-light-card-background/80 dark:bg-card-background/80 backdrop-blur-sm shadow-lg z-50 flex-col items-center justify-center gap-6 border-l border-light-border dark:border-border">
      <ThemeCustomizer direction="left" currentPrimaryColor={currentPrimaryColor} setPrimaryColor={setPrimaryColor} />
      <button
        onClick={toggleHighContrast}
        className="group w-12 h-12 flex items-center justify-center rounded-full bg-light-background dark:bg-background text-primary hover:bg-primary/10 transition-colors"
        aria-label="Toggle high contrast mode"
        aria-pressed={isHighContrast}
      >
        <span className="transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]">
          <i className="fa-solid fa-universal-access text-2xl"></i>
        </span>
      </button>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default DesktopSidebar;