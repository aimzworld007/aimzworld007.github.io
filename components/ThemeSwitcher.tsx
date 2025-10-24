import React from 'react';

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-light-background dark:bg-background text-primary hover:bg-primary/10 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <lord-icon
          src={theme === 'dark' ? "https://cdn.lordicon.com/skkahocq.json" : "https://cdn.lordicon.com/soseozvi.json"}
          trigger="hover"
          colors={theme === 'dark' ? 'primary:#f9d71c' : 'primary:#4a5568'}
          style={{width:'28px', height:'28px'}}>
      </lord-icon>
    </button>
  );
};

export default ThemeSwitcher;