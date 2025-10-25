import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-light-background dark:bg-card-background text-light-text-medium dark:text-text-medium text-base font-medium px-4 py-2 rounded-lg cursor-default border border-light-border dark:border-border transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
      {skill.icon && <i className={`${skill.icon} text-primary/80`}></i>}
      <span>{skill.name}</span>
    </span>
  );
};

export default SkillBadge;