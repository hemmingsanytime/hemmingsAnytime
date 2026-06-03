import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-black text-blue-100 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
      >
        <Home size={20} /> Back to Home
      </Link>
    </div>
  );
};
