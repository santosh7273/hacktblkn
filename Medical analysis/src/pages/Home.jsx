import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        Welcome to <span className="text-yellow-300">Medical Image Analysis</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/imageProcessing"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
        <Link
          to="/multiimageProcessing"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Multi Image
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;
