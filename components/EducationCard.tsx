import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-background p-6 rounded-2xl shadow-neumorphic-raised transition-shadow duration-300 hover:shadow-neumorphic-pressed">
      <h3 className="font-bold text-lg text-text-dark">{education.degree}</h3>
      <p className="text-base text-primary font-medium">{education.institution}</p>
      <p className="text-sm text-text-medium mt-1">{education.details}</p>
    </div>
  );
};

export default EducationCard;