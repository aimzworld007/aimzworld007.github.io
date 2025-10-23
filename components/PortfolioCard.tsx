import React from 'react';
import { PortfolioProject } from '../types';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative rounded-lg overflow-hidden cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primary/40"
      onClick={onClick}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
      </div>
      <div className="absolute top-0 right-0 m-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
          View Details
      </div>
    </div>
  );
};

export default PortfolioCard;
