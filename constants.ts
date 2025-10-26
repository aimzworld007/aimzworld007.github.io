import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service, ThemeColor } from './types';

export const navLinks = [
    { href: '#home', text: 'Home', icon: 'fa-solid fa-house' },
    { href: '#services', text: 'About', icon: 'fa-solid fa-user' },
    { href: '#experience', text: 'Experience', icon: 'fa-solid fa-briefcase' },
    { href: '#education', text: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { href: '#skills', text: 'Skills', icon: 'fa-solid fa-code' },
    { href: '#portfolio', text: 'Portfolio', icon: 'fa-solid fa-layer-group' },
    { href: '#contact', text: 'Contact', icon: 'fa-solid fa-envelope' },
];

export const themeColors: ThemeColor[] = [
  { name: 'Teal', hsl: '174 100% 33%', hslHover: '174 100% 28%' },
  { name: 'Blue', hsl: '217 91% 60%', hslHover: '217 91% 55%' },
  { name: 'Purple', hsl: '262 84% 59%', hslHover: '262 84% 54%' },
  { name: 'Green', hsl: '145 63% 49%', hslHover: '145 63% 44%' },
  { name: 'Orange', hsl: '25 95% 53%', hslHover: '25 95% 48%' },
];

export const personalData: PersonalData = {
  name: "Ainul Islam",
  title: "Document Controller | PRO",
  typewriterPhrases: [
    "Document Controller",
    "Public Relations Officer",
    "IT Enthusiast",
    "Self-taught Developer"
  ],
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
    image: {
      src: "https://i.ibb.co/5WT1jGsz/remitbd.png",
      alt: "A calculator and currency notes, representing a remittance calculation app."
    },
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    details: "A convenient tool for individuals sending money to Bangladesh. It provides up-to-date exchange rates from a live API and calculation features to understand the final remittance amount accurately.",
    liveUrl: "https://remitbd.netlify.app/",
    githubUrl: "https://github.com/aimzworld007/Remittance_Calculator_bd",
    category: "Web Application"
  },
  {
    title: "Shared Meal Manager",
    description: "A web app to simplify meal management for groups, allowing users to track daily meals, calculate costs, and manage payments.",
    image: {
      src: "https://i.ibb.co/ycwhj9tt/logo.jpg",
      alt: "A delicious meal on a plate, representing a shared meal management app."
    },
    technologies: ["React", "Firebase", "Tailwind CSS"],
    details: "This project is a web application designed to simplify meal management for groups, such as students in a dormitory or professionals in a shared living space. It allows users to track daily meals, calculate costs, and manage payments using Firebase for real-time data synchronization.",
    liveUrl: "https://messmeal.netlify.app",
    githubUrl: "https://github.com/aimzworld007/Shared-Meal-Manager",
    category: "Web Application"
  },
  {
    title: "Work Tracking Management",
    description: "A task and project management tool to help individuals and small teams track their work progress.",
    image: {
      src: "https://i.ibb.co/My9ZmHq9/wroktms.png",
      alt: "A person organizing sticky notes on a wall, representing a work tracking tool."
    },
    technologies: ["React", "Firebase", "Tailwind CSS"],
    details: "A straightforward work tracking system built with React and Firebase. It allows users to create tasks, set deadlines, and monitor the progress of their projects, enhancing productivity and organization with features like user authentication and real-time updates.",
    liveUrl: "https://worktms.netlify.app",
    githubUrl: "https://github.com/aimzworld007/Work-Tracking-management",
    category: "Web Application"
  },
  {
    title: "GirlyMush E-commerce Platform",
    description: "A fully-featured e-commerce website for a fashion and beauty brand, providing a seamless shopping experience.",
    image: {
      src: "https://i0.wp.com/girlymush.com/wp-content/uploads/2025/09/cropped-GGM-Logo1.png",
      alt: "A person shopping with bags, representing an e-commerce platform."
    },
    technologies: ["WordPress", "WooCommerce", "PHP", "CSS"],
    details: "Developed a custom e-commerce platform using WordPress and WooCommerce. The site features a responsive design, secure payment gateway integration, product management, and an intuitive user interface to drive sales and customer engagement.",
    liveUrl: "https://girlymush.com",
    category: "Web Development"
  },
   {
    title: "CTG News - Online News Portal",
    description: "A dynamic and high-traffic online news portal serving the Chittagong region with up-to-the-minute news.",
    image: {
      src: "https://ctgtv.net/storage/2023/03/site-logo.png",
      alt: "A stack of newspapers, representing an online news portal."
    },
    technologies: ["HTML", "CSS", "PHP", "MySQL", "WordPress"],
    details: "Led the development of a dynamic news portal. This project involved creating a full-stack solution for news publishing and management, capable of handling high traffic and a large volume of content.",
    liveUrl: "https://ctgtv.net",
    category: "Web Development"
  },
  {
    title: "Alumni Association Website",
    description: "A dynamic website for the Alumni Association of the Department of Geography and Environment.",
    image: {
      src: "https://github.com/aimzworld007/Geography_and_Environment_Department_Alumni_Association/blob/main/img/logo.png?raw=true",
      alt: "Graduates throwing their caps in the air, representing an alumni association website."
    },
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
  // FIX: Added missing 'type' property to each skill to satisfy the Skill interface.
  { name: "Document Control", percentage: 90, icon: "fa-solid fa-file-invoice", type: "core" },
  { name: "Public Relations", percentage: 85, icon: "fa-solid fa-bullhorn", type: "core" },
  { name: "UAE Government Portals", percentage: 90, icon: "fa-solid fa-landmark-flag", type: "core" },
  { name: "Customer Service", percentage: 88, icon: "fa-solid fa-headset", type: "core" },
  { name: "Compliance", percentage: 85, icon: "fa-solid fa-gavel", type: "core" },
  { name: "Visa Processing", percentage: 90, icon: "fa-solid fa-passport", type: "core" },
  { name: "ICA EChannel System", percentage: 80, icon: "fa-solid fa-desktop", type: "core" },
  { name: "Amer & Tashsil Service", percentage: 85, icon: "fa-solid fa-concierge-bell", type: "core" }
];

export const technicalSkills: Skill[] = [
  // FIX: Added missing 'type' property to each skill to satisfy the Skill interface.
  { name: "HTML5", icon: "fa-brands fa-html5", percentage: 95, color: "#ef4444", type: "technical" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", percentage: 90, color: "#3b82f6", type: "technical" },
  { name: "PHP", icon: "fa-brands fa-php", percentage: 75, color: "#8b5cf6", type: "technical" },
  { name: "MySQL", icon: "fa-solid fa-database", percentage: 80, color: "#0ea5e9", type: "technical" },
  { name: "Firebase", icon: "fa-solid fa-database", percentage: 70, color: "#f97316", type: "technical" },
  { name: "WordPress", icon: "fa-brands fa-wordpress", percentage: 90, color: "#2563eb", type: "technical" },
  { name: "GitHub", icon: "fa-brands fa-github", percentage: 85, color: "#475569", type: "technical" },
  { name: "Linux", icon: "fa-brands fa-linux", percentage: 70, color: "#f59e0b", type: "technical" },
  { name: "Basic Python", icon: "fa-brands fa-python", percentage: 65, color: "#22c55e", type: "technical" },
  { name: "Artificial Intelligence", icon: "fa-solid fa-robot", percentage: 60, color: "#d946ef", type: "technical" },
  { name: "Open Office", icon: "fa-solid fa-file-word", percentage: 95, color: "#06b6d4", type: "technical" },
  { name: "Excel", icon: "fa-solid fa-file-excel", percentage: 95, color: "#10b981", type: "technical" },
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
    icon: "https://cdn.lordicon.com/itmsnfur.json"
  },
  {
    title: "IT Support",
    description: "Providing comprehensive IT support and troubleshooting services to ensure smooth departmental functions and system uptime.",
    icon: "https://cdn.lordicon.com/dklbhvrt.json"
  }
];