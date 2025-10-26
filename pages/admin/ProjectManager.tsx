import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { PortfolioProject } from '../../types';

const ProjectManager: React.FC = () => {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingProject, setEditingProject] = useState<PortfolioProject | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const projectsCollection = collection(db, 'projects');
            const projectsSnapshot = await getDocs(projectsCollection);
            const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PortfolioProject));
            setProjects(projectsList);
        } catch (error) {
            console.error("Error fetching projects: ", error);
            setStatusMessage('Failed to load projects.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const handleAddNew = () => {
        setEditingProject({
            title: '', description: '', imageUrl: '', technologies: [],
            details: '', category: 'Web Application', liveUrl: '', githubUrl: ''
        });
        setIsModalOpen(true);
    };

    const handleEdit = (project: PortfolioProject) => {
        setEditingProject(project);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteDoc(doc(db, 'projects', id));
                setStatusMessage('Project deleted successfully!');
                fetchProjects();
            } catch (error) {
                console.error("Error deleting project: ", error);
                setStatusMessage('Failed to delete project.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingProject(null);
    };

    const handleSave = () => {
        fetchProjects();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Projects...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Portfolio</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Project
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Title</th>
                                <th className="p-4 hidden md:table-cell">Category</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{project.title}</td>
                                    <td className="p-4 hidden md:table-cell">{project.category}</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(project)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(project.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && editingProject && (
                <ProjectModal project={editingProject} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};

interface ProjectModalProps {
    project: PortfolioProject;
    onClose: () => void;
    onSave: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...project, technologies: project.technologies.join(', ') });
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        
        const projectData = {
            ...formData,
            technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
        };
        
        try {
            if (projectData.id) {
                // Update existing project
                const docRef = doc(db, 'projects', projectData.id);
                await setDoc(docRef, projectData, { merge: true });
            } else {
                // Add new project
                const { id, ...dataToSave } = projectData; // Don't save the undefined id field
                await addDoc(collection(db, 'projects'), dataToSave);
            }
            setStatusMessage('Project saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving project: ", error);
            setStatusMessage('Failed to save project.');
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const inputClass = "w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Project' : 'Add New Project'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Category</label>
                            <select name="category" value={formData.category} onChange={handleChange} className={inputClass}>
                                <option>Web Application</option>
                                <option>Web Development</option>
                                <option>Professional Services</option>
                            </select>
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Description (Short, for card view)</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className={inputClass}></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Details (Long, for modal view)</label>
                        <textarea name="details" value={formData.details} onChange={handleChange} rows={4} className={inputClass}></textarea>
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Technologies (comma-separated)</label>
                        <input type="text" name="technologies" value={formData.technologies} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Image URL</label>
                            <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className={inputClass} required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Live URL (optional)</label>
                            <input type="url" name="liveUrl" value={formData.liveUrl || ''} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">GitHub URL (optional)</label>
                            <input type="url" name="githubUrl" value={formData.githubUrl || ''} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Project'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectManager;