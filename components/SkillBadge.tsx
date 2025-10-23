import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-primary/10 text-primary text-md font-semibold px-5 py-2 rounded-lg shadow-sm border border-primary/20 hover:text-light hover:bg-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 cursor-default">
      {skill.name}
    </span>
  );
};

export default SkillBadge;