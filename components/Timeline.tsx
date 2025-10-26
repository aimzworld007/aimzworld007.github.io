import React, { Children, isValidElement, cloneElement, useState, useEffect, useRef } from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      {/* The timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-light-border dark:bg-border lg:left-1/2 lg:-translate-x-1/2"></div>

      <div className="relative flex flex-col items-start lg:items-center">
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) {
            return null;
          }

          const side = index % 2 === 0 ? 'left' : 'right';
          // FIX: Safely access component name by checking if `child.type` is a function.
          const componentName = typeof child.type === 'function' ? (child.type as any).name : '';
          const icon = componentName === 'ExperienceCard' ? 'fa-briefcase' : 'fa-graduation-cap';
          
          return (
            <div className="w-full flex lg:justify-center relative">
              <TimelineDot icon={icon} side={side} />
              {/* FIX: Cast child to a type that accepts the `side` prop to resolve cloneElement error. */}
              {cloneElement(child as React.ReactElement<{ side?: 'left' | 'right' }>, { side })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineDotProps {
    icon: string;
    side: 'left' | 'right';
}

const TimelineDot: React.FC<TimelineDotProps> = ({ icon, side }) => {
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

    const dotPosition = 'left-4 lg:left-1/2';

    return (
        <div ref={ref} className={`absolute top-8 ${dotPosition} -translate-x-1/2 -translate-y-1/2 z-10 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="w-9 h-9 bg-light-card-background dark:bg-card-background border-2 border-primary rounded-full flex items-center justify-center">
                <i className={`fa-solid ${icon} text-primary`}></i>
            </div>
        </div>
    )
}

export default Timeline;