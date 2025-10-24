import React, { useState, useEffect } from 'react';
import ProfileSidebar from './components/Header'; // Renamed Header to ProfileSidebar conceptually
import Section from './components/Section';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import SkillBadge from './components/SkillBadge';
import ExperienceCard from './components/ExperienceCard';
import { 
  personalData, 
  education, 
  certifications, 
  coreSkills, 
  technicalSkills,
  portfolioProjects,
  services,
  experiences
} from './constants';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import { PortfolioProject } from './types';
import PortfolioModal from './components/PortfolioModal';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';


const useAnimateOnScroll = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return [ref, isVisible];
};

const AnimatedSection: React.FC<{children: React.ReactNode, id: string, noBorder?: boolean}> = ({ children, id, noBorder = false }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  const borderClass = noBorder ? '' : 'border-b border-light-border dark:border-border';
  return (
    <section id={id} ref={ref} className={`py-20 transition-all duration-1000 ease-out ${borderClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
      {children}
    </section>
  );
};

const AnimatedContent: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
};


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div className="bg-light-background dark:bg-background text-light-text-medium dark:text-text-medium">
        
        {/* Hamburger Menu Button for Mobile */}
        <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 flex items-center justify-center bg-light-card-background dark:bg-card-background rounded-full shadow-lg text-primary transition-transform duration-300 active:scale-95"
            aria-label="Open sidebar"
        >
            <i className="fa-solid fa-bars text-xl"></i>
        </button>

        <ProfileSidebar 
          data={personalData} 
          theme={theme} 
          toggleTheme={toggleTheme} 
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <Navbar />
        
        <main className="lg:ml-[30%] lg:pr-[8%]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
            {/* About Section */}
            <AnimatedSection id="about">
              <Section title="About Me" backgroundTitle='ABOUT'>
                  <div className='space-y-16'>
                      <AnimatedContent>
                          <p className="text-xl text-light-text-medium dark:text-text-medium mb-12 max-w-4xl">
                            {personalData.careerObjective}
                          </p>
                      </AnimatedContent>
                       <AnimatedContent className="delay-200">
                          <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-8">What I Do</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                              <ServiceCard key={index} service={service} />
                            ))}
                          </div>
                      </AnimatedContent>
                  </div>
              </Section>
            </AnimatedSection>
            
            {/* Experience Section */}
            <AnimatedSection id="resume">
              <Section title="Experience & Skills" backgroundTitle="RESUME">
                <div>
                  <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-8 flex items-center">
                    <i className="fa-solid fa-briefcase mr-3 text-primary"></i> Experience
                  </h3>
                  <div className="space-y-8 border-l-2 border-light-border dark:border-border pl-8 relative">
                      {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                      ))}
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-8">My Skills</h3>
                   <div className="space-y-12">
                      <div>
                        <h4 className="text-xl font-semibold text-light-text-dark dark:text-text-dark mb-4">Core Skills</h4>
                        <div className="flex flex-wrap gap-3">
                          {coreSkills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-light-text-dark dark:text-text-dark mb-4">Technical Skills</h4>
                        <div className="flex flex-wrap gap-3">
                          {technicalSkills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              </Section>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection id="education">
              <Section title="Education & Certifications" backgroundTitle="EDUCATION">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                      <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-8 flex items-center">
                        <i className="fa-solid fa-graduation-cap mr-3 text-primary"></i> Education
                      </h3>
                      <div className="space-y-8 border-l-2 border-light-border dark:border-border pl-8 relative">
                        {education.map((edu, index) => (
                          <EducationCard key={index} education={edu} />
                        ))}
                      </div>
                    </div>
                     <div>
                      <h3 className="text-3xl font-bold text-light-text-dark dark:text-text-dark mb-8 flex items-center">
                        <i className="fa-solid fa-certificate mr-3 text-primary"></i> Certifications
                      </h3>
                      <div className="space-y-8">
                        {certifications.map((cert, index) => (
                          <CertificationCard key={index} certification={cert} />
                        ))}
                      </div>
                    </div>
                </div>
              </Section>
            </AnimatedSection>

            {/* Portfolio Section */}
            <AnimatedSection id="portfolio">
              <Section title="Portfolio" backgroundTitle="WORKS">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {portfolioProjects.map((project, index) => (
                    <PortfolioCard key={index} project={project} onClick={() => setSelectedProject(project)} />
                  ))}
                </div>
              </Section>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection id="contact" noBorder>
              <Section title="Contact" backgroundTitle="CONTACT">
                <ContactForm />
              </Section>
            </AnimatedSection>
          </div>
        </main>
      </div>

      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default App;