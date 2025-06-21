import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
            Medical Image Analysis
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging artificial intelligence to transform healthcare diagnostics
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8 order-2 md:order-1">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Medical Image Analysis project harnesses the power of artificial intelligence and machine learning to assist healthcare professionals in diagnosing and analyzing medical images. Our advanced deep learning models analyze and detect abnormalities in X-rays, MRIs, and CT scans with high precision.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Problem Statement
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Medical image interpretation requires expertise and is often time-intensive. Our system aims to augment healthcare professionals' capabilities by automating the analysis process, quickly detecting issues such as tumors, fractures, and other conditions with exceptional accuracy and reliability.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Our Approach
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We employ cutting-edge deep learning algorithms and Convolutional Neural Networks (CNN) trained on comprehensive datasets of labeled medical images. This sophisticated system identifies abnormalities with remarkable precision, providing actionable insights to support clinical decision-making.
              </p>
            </section>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-white p-2 rounded-2xl">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Medical Image Analysis Technology"
                  className="rounded-xl shadow-lg w-full max-w-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                AI-Powered Analysis
              </div>
            </div>
          </div>
        </div>

        {/* Gemini API Integration Section */}
        <div className="bg-indigo-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
            <span className="bg-indigo-200 text-indigo-700 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            Implementation with Gemini API
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Image Processing</h4>
              <p className="text-gray-600">
                Users can upload multiple medical images that are processed by Google's Gemini Pro Vision model for comprehensive analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Symptom Integration</h4>
              <p className="text-gray-600">
                Alongside images, users can input symptom details to enhance diagnostic accuracy and provide context for analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Results</h4>
              <p className="text-gray-600">
                The system delivers results including identified conditions, precautions, dietary advice, and potential medications with accuracy ratings.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Our integration with Google's Gemini API represents a significant advancement in medical diagnostic technology. By processing images and symptom data simultaneously, our system delivers holistic insights that help healthcare professionals make informed decisions faster and more effectively.
          </p>
        </div>

        {/* Future Directions */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Future Directions
          </h3>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 w-20 mx-auto mb-8 rounded"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            We are committed to expanding the capabilities of our system to analyze a wider array of medical imaging modalities, continually improving accuracy through machine learning advancements, and seamlessly integrating our solution into healthcare systems worldwide.
          </p>
          
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/imageProcessing"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Learn More About Our Vision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;