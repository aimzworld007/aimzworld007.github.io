import React from 'react';
// FIX: Added .tsx extension to imports to be explicit.
import Portfolio from './pages/Portfolio.tsx';
import Login from './pages/Login.tsx';
// FIX: Added .tsx extension to imports to be explicit.
import Admin from './pages/Admin.tsx';
import AuthWrapper from './components/AuthWrapper';

// FIX: Extracted the admin page into its own component to simplify the main App component's
// conditional rendering logic. This helps TypeScript's type inference and resolves the error.
const AdminPage = () => (
  <AuthWrapper>
    <Admin />
  </AuthWrapper>
);

export default function App() {
  const { pathname } = window.location;

  // A simple router to show different pages based on the URL
  if (pathname.startsWith('/admin')) {
    return <AdminPage />;
  }

  if (pathname.startsWith('/login')) {
    return <Login />;
  }

  return <Portfolio />;
}