import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { personalData, experiences, education, certifications, coreSkills, technicalSkills, portfolioProjects, services } from '../../constants';

const SettingsManager: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleSeedData = async () => {
        if (window.confirm('Are you sure you want to seed the database? This may overwrite existing data and create duplicates.')) {
            setLoading(true);
            setStatusMessage('');
            try {
                // Use a batch for atomic writes
                const batch = writeBatch(db);

                // 1. Personal Data (setDoc on a specific doc)
                const personalDataRef = doc(db, 'portfolioData', 'personal');
                batch.set(personalDataRef, personalData);

                // 2. Experiences (addDoc to a collection)
                const expCollectionRef = collection(db, 'experience');
                experiences.forEach(exp => {
                    const docRef = doc(expCollectionRef); // Create a new doc reference
                    batch.set(docRef, exp);
                });
                
                // 3. Education
                const eduCollectionRef = collection(db, 'education');
                education.forEach(edu => {
                    const docRef = doc(eduCollectionRef);
                    batch.set(docRef, edu);
                });

                // 4. Certifications
                const certCollectionRef = collection(db, 'certifications');
                certifications.forEach(cert => {
                    const docRef = doc(certCollectionRef);
                    batch.set(docRef, cert);
                });

                // 5. Skills (both core and technical)
                const skillsCollectionRef = collection(db, 'skills');
                [...coreSkills, ...technicalSkills].forEach(skill => {
                    const docRef = doc(skillsCollectionRef);
                    batch.set(docRef, skill);
                });

                // 6. Projects
                const projectsCollectionRef = collection(db, 'projects');
                portfolioProjects.forEach(project => {
                    const docRef = doc(projectsCollectionRef);
                    batch.set(docRef, project);
                });
                
                // 7. Services
                const servicesCollectionRef = collection(db, 'services');
                services.forEach(service => {
                    const docRef = doc(servicesCollectionRef);
                    batch.set(docRef, service);
                });

                // Commit the batch
                await batch.commit();

                setStatusMessage('Successfully seeded all initial data!');

            } catch (error) {
                console.error("Error seeding data: ", error);
                setStatusMessage('An error occurred while seeding data.');
            } finally {
                setLoading(false);
                 setTimeout(() => setStatusMessage(''), 4000);
            }
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Site Settings</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Seed Database</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Populate your Firestore database with the initial fallback content from the application's code. This is useful for first-time setup or for resetting the content.
                </p>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleSeedData}
                        disabled={loading}
                        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-md transition-all disabled:opacity-50"
                    >
                        {loading ? 'Seeding...' : 'Seed Initial Data'}
                    </button>
                    {statusMessage && <p className={`font-semibold ${statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{statusMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default SettingsManager;