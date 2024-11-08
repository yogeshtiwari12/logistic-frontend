import React from 'react';
import img1 from '../components/images/first.jpg';
import img2 from '../components/images/lcl_consolidation.jpg';
import img3 from '../components/images/inventory_management.webp';
import img4 from '../components/images/packaging_labeling.jpg';




function Warehousing_service() {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-white relative h-[50vh]" style={{ backgroundImage: "url('/Logistics_Transportation/custom brokerage/wearhouseServicing.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl font-bold text-shadow-lg">Warehousing Services</h1>
          <p className="text-xl mt-4">Tailored logistics solutions for your unique business needs.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container py-16 w-100">
        <h2 className="text-center text-3xl  font-semibold mb-8 text-blue-900 ml-32">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-32">

          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img1} alt="Bonded Warehousing" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h4 className="text-xl font-semibold text-blue-900">Bonded Warehousing</h4>
            <p className="text-gray-700 mt-2">Secure storage solutions compliant with customs regulations.</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img2} alt="Inventory Management" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h4 className="text-xl font-semibold text-blue-900">Inventory Management</h4>
            <p className="text-gray-700 mt-2">Optimize your stock levels and minimize overhead costs.</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img3} alt="Packaging Services" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h4 className="text-xl font-semibold text-blue-900">Packaging and Labeling</h4>
            <p className="text-gray-700 mt-2">Professional packaging services tailored to your products.</p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={img4} alt="LCL Services" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h4 className="text-xl font-semibold text-blue-900">LCL Consolidation</h4>
            <p className="text-gray-700 mt-2">Cost-effective consolidation for smaller shipments.</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p>&copy; 2024 U.S. Handle Worldwide Trade, LLC. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Warehousing_service;
