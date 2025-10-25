import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { PersonalData } from '../../types';
import { personalData as initialData } from '../../constants';

const TypewriterManager: React.FC = () => {
    const [phrases, setPhrases] = useState<string>('');
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
                    const data = docSnap.data() as PersonalData;
                    setPhrases(data.typewriterPhrases?.join('\n') || '');
                } else {
                    setPhrases(initialData.typewriterPhrases.join('\n'));
                    setStatusMessage('No data in database. Using local data.');
                }
            } catch (error) {
                console.error("Error fetching typewriter phrases: ", error);
                setStatusMessage('Failed to load data.');
                setPhrases(initialData.typewriterPhrases.join('\n'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage('');
        try {
            const docRef = doc(db, 'portfolioData', 'personal');
            const phrasesArray = phrases.split('\n').map(p => p.trim()).filter(Boolean);
            await setDoc(docRef, { typewriterPhrases: phrasesArray }, { merge: true });
            setStatusMessage('Typewriter phrases saved successfully!');
        } catch (error) {
            console.error("Error saving data: ", error);
            setStatusMessage('Failed to save data. Please try again.');
        } finally {
            setSaving(false);
            setTimeout(() => setStatusMessage(''), 3000);
        }
    };
    
    const textareaClass = "w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

    if (loading) {
        return <div className="text-center p-10">Loading Typewriter Manager...</div>;
    }
    
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Manage Typewriter Text</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Typewriter Phrases <span className="font-normal text-gray-500">(one per line)</span>
                        </label>
                        <textarea 
                            value={phrases} 
                            onChange={(e) => setPhrases(e.target.value)} 
                            rows={6} 
                            className={textareaClass}
                        ></textarea>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4">
                        <button 
                            type="submit" 
                            disabled={saving}
                            className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? 'Saving...' : 'Save Phrases'}
                        </button>
                        {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TypewriterManager;