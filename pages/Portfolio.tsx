import React, { useState, useEffect } from 'react';
import type { PersonalData, Experience, Education, Certification, Skill, PortfolioProject, Service } from '../types';
// FIX: Added '.ts' extension to the types import to ensure the custom element type definitions are loaded correctly.
import '../types.ts';

// Data is now sourced directly and statically from the constants file.
// This removes all backend dependencies and makes the app a pure frontend experience.
import { 
    personalData as fallbackPersonalData, 
    experiences as fallbackExperiences,
    education as fallbackEducation,
    certifications as fallbackCertifications,
    coreSkills as fallbackCoreSkills,
    technicalSkills as fallbackTechnicalSkills,
    portfolioProjects as fallbackPortfolioProjects,
    services as fallbackServices
} from '../constants';

// Import components
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Typewriter from '../components/Typewriter';
import Timeline from '../components/Timeline';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import CertificationCard from '../components/CertificationCard';
import SkillProgress from '../components/SkillProgress';
import SkillDonutChart from '../components/SkillDonutChart';
import PortfolioSlider from '../components/PortfolioSlider';
import PortfolioModal from '../components/PortfolioModal';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Data state structure
interface PortfolioData {
    personal: PersonalData;
    experiences: Experience[];
    education: Education[];
    certifications: Certification[];
    coreSkills: Skill[];
    technicalSkills: Skill[];
    projects: PortfolioProject[];
    services: Service[];
}

// PERF: Initialize state with fallback data for instant page load.
const initialData: PortfolioData = {
    personal: fallbackPersonalData,
    experiences: fallbackExperiences,
    education: fallbackEducation,
    certifications: fallbackCertifications,
    coreSkills: fallbackCoreSkills,
    technicalSkills: fallbackTechnicalSkills,
    projects: fallbackPortfolioProjects,
    services: fallbackServices,
};

export default function Portfolio() {
    // State management
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('primaryColor') || '174 100% 33%');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isScrollButtonVisible, setScrollButtonVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
    const { personal, experiences, education, certifications, coreSkills, technicalSkills, projects, services } = initialData;

    // Theme and color effects
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', primaryColor);
        document.documentElement.style.setProperty('--color-primary-hover', primaryColor.replace(/(\d+%)/, 'calc($1 - 5%)'));
        localStorage.setItem('primaryColor', primaryColor);
    }, [primaryColor]);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setScrollButtonVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="bg-light-background dark:bg-background text-light-text-dark dark:text-text-light font-sans leading-relaxed transition-colors duration-300">
            <Header
                data={personal}
                isOpen={isSidebarOpen}
                setIsOpen={setSidebarOpen}
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

            <button onClick={() => setSidebarOpen(true)} className="fixed top-5 left-5 z-40 lg:hidden w-12 h-12 bg-light-card-background/80 dark:bg-card-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-md">
                 <lord-icon
                    src="https://cdn.lordicon.com/jxwksgwv.json"
                    trigger="hover"
                    colors="primary:currentColor"
                    style={{width:'28px', height:'28px'}}
                />
            </button>

            <main className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-12 space-y-28 sm:space-y-32 md:space-y-40">
                {/* Home Section */}
                <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
                     <div className="text-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6">
                            <div className="absolute inset-0 rounded-full animate-pulse-border" style={{ animationDelay: '0s' }}></div>
                            <img src={personal.photoUrl} alt={personal.name} className="relative w-full h-full object-cover object-top rounded-full p-1 bg-light-background dark:bg-background" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-light-text-dark dark:text-text-dark">
                            Hi, I'm <span className="text-primary">{personal.name.split(' ')[0]}</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-light-text-medium dark:text-text-medium">
                            A <Typewriter phrases={personal.typewriterPhrases || [personal.title]} />
                        </h2>
                        <p className="mt-6 text-lg text-light-text-medium dark:text-text-medium max-w-2xl mx-auto">
                            {personal.careerObjective}
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-lg transition-all">Contact Me</a>
                            <a href={personal.cvUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-light-card-background dark:bg-card-background font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm transition-all border border-light-border dark:border-border">View CV</a>
                        </div>
                    </div>
                </section>
                
                {/* My Services Section */}
                <section id="services">
                    <Section title="What I Do" backgroundTitle="Services">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard key={service.id || index} service={service} />
                            ))}
                        </div>
                    </Section>
                </section>

                {/* Experience Section */}
                <section id="experience">
                    <Section title="Experience" backgroundTitle="Career">
                        <Timeline>
                            {experiences.map((exp, index) => (
                                <ExperienceCard key={exp.id || index} experience={exp} />
                            ))}
                        </Timeline>
                    </Section>
                </section>
                
                {/* Education Section */}
                <section id="education">
                    <Section title="Education & Certifications" backgroundTitle="Learning">
                         <h3 className="text-2xl font-bold text-center mb-12 text-light-text-dark dark:text-text-dark">Education</h3>
                        <Timeline>
                            {education.map((edu, index) => (
                                <EducationCard key={edu.id || index} education={edu} />
                            ))}
                        </Timeline>
                         <h3 className="text-2xl font-bold text-center my-12 pt-8 text-light-text-dark dark:text-text-dark">Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certifications.map((cert, index) => (
                                <CertificationCard key={cert.id || index} certification={cert} />
                            ))}
                        </div>
                    </Section>
                </section>
                
                {/* Skills Section */}
                <section id="skills">
                    <Section title="My Skills" backgroundTitle="Expertise">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-light-text-dark dark:text-text-dark">Core Competencies</h3>
                                <div className="space-y-4">
                                    {coreSkills.map((skill, index) => (
                                        <SkillProgress key={skill.id || index} skill={skill} />
                                    ))}

                                </div>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold mb-8 text-light-text-dark dark:text-text-dark">Technical Skills</h3>
                                <SkillDonutChart skills={technicalSkills} />
                            </div>
                        </div>
                    </Section>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio">
                    <Section title="Portfolio" backgroundTitle="My Work">
                        <PortfolioSlider projects={projects} onProjectClick={setSelectedProject} />
                    </Section>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <Section title="Contact Me" backgroundTitle="Get in Touch">
                        <ContactForm />
                    </Section>
                </section>
            </main>
            
            <Footer />
            <ScrollToTopButton isVisible={isScrollButtonVisible} onClick={scrollToTop} />
            {selectedProject && <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    );
}