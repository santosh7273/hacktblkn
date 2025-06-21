import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let un = useNavigate();
    
    // Animation variants
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    };
    
    const staggerContainer = {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    };
    
    return (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <motion.div 
                className="lg:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-base text-blue-600 font-semibold tracking-wide uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  AI-Powered Diagnostics
                </motion.h2>
                <motion.h1
                  className="mt-2 text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold tracking-tight text-gray-900"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Advanced Medical Image Analysis
                </motion.h1>
                <motion.p
                  className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Clinical-grade AI solutions
                </motion.p>

                
              </motion.div>
    
              {/* Main Feature Cards */}
              <motion.div 
                className="mt-16 sm:mt-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="container mx-auto px-4 py-8">
                  <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                      {[
                        {
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          ),
                          title: 'Image Processing',
                          description: 'Generates diet, suggested medications, cures for a given, or analyzed symptoms',
                          link: '/imageProcessing',
                        },
                        {
                          icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          ),
                          title: 'Multi Image Processing',
                          description: 'Tracks the progress of any uploaded reports',
                          link: '/multiimageProcessing',
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          className="p-6 sm:p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:border-blue-300 transition-all duration-300"
                          whileHover={{ 
                            y: -10, 
                            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                          }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                        >
                          <motion.div 
                            className="text-blue-600 mb-4"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {feature.icon}
                          </motion.div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                          <p className="text-gray-600 mb-6">{feature.description}</p>
                          <motion.button 
                            onClick={() => {
                              un(feature.link)
                            }}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Get Started
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
    
                {/* Features Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="mt-20 px-4"
                >
                  <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  {[
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'CT Scan Analysis',
      description: 'Automated detection of abnormalities in CT images'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'MRI Processing',
      description: 'High-resolution MRI segmentation and analysis'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'X-Ray Evaluation',
      description: 'Instant analysis of radiographic images'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Report Generation',
      description: 'Automated DICOM-compliant reports'
    }
  ].map((feature, index) => (
    <motion.div
      key={index}
      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 flex flex-col"
      variants={fadeIn}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
      }}
    >
      <motion.div 
        className="text-blue-600 mb-4"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  ))}
</div>
</motion.div>
</motion.div>
</div>
</div>
    
          {/* Security Section */}
          <div className="bg-blue-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Hospital-Grade Security</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">HIPAA-compliant platform with end-to-end encryption</p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: 'Data Encryption',
                    description: 'AES-256 encryption for all medical images',
                    icon: '🔒'
                  },
                  {
                    title: 'Access Control',
                    description: 'Role-based access management',
                    icon: '👤'
                  },
                  {
                    title: 'Audit Logs',
                    description: 'Comprehensive activity tracking',
                    icon: '📝'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <motion.div 
                      className="text-3xl mb-4"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Footer */}
           <footer className="bg-gray-900 text-gray-300 py-12">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid md:grid-cols-4 gap-8">
                 <div>
                   <h3 className="text-white text-lg font-semibold mb-4">MedScan</h3>
                   <p className="text-sm">Advanced medical imaging solutions</p>
                 </div>
                 <div>
                   <h4 className="text-white text-lg font-semibold mb-4">Clinical</h4>
                   <ul className="space-y-2">
                     <li><Link to="/radiology" className="hover:text-blue-400 transition-colors">Radiology</Link></li>
                     <li><Link to="/oncology" className="hover:text-blue-400 transition-colors">Oncology</Link></li>
                     <li><Link to="/cardiology" className="hover:text-blue-400 transition-colors">Cardiology</Link></li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
                   <ul className="space-y-2">
                     <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                     <li><Link to="/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                     <li><Link to="/training" className="hover:text-blue-400 transition-colors">Training</Link></li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
                   <ul className="space-y-2">
                     <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
                     <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link></li>
                     <li><Link to="/compliance" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
                   </ul>
                 </div>
               </div>
               <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                 <p className="text-sm">&copy; {new Date().getFullYear()} MedScan. All rights reserved.</p>
               </div>
             </div>
           </footer>
        </div>
      );
};

export default Home;