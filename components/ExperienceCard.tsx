import React, { useState, useEffect, useRef } from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  // FIX: Make the 'side' prop optional to allow rendering within the Timeline component which injects this prop.
  side?: 'left' | 'right';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, side }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const alignmentClasses = side === 'left' 
    ? 'lg:mr-auto lg:pr-12' 
    : 'lg:ml-auto lg:pl-12 lg:text-right';
  
  const contentAlignment = side === 'left' ? '' : 'lg:items-end';
  const textAlignment = side === 'left' ? 'text-left' : 'lg:text-right';
  const listAlignment = side === 'left' ? 'sm:pl-5' : 'lg:pl-0 lg:pr-5';

  return (
    <div 
      ref={ref} 
      className={`relative w-full lg:w-1/2 mb-8 ${alignmentClasses} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div 
        className={`bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card transition-all duration-300 border border-light-border dark:border-border dark:hover:shadow-glow hover:-translate-y-1`}
      >
        <div className={`flex flex-col sm:flex-row justify-between items-start mb-2 gap-2 ${contentAlignment} ${side === 'right' ? 'sm:flex-row-reverse' : ''}`}>
          <div className={`${textAlignment}`}>
            <h3 className="text-xl font-bold text-light-text-dark dark:text-text-dark">{experience.title}</h3>
            <p className="text-base text-primary font-semibold mt-1">
              {experience.company} • {experience.location}
            </p>
          </div>
          <span className="bg-light-background dark:bg-background text-primary text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">{experience.date}</span>
        </div>
        <ul className={`list-disc ${listAlignment} mt-4 space-y-2 text-light-text-medium dark:text-text-medium text-left`}>
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;