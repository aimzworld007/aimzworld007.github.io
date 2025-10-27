// By importing 'react', we ensure its global type definitions, including the original
// `JSX.IntrinsicElements` interface, are loaded. This allows our `declare global`
// block to correctly augment the interface via declaration merging.
import React from 'react';

// Define a global namespace for custom JSX elements like <lord-icon>
// This prevents TypeScript errors for non-standard HTML tags.
declare global {
  namespace JSX {
    // FIX: Corrected JSX type augmentation. The previous attempt at declaration merging
    // was not working correctly in this project's setup and was replacing the original
    // IntrinsicElements interface. By extending React.JSX.IntrinsicElements, we explicitly
    // include all standard HTML element types and add our custom 'lord-icon' element,
    // resolving all JSX-related compilation errors.
    interface IntrinsicElements extends React.JSX.IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        colors?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export interface ThemeColor {
  name: string;
  hsl: string;
  hslHover: string;
}

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
  cvUrl: string;
  careerObjective: string;
  typewriterPhrases: string[];
}

export interface Experience {
  id?: string;
  title: string;
  company: string;
  location: string;
  date: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface Education {
  id?: string;
  degree: string;
  institution: string;
  details: string;
}

export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  date: string;
  credentialIds?: string[];
  credentialId?: string;
  credentialUrl?: string;
}

export interface Skill {
  id?: string;
  name: string;
  percentage: number;
  icon: string;
  color?: string;
  type: 'core' | 'technical'; // To distinguish between skill types
}

export interface PortfolioProject {
  id?: string;
  title: string;
  description: string;
  image: {
    src: string; // Base URL from an image service like Unsplash
    alt: string; // Alt text for accessibility
  };
  technologies: string[];
  details: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  videoUrl?: string;
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
}