import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-background p-8 rounded-2xl text-center shadow-neumorphic-raised transition-shadow duration-300 hover:shadow-neumorphic-pressed">
      <div className="inline-block bg-background p-4 rounded-full shadow-neumorphic-raised mb-6">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-text-dark mb-3">{service.title}</h3>
      <p className="text-text-medium">{service.description}</p>
    </div>
  );
};

export default ServiceCard;