import React from 'react';
import waterfr from '../images/water freight.png';
import ship1 from '../images/ship1.jpeg';

function Sea_fright_service() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white text-center py-32 shadow-lg"
        style={{ backgroundImage: `url('OIP-removebg-preview.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Sea Freight Services</h1>
          <p className="mt-4 text-lg">Cost-effective methods for transporting large and heavy loads with reliability.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto mt-10 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-red-600 mb-6">Services Offered</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Sea Freight Import / Export Consolidation – LCL, FCL, RoRo, and Break bulk services
            </li>
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Logistics & Distribution Services
            </li>
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Quality processes for receiving, delivering, bonded storage, forwarding, shipping, and consolidation
            </li>
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Full Clearing and Forwarding Services
            </li>
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Door to Door Service
            </li>
            <li className="bg-gray-100 p-4 rounded-md transition hover:bg-gray-200">
              Hassle-free customs documentation and delivery
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-around mt-10">
          <img src={waterfr} alt="Sea Freight" className="w-1/2 rounded-lg shadow-md" />
          <img src={ship1} alt="Sea Freight Ship" className="w-1/2 rounded-lg shadow-md ml-4" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <p className="text-center text-sm">&copy; 2024 U.S. Handle Worldwide Trade, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Sea_fright_service;
