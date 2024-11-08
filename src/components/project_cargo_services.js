import React from 'react';
// import timedelivery from '../images/time_delivery.jpg'
import img1 from '../components/images/time_delivery.jpg'
import img2 from '../components/images/expert_headling.jpg'
import img3 from '../components/images/tailored_solution.jpg'



function Project_cargo_services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-white relative mb-6" style={{ backgroundImage: "url('/Logistics_Transportation/break bulk/project_cargo.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>
        <div className="relative z-10 text-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-shadow">Project Cargo Services</h1>
          <p className="text-xl mb-4">Handling Project Cargo is a specialized job that requires expertise and experience.</p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section py-16 bg-red-800 text-white mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            We have a dedicated team to undertake such services with utmost responsibility and skill. With minute planning, we ensure that consignments, regardless of their size, weight, and dimensions, are transported and delivered from the manufacturing/assembling/procurement point to the project site without any damage or loss, through the shortest route and in the fastest possible time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-900 py-12">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-900 transition-all duration-300">
                <img src={img2} className="w-full h-64 object-cover" alt="Expert Handling" />
                <div className="p-4 text-center">
                  <h5 className="text-xl font-semibold text-blue-900">Expert Handling</h5>
                  <p className="text-gray-700 mt-2">Our team is trained in specialized techniques to manage complex cargo safely.</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-900 transition-all duration-300">
                <img src={img1} className="w-full h-64 object-cover" alt="Timely Delivery" />
                <div className="p-4 text-center">
                  <h5 className="text-xl font-semibold text-blue-900">Timely Delivery</h5>
                  <p className="text-gray-700 mt-2">We guarantee timely delivery of your project cargo, regardless of its nature.</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-900 transition-all duration-300">
                <img src={img3} className="w-full h-64 object-cover" alt="Tailored Solutions" />
                <div className="p-4 text-center">
                  <h5 className="text-xl font-semibold text-blue-900">Tailored Solutions</h5>
                  <p className="text-gray-700 mt-2">Every project is unique; we offer solutions tailored to your specific requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2024 U.S. Handle Worldwide Trade, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Project_cargo_services;
