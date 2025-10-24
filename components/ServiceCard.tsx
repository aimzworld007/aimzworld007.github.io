import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-light-card-background dark:bg-card-background p-8 rounded-xl shadow-card transition-all duration-300 border border-light-border dark:border-border hover:border-primary">
      <div className="text-light-text-medium dark:text-text-medium group-hover:text-primary transition-colors duration-300 mb-5">
        <lord-icon
            src={service.icon}
            trigger="hover"
            colors="primary:#A0A0A0,secondary:#00a896"
            style={{width:'40px', height:'40px'}}>
        </lord-icon>
      </div>
      <h3 className="text-2xl font-bold text-light-text-dark dark:text-text-dark group-hover:text-primary transition-colors duration-300 mb-3">{service.title}</h3>
      <p className="text-light-text-medium dark:text-text-medium leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;