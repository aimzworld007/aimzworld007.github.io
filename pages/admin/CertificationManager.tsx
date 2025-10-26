import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Certification } from '../../types';

const CertificationManager: React.FC = () => {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingCertification, setEditingCertification] = useState<Certification | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchCertifications = useCallback(async () => {
        setLoading(true);
        try {
            const certsCollection = collection(db, 'certifications');
            const certsSnapshot = await getDocs(certsCollection);
            const certsList = certsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Certification));
            setCertifications(certsList);
        } catch (error) {
            console.error("Error fetching certifications: ", error);
            setStatusMessage('Failed to load certifications.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCertifications();
    }, [fetchCertifications]);

    const handleAddNew = () => {
        setEditingCertification({
            name: '', issuer: '', date: '', credentialId: '', credentialUrl: '', credentialIds: []
        });
        setIsModalOpen(true);
    };

    const handleEdit = (certification: Certification) => {
        setEditingCertification(certification);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this certification?')) {
            try {
                await deleteDoc(doc(db, 'certifications', id));
                setStatusMessage('Certification deleted successfully!');
                fetchCertifications();
            } catch (error) {
                console.error("Error deleting certification: ", error);
                setStatusMessage('Failed to delete certification.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingCertification(null);
    };

    const handleSave = () => {
        fetchCertifications();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Certifications...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Certifications</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Certification
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Name</th>
                                <th className="p-4 hidden md:table-cell">Issuer</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map(cert => (
                                <tr key={cert.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{cert.name}</td>
                                    <td className="p-4 hidden md:table-cell">{cert.issuer}</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(cert)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(cert.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && editingCertification && (
                <CertificationModal certification={editingCertification} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};

interface CertificationModalProps {
    certification: Certification;
    onClose: () => void;
    onSave: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ certification, onClose, onSave }) => {
    // Handle both credentialId (string) and credentialIds (array)
    const [formData, setFormData] = useState({ 
        ...certification, 
        credentialIds: certification.credentialIds?.join('\n') || '' 
    });
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        
        const certData = {
            ...formData,
            credentialIds: formData.credentialIds.split('\n').map(id => id.trim()).filter(Boolean)
        };
        
        try {
            if (certData.id) {
                const docRef = doc(db, 'certifications', certData.id);
                await setDoc(docRef, certData, { merge: true });
            } else {
                const { id, ...dataToSave } = certData;
                await addDoc(collection(db, 'certifications'), dataToSave);
            }
            setStatusMessage('Certification saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving certification: ", error);
            setStatusMessage('Failed to save certification.');
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
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Certification' : 'Add New Certification'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Certification Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Issuer</label>
                            <input type="text" name="issuer" value={formData.issuer} onChange={handleChange} className={inputClass} required />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Date</label>
                        <input type="text" name="date" value={formData.date} onChange={handleChange} className={inputClass} />
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Credential URL</label>
                        <input type="url" name="credentialUrl" value={formData.credentialUrl || ''} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Credential ID (Single)</label>
                        <input type="text" name="credentialId" value={formData.credentialId || ''} onChange={handleChange} className={inputClass} />
                    </div>
                     <div>
                        <label className="block text-sm font-semibold mb-1">Credential IDs (Multiple, one per line)</label>
                        <textarea name="credentialIds" value={formData.credentialIds} onChange={handleChange} rows={3} className={inputClass}></textarea>
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button type="button" onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Certification'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificationManager;
