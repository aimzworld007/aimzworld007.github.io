import React from 'react';
import { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from './types';

export const personalData: PersonalData = {
  name: "Ainul Islam",
  title: "Document Controller | PRO",
  photoUrl: "https://aimzworld007.github.io/photo.jpg",
  location: "Shariah, UAE",
  email: "aimctgbd@gmail.com",
  phone: "+971 52 284 9291",
  website: "https://ainulislam.info",
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
    title: "PDF & Image Tool",
    description: "A versatile web utility for performing common operations on PDF documents and image files.",
    imageUrl: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    details: "A user-friendly, browser-based tool for common PDF and image manipulations, designed for quick and easy use without software installation.",
    liveUrl: "https://pdfimg.netlify.app",
    category: "Web Application"
  },
  {
    title: "EID Photo Lamination Tool",
    description: "A specialized tool for preparing and formatting Emirates ID photos for lamination and official use.",
    imageUrl: "https://images.unsplash.com/photo-1560410065-3676993803f2?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    details: "This tool simplifies the process of preparing Emirates ID photos by providing easy-to-use formatting and lamination preview options, ensuring compliance with official standards.",
    liveUrl: "https://eidlemi.netlify.app",
    category: "Web Application"
  },
  {
    title: "EID Photo Verify",
    description: "A utility to verify and check the compliance of Emirates ID photos against official requirements.",
    imageUrl: "https://images.unsplash.com/photo-1556011308-d6aed8548c25?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS"],
    details: "A simple yet effective tool for verifying that Emirates ID photos meet the required specifications for size, background, and quality, helping to prevent application rejections.",
    liveUrl: "https://iaco.netlify.app/",
    category: "Web Application"
  },
  {
    title: "ICO Photo Tool",
    description: "A tool designed for processing and formatting photos for ICA (Identity, Citizenship, Customs & Port Security) applications.",
    imageUrl: "https://images.unsplash.com/photo-1603957822948-d3e2e0965154?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS"],
    details: "This utility helps users format their personal photos to meet the strict requirements of UAE's ICA portal for visa and identity applications.",
    liveUrl: "https://icophoto.netlify.app",
    category: "Web Application"
  },
  {
    title: "Remit BD",
    description: "A web application to track and calculate currency remittances, specifically for Bangladesh.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    details: "A convenient tool for individuals sending money to Bangladesh, providing up-to-date exchange rates and calculation features to understand the final remittance amount.",
    liveUrl: "https://remitbd.netlify.app/",
    category: "Web Application"
  },
  {
    title: "Mess Meal Management Tool",
    description: "A simple tool to help manage and track shared meals and expenses in a communal living arrangement.",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    details: "An application designed to simplify meal management for students or professionals in shared housing. It helps track daily meals, calculate costs, and manage payments fairly among members.",
    liveUrl: "https://messmeal.netlify.app",
    category: "Web Application"
  },
  {
    title: "Work Tracking Management",
    description: "A task and project management tool to help individuals and small teams track their work progress.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "Firebase"],
    details: "A straightforward work tracking system that allows users to create tasks, set deadlines, and monitor the progress of their projects, enhancing productivity and organization.",
    liveUrl: "https://worktms.netlify.app",
    category: "Web Application"
  },
  {
    title: "PDF Editor (Under Dev.)",
    description: "An upcoming powerful, browser-based editor for modifying and annotating PDF documents.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "JavaScript", "PDF.js"],
    details: "Currently under development, this tool aims to provide a comprehensive set of features for editing PDF files directly in the browser, including text editing, annotation, and form filling.",
    liveUrl: "https://propdf.netlify.app",
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
    title: "Gov Portal Management",
    description: "System for managing UAE government applications across various portals like ICP, MOHRE, and DED, ensuring efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1619465538927-a06a21859599?q=80&w=800&auto=format&fit=crop",
    technologies: ["ICP", "MOHRE", "DED", "Tas-heel"],
    details: "Developed and managed workflows for handling diverse government applications, ensuring compliance and efficiency. The system streamlined visa processing, Emirates ID applications, and other critical documentation services.",
    category: "Professional Services"
  },
  {
    title: "Corporate Compliance",
    description: "Managed government relations and documentation for company licensing, ensuring full regulatory adherence.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    technologies: ["Regulatory Adherence", "Documentation", "PRO"],
    details: "Successfully managed full corporate compliance and PRO services for companies including Alrashidya Gas Trading LLC and Jasmin AC Unit Fix LLC. Liaised with various UAE government departments (MOHRE, DED, Immigration, Labor) to process employee visas, permits, and ensure complete regulatory adherence.",
    category: "Professional Services"
  },
  {
    title: "Digital Archiving Solution",
    description: "Implemented digital archiving procedures and managed document retrieval for a high-volume typing service.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    technologies: ["Filing Systems", "Document Retrieval", "Accuracy"],
    details: "Organized and maintained both physical and electronic filing systems. Managed document retrieval and distribution for internal departments, and processed legal documents with high accuracy.",
    category: "Professional Services"
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
  { name: "HTML5", icon: "fa-brands fa-html5", percentage: 95, color: "#E34F26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", percentage: 90, color: "#1572B6" },
  { name: "PHP", icon: "fa-brands fa-php", percentage: 75, color: "#777BB4" },
  { name: "MySQL", icon: "fa-solid fa-database", percentage: 80, color: "#4479A1" },
  { name: "Firebase", icon: "fa-solid fa-database", percentage: 70, color: "#FFCA28" },
  { name: "WordPress", icon: "fa-brands fa-wordpress", percentage: 90, color: "#21759B" },
  { name: "GitHub", icon: "fa-brands fa-github", percentage: 85, color: "#333333" },
  { name: "Linux", icon: "fa-brands fa-linux", percentage: 70, color: "#FCC624" },
  { name: "Basic Python", icon: "fa-brands fa-python", percentage: 65, color: "#3776AB" },
  { name: "Artificial Intelligence", icon: "fa-solid fa-robot", percentage: 60, color: "#8E44AD" },
  { name: "Open Office", icon: "fa-solid fa-file-word", percentage: 95, color: "#003366" },
  { name: "Excel", icon: "fa-solid fa-file-excel", percentage: 95, color: "#217346" },
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