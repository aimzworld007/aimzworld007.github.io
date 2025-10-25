import React, { useState, useEffect, useRef } from 'react';
import type { Service } from '../types';
// Fix: Import 'types.ts' to make the global JSX type definitions for custom elements like 'lord-icon' available in this file, resolving the TypeScript error.
import '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
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

  return (
    <div ref={ref} className={`group bg-light-card-background dark:bg-card-background p-8 rounded-xl shadow-card transition-all duration-300 border border-light-border dark:border-border hover:border-primary ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="text-light-text-medium dark:text-text-medium group-hover:text-primary transition-colors duration-300 mb-5">
        <lord-icon
            src={service.icon}
            trigger="hover"
            colors="primary:currentColor"
            style={{width:'40px', height:'40px'}}
        />
      </div>
      <h3 className="text-2xl font-bold text-light-text-dark dark:text-text-dark group-hover:text-primary transition-colors duration-300 mb-3">{service.title}</h3>
      <p className="text-light-text-medium dark:text-text-medium leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;