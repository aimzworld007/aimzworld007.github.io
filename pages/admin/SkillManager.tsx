import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Skill } from '../../types';

const SkillManager: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchSkills = useCallback(async () => {
        setLoading(true);
        try {
            const skillsCollection = collection(db, 'skills');
            const skillsSnapshot = await getDocs(skillsCollection);
            const skillsList = skillsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Skill));
            setSkills(skillsList);
        } catch (error) {
            console.error("Error fetching skills: ", error);
            setStatusMessage('Failed to load skills.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSkills();
    }, [fetchSkills]);

    const handleAddNew = () => {
        setEditingSkill({
            name: '', percentage: 80, icon: 'fa-solid fa-star', type: 'technical', color: '#3b82f6'
        });
        setIsModalOpen(true);
    };

    const handleEdit = (skill: Skill) => {
        setEditingSkill(skill);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            try {
                await deleteDoc(doc(db, 'skills', id));
                setStatusMessage('Skill deleted successfully!');
                fetchSkills();
            } catch (error) {
                console.error("Error deleting skill: ", error);
                setStatusMessage('Failed to delete skill.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingSkill(null);
    };

    const handleSave = () => {
        fetchSkills();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Skills...</div>;
    }

    const coreSkills = skills.filter(s => s.type === 'core');
    const technicalSkills = skills.filter(s => s.type === 'technical');

    const SkillTable = ({ title, skillData }: { title: string, skillData: Skill[] }) => (
        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Name</th>
                                <th className="p-4 hidden md:table-cell">Percentage</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skillData.map(skill => (
                                <tr key={skill.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{skill.name}</td>
                                    <td className="p-4 hidden md:table-cell">{skill.percentage}%</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(skill)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(skill.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Skills</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Skill
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            
            <SkillTable title="Core Competencies" skillData={coreSkills} />
            <SkillTable title="Technical Skills" skillData={technicalSkills} />
            
            {isModalOpen && editingSkill && (
                <SkillModal skill={editingSkill} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};

interface SkillModalProps {
    skill: Skill;
    onClose: () => void;
    onSave: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose, onSave }) => {
    const [formData, setFormData] = useState(skill);
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'percentage' ? parseInt(value) : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        
        try {
            if (formData.id) {
                const docRef = doc(db, 'skills', formData.id);
                await setDoc(docRef, formData, { merge: true });
            } else {
                const { id, ...dataToSave } = formData;
                await addDoc(collection(db, 'skills'), dataToSave);
            }
            setStatusMessage('Skill saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving skill: ", error);
            setStatusMessage('Failed to save skill.');
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const inputClass = "w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Skill' : 'Add New Skill'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Skill Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
                        </div>
                         <div>
                            <label className="block text-sm font-semibold mb-1">Skill Type</label>
                            <select name="type" value={formData.type} onChange={handleChange} className={inputClass}>
                                <option value="technical">Technical</option>
                                <option value="core">Core</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Font Awesome Icon (e.g., fa-brands fa-react)</label>
                        <input type="text" name="icon" value={formData.icon} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                            <label className="block text-sm font-semibold mb-1">Percentage (0-100)</label>
                            <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} className={inputClass} min="0" max="100" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Color (for Donut Chart)</label>
                            <input type="text" name="color" value={formData.color || ''} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button type="button" onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Skill'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillManager;