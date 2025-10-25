import React, { useState, useEffect } from 'react';
import {
  personalData,
  experiences,
  education,
  certifications,
  coreSkills,
  technicalSkills,
  portfolioProjects,
  services,
  themeColors
} from './constants';
import { PortfolioProject } from './types';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import PortfolioSlider from './components/PortfolioSlider';
import PortfolioModal from './components/PortfolioModal';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Typewriter from './components/Typewriter';
import Timeline from './components/Timeline';
import SkillProgress from './components/SkillProgress';
import SkillDonutChart from './components/SkillDonutChart';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return 'light';
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primaryColor') || themeColors[0].hsl;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);
  
  const projectCategories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const selectedColor = themeColors.find(c => c.hsl === primaryColor) || themeColors[0];
    const root = document.documentElement;
    root.style.setProperty('--color-primary', selectedColor.hsl);
    root.style.setProperty('--color-primary-hover', selectedColor.hslHover);
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsScrollButtonVisible(true);
      } else {
        setIsScrollButtonVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleProjectClick = (project: PortfolioProject) => {
    if (!project.liveUrl) {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium font-sans antialiased selection:bg-primary selection:text-white">
      <Header 
        data={personalData} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        theme={theme}
        toggleTheme={toggleTheme}
        currentPrimaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />
      
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentPrimaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />
      
      <button 
        className="fixed top-6 left-6 z-40 lg:hidden bg-light-card-background dark:bg-card-background w-12 h-12 rounded-full flex items-center justify-center shadow-md text-light-text-dark dark:text-text-dark"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <lord-icon
            src="https://cdn.lordicon.com/jxwksgwv.json"
            trigger="hover"
            colors="primary:#00a896"
            style={{width:'28px', height:'28px'}}>
        </lord-icon>
      </button>

      <main className="container mx-auto px-6 lg:px-8 py-20 space-y-36">
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="grid grid-cols-1 gap-12 items-center text-center">
             <div className="order-1 flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/5 to-transparent animate-pulse-border"></div>
                    <img src={personalData.photoUrl} alt={personalData.name} className="relative w-full h-full object-cover object-top rounded-full shadow-2xl" />
                </div>
            </div>
            <div className="order-2">
              <span className="text-xl font-semibold text-primary">Hello, I'm</span>
               <h1 className="text-6xl md:text-8xl font-signature bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 mb-4 text-light-text-dark dark:text-text-dark">
                {personalData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-light-text-medium dark:text-text-medium min-h-[2.5rem] md:min-h-[3rem]">
                <Typewriter text={personalData.title} />
              </h2>
              <p className="mt-6 max-w-xl mx-auto">
                A dedicated and detail-oriented professional with a strong background in document control and public relations within the UAE government sector. Also a passionate self-taught developer.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-12 h-12 flex items-center justify-center rounded-full bg-light-card-background dark:bg-card-background text-light-text-medium dark:text-text-medium hover:text-primary transition-colors shadow-sm border border-light-border dark:border-border"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-12 h-12 flex items-center justify-center rounded-full bg-light-card-background dark:bg-card-background text-light-text-medium dark:text-text-medium hover:text-primary transition-colors shadow-sm border border-light-border dark:border-border"><i className="fa-brands fa-github text-lg"></i></a>
                <a href="#contact" className="px-6 py-3 bg-primary text-text-dark font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-lg">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <Section title="About Me" backgroundTitle="RESUME">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-4">Who am I?</h3>
              <p className="mb-8">{personalData.careerObjective}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </Section>
        </section>

        <section id="experience">
          <Section title="My Experience" backgroundTitle="EXPERIENCE">
            <Timeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} side={index % 2 === 0 ? 'left' : 'right'} />
              ))}
            </Timeline>
          </Section>
        </section>

        <section id="education">
          <Section title="Education & Certs" backgroundTitle="ACADEMICS">
            <Timeline>
                {education.map((edu, index) => (
                    <EducationCard key={index} education={edu} side={index % 2 === 0 ? 'left' : 'right'} />
                ))}
            </Timeline>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
              ))}
            </div>
          </Section>
        </section>
        
        <section id="skills">
          <Section title="My Skills" backgroundTitle="SKILLS">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="text-2xl font-bold text-light-text-dark dark:text-text-dark mb-8 text-center lg:text-left">Core Competencies</h3>
                    <div className="space-y-6">
                        {coreSkills.map((skill, index) => (
                            <SkillProgress key={index} skill={skill} percentage={skill.percentage || 0} />
                        ))}
                    </div>
                </div>
                <div className="space-y-16">
                    <div>
                        <h3 className="text-2xl font-bold text-light-text-dark dark:text-text-dark mb-8 text-center lg:text-left">Technical Skills</h3>
                        <SkillDonutChart skills={technicalSkills} />
                    </div>
                </div>
            </div>
          </Section>
        </section>
        
        <section id="portfolio">
          <Section title="My Portfolio" backgroundTitle="PROJECTS">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === category ? 'bg-primary text-white' : 'bg-light-card-background dark:bg-card-background text-light-text-medium dark:text-text-medium hover:bg-primary/10'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <PortfolioSlider projects={filteredProjects} onProjectClick={handleProjectClick} />
          </Section>
        </section>

        <section id="contact">
          <Section title="Get In Touch" backgroundTitle="CONTACT">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg mb-8">I'm currently available for freelance work or full-time opportunities. If you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out.</p>
              <ContactForm />
            </div>
          </Section>
        </section>
      </main>

      <Footer />
      
      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
      )}
      
      <ScrollToTopButton isVisible={isScrollButtonVisible} onClick={handleScrollToTop} />
    </div>
  );
}