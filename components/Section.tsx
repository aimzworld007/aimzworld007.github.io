import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center text-primary bg-background p-4 rounded-full shadow-neumorphic-raised mb-4">
            {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-text-dark tracking-wide">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Section;