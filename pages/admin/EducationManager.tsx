import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Education } from '../../types';

const EducationManager: React.FC = () => {
    const [educationList, setEducationList] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingEducation, setEditingEducation] = useState<Education | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchEducation = useCallback(async () => {
        setLoading(true);
        try {
            const eduCollection = collection(db, 'education');
            const eduSnapshot = await getDocs(eduCollection);
            const eduList = eduSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Education));
            setEducationList(eduList);
        } catch (error) {
            console.error("Error fetching education: ", error);
            setStatusMessage('Failed to load education entries.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchEducation();
    }, [fetchEducation]);

    const handleAddNew = () => {
        setEditingEducation({
            degree: '', institution: '', details: ''
        });
        setIsModalOpen(true);
    };

    const handleEdit = (education: Education) => {
        setEditingEducation(education);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this education entry?')) {
            try {
                await deleteDoc(doc(db, 'education', id));
                setStatusMessage('Education entry deleted successfully!');
                fetchEducation();
            } catch (error) {
                console.error("Error deleting education entry: ", error);
                setStatusMessage('Failed to delete entry.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingEducation(null);
    };

    const handleSave = () => {
        fetchEducation();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Education Entries...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Education</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Entry
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Degree</th>
                                <th className="p-4 hidden md:table-cell">Institution</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educationList.map(edu => (
                                <tr key={edu.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{edu.degree}</td>
                                    <td className="p-4 hidden md:table-cell">{edu.institution}</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(edu)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(edu.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && editingEducation && (
                <EducationModal education={editingEducation} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};


interface EducationModalProps {
    education: Education;
    onClose: () => void;
    onSave: () => void;
}

const EducationModal: React.FC<EducationModalProps> = ({ education, onClose, onSave }) => {
    const [formData, setFormData] = useState(education);
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        
        try {
            if (formData.id) {
                const docRef = doc(db, 'education', formData.id);
                await setDoc(docRef, formData, { merge: true });
            } else {
                const { id, ...dataToSave } = formData;
                await addDoc(collection(db, 'education'), dataToSave);
            }
            setStatusMessage('Education entry saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving education entry: ", error);
            setStatusMessage('Failed to save entry.');
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
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Education' : 'Add New Education'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Degree</label>
                        <input type="text" name="degree" value={formData.degree} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Institution</label>
                        <input type="text" name="institution" value={formData.institution} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Details (e.g., CGPA)</label>
                        <input type="text" name="details" value={formData.details} onChange={handleChange} className={inputClass} />
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button type="button" onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Entry'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EducationManager;