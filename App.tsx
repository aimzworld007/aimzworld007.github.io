import React from 'react';
// FIX: Added .tsx extension to imports to be explicit.
import Portfolio from './pages/Portfolio.tsx';
import Login from './pages/Login.tsx';
// FIX: Added .tsx extension to imports to be explicit.
import Admin from './pages/Admin.tsx';
// FIX: Added .tsx extension to the import for 'AuthWrapper' for consistency and to prevent potential module resolution issues.
import AuthWrapper from './components/AuthWrapper.tsx';

// FIX: Inlined the AuthWrapper for the admin page to simplify the component structure
// and resolve a TypeScript error where the 'children' prop was not being correctly inferred.
export default function App() {
  const { pathname } = window.location;

  // A simple router to show different pages based on the URL
  if (pathname.startsWith('/admin')) {
    return (
      <AuthWrapper>
        <Admin />
      </AuthWrapper>
    );
  }

  if (pathname.startsWith('/login')) {
    return <Login />;
  }

  return <Portfolio />;
}