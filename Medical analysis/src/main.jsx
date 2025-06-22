import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ fixed import
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';

// Use env variable (optional, but better for security)
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render( // 👈 "!" tells TS this won't be null
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
