// pages/About.jsx
const About = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
          Medical Image Analysis
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700">
              The Medical Image Analysis project is focused on the use of artificial intelligence and machine learning to assist healthcare professionals in diagnosing and analyzing medical images. This project uses deep learning models to analyze and detect abnormalities in images such as X-rays, MRIs, and CT scans.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800">
              Problem Statement
            </h3>
            <p className="text-lg text-gray-700">
              Medical image interpretation is a complex task that requires expertise and can be time-consuming. Our goal is to build a system that helps doctors and healthcare professionals by automating the analysis of medical images, detecting issues such as tumors, fractures, and other conditions with high accuracy.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Approach
            </h3>
            <p className="text-lg text-gray-700">
              Using deep learning algorithms and Convolutional Neural Networks (CNN), we trained our models on a large dataset of labeled medical images. The system is capable of identifying abnormalities and providing the user with results that assist in further diagnosis.
            </p>
          </div>
  
          <div className="flex justify-center items-center">
            <img
              src="src\assets\image.png"
              alt="Medical Image"
              className="h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Future Directions
          </h3>
          <p className="text-lg text-gray-700">
            We aim to expand the capabilities of our system to analyze more types of medical images, improve accuracy through continuous learning, and integrate our solution into real-world healthcare systems.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  