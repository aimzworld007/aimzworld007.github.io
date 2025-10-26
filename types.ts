// By importing React, we bring its type definitions into the scope of this file.
// This allows TypeScript to find the original `JSX.IntrinsicElements` interface.
// Our `declare global` block below can then correctly augment this interface
// using declaration merging, adding support for custom elements like `<lord-icon>`
// without overwriting the standard HTML element types (like 'div', 'p', etc.).
import * as React from 'react';

// Define a global namespace for custom JSX elements like <lord-icon>
// This prevents TypeScript errors for non-standard HTML tags.
// FIX: The original augmentation was overwriting React's default JSX.IntrinsicElements.
// By extending React.JSX.IntrinsicElements, we ensure that all standard HTML element
// types are preserved, and our custom 'lord-icon' element is added, resolving
// the widespread "Property does not exist" errors.
declare global {
  namespace JSX {
    // Augmenting React's intrinsic elements to add support for the 'lord-icon' custom element.
    // By extending React's definitions, we ensure all standard HTML tags are included.
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