import React from 'react';
import img34 from "../images/krbaeza.jpg";  // Ensure the path to the image is correct

function CeodeskPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-green-50">
            {/* Page Heading */}
            <h1 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
                From the Desk of CEO
            </h1>

            {/* Main Container */}
            <div className="flex flex-col md:flex-row w-3/4 bg-white shadow-lg rounded-lg overflow-hidden ">

                {/* Left Side - Image (Full Width on Small Screens) */}
                <div className="w-full md:w-1/2 flex justify-center p-2 ">
                    <img src={img34} alt="Krbaeza" className="w-[400px] h-[400px] object-cover mt-4 " />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-6 ">
                    <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                        <span className="text-green-700">Karla Regina Baeza (CEO) </span> 
                        For more than 25 years, I've been working in the field of International Trade, and every day I open something new in this field. It makes me love my job, and that is why I am always happy to create new projects for my clients. 
                        Since the very first day that I got my license from the Department of the Treasury to act as a Licensed U.S. Customhouse Broker, I knew that I would start a long journey holding this very prestigious title. In 2018, this dream came true.
                    </p>
                    <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                        Today, I manage my own company at a different level, working with designers, developers, importers, exporters, trucking companies, warehouses, distribution centers, buyers, sellers, etc. I help them grow their business.
                       
                    </p>
                 

                    {/* Email in green color */}
                    <p className="text-lg text-green-600">
                        Email: krbaeza@ushwt.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CeodeskPage;
