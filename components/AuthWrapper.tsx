import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Basic loading state
    return (
      <div className="bg-light-background dark:bg-background min-h-screen flex items-center justify-center">
        <p className="text-lg text-light-text-medium dark:text-text-medium">Loading...</p>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page if not authenticated
    // Using window.location for simplicity without a router library
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return null; // Return null while redirecting
  }

  // Render the protected content if the user is authenticated
  return <>{children}</>;
}
