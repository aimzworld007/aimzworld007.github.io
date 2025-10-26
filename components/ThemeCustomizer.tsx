import React, { useState, useEffect, useRef } from 'react';
import { themeColors } from '../constants';

interface ThemeCustomizerProps {
  currentPrimaryColor: string;
  setPrimaryColor: (color: string) => void;
  direction?: 'up' | 'left';
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ currentPrimaryColor, setPrimaryColor, direction = 'up' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const popoverClasses = direction === 'up'
    ? "absolute bottom-full right-0 mb-3 w-48 bg-light-card-background dark:bg-card-background rounded-lg shadow-lg border border-light-border dark:border-border p-4 animate-fade-in-up origin-bottom-right"
    : "absolute top-1/2 -translate-y-1/2 right-full mr-4 w-48 bg-light-card-background dark:bg-card-background rounded-lg shadow-lg border border-light-border dark:border-border p-4 animate-fade-in origin-right";

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-12 h-12 flex items-center justify-center rounded-full bg-light-background dark:bg-background text-primary hover:bg-primary/10 transition-colors"
        aria-label="Choose theme color"
      >
        <span className="transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]">
          <i className="fa-solid fa-palette text-2xl"></i>
        </span>
      </button>

      {isOpen && (
        <div className={popoverClasses}>
          <p className="text-sm font-semibold text-light-text-dark dark:text-text-dark mb-3">Accent Color</p>
          <div className="grid grid-cols-5 gap-2">
            {themeColors.map((color) => (
              <button
                key={color.name}
                title={color.name}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: `hsl(${color.hsl})` }}
                onClick={() => {
                  setPrimaryColor(color.hsl);
                  setIsOpen(false);
                }}
              >
                {currentPrimaryColor === color.hsl && (
                  <i className="fa-solid fa-check text-white text-sm"></i>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
