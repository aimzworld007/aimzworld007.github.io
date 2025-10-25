import React, { useState, useEffect } from 'react';
import {
  personalData,
  experiences,
  education,
  certifications,
  coreSkills,
  technicalSkills,
  portfolioProjects,
  services
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
import GithubStats from './components/GithubStats';
import Timeline from './components/Timeline';
import SkillDonutChart from './components/SkillDonutChart';
import ThemeSwitcher from './components/ThemeSwitcher';
import SkillProgress from './components/SkillProgress';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // If no theme is saved, check user's system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  return (
    <div className="bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium font-sans antialiased selection:bg-primary selection:text-white">
      <Header 
        data={personalData} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <div className="fixed top-6 right-6 z-40 hidden lg:block">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <button 
        className="fixed top-6 left-6 z-40 lg:hidden bg-light-card-background dark:bg-card-background w-12 h-12 rounded-full flex items-center justify-center shadow-md text-light-text-dark dark:text-text-dark"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <main className="container mx-auto px-6 lg:px-8 py-20 space-y-36">
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="text-xl font-semibold text-primary">Hello, I'm</span>
               <h1 className="text-6xl md:text-8xl font-signature bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 mb-4 text-light-text-dark dark:text-text-dark">
                {personalData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-light-text-medium dark:text-text-medium min-h-[2.5rem] md:min-h-[3rem]">
                <Typewriter text={personalData.title} />
              </h2>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0">
                A dedicated and detail-oriented professional with a strong background in document control and public relations within the UAE government sector. Also a passionate self-taught developer.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-8">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-12 h-12 flex items-center justify-center rounded-full bg-light-card-background dark:bg-card-background text-light-text-medium dark:text-text-medium hover:text-primary transition-colors shadow-sm border border-light-border dark:border-border"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-12 h-12 flex items-center justify-center rounded-full bg-light-card-background dark:bg-card-background text-light-text-medium dark:text-text-medium hover:text-primary transition-colors shadow-sm border border-light-border dark:border-border"><i className="fa-brands fa-github text-lg"></i></a>
                <a href="#contact" className="px-8 py-3.5 bg-primary text-text-dark font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-lg">Contact Me</a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                    <img src={personalData.photoUrl} alt={personalData.name} className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-light-card-background dark:border-card-background animate-pulse-border" />
                </div>
            </div>
          </div>
        </section>

        <section id="about">
          <Section title="About Me" backgroundTitle="RESUME">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-4">Who am I?</h3>
                <p className="mb-6">{personalData.careerObjective}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <GithubStats />
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
                <div>
                    <h3 className="text-2xl font-bold text-light-text-dark dark:text-text-dark mb-8 text-center lg:text-left">Technical Skills</h3>
                    <div className="flex justify-center">
                        <SkillDonutChart skills={technicalSkills} />
                    </div>
                </div>
            </div>
          </Section>
        </section>

        <section id="portfolio">
          <Section title="My Portfolio" backgroundTitle="PROJECTS">
            <PortfolioSlider projects={portfolioProjects} onProjectClick={handleProjectClick} />
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
    </div>
  );
}