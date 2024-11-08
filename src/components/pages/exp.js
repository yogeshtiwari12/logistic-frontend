import React from 'react';
import { FaBusinessTime, FaClock } from 'react-icons/fa';
import experienceImage from '../images/business-concept-with-team-close-up (1).jpg';

function ExperienceDetails() {
  return (
    <div className="flex justify-center items-center w-full bg-green-50 mb-0"> {/* Removed min-h-screen and adjusted margin */}
      <div className="w-full md:w-3/4 lg:w-1/2 space-y-6 text-center px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Experience</h2>

        <div className="bg-white p-8 rounded-lg shadow-xl space-y-6 mx-auto">
          
      
          <div className="flex justify-center">
            <img
              src={experienceImage}
              alt="Experience"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="bg-green-700 text-white rounded-full p-4">
              <FaClock className="text-2xl" />
            </div>
            <div className="text-lg text-gray-700 text-left">
              <h3 className="font-semibold text-2xl">Years of Experience</h3>
              <p className="mt-2">Our team brings over two decades of expertise in the field, ensuring top-tier solutions for your business.</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="bg-green-700 text-white rounded-full p-4">
              <FaBusinessTime className="text-2xl" />
            </div>
            <div className="text-lg text-gray-700 text-left">
              <h3 className="font-semibold text-2xl">Years of Company Creation</h3>
              <p className="mt-2">Since the company's founding, we have been delivering high-quality services to businesses worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
