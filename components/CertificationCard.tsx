import React from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-background p-6 rounded-2xl shadow-neumorphic-raised transition-shadow duration-300 hover:shadow-neumorphic-pressed">
      <h3 className="font-bold text-lg text-text-dark">{certification.name}</h3>
      <p className="text-base text-primary font-medium">{certification.issuer} • {certification.date}</p>
      {certification.credentialId && (
        <p className="text-xs text-text-medium mt-1">
          {certification.credentialUrl ? (
            <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">
              ID: {certification.credentialId}
            </a>
          ) : (
            `ID: ${certification.credentialId}`
          )}
        </p>
      )}
      {certification.credentialIds && certification.credentialIds.map((id, index) => (
        <p key={index} className="text-xs text-text-medium mt-1">ID: {id}</p>
      ))}
    </div>
  );
};

export default CertificationCard;