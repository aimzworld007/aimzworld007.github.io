import React, { useState } from 'react';
import { Skill } from '../types';

interface SkillDonutChartProps {
  skills: Skill[];
}

const SkillDonutChart: React.FC<SkillDonutChartProps> = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const size = 300;
  const strokeWidth = 40;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  
  const totalPercentage = skills.reduce((sum, skill) => sum + (skill.percentage || 0), 0);
  let accumulatedPercentage = 0;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-light-border dark:text-border opacity-50"
          />
          {skills.map((skill, index) => {
            const percentage = skill.percentage || 0;
            const segmentLength = (percentage / totalPercentage) * circumference;
            const offset = (accumulatedPercentage / totalPercentage) * circumference;
            accumulatedPercentage += percentage;

            return (
              <circle
                key={skill.name}
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={skill.color || '#ccc'}
                strokeWidth={strokeWidth}
                strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                strokeDashoffset={-offset}
                className="transition-transform duration-200 ease-in-out"
                style={{ transform: hoveredSkill?.name === skill.name ? 'scale(1.05)' : 'scale(1)', transformOrigin: 'center' }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          {hoveredSkill ? (
            <>
              <i className={`${hoveredSkill.icon} text-4xl text-light-text-dark dark:text-text-dark mb-2`}></i>
              <p className="text-xl font-bold text-light-text-dark dark:text-text-dark">{hoveredSkill.name}</p>
              <p className="text-2xl font-extrabold" style={{color: hoveredSkill.color || '#00a896'}}>{hoveredSkill.percentage}%</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-code text-4xl text-light-text-dark dark:text-text-dark mb-2"></i>
              <p className="text-xl font-bold text-light-text-dark dark:text-text-dark">Technical</p>
              <p className="text-2xl font-extrabold text-primary">Stack</p>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="flex items-center gap-3 cursor-default"
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div 
              className="w-4 h-4 rounded-sm flex-shrink-0" 
              style={{ 
                backgroundColor: skill.color || '#ccc',
                boxShadow: hoveredSkill?.name === skill.name ? `0 0 8px ${skill.color || '#ccc'}` : 'none',
                transition: 'box-shadow 0.2s ease-in-out'
              }}
            ></div>
            {skill.icon && <i className={`${skill.icon} w-5 text-center text-lg`} style={{ color: skill.color || 'currentColor' }}></i>}
            <span className={`font-semibold transition-colors duration-200 ${hoveredSkill?.name === skill.name ? 'text-light-text-dark dark:text-text-dark' : 'text-light-text-medium dark:text-text-medium'}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDonutChart;