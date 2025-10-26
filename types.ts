// By importing React, we bring its type definitions into the scope of this file.
// This allows TypeScript to find the original `JSX.IntrinsicElements` interface.
// Our `declare global` block below can then correctly augment this interface
// using declaration merging, adding support for custom elements like `<lord-icon>`
// without overwriting the standard HTML element types (like 'div', 'p', etc.).
import * as React from 'react';

// Define a global namespace for custom JSX elements like <lord-icon>
// This prevents TypeScript errors for non-standard HTML tags.
// FIX: Corrected the JSX IntrinsicElements augmentation. By removing the `extends` clause, we leverage TypeScript's declaration merging to add custom elements without overwriting standard HTML tags.
declare global {
  namespace JSX {
    // Augmenting React's intrinsic elements to add support for the 'lord-icon' custom element.
    interface IntrinsicElements {
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