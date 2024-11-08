import React from 'react';
import wine from '../images/wine.jpeg'
import b_im from '../images/backgroudimgtop.jpeg.jpg'
import d2d from '../images/doortodoor.jpg'

function WineExport() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-white relative" style={{ backgroundImage: "url('luxury-wine-banner.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 via-blue-900 to-blue-900 opacity-80"></div>
        <div className="relative z-10 text-center py-24">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Luxury Alcohol & Wine Delivery</h1>
          <p className="text-xl animate__animated animate__fadeIn">Bringing premium wines and spirits to your doorstep, swiftly and securely.</p>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-center mb-5 text-3xl font-bold">Our Exclusive Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Service Card 1 */}
          <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-4">
            <div className="card shadow-lg rounded-lg flex flex-col h-full">
              <img src={wine} className="card-img-top h-64 object-cover rounded-t-lg" alt="Wine Delivery" />
              <div className="card-body text-center py-4">
                <h5 className="card-title text-xl font-semibold text-gray-800">Luxury Wine Delivery</h5>
                <p className="card-text text-gray-600">Carefully curated selection of wines delivered with precision and care.</p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-4">
            <div className="card shadow-lg rounded-lg flex flex-col h-full">
              <img src={b_im} className="card-img-top h-64 object-cover rounded-t-lg" alt="Spirit Import" />
              <div className="card-body text-center py-4">
                <h5 className="card-title text-xl font-semibold text-gray-800">Exclusive Spirit Import</h5>
                <p className="card-text text-gray-600">We manage the import of top-tier spirits, offering rare selections worldwide.</p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="max-w-xs w-full sm:w-1/3 md:w-1/3 mb-4">
            <div className="card shadow-lg rounded-lg flex flex-col h-full">
              <img src={d2d} className="card-img-top h-64 object-cover rounded-t-lg" alt="Whiskey Delivery" />
              <div className="card-body text-center py-4">
                <h5 className="card-title text-xl font-semibold text-gray-800">Whiskey Delivered to Your Door</h5>
                <p className="card-text text-gray-600">Get premium whiskey delivered with unmatched service and elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-xl mb-8">Contact us today to learn more about our exclusive alcohol and wine delivery services.</p>
        <a href="mailto:contact@premiumwinespirits.com" className="btn btn-custom bg-white text-blue-900 py-2 px-6 rounded-full hover:bg-gray-100 transition">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Premium Wine & Spirits. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WineExport;
