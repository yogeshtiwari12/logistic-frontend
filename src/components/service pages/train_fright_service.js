import React from 'react';
import bcargo from '../images/bulk_cargo_export.jpg'
import bccrgo2 from '../images/bulk_cargo_import.jpg'
import cold_c from '../images/cold_chain_logistic.jpeg.jpg'
import s_chain from '../images/supply_chain_intermodel.jpg'
import doo2door from '../images/door_to_door.webp'
import customclaer from '../images/Customs-clearance.jpg'

function TrainFrightService() {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Navbar */}
   

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white text-center py-32"
        style={{ backgroundImage: `url('train-freight.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-75"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold ">Reliable Train Freight Services</h1>
          <p className="mt-4 text-lg ">Fast, secure, and cost-effective solutions for your logistics needs.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto mt-10 p-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Our Train Freight Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: bcargo,
              title: "Bulk Cargo Export",
              description: "Efficient handling of large-scale shipments for global export via railway transport."
            },
            {
              image: bccrgo2,
              title: "Bulk Cargo Import",
              description: "Import your goods securely with our optimized rail solutions, designed for time-sensitive deliveries."
            },
            {
              image: cold_c,
              title: "Cold Chain Logistics",
              description: "Specialized cold storage and transport for perishable items, ensuring temperature control throughout."
            },
            {
              image: s_chain,
              title: "Intermodal Freight Solutions",
              description: "Seamless integration of train, truck, and other transport methods to optimize your supply chain."
            },
            {
              image:  doo2door,
              title: "Door-to-Door Delivery",
              description: "Comprehensive service from your warehouse to your customer's doorstep via our rail network."
            },
            {
              image: customclaer,
              title: "Customs Clearance & Handling",
              description: "We manage the complexities of customs for you, ensuring smooth and hassle-free transit."
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold mb-4">{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <p className="text-center text-sm">&copy; 2024 Global Rail Logistics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TrainFrightService;
