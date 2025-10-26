import React from 'react';
import { Timestamp } from 'firebase/firestore';

// Define a global namespace for custom JSX elements like <lord-icon>
// This prevents TypeScript errors for non-standard HTML tags.
declare global {
  namespace JSX {
    // FIX: Correctly extend React's intrinsic elements to avoid overwriting them.
    // This adds support for the <lord-icon> custom element while preserving
    // built-in types for standard HTML tags like <div>, <p>, etc., resolving
    // numerous JSX-related TypeScript errors across the application.
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
  startDate?: Timestamp; // For ordering in Firestore
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
  imageUrl: string;
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
