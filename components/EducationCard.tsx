import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="relative bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card border border-light-border dark:border-border">
       <div className="absolute -left-[41px] top-7 w-4 h-4 bg-primary rounded-full border-4 border-light-background dark:border-background"></div>
      <p className="text-sm font-semibold text-light-text-medium dark:text-text-medium bg-light-background dark:bg-background inline-block px-3 py-1 rounded-full mb-3">{education.details}</p>
      <h3 className="font-bold text-xl text-light-text-dark dark:text-text-dark">{education.degree}</h3>
      <p className="text-base text-light-text-medium dark:text-text-medium font-semibold mt-2">{education.institution}</p>
    </div>
  );
};

export default EducationCard;