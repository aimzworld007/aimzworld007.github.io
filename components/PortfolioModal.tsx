import React from 'react';
import { PortfolioProject } from '../types';
import { IconXMark } from './icons';

interface PortfolioModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="relative bg-background shadow-neumorphic-raised w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-medium hover:text-primary transition-colors z-20">
          <IconXMark className="h-8 w-8" />
        </button>
        
        <div className="aspect-video w-full bg-gray-200">
            {project.videoUrl ? (
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={project.videoUrl} 
                    title={project.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-t-2xl"
                ></iframe>
            ) : (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-2xl"/>
            )}
        </div>
        
        <div className="p-8 overflow-y-auto">
          <h2 className="text-4xl font-bold text-text-dark mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
            ))}
          </div>
          <p className="text-lg text-text-medium">{project.details}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;