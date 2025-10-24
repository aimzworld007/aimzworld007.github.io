import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from './types';

export const personalData: PersonalData = {
  name: "AINUL ISLAM",
  title: "Document Controller | PRO (Public Relations Officer)",
  photoUrl: "https://aimzworld007.github.io/photo.jpg",
  location: "Sharjah, U.A.E",
  email: "Aimctgbd@gmail.com",
  phone: "+971 52 284 9291",
  website: "https://aimzworld007.github.io",
  linkedin: "https://linkedin.com/in/aimzworld007",
  github: "https://github.com/aimzworld007",
  facebook: "https://facebook.com/aimzworld007",
  careerObjective: "Document Controller and administrative professional with 4 years of experience in the UAE, specializing in ICP, MOHRE, and DED government applications. Skilled in document control, compliance, visa processing, and customer service."
};

export const experiences: Experience[] = [
  {
    title: "PRO & Document Controller",
    company: "Habat Al Rimal Typing",
    location: "Sharjah, U.A.E",
    date: "March 2023 - Present",
    isCurrent: true,
    responsibilities: [
      "Managed UAE government applications (ICP, MOHRE, DED, Tas-heel, Emirates ID)",
      "Handled documentation workflows, visa processing, and direct customer service",
      "Provided support in IATA-approved flight ticket booking systems",
    ]
  },
  {
    title: "Filing Clerk",
    company: "Al Mutawakkil Typing Services",
    location: "Abu Dhabi, U.A.E",
    date: "Jul 2021 - Feb 2023",
    responsibilities: [
      "Organized and maintained physical and electronic filing systems",
      "Managed document retrieval and distribution for internal departments",
      "Processed legal documents and government forms with accuracy",
      "Implemented document scanning and digital archiving procedures",
    ]
  },
  {
    title: "Administration Manager / PRO",
    company: "Al Rashidya Gas Trading",
    location: "Dubai, U.A.E",
    date: "Jan 2019 - Jun 2021",
    responsibilities: [
       "Managed all government relations and documentation for company licensing and permits",
       "Liaised with various UAE government departments (MOHRE, DED, Immigration, Labor)",
       "Processed employee visas, permits, and documentation requirements",
       "Handled company compliance matters and ensured regulatory adherence",
    ]
  },
  {
    title: "IT Executive",
    company: "Metrix Corporation",
    location: "Chittagong, Bangladesh",
    date: "Jan 2016 - Dec 2018",
    responsibilities: [
      "Developed news portal Ctgnewstoday (currently inactive)",
      "Created database software for hospitals/clinics and Chittagong Port",
      "Designed result publishing software for Chittagong Medical College",
      "Provided IT support and troubleshooting across multiple departments",
    ]
  }
];


export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Gov Portal Management",
    description: "System for managing UAE government applications across various portals like ICP, MOHRE, and DED, ensuring efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e2f34b1?q=80&w=800&auto=format&fit=crop",
    technologies: ["ICP", "MOHRE", "DED", "Tas-heel"],
    details: "Developed and managed workflows for handling diverse government applications, ensuring compliance and efficiency. The system streamlined visa processing, Emirates ID applications, and other critical documentation services."
  },
  {
    title: "Corporate Compliance",
    description: "Managed government relations and documentation for company licensing, ensuring full regulatory adherence.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    technologies: ["Regulatory Adherence", "Documentation", "PRO"],
    details: "Liaised with various UAE government departments including MOHRE, DED, Immigration, and Labor to process employee visas, permits, and ensure full regulatory adherence for the company."
  },
  {
    title: "Digital Archiving Solution",
    description: "Implemented digital archiving procedures and managed document retrieval for a high-volume typing service.",
    imageUrl: "https://images.unsplash.com/photo-1521737852577-684897f092a2?q=80&w=800&auto=format&fit=crop",
    technologies: ["Filing Systems", "Document Retrieval", "Accuracy"],
    details: "Organized and maintained both physical and electronic filing systems. Managed document retrieval and distribution for internal departments, and processed legal documents with high accuracy."
  },
   {
    title: "News Portal Development",
    description: "Developed and managed a local news portal, Ctgnewstoday, using a full-stack PHP and MySQL solution.",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
    technologies: ["HTML/CSS/PHP", "MySQL", "Content Management"],
    details: "Led the development of a dynamic news portal. While currently inactive, this project involved creating a full-stack solution for news publishing and management."
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
    issuer: "Muktopaath - Authorized Bangladesh Online Training",
    date: "N/A",
    credentialIds: ["MC-R382468C3312268I150F", "MC-S382468T583314B152T"]
  },
  {
    name: "PHP Course Completion",
    issuer: "Sololearn",
    date: "Issued Feb 2016",
    credentialId: "CT-S4NGPDRA",
    credentialUrl: "https://www.sololearn.com/certificates/CT-S4NGPDRA"
  },
  {
    name: "HTML Course Completion",
    issuer: "Sololearn",
    date: "Issued Feb 2016",
    credentialId: "CT-LWZGFQLU",
    credentialUrl: "https://www.sololearn.com/certificates/CT-LWZGFQLU"
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
    title: "PRO & Document Control",
    description: "Expert handling of all UAE government-related documentation, visa processing, and compliance for seamless business operations.",
    icon: "https://cdn.lordicon.com/wzwygmng.json"
  },
  {
    title: "Custom Software",
    description: "Developing tailored software and database systems for businesses, healthcare, and educational institutions to streamline operations.",
    icon: "https://cdn.lordicon.com/zxxsrhow.json"
  },
  {
    title: "IT Support",
    description: "Providing comprehensive IT support and troubleshooting services to ensure smooth departmental functions and system uptime.",
    icon: "https://cdn.lordicon.com/dklbhvrt.json"
  },
  {
    title: "Web Development",
    description: "Building and managing dynamic websites and news portals with a strong focus on user-friendly content management systems.",
    icon: "https://cdn.lordicon.com/ddynxtkwidget.json"
  }
];