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

  const imageSizes = [400, 600, 800, 1200];
  const srcSet = imageSizes
    .map(size => `${project.image.src}?auto=format&fit=crop&w=${size}&q=80 ${size}w`)
    .join(', ');

  const CardContent = (
    <div className="flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-light-background dark:bg-background overflow-hidden">
        <img 
          src={`${project.image.src}?auto=format&fit=crop&w=600&q=80`}
          srcSet={srcSet}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
          alt={project.image.alt} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Content Area */}
      <div className="px-6 pt-4 pb-6">
        <h3 className="text-xl font-bold text-light-text-dark dark:text-text-dark mb-2">
          {project.title}
        </h3>
        {/* Clamping the description prevents cards from becoming excessively tall. */}
        <p className="text-sm text-light-text-medium dark:text-text-medium mb-4 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          {project.description}
        </p>

        {/* Card Footer */}
        <div className="pt-4 border-t border-light-border dark:border-border flex justify-between items-center text-sm">
            <span className="font-semibold text-primary">{project.category}</span>
            <div className="font-semibold text-primary hover:text-primary-hover transition-colors flex items-center gap-2">
                <span>{project.liveUrl ? 'View Live' : 'Details'}</span>
                <i className={`fa-solid ${project.liveUrl ? 'fa-arrow-up-right-from-square' : 'fa-arrow-right'} text-xs`}></i>
            </div>
        </div>
      </div>
    </div>
  );

  const commonClasses = `bg-light-card-background dark:bg-card-background rounded-xl overflow-hidden shadow-card border border-light-border dark:border-border h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`;

  if (project.liveUrl) {
    return (
      <a 
        ref={ref}
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} group`}
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
      className={`${commonClasses} cursor-pointer group`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`View details for project: ${project.title}`}
    >
      {CardContent}
    </div>
  );
};

export default PortfolioCard;