import React from 'react';
import { PortfolioProject } from '../types';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-background rounded-2xl p-4 shadow-neumorphic-raised cursor-pointer transition-shadow duration-300 hover:shadow-neumorphic-pressed"
      onClick={onClick}
    >
      <div className="rounded-lg overflow-hidden mb-4">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-text-dark mb-1">{project.title}</h3>
        <p className="text-sm text-text-medium">{project.description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;