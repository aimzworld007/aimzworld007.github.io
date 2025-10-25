import React from 'react';
import { PortfolioProject } from '../types';

interface PortfolioModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-light-background/80 dark:bg-background/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="relative bg-light-card-background dark:bg-card-background shadow-lg w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col border border-light-border dark:border-border"
        onClick={e => e.stopPropagation()}
      >
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-light-text-medium dark:text-text-light hover:text-primary transition-colors z-20 w-12 h-12 flex items-center justify-center rounded-full bg-light-background/50 dark:bg-background/50 hover:bg-light-background dark:hover:bg-background"
            aria-label="Close project details"
        >
          <lord-icon
              src="https://cdn.lordicon.com/nqtddedc.json"
              trigger="hover"
              colors="primary:#00a896"
              style={{width:'32px', height:'32px'}}>
          </lord-icon>
        </button>
        
        <div className="aspect-video w-full bg-light-background dark:bg-background">
            {project.videoUrl ? (
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.videoUrl} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            ) : (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover"/>
            )}
        </div>
        
        <div className="p-8 overflow-y-auto">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-light-text-dark dark:text-text-dark">
              {project.title}
            </h2>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code" className="text-light-text-medium dark:text-text-medium hover:text-primary transition-colors">
                      <i className="fa-brands fa-github text-3xl"></i>
                  </a>
              )}
              {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="View Live Site" className="text-light-text-medium dark:text-text-medium hover:text-primary transition-colors">
                      <i className="fa-solid fa-arrow-up-right-from-square text-3xl"></i>
                  </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-light-background dark:bg-background text-primary text-sm font-semibold px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
          <p className="text-lg text-light-text-medium dark:text-text-medium leading-relaxed whitespace-pre-wrap">{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;