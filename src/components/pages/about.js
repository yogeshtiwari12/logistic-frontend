import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 text-center rounded-b-lg shadow-lg">
        <h1 className="text-4xl font-semibold">About U.S. Handle Worldwide Trade, LLC</h1>
        <p className="text-lg mt-2">Your trusted partner in global freight management</p>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto py-10 px-4">
        {/* Welcome Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8 transition transform hover:translate-y-[-5px] hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Welcome</h2>
          <p className="text-gray-700 leading-relaxed">
            At U.S. Handle Worldwide Trade, LLC, we are industry leaders in global freight management, committed to providing reliable, cost-effective logistics solutions that help you navigate complex international markets with ease.
          </p>
        </section>

        {/* Our Approach Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8 transition transform hover:translate-y-[-5px] hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            Our strategy integrates cutting-edge information systems with comprehensive supply chain management to ensure fast, secure, and efficient deliveries across the globe. Whether you're expanding your business or entering new markets, we offer innovative logistics solutions tailored to your needs.
          </p>
        </section>

        {/* International Freight Consulting Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8 transition transform hover:translate-y-[-5px] hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">International Freight Consulting</h2>
          <p className="text-gray-700 leading-relaxed">
            As your trusted International Freight Consultants, we provide expert advice on trade agreements, taxes, duties, and licensing. We empower you to make informed decisions that enhance your operational efficiency in global markets.
          </p>
        </section>

        {/* Partner with Us Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8 transition transform hover:translate-y-[-5px] hover:shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Partner with Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Partner with U.S. Handle Worldwide Trade, LLC to elevate your logistics operations and achieve seamless international trade. Our expertise in freight management and dedication to excellence make us the perfect partner for your business growth.
          </p>
          <a href="/" className="inline-block mt-4 px-6 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition-colors">
            Contact Us
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center rounded-t-lg mt-10">
        <p>&copy; 2024 U.S. Handle Worldwide Trade, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
