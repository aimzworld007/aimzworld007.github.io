import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// FIX: Import types.ts for its side-effect of augmenting the global JSX namespace.
// This makes the type definition for the <lord-icon> custom element available throughout the app,
// resolving errors where the custom element was not recognized.
import './types';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);