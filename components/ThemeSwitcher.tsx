import React from 'react';

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="group w-12 h-12 flex items-center justify-center rounded-full bg-light-background dark:bg-background text-primary hover:bg-primary/10 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]">
        <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
      </span>
    </button>
  );
};

export default ThemeSwitcher;
