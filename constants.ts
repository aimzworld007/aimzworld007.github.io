import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from './types';

export const personalData: PersonalData = {
  name: "AINUL ISLAM",
  title: "Document Controller | PRO",
  photoUrl: "https://aimzworld007.github.io/photo.jpg",
  location: "Sharjah, U.A.E",
  email: "Aimctgbd@gmail.com",
  phone: "+971 52 284 9291",
  website: "https://aimzworld007.github.io",
  linkedin: "https://linkedin.com/in/aimzworld007",
  careerObjective: "As an accomplished Document Controller and PRO with extensive experience in the UAE, I specialize in navigating the complexities of government portals such as ICP, MOHRE, and DED. My expertise lies in efficiently managing a high volume of government applications, including employee visas, permits, and Emirates ID processes, ensuring full regulatory compliance. I am adept at liaising with various government departments and providing exceptional customer service to resolve inquiries and facilitate smooth transactions. With a background that also includes web development and IT support, I bring a unique blend of technical proficiency and administrative excellence to my roles. I am now seeking a challenging position where I can apply my diverse skill set to contribute to a dynamic organization's success."
};

export const experiences: Experience[] = [
  {
    title: "Document Controller & PRO",
    company: "Management of Government transactions Center",
    location: "Sharjah, U.A.E",
    date: "2020 - Present",
    isCurrent: true,
    responsibilities: [
      "Process diverse government applications via ICP, MOHRE, DED, and Tas-heel portals.",
      "Manage employee visas, permits, and Emirates ID processes.",
      "Liaise with government departments to ensure regulatory compliance.",
      "Provide customer service and handle client inquiries regarding government services.",
    ]
  },
  {
    title: "Web Developer & IT Support",
    company: "Freelance & Various Projects",
    location: "Chittagong, Bangladesh",
    date: "2016 - 2020",
    responsibilities: [
      "Developed and managed a local news portal using HTML, CSS, PHP, and MySQL.",
      "Created custom database software for hospitals, clinics, and Chittagong Port.",
      "Designed a result publishing system for Chittagong Medical College.",
      "Provided IT support and troubleshooting for various departments.",
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
    issuer: "Muktopaath",
    date: "N/A",
    credentialIds: ["MC-R382468C33122681150F", "MC-S382468T583314B152T"]
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