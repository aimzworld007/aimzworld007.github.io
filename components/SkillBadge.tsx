import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-background text-text-dark text-sm font-semibold px-4 py-2 rounded-lg shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-shadow duration-300 cursor-default">
      {skill.name}
    </span>
  );
};

export default SkillBadge;