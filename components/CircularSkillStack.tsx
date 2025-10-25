import React from 'react';
import { Skill } from '../types';

interface CircularSkillStackProps {
  skills: Skill[];
}

const CircularSkillStack: React.FC<CircularSkillStackProps> = ({ skills }) => {
  const radius = 140; // in pixels
  const iconSize = 48; // width and height of icon container
  const containerSize = radius * 2 + iconSize;

  return (
    <div className="relative flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-teal-400 to-purple-500 animate-spin-gradient"></div>
      
      {/* Inner background to create a ring effect */}
      <div className="absolute inset-1 bg-light-background dark:bg-background rounded-full"></div>

      {/* Center Text */}
      <div className="relative text-center z-10">
        <h4 className="text-4xl font-extrabold text-primary">100%</h4>
        <p className="text-sm font-semibold text-light-text-medium dark:text-text-medium uppercase tracking-wider">Full Stack</p>
      </div>
      
      {/* Skill Icons orbiting the center */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {skills.map((skill, index) => {
          // Calculate position on the circle
          const angle = (index / skills.length) * 2 * Math.PI - Math.PI / 2; // -PI/2 to start from top
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const style = {
            transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            top: '50%',
            left: '50%',
          };

          return (
            <div 
              key={skill.name} 
              className="absolute w-12 h-12 bg-light-card-background dark:bg-card-background rounded-full flex items-center justify-center shadow-md border border-light-border dark:border-border group"
              style={style}
            >
              <i className={`${skill.icon} text-2xl text-light-text-medium dark:text-text-medium group-hover:text-primary transition-colors`}></i>
              <span className="absolute -bottom-7 px-2 py-0.5 bg-card-background text-text-medium text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularSkillStack;
