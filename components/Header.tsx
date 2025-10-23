import React from 'react';
import { PersonalData } from '../types';
import { IconMapPin, IconEnvelope, IconPhone, IconGlobe, IconLinkedin, IconDownload } from './icons';

interface HeaderProps {
  data: PersonalData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="relative text-center p-6 w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full shadow-neumorphic-raised">
          <img
            src={data.photoUrl}
            alt={data.name}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="mt-6">
          <h1 className="text-6xl md:text-7xl font-bold text-text-dark tracking-tight">{data.name}</h1>
          <h2 className="text-2xl font-medium text-primary mt-2">{data.title}</h2>
          
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-base text-text-medium">
              <div className="flex items-center">
                <IconMapPin className="mr-2 text-primary" />
                <span>{data.location}</span>
              </div>
              <a href={`mailto:${data.email}`} className="flex items-center hover:text-primary transition-colors">
                <IconEnvelope className="mr-2 text-primary" />
                <span>{data.email}</span>
              </a>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-6">
             <a href={data.website} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-shadow duration-300 text-text-medium hover:text-primary">
                <IconGlobe className="h-7 w-7" />
             </a>
             <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full shadow-neumorphic-raised hover:shadow-neumorphic-pressed transition-shadow duration-300 text-text-medium hover:text-primary">
                <IconLinkedin className="h-7 w-7" />
             </a>
             <a 
                href="https://i.imgur.com/TBEkIhy.jpeg" 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Ainul-Islam-CV.jpeg"
                className="flex items-center text-text-dark font-semibold px-6 py-3 rounded-lg shadow-neumorphic-raised hover:shadow-neumorphic-pressed active:shadow-neumorphic-pressed transition-shadow duration-300"
             >
                <IconDownload className="mr-2 h-5 w-5 text-primary"/>
                Download CV
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;