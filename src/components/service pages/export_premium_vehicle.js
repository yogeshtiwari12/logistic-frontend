import React from 'react';
import car1 from '../images/car_export.jpg'
import impor from '../images/Import.jpg'
import car2 from '../images/door_to_door.webp'


function ExportPremiumVehicle() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">

      {/* Navbar */}


      {/* Hero Section */}
      <section 
  className="hero bg-cover bg-center text-white text-center py-8  relative" 
  style={{ backgroundImage: "url('luxury-car-hero.jpg')" }}
>
  {/* Gradient overlay only for the hero section */}
  <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>

  <div className="relative z-10 py-16">
    <h1 className="text-5xl font-bold mb-4">Luxury Car Export & Import</h1>
    <p className="text-xl">World-class logistics solutions for high-end automotive transportation.</p>
  </div>
</section>

      {/* Services Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-center text-3xl font-bold mb-6">Our Luxury Car Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={car1} className="card-img-top h-64 object-cover w-full" alt="Luxury Car Export" />
            <div className="card-body p-6 text-center">
              <h5 className="card-title text-xl font-bold text-gray-800">Luxury Car Export</h5>
              <p className="card-text text-gray-600">Safe and secure export services for luxury cars, ensuring global delivery with no compromise on quality.</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={impor} className="card-img-top h-64 object-cover w-full" alt="Luxury Car Import" />
            <div className="card-body p-6 text-center">
              <h5 className="card-title text-xl font-bold text-gray-800">Luxury Car Import</h5>
              <p className="card-text text-gray-600">Seamless import solutions for luxury vehicles, with meticulous customs handling and fast-track delivery.</p>
            </div>
          </div>
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={car2} className="card-img-top h-64 object-cover w-full" alt="Door-to-Door Delivery" />
            <div className="card-body p-6 text-center">
              <h5 className="card-title text-xl font-bold text-gray-800">Door-to-Door Delivery</h5>
              <p className="card-text text-gray-600">Premium door-to-door delivery service, ensuring your luxury vehicle reaches you in pristine condition.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 mt-10 text-center">
        <p>&copy; 2024 Luxury Car Logistics. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default ExportPremiumVehicle;
