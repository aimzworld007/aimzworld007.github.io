import React from 'react';
import { PortfolioProject } from '../types';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative bg-light-card-background dark:bg-card-background rounded-xl cursor-pointer overflow-hidden shadow-card border border-light-border dark:border-border"
      onClick={onClick}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-sm text-primary font-medium">{project.technologies.join(', ')}</span>
          <h3 className="text-2xl font-bold text-text-dark mt-1">{project.title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;