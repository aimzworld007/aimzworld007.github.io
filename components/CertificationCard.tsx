
import React, { useState, useEffect, useRef } from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
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
      { threshold: 0.1 }
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
    <div ref={ref} className={`bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card transition-all duration-300 dark:hover:shadow-glow hover:-translate-y-1 border border-light-border dark:border-border flex items-start space-x-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <i className={`fa-solid fa-award text-3xl text-primary/80 mt-1 ${isVisible ? 'animate-scale-in [animation-delay:100ms]' : 'opacity-0'}`} aria-hidden="true"></i>
      <div className={isVisible ? 'animate-fade-in-up [animation-delay:250ms]' : 'opacity-0'}>
        <h3 className="font-bold text-xl text-light-text-dark dark:text-text-dark">{certification.name}</h3>
        <p className="text-base text-primary font-semibold mt-1">{certification.issuer} • {certification.date}</p>
        {certification.credentialUrl ? (
          <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-light-text-medium dark:text-text-medium mt-2 inline-flex items-center hover:text-primary transition-colors font-medium">
            View Credential <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-2" aria-hidden="true"></i>
          </a>
        ) : (
          <>
          {certification.credentialId && (
              <p className="text-sm text-light-text-medium dark:text-text-medium mt-2">
                ID: {certification.credentialId}
              </p>
          )}
          </>
        )}

        {certification.credentialIds && certification.credentialIds.map((id, index) => (
          <p key={index} className="text-sm text-light-text-medium dark:text-text-medium mt-1">ID: {id}</p>
        ))}
      </div>
    </div>
  );
};

export default CertificationCard;
