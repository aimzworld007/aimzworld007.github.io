import React, { useState, useEffect, useRef } from 'react';
import { Skill } from '../types';

interface SkillProgressProps {
  skill: Skill;
  percentage: number;
}

const useAnimateOnScroll = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return [ref, isVisible];
};

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, percentage }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(percentage), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-semibold text-light-text-dark dark:text-text-dark flex items-center gap-3">
          {skill.icon && <i className={`${skill.icon} text-primary text-lg w-5 text-center`}></i>}
          <span>{skill.name}</span>
        </span>
        <span className="text-sm font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-light-border dark:bg-border rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;