import React, { useState, useEffect, useRef } from 'react';
import { PortfolioProject } from '../types';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  const CardContent = (
    <>
      <div className="overflow-hidden aspect-video">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-light-text-dark dark:text-text-dark mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-light-text-medium dark:text-text-medium text-sm leading-relaxed flex-grow">{project.description}</p>
        <div className="mt-4 pt-4 border-t border-light-border dark:border-border flex items-center justify-between text-sm font-semibold">
            <span className="text-light-text-medium dark:text-text-medium">{project.category}</span>
            <span className="flex items-center text-primary">
                {project.liveUrl ? 'View Live' : 'View Details'}
                <i className={`fa-solid ${project.liveUrl ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-xs ml-2`}></i>
            </span>
        </div>
      </div>
    </>
  );

  const commonClasses = `group flex flex-col bg-light-card-background dark:bg-card-background rounded-xl overflow-hidden shadow-card border border-light-border dark:border-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`;

  if (project.liveUrl) {
    return (
      <a 
        ref={ref}
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
        aria-label={`View live project: ${project.title}`}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div 
      ref={ref}
      role="button"
      tabIndex={0}
      className={`${commonClasses} cursor-pointer`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`View details for project: ${project.title}`}
    >
      {CardContent}
    </div>
  );
};

export default PortfolioCard;