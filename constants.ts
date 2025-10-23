import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from './types';
import { IconBriefcase, IconCodeBracket, IconWrenchScrewdriver } from './components/icons';

export const personalData: PersonalData = {
  name: "AINUL ISLAM",
  title: "Document Controller | PRO (Public Relations Officer)",
  photoUrl: "https://i.imgur.com/TBEkIhy.jpeg",
  location: "Sharjah, U.A.E",
  email: "Aimctgbd@gmail.com",
  phone: "+971 52 284 9291",
  website: "https://aimzworld007.github.io",
  linkedin: "https://linkedin.com/in/aimzworld007",
  careerObjective: "Document Controller and administrative professional with 4 years of experience in the UAE, specializing in ICP, MOHRE, and DED government applications. Skilled in document control, compliance, visa processing, and customer service."
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Government Portal Management System",
    description: "A comprehensive system for managing UAE government applications across various portals.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e2f34b1?q=80&w=800&auto=format&fit=crop",
    technologies: ["ICP", "MOHRE", "DED", "Tas-heel"],
    details: "Developed and managed workflows for handling diverse government applications, ensuring compliance and efficiency. The system streamlined visa processing, Emirates ID applications, and other critical documentation services.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Corporate Compliance & Licensing",
    description: "Managed government relations and documentation for company licensing and permits.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    technologies: ["Regulatory Adherence", "Documentation", "PRO"],
    details: "Liaised with various UAE government departments including MOHRE, DED, Immigration, and Labor to process employee visas, permits, and ensure full regulatory adherence for the company.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Digital Archiving Solution",
    description: "Implemented document scanning and digital archiving procedures for a typing service.",
    imageUrl: "https://images.unsplash.com/photo-1521737852577-684897f092a2?q=80&w=800&auto=format&fit=crop",
    technologies: ["Filing Systems", "Document Retrieval", "Accuracy"],
    details: "Organized and maintained both physical and electronic filing systems. Managed document retrieval and distribution for internal departments, and processed legal documents with high accuracy.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
   {
    title: "News Portal Development",
    description: "Developed and managed a local news portal, Ctgnewstoday.",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
    technologies: ["HTML/CSS/PHP", "MySQL", "Content Management"],
    details: "Led the development of a dynamic news portal. While currently inactive, this project involved creating a full-stack solution for news publishing and management.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Hospital Database Software",
    description: "Created custom database software for hospitals, clinics, and Chittagong Port.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    technologies: ["Database Design", "Software Development", "Healthcare IT"],
    details: "Designed and implemented a database system to manage patient records and administrative data for healthcare facilities and port authorities, improving data accessibility and efficiency.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Result Publishing Software",
    description: "Designed a result publishing system for Chittagong Medical College.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    technologies: ["Software Design", "Education Tech", "IT Support"],
    details: "Developed a specialized software to publish academic results for a medical college, providing reliable and timely information to students and faculty. Also provided IT support across departments.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];


export const education: Education[] = [
  {
    degree: "M.Sc. Geography & Environment",
    institution: "National University of Bangladesh",
    details: "CGPA: 2.97/4.00"
  },
  {
    degree: "B.Sc. Geography & Environment",
    institution: "National University of Bangladesh",
    details: "CGPA: 3.02/4.00 – 1st Class"
  },
  {
    degree: "1-Year ICT Diploma",
    institution: "Islami Bank Institute of Technology",
    details: "Chittagong"
  }
];

export const certifications: Certification[] = [
  {
    name: "MS Office & Excel Training",
    issuer: "Muktopaath",
    date: "N/A",
    credentialIds: ["MC-R382468C33122681150F", "MC-S382468T583314B152T"]
  },
  {
    name: "PHP Course Completion",
    issuer: "Sololearn",
    date: "Issued Feb 2016",
    credentialId: "CT-S4NGPDRA"
  },
  {
    name: "HTML Course Completion",
    issuer: "Sololearn",
    date: "Issued Feb 2016",
    credentialId: "CT-LWZGFQLU"
  }
];

export const coreSkills: Skill[] = [
  { name: "Document Control" }, { name: "Public Relations" }, { name: "UAE Government Portals" },
  { name: "Customer Service" }, { name: "Compliance" }, { name: "Visa Processing" },
  { name: "IATA Portals" }, { name: "Tas-heel" }
];

export const technicalSkills: Skill[] = [
  { name: "GitHub" }, { name: "Artificial Intelligence" }, { name: "MS Office" },
  { name: "Excel" }, { name: "WordPress" }, { name: "HTML/CSS/PHP/MySQL" },
  { name: "ICT Tools" }, { name: "Basic Python" }
];

export const services: Service[] = [
  {
    title: "PRO Services & Document Control",
    description: "Expert handling of all UAE government-related documentation, including visa processing, licensing, and compliance.",
    // Fix: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
    icon: React.createElement(IconBriefcase, { className: "h-10 w-10 text-primary" })
  },
  {
    title: "Custom Software Solutions",
    description: "Developing tailored software and database systems for businesses, healthcare, and educational institutions.",
    // Fix: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
    icon: React.createElement(IconCodeBracket, { className: "h-10 w-10 text-primary" })
  },
  {
    title: "IT Support & Troubleshooting",
    description: "Providing comprehensive IT support and troubleshooting services to ensure smooth operations across multiple departments.",
    // Fix: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
    icon: React.createElement(IconWrenchScrewdriver, { className: "h-10 w-10 text-primary" })
  }
];