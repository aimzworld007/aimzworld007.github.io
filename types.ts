import React from 'react';

export interface PersonalData {
  name: string;
  title: string;
  photoUrl: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  facebook: string;
  careerObjective: string;
}

export interface Experience {
  title: string;
  company: string;
  location:string;
  date: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
}

export interface Certification {
  name:string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialIds?: string[];
  credentialUrl?: string;
}

export interface Skill {
  name: string;
}

export interface PortfolioProject {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  details: string;
  videoUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}