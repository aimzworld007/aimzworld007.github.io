import React from 'react';
import { PersonalData } from '../types';
import { IconMapPin, IconEnvelope, IconPhone, IconGlobe, IconLinkedin, IconDownload } from './icons';

interface HeaderProps {
  data: PersonalData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="relative text-center p-6 rounded-2xl w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={data.photoUrl}
          alt={data.name}
          className="w-40 h-40 rounded-full border-4 border-primary object-cover shadow-lg glow-shadow"
        />
        <div className="mt-6">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-light to-secondary tracking-tight">{data.name}</h1>
          <h2 className="text-2xl font-medium text-primary mt-2">{data.title}</h2>
          
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-md text-medium">
              <div className="flex items-center">
                <IconMapPin className="mr-2 text-primary" />
                <span>{data.location}</span>
              </div>
              <a href={`mailto:${data.email}`} className="flex items-center hover:text-secondary transition-colors">
                <IconEnvelope className="mr-2 text-primary" />
                <span>{data.email}</span>
              </a>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-6">
             <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-primary transition-colors transform hover:scale-110">
                <IconGlobe className="h-8 w-8" />
             </a>
             <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-primary transition-colors transform hover:scale-110">
                <IconLinkedin className="h-8 w-8" />
             </a>
             <a href="#" className="flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition-all transform hover:scale-105 hover:shadow-primary/50">
                <IconDownload className="mr-2 h-5 w-5"/>
                Download CV
             </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;