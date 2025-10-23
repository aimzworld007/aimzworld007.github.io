import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50">
      <div className="inline-block bg-primary/10 p-4 rounded-xl mb-6 border-2 border-primary/20">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-light mb-3">{service.title}</h3>
      <p className="text-medium">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
