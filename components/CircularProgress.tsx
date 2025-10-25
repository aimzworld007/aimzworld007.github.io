import React, { useState, useEffect, useRef } from 'react';
import { Skill } from '../types';

interface CircularProgressProps {
  skill: Skill;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const size = 120;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = skill.percentage || 0;
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 text-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={center}
            cy={center}
            className="text-light-border dark:text-border"
          />
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx={center}
            cy={center}
            className="text-primary"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: isVisible ? offset : circumference,
              transition: 'stroke-dashoffset 1.5s ease-out',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {skill.icon && <i className={`${skill.icon} text-3xl text-light-text-dark dark:text-text-dark`}></i>}
        </div>
      </div>
      <p className="font-semibold text-light-text-dark dark:text-text-dark">{skill.name}</p>
    </div>
  );
};

export default CircularProgress;
