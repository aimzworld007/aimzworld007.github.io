// By importing 'react', we ensure its global type definitions, including the original
// `JSX.IntrinsicElements` interface, are loaded. This allows our `declare global`
// block to correctly augment the interface via declaration merging.
// We use `import type` for specific types to avoid including React in the runtime bundle from this file.
import 'react';
import type { DetailedHTMLProps, HTMLAttributes, CSSProperties } from 'react';

// Define a global namespace for custom JSX elements like <lord-icon>
// This prevents TypeScript errors for non-standard HTML tags.
// FIX: The global JSX namespace augmentation was incorrectly using a `type` alias, which overwrote React's intrinsic element types instead of merging with them.
// This has been changed to use an `interface`, which correctly merges with React's existing
// IntrinsicElements interface, ensuring that standard HTML tags are recognized by TypeScript.
declare global {
  namespace JSX {
    // FIX: Replaced `type` alias with `interface` to correctly merge with React's intrinsic element types.
    // This resolves the issue where standard tags like 'div' were not being recognized.
    interface IntrinsicElements {
      'lord-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
        colors?: string;
        style?: CSSProperties;
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