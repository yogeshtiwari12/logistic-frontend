import React from 'react';
import aboutImage from '../images/us_img_5.jpg'; // Your image

function Aboutus() {
  return (
    <div className="p-6 bg-green-50 flext justify-content-around">

      <h1 className="text-4xl font-extrabold px-10 text-center mb-10 text-blue-700 ">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105" />
        </div>

        <div className="w-full md:w-1/2 md:pl-12 h-">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">U.S. Handle Worldwide Trade, LLC</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
            U.S. Handle Worldwide Trade, LLC serves as your trusted partner for seamless import and export logistics, empowering your supply chain with innovative solutions tailored to meet the demands of today's competitive global market.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
            We operate as a cohesive network of independent transportation and logistics experts, alongside key affiliated service providers, ensuring a robust array of air, ocean, ground, and value-added services on a global scale.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
            Our integrated approach combines state-of-the-art information systems with comprehensive supply chain management, guaranteeing swift, secure, and efficient delivery of your goods worldwide. Whether you are entering new markets or expanding your reach, our solutions provide cost-effective and punctual deliveries that enhance your operational flexibility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
