
import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Service } from '../../types';

const ServiceManager: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const fetchServices = useCallback(async () => {
        setLoading(true);
        try {
            const servicesCollection = collection(db, 'services');
            const servicesSnapshot = await getDocs(servicesCollection);
            const servicesList = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
            setServices(servicesList);
        } catch (error) {
            console.error("Error fetching services: ", error);
            setStatusMessage('Failed to load services.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    const handleAddNew = () => {
        setEditingService({
            title: '', description: '', icon: ''
        });
        setIsModalOpen(true);
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await deleteDoc(doc(db, 'services', id));
                setStatusMessage('Service deleted successfully!');
                fetchServices();
            } catch (error) {
                console.error("Error deleting service: ", error);
                setStatusMessage('Failed to delete service.');
            }
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingService(null);
    };

    const handleSave = () => {
        fetchServices();
        handleCloseModal();
    };

    if (loading) {
        return <div className="text-center p-10">Loading Services...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Manage Services</h2>
                <button onClick={handleAddNew} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all">
                    Add New Service
                </button>
            </div>
            {statusMessage && <p className={`mb-4 font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="p-4">Title</th>
                                <th className="p-4 hidden md:table-cell">Description</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service.id} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                    <td className="p-4 font-semibold">{service.title}</td>
                                    <td className="p-4 hidden md:table-cell truncate max-w-sm">{service.description}</td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleEdit(service)} className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                                        <button onClick={() => handleDelete(service.id!)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && editingService && (
                <ServiceModal service={editingService} onClose={handleCloseModal} onSave={handleSave} />
            )}
        </div>
    );
};

interface ServiceModalProps {
    service: Service;
    onClose: () => void;
    onSave: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSave }) => {
    const [formData, setFormData] = useState(service);
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
        
        try {
            if (formData.id) {
                const docRef = doc(db, 'services', formData.id);
                await setDoc(docRef, formData, { merge: true });
            } else {
                const { id, ...dataToSave } = formData;
                await addDoc(collection(db, 'services'), dataToSave);
            }
            setStatusMessage('Service saved successfully!');
            onSave();
        } catch (error) {
            console.error("Error saving service: ", error);
            setStatusMessage('Failed to save service.');
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
                    <h3 className="text-2xl font-bold">{formData.id ? 'Edit Service' : 'Add New Service'}</h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} required />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className={inputClass} required></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Icon URL (from Lordicon)</label>
                        <input type="url" name="icon" value={formData.icon} onChange={handleChange} className={inputClass} required />
                    </div>
                </form>
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
                     {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Cancel</button>
                    <button type="button" onClick={handleSubmit} disabled={saving} className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50">
                        {saving ? 'Saving...' : 'Save Service'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceManager;
