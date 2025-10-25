import React, { useState, useEffect, useRef } from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
  side: 'left' | 'right';
}

const EducationCard: React.FC<EducationCardProps> = ({ education, side }) => {
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
  
  const alignmentClasses = side === 'left' ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12';
  const textAlignment = side === 'left' ? 'text-left' : 'lg:text-right';
  const iconOrder = side === 'left' ? 'order-first' : 'lg:order-last';

  return (
    <div ref={ref} className={`relative w-full lg:w-1/2 mb-8 ${alignmentClasses} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className={`bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card transition-all duration-300 dark:hover:shadow-glow hover:-translate-y-1 border border-light-border dark:border-border flex items-start space-x-4 ${side === 'right' ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
            <i className={`fa-solid fa-graduation-cap text-3xl text-primary/80 mt-1 ${iconOrder}`}></i>
            <div className={`${textAlignment}`}>
                <h3 className="font-bold text-xl text-light-text-dark dark:text-text-dark">{education.degree}</h3>
                <p className="text-base text-primary font-semibold mt-1">{education.institution}</p>
                <p className="text-sm text-light-text-medium dark:text-text-medium mt-2">{education.details}</p>
            </div>
        </div>
    </div>
  );
};

export default EducationCard;