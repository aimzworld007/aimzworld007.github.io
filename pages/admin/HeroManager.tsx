import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { PersonalData } from '../../types';
import { personalData as initialData } from '../../constants';

const HeroManager: React.FC = () => {
    const [formData, setFormData] = useState<PersonalData | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const docRef = doc(db, 'portfolioData', 'personal');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setFormData(docSnap.data() as PersonalData);
                } else {
                    console.log("No document found, using initial data from constants.");
                    setFormData(initialData);
                    setStatusMessage('No data in database. Using local data as a template.');
                }
            } catch (error) {
                console.error("Error fetching personal data: ", error);
                setStatusMessage('Failed to load data.');
                setFormData(initialData);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!formData) return;
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;
        setSaving(true);
        setStatusMessage('');
        try {
            const docRef = doc(db, 'portfolioData', 'personal');
            await setDoc(docRef, formData, { merge: true });
            setStatusMessage('Data saved successfully!');
        } catch (error) {
            console.error("Error saving data: ", error);
            setStatusMessage('Failed to save data. Please try again.');
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const inputClass = "w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

    if (loading) {
        return <div className="text-center p-10">Loading Hero Manager...</div>;
    }
    
    if (!formData) {
        return <div className="text-center p-10 text-red-500">{statusMessage || 'Could not load personal data.'}</div>;
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Manage Hero Section</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Career Objective / Bio</label>
                        <textarea name="careerObjective" value={formData.careerObjective} onChange={handleChange} rows={4} className={inputClass}></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Website URL</label>
                            <input type="url" name="website" value={formData.website} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">LinkedIn URL</label>
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">GitHub URL</label>
                            <input type="url" name="github" value={formData.github} onChange={handleChange} className={inputClass} />
                        </div>
                         <div>
                            <label className="block text-sm font-semibold mb-1">Facebook URL</label>
                            <input type="url" name="facebook" value={formData.facebook} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Photo URL</label>
                            <input type="url" name="photoUrl" value={formData.photoUrl} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">CV URL</label>
                            <input type="url" name="cvUrl" value={formData.cvUrl} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4">
                        <button 
                            type="submit" 
                            disabled={saving}
                            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                        {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HeroManager;
