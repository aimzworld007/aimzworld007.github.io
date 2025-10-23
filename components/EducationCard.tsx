import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border-l-4 border-primary transform transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-bold text-md text-light">{education.degree}</h3>
      <p className="text-sm text-primary font-medium">{education.institution}</p>
      <p className="text-sm text-medium mt-1">{education.details}</p>
    </div>
  );
};

export default EducationCard;