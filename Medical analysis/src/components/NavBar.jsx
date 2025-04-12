import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Medical Analysis
        </Link>

        <div className="md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          <Link to="/about" className="block hover:text-gray-300">About</Link>
          <Link to="/login" className="block hover:text-gray-300">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
