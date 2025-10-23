import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center text-primary bg-primary/10 p-3 rounded-xl mb-4 border-2 border-primary/20">
            {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-light tracking-wide">{title}</h2>
        <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>
      {children}
    </div>
  );
};

export default Section;