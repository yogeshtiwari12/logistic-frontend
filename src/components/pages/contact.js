import React from "react";
import kycform from '../pages/doc34.docx'
function ContactPage() {
  const brochureLink = kycform; // Replace with actual path to the brochure

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <p className="mt-2 text-blue-100">We'd love to hear from you!</p>
        </div>

        {/* Contact Details */}
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name Section */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V9a4 4 0 10-8 0v2M5.455 15.105A3.6 3.6 0 019 16h6a3.6 3.6 0 013.545-2.895M8 21h8m-4-4v4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">Kratik Sangya</p>
                <p className="text-sm text-gray-500">Customer Support Manager</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-green-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h2m14 0h2m-7-7v2m0 14v2m-7.07-5.07a11.042 11.042 0 0015.14 0M9 17a11.042 11.042 0 01-6.07-5.07M17 9a11.042 11.042 0 01-6.07 5.07M9 7a11.042 11.042 0 016.07-5.07M12 1v2m0 14v6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">+1-346-202-1929</p>
                <a
                  href="tel:+13462021929"
                  className="text-sm text-blue-500 hover:text-blue-700 underline"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-purple-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 6.211a1.6 1.6 0 001.78 0L21 8m0 0l-9 6.461a1.6 1.6 0 01-1.78 0L3 8m18 0V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">krbaeza@ushwt.com</p>
                <a
                  href="mailto:krbaeza@ushwt.com"
                  className="text-sm text-blue-500 hover:text-blue-700 underline"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Location Section */}
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-yellow-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657a8 8 0 10-11.314 0L12 22l5.657-5.343z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">
                  13501 Katy Freeway, Houston, TX 7709
                </p>
              </div>
            </div>
          </div>

          {/* Brochure Section */}
          <div className="mt-8 text-center">
            <a
              href={brochureLink}
              download
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m0-16l-3 3m3-3l3 3m-6 3h6"
                />
              </svg>
              Download KYC Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
