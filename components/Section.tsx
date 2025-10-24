import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  backgroundTitle: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, backgroundTitle, children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative mb-16 text-center">
        <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl md:text-9xl font-extrabold text-gray-500/5 dark:text-gray-500/10 select-none -z-10 tracking-wider whitespace-nowrap">{backgroundTitle}</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-light-text-dark dark:text-text-dark inline-block">{title}</h3>
        <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Section;