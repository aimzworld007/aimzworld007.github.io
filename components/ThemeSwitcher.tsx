import React from 'react';

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  const sunIcon = "https://cdn.lordicon.com/ppyvfomi.json";
  const moonIcon = "https://cdn.lordicon.com/uiakkykh.json";
  const iconSrc = theme === 'dark' ? sunIcon : moonIcon;

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium rounded-full hover:text-primary transition-colors duration-300 z-10"
      aria-label="Toggle theme"
    >
      <lord-icon
        key={iconSrc} // Use key to force re-render on change
        src={iconSrc}
        trigger="hover,click"
        colors={`primary:${theme === 'dark' ? '#f9d71c' : '#4a5568'},secondary:${'#00a896'}`}
        style={{width:'28px', height:'28px'}}>
      </lord-icon>
    </button>
  );
};

export default ThemeSwitcher;