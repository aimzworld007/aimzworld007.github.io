import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from './types';

export const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
];

export const personalData: PersonalData = {
  name: "Ainul Islam",
  title: "Document Controller | PRO",
  photoUrl: "https://i.ibb.co/jPVWF02z/my-pic.png",
  location: "Shariah, UAE",
  email: "aimctgbd@gmail.com",
  phone: "+971 52 284 9291",
  website: "https://ainulislam.info",
  linkedin: "https://linkedin.com/in/aimzworld007",
  github: "https://github.com/aimzworld007",
  facebook: "https://facebook.com/aimzworld007",
  cvUrl: "https://aimzworld007.github.io/Ainul_islam_cv.pdf",
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
    title: "Remittance Calculator BD",
    description: "A web application to calculate currency remittances to Bangladesh using real-time exchange rates from an API.",
    imageUrl: "https://i.ibb.co/5WT1jGsz/remitbd.png",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    details: "A convenient tool for individuals sending money to Bangladesh. It provides up-to-date exchange rates from a live API and calculation features to understand the final remittance amount accurately.",
    liveUrl: "https://remitbd.netlify.app/",
    githubUrl: "https://github.com/aimzworld007/Remittance_Calculator_bd",
    category: "Web Application"
  },
  {
    title: "Shared Meal Manager",
    description: "A web app to simplify meal management for groups, allowing users to track daily meals, calculate costs, and manage payments.",
    imageUrl: "https://i.ibb.co/ycwhj9tt/logo.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    details: "This project is a web application designed to simplify meal management for groups, such as students in a dormitory or professionals in a shared living space. It allows users to track daily meals, calculate costs, and manage payments using Firebase for real-time data synchronization.",
    liveUrl: "https://messmeal.netlify.app",
    githubUrl: "https://github.com/aimzworld007/Shared-Meal-Manager",
    category: "Web Application"
  },
  {
    title: "Work Tracking Management",
    description: "A task and project management tool to help individuals and small teams track their work progress.",
    imageUrl: "https://i.ibb.co/My9ZmHq9/wroktms.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    details: "A straightforward work tracking system built with React and Firebase. It allows users to create tasks, set deadlines, and monitor the progress of their projects, enhancing productivity and organization with features like user authentication and real-time updates.",
    liveUrl: "https://worktms.netlify.app",
    githubUrl: "https://github.com/aimzworld007/Work-Tracking-management",
    category: "Web Application"
  },
  {
    title: "GirlyMush E-commerce Platform",
    description: "A fully-featured e-commerce website for a fashion and beauty brand, providing a seamless shopping experience.",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    technologies: ["WordPress", "WooCommerce", "PHP", "CSS"],
    details: "Developed a custom e-commerce platform using WordPress and WooCommerce. The site features a responsive design, secure payment gateway integration, product management, and an intuitive user interface to drive sales and customer engagement.",
    liveUrl: "https://girlymush.com",
    category: "Web Development"
  },
  {
    title: "CloudSoft Corporate Website",
    description: "A professional corporate website for a cloud software company, showcasing their services and technical expertise.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    details: "Designed and developed a modern, professional website for CloudSoft BD. The site effectively communicates their brand, services, and technical expertise. It features a clean, responsive layout, a portfolio section, and a contact form for lead generation.",
    liveUrl: "https://cloudsoft-bd.com",
    category: "Web Development"
  },
   {
    title: "CTG News - Online News Portal",
    description: "A dynamic and high-traffic online news portal serving the Chittagong region with up-to-the-minute news.",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "WordPress"],
    details: "Led the development of a dynamic news portal. This project involved creating a full-stack solution for news publishing and management, capable of handling high traffic and a large volume of content.",
    liveUrl: "https://ctgnews.net",
    category: "Web Development"
  },
  {
    title: "Alumni Association Website",
    description: "A dynamic website for the Alumni Association of the Department of Geography and Environment.",
    imageUrl: "https://raw.githubusercontent.com/aimzworld007/Geography_and_Environment_Department_Alumni_Association/main/img/logo.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    details: "A comprehensive and dynamic website built for the Alumni Association of the Department of Geography and Environment at Government City College, Chittagong. The platform facilitates member registration, event management, and community engagement, serving as a central hub for alumni.",
    githubUrl: "https://github.com/aimzworld007/Geography_and_Environment_Department_Alumni_Association",
    category: "Web Development"
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
  { name: "Document Control", percentage: 90, icon: "fa-solid fa-file-invoice" },
  { name: "Public Relations", percentage: 85, icon: "fa-solid fa-bullhorn" },
  { name: "UAE Government Portals", percentage: 90, icon: "fa-solid fa-landmark-flag" },
  { name: "Customer Service", percentage: 88, icon: "fa-solid fa-headset" },
  { name: "Compliance", percentage: 85, icon: "fa-solid fa-gavel" },
  { name: "Visa Processing", percentage: 90, icon: "fa-solid fa-passport" },
  { name: "ICA EChannel System", percentage: 80, icon: "fa-solid fa-desktop" },
  { name: "Amer & Tashsil Service", percentage: 85, icon: "fa-solid fa-concierge-bell" }
];

export const technicalSkills: Skill[] = [
  { name: "HTML5", icon: "fa-brands fa-html5", percentage: 95, color: "#ef4444" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", percentage: 90, color: "#3b82f6" },
  { name: "PHP", icon: "fa-brands fa-php", percentage: 75, color: "#8b5cf6" },
  { name: "MySQL", icon: "fa-solid fa-database", percentage: 80, color: "#0ea5e9" },
  { name: "Firebase", icon: "fa-solid fa-database", percentage: 70, color: "#f97316" },
  { name: "WordPress", icon: "fa-brands fa-wordpress", percentage: 90, color: "#2563eb" },
  { name: "GitHub", icon: "fa-brands fa-github", percentage: 85, color: "#475569" },
  { name: "Linux", icon: "fa-brands fa-linux", percentage: 70, color: "#f59e0b" },
  { name: "Basic Python", icon: "fa-brands fa-python", percentage: 65, color: "#22c55e" },
  { name: "Artificial Intelligence", icon: "fa-solid fa-robot", percentage: 60, color: "#d946ef" },
  { name: "Open Office", icon: "fa-solid fa-file-word", percentage: 95, color: "#06b6d4" },
  { name: "Excel", icon: "fa-solid fa-file-excel", percentage: 95, color: "#10b981" },
];

export const services: Service[] = [
  {
    title: "PRO & Document Control",
    description: "Expert handling of all UAE government-related documentation, visa processing, and compliance for seamless business operations.",
    icon: "https://cdn.lordicon.com/wzwygmng.json"
  },
  {
    title: "Web & Software Development",
    description: "Passionate about technology, I build custom web applications and dynamic websites in my free time, focusing on solving unique challenges and delivering engaging digital experiences.",
    icon: "https://cdn.lordicon.com/ddynxtkwidget.json"
  },
  {
    title: "IT Support",
    description: "Providing comprehensive IT support and troubleshooting services to ensure smooth departmental functions and system uptime.",
    icon: "https://cdn.lordicon.com/dklbhvrt.json"
  }
];