import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card border border-light-border dark:border-border">
       <div className="absolute -left-[41px] top-7 w-4 h-4 bg-primary rounded-full border-4 border-light-background dark:border-background"></div>
       <p className="text-sm font-semibold text-light-text-medium dark:text-text-medium bg-light-background dark:bg-background inline-block px-3 py-1 rounded-full mb-3">{experience.date}</p>
      <h3 className="font-bold text-xl text-light-text-dark dark:text-text-dark">{experience.title} <span className="text-primary">•</span> <span className="font-medium text-light-text-medium dark:text-text-medium">{experience.company}</span></h3>
      <ul className="list-disc list-outside ml-5 mt-4 text-light-text-medium dark:text-text-medium space-y-2">
         {experience.responsibilities.map((item, index) => (
             <li key={index}>{item}</li>
         ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;