import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc, Timestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { Experience } from '../../types';

const ExperienceManager: React.FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchExperiences = useCallback(async () => {
        setLoading(true);
        try {
            const expCollection = collection(db, 'experience');
            const q = query(expCollection, orderBy('startDate', 'desc'));
            const expSnapshot = await getDocs(q);
            const expList = expSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Experience));
            setExperiences(expList);
        } catch (error) {
            console.error("Error fetching experiences: ", error);
            setStatusMessage('Failed to load experiences.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchExperiences();
    }, [fetchExperiences]);

    const handleAddNew = () => {
        setEditingExperience({
            title: '', company: '', location: '', date: '', isCurrent: false, responsibilities: ['']
        });
        setIsModalOpen(true);
    };

    const handleEdit = (experience: Experience) => {
        setEditingExperience(experience);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this experience?')) {
            try {
                await deleteDoc(doc(db, 'experience', id));
                setStatusMessage('Experience deleted successfully!');
                fetchExperiences();
            } catch (error) {
                console.error("Error deleting experience: ", error);
                setStatusMessage('Failed to delete experience.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingExperience(null);
    };

    const handleSave = () => {
        fetchExperiences();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Experiences...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Experience</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Experience
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Title</th>
                                <th className="p-4 hidden md:table-cell">Company</th>
                                <th className="p-4 hidden md:table-cell">Date</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experiences.map(exp => (
                                <tr key={exp.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{exp.title}</td>
                                    <td className="p-4 hidden md:table-cell">{exp.company}</td>
                                    <td className="p-4 hidden md:table-cell">{exp.date}</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(exp)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(exp.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && editingExperience && (
                <ExperienceModal experience={editingExperience} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};


interface ExperienceModalProps {
    experience: Experience;
    onClose: () => void;
    onSave: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...experience, responsibilities: experience.responsibilities.join('\n') });
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const isCheckbox = type === 'checkbox';
        setFormData(prev => ({ ...prev, [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        
        const experienceData = {
            ...formData,
            responsibilities: formData.responsibilities.split('\n').map(resp => resp.trim()).filter(Boolean),
            startDate: Timestamp.fromDate(new Date(formData.date.split(' - ')[0] || Date.now()))
        };
        
        try {
            if (experienceData.id) {
                const docRef = doc(db, 'experience', experienceData.id);
                await setDoc(docRef, experienceData, { merge: true });
            } else {
                const { id, ...dataToSave } = experienceData;
                await addDoc(collection(db, 'experience'), dataToSave);
            }
            setStatusMessage('Experience saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving experience: ", error);
            setStatusMessage('Failed to save experience.');
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const inputClass = "w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Experience' : 'Add New Experience'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Job Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Company</label>
                            <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Date Range (e.g., Jan 2020 - Present)</label>
                            <input type="text" name="date" value={formData.date} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Responsibilities (one per line)</label>
                        <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={5} className={inputClass}></textarea>
                    </div>
                     <div className="flex items-center gap-2">
                        <input type="checkbox" name="isCurrent" id="isCurrent" checked={formData.isCurrent} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <label htmlFor="isCurrent" className="text-sm font-semibold">I currently work here</label>
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button type="button" onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Experience'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceManager;
