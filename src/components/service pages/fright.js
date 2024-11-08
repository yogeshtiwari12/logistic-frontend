import React from 'react';
import airfright from '../images/air_freight.png'
import cargohandling  from '../images/projectCargoHandling.png'
import pershible from '../images/perishableCargoHandling.avif'

function Fright() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      
      {/* Navbar */}
  
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white text-center py-32" style={{ backgroundImage: `url('/airplane-and-its-trail-on-a-white-background-illustration-2FNTFN1-removebg-preview.png')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Air Freight Services</h1>
          <p className="mt-4 text-lg">Professional and comprehensive air freight services committed to the safe and reliable delivery of your consignment.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto mt-10 px-6">
        <h2 className="text-center text-3xl font-semibold mb-10">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src={airfright} className="w-full h-48 object-cover" alt="Air Freight" />
            <div className="p-6 text-center">
              <h5 className="text-xl font-semibold">Air Freight (Export / Import Consolidation)</h5>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src={cargohandling} className="w-full h-48 object-cover" alt="Project Cargo" />
            <div className="p-6 text-center">
              <h5 className="text-xl font-semibold">Projects Cargo Handling</h5>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl">
            <img src={pershible} className="w-full h-48 object-cover" alt="Perishable Cargo" />
            <div className="p-6 text-center">
              <h5 className="text-xl font-semibold">Perishable Cargo Handling</h5>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-10">
        <p className="text-center text-sm">&copy; 2024 U.S. Handle Worldwide Trade, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Fright;
