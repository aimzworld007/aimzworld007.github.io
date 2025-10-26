import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeCustomizer from './ThemeCustomizer';

interface FloatingThemeControlsProps {
  theme: string;
  toggleTheme: () => void;
  currentPrimaryColor: string;
  setPrimaryColor: (color: string) => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

const FloatingThemeControls: React.FC<FloatingThemeControlsProps> = ({ theme, toggleTheme, currentPrimaryColor, setPrimaryColor, isHighContrast, toggleHighContrast }) => {
  return (
    <div className="hidden lg:flex fixed bottom-24 right-8 z-50 flex-col items-center gap-4">
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

export default FloatingThemeControls;
