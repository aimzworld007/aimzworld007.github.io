import React from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-light-card-background dark:bg-card-background p-6 rounded-xl shadow-card transition-all duration-300 dark:hover:shadow-glow hover:-translate-y-1 border border-light-border dark:border-border">
      <h3 className="font-bold text-xl text-light-text-dark dark:text-text-dark">{certification.name}</h3>
      <p className="text-base text-primary font-semibold mt-1">{certification.issuer} • {certification.date}</p>
      {certification.credentialUrl ? (
         <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-light-text-medium dark:text-text-medium mt-2 inline-block hover:text-primary transition-colors font-medium">
           View Credential
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
  );
};

export default CertificationCard;