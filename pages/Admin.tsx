
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import HeroManager from './admin/HeroManager';
import ProjectManager from './admin/ProjectManager';
import ExperienceManager from './admin/ExperienceManager';
import EducationManager from './admin/EducationManager';
import SkillManager from './admin/SkillManager';
import ServiceManager from './admin/ServiceManager';
import CertificationManager from './admin/CertificationManager';
import SettingsManager from './admin/SettingsManager';
import TypewriterManager from './admin/TypewriterManager';

const Admin: React.FC = () => {
    const [activeTab, setActiveTab] = useState('hero');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setActiveTab(hash);
        }
    }, []);
    
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleSignOut = async () => {
        await signOut(auth);
        window.location.href = '/login';
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'hero': return <HeroManager />;
            case 'typewriter': return <TypewriterManager />;
            case 'projects': return <ProjectManager />;
            case 'experience': return <ExperienceManager />;
            case 'education': return <EducationManager />;
            case 'certifications': return <CertificationManager />;
            case 'skills': return <SkillManager />;
            case 'services': return <ServiceManager />;
            case 'settings': return <SettingsManager />;
            default: return <HeroManager />;
        }
    };

    const navItems = [
        { id: 'hero', label: 'Hero/About', icon: 'fa-user' },
        { id: 'typewriter', label: 'Typewriter Text', icon: 'fa-terminal' },
        { id: 'projects', label: 'Portfolio', icon: 'fa-layer-group' },
        { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
        { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
        { id: 'certifications', label: 'Certifications', icon: 'fa-award' },
        { id: 'skills', label: 'Skills', icon: 'fa-code' },
        { id: 'services', label: 'Services', icon: 'fa-concierge-bell' },
        { id: 'settings', label: 'Settings', icon: 'fa-gear' },
    ];
    
    // FIX: Typed NavLink with React.FC to correctly handle React-specific props like 'key'
    // and resolve the TypeScript error about 'key' not being a valid prop.
    const NavLink: React.FC<{ id: string; label: string; icon: string; }> = ({ id, label, icon }) => (
        <li>
            <a 
                href={`#${id}`}
                onClick={() => {
                    setActiveTab(id);
                    setIsSidebarOpen(false); // Close sidebar on selection
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${activeTab === id ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
                <i className={`fa-solid ${icon} w-5 text-center`}></i>
                <span>{label}</span>
            </a>
        </li>
    );

    const SidebarContent = () => (
        <>
            <h1 className="text-3xl font-signature text-primary mb-8">Admin Panel</h1>
            <nav>
                <ul className="space-y-2">
                    {navItems.map(item => <NavLink key={item.id} {...item} />)}
                </ul>
            </nav>
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                    <i className="fa-solid fa-right-from-bracket w-5 text-center"></i>
                    <span>Logout</span>
                </button>
            </div>
        </>
    );

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex">
            {/* Mobile Sidebar Toggle */}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fixed top-5 left-5 z-50 lg:hidden w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-md">
                <i className={`fa-solid ${isSidebarOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
            
            {/* Backdrop for mobile */}
            <div 
                className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 lg:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-6 flex flex-col z-40 shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <SidebarContent />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto pt-20 lg:pt-10">
                {renderContent()}
            </main>
        </div>
    );
};

export default Admin;
