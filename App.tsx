import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import Timeline from './components/Timeline';
import CertificationCard from './components/CertificationCard';
import SkillProgress from './components/SkillProgress';
import SkillDonutChart from './components/SkillDonutChart';
import PortfolioSlider from './components/PortfolioSlider';
import PortfolioModal from './components/PortfolioModal';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import GithubStats from './components/GithubStats';
import Typewriter from './components/Typewriter';

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

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      // Check if system prefers dark mode
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return storedTheme || (systemPrefersDark ? 'dark' : 'light');
    }
    return 'dark'; // Default theme
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollButtonVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleProjectClick = (project: PortfolioProject) => {
    if (!project.liveUrl) {
      setSelectedProject(project);
    }
  };

  const portfolioCategories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(p => p.category === category));
    }
  };

  return (
    <div className="bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header 
        data={personalData} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        theme={theme} 
        toggleTheme={toggleTheme}
      />
      
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 z-40 lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-light-card-background/80 dark:bg-card-background/80 backdrop-blur-sm text-primary shadow-md"
        aria-label="Open sidebar"
      >
        <i className="fa-solid fa-bars text-xl"></i>
      </button>

      <main className="container mx-auto px-6 lg:px-8">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between relative pt-24 pb-12 lg:pt-0 lg:pb-0">
          <div className="text-center lg:text-left z-10 animate-fade-in-up">
            <span className="text-lg font-semibold text-primary uppercase tracking-wider">Hello, I'm</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-light-text-dark dark:text-text-dark mt-2 mb-4 leading-tight">
              {personalData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-light-text-medium dark:text-text-medium">
              A Creative <Typewriter text={personalData.title} />
            </h2>
            <p className="max-w-xl mt-6 mx-auto lg:mx-0">{personalData.careerObjective}</p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a href="#portfolio" className="px-8 py-3 bg-primary text-text-dark font-bold rounded-lg hover:bg-primary-hover transition-all shadow-lg">View My Work</a>
              <a href="#contact" className="px-8 py-3 bg-light-card-background dark:bg-card-background text-light-text-dark dark:text-text-dark font-bold rounded-lg hover:bg-light-border dark:hover:bg-border transition-all shadow-md">Contact Me</a>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start space-x-6">
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors text-2xl"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors text-2xl"><i className="fa-brands fa-github"></i></a>
                <a href={personalData.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors text-2xl"><i className="fa-brands fa-facebook-f"></i></a>
                <a href={personalData.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-primary transition-colors text-2xl"><i className="fa-solid fa-globe"></i></a>
                <a href={`mailto:${personalData.email}`} aria-label="Email" className="hover:text-primary transition-colors text-2xl"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <div className="relative mb-10 lg:mb-0 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover rounded-full blur-3xl opacity-30"></div>
              <img src={personalData.photoUrl} alt={personalData.name} className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover object-top border-4 border-primary/20 shadow-2xl" />
          </div>
        </section>

        {/* About & Services Section */}
        <section id="about" className="py-20 lg:py-32">
          <Section title="About Me" backgroundTitle="About">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark">Who am I?</h3>
                <p>I'm {personalData.name}, a {personalData.title}. Based in {personalData.location}, I specialize in managing UAE government applications, document control, and providing excellent customer service. My expertise spans across ICP, MOHRE, and DED portals, ensuring compliance and efficiency.</p>
                <p>In my free time, I am passionate about technology and enjoy building web applications and dynamic websites. This hobby allows me to explore my creativity and continuously learn new skills in software development.</p>
                <a href={personalData.cvUrl} target="_blank" rel="noopener noreferrer" download="Ainul_Islam_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white dark:hover:text-text-dark transition-colors shadow-sm">
                  <i className="fa-solid fa-download"></i>Download CV
                </a>
              </div>
              <div>
                <GithubStats />
              </div>
            </div>
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark text-center mb-12">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>
          </Section>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 lg:py-32">
          <Section title="My Experience" backgroundTitle="Resume">
            <Timeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} side={index % 2 === 0 ? 'left' : 'right'} />
              ))}
            </Timeline>
          </Section>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 lg:py-32">
          <Section title="My Education" backgroundTitle="Resume">
            <Timeline>
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} side={index % 2 === 0 ? 'left' : 'right'} />
              ))}
            </Timeline>
            <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark text-center mt-20 mb-12">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
              ))}
            </div>
          </Section>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 lg:py-32">
          <Section title="My Skills" backgroundTitle="Skills">
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
                <SkillDonutChart skills={technicalSkills} />
              </div>
            </div>
          </Section>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 lg:py-32">
          <Section title="My Portfolio" backgroundTitle="Work">
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {portfolioCategories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`px-4 py-2 font-semibold rounded-lg transition-colors ${activeFilter === category ? 'bg-primary text-text-dark' : 'bg-light-card-background dark:bg-card-background hover:bg-primary/10 hover:text-primary'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <PortfolioSlider projects={filteredProjects} onProjectClick={handleProjectClick} />
          </Section>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32">
          <Section title="Contact Me" backgroundTitle="Contact">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-map-marker-alt text-2xl text-primary mt-1"></i>
                  <div>
                    <h4 className="font-bold text-light-text-dark dark:text-text-dark">Location</h4>
                    <p>{personalData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-envelope text-2xl text-primary mt-1"></i>
                  <div>
                    <h4 className="font-bold text-light-text-dark dark:text-text-dark">Email</h4>
                    <a href={`mailto:${personalData.email}`} className="hover:text-primary">{personalData.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-phone text-2xl text-primary mt-1"></i>
                  <div>
                    <h4 className="font-bold text-light-text-dark dark:text-text-dark">Phone</h4>
                    <p>{personalData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </Section>
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <ScrollToTopButton isVisible={isScrollButtonVisible} onClick={scrollToTop} />
    </div>
  );
}

export default App;
