import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import SkillBadge from './components/SkillBadge';
import { 
  personalData, 
  education, 
  certifications, 
  coreSkills, 
  technicalSkills,
  portfolioProjects,
  services
} from './constants';
import { 
  IconUser, 
  IconBriefcase, 
  IconAcademicCap, 
  IconSparkles, 
  IconWrenchScrewdriver, 
  IconStar,
  IconAtSymbol,
  IconCodeBracket,
  IconCog
} from './components/icons';
import Navbar from './components/Navbar';
import PortfolioCard from './components/PortfolioCard';
import { PortfolioProject } from './types';
import PortfolioModal from './components/PortfolioModal';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


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

const AnimatedSection: React.FC<{children: React.ReactNode, id: string}> = ({ children, id }) => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <section id={id} ref={ref} className={`py-20 md:py-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </section>
  );
};


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <>
      <Navbar />
      <div className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center animate-fade-in">
          <Header data={personalData} />
        </section>
        
        <main>
          {/* About Section */}
          <AnimatedSection id="about">
             <Section title="About Me" icon={<IconUser />}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                   <div className='lg:col-span-3'>
                      <h3 className="text-2xl font-semibold text-text-dark mb-4">Career Objective</h3>
                      <p className="text-lg text-text-medium mb-8">
                        {personalData.careerObjective}
                      </p>
                      
                      <h3 className="text-2xl font-semibold text-text-dark mb-4 flex items-center">
                        <IconAcademicCap className="mr-3 text-primary" /> Education
                      </h3>
                      <div className="space-y-6">
                        {education.map((edu, index) => (
                          <EducationCard key={index} education={edu} />
                        ))}
                      </div>
                   </div>
                   <div className='lg:col-span-2 space-y-8'>
                      <div>
                        <h3 className="text-2xl font-semibold text-text-dark flex items-center mb-4">
                           <IconSparkles className="mr-3 text-primary" /> Certifications
                        </h3>
                        <div className="space-y-6">
                          {certifications.map((cert, index) => (
                            <CertificationCard key={index} certification={cert} />
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
              </Section>
          </AnimatedSection>
          
          {/* Skills Section */}
          <AnimatedSection id="skills">
            <Section title="My Skills" icon={<IconWrenchScrewdriver />}>
              <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-dark flex items-center mb-4">
                      <IconStar className="mr-3 text-primary" /> Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {coreSkills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-text-dark flex items-center mb-4">
                      <IconCodeBracket className="mr-3 text-primary" /> Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {technicalSkills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
              </div>
            </Section>
          </AnimatedSection>

          {/* Portfolio Section */}
          <AnimatedSection id="portfolio">
            <Section title="Portfolio" icon={<IconBriefcase />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioProjects.map((project, index) => (
                  <PortfolioCard key={index} project={project} onClick={() => setSelectedProject(project)} />
                ))}
              </div>
            </Section>
          </AnimatedSection>

           {/* Services Section */}
           <AnimatedSection id="services">
            <Section title="Services" icon={<IconCog />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </Section>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection id="contact">
            <Section title="Get In Touch" icon={<IconAtSymbol />}>
              <ContactForm />
            </Section>
          </AnimatedSection>

        </main>
        <Footer />
      </div>

      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default App;