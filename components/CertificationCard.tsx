import React from 'react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border-l-4 border-primary transform transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-bold text-md text-light">{certification.name}</h3>
      <p className="text-sm text-primary font-medium">{certification.issuer} • {certification.date}</p>
      {certification.credentialId && <p className="text-xs text-medium mt-1">ID: {certification.credentialId}</p>}
      {certification.credentialIds && certification.credentialIds.map((id, index) => (
        <p key={index} className="text-xs text-medium mt-1">ID: {id}</p>
      ))}
    </div>
  );
};

export default CertificationCard;