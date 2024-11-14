import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import shiplogo from './images/logo-removebg-preview.png';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from './context/context';
import axios from 'axios';
import toast from 'react-hot-toast';

function Navbar() {
  const { profile } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:4000/userroutes1/logout',{}, { withCredentials: true });
      Cookies.remove('token');
      toast.success(response.data.message || "Logout successful");
      window.location.reload();
      setIsMenuOpen(false); 
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error(`Error logging out`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full bg-white shadow-lg z-50">
      <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-md font-bold text-gray-800 text-2xl">
          <img src={shiplogo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <Link to="/" className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link to="/allusers" className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
              our employees
              </Link>
            </li>
            {profile && (
              <li className="relative group">
                <button className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300">
                  <ul className="py-2">
                    <li><Link to="/fright" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Air Freight Service</Link></li>
                    <li><Link to="/sea_fright_services" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Sea Freight Services</Link></li>
                    <li><Link to="/train_fright_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Train Freight Service</Link></li>
                    <li><Link to="/market_entry_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Market Entry Service</Link></li>
                    <li><Link to="/export_premium_vehicle" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Export Premium Vehicle</Link></li>
                    <li><Link to="/wine_export" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Wine Export Service</Link></li>
                    <li><Link to="/project_cargo_services" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Project Cargo Services</Link></li>
                    <li><Link to="/warehousing_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Warehousing Service</Link></li>
                  </ul>
                </div>
              </li>
            )}
            <li className="relative group">
              <button className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Tools
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300">
                <ul className="py-2">
                  <li>
                    <a href="https://dilas.ca/commercial-shipments/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a href="https://dilas.ca/personal-agreement/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">
                      Personal
                    </a>
                  </li>
                  <li>
                    <a href="https://dilas.ca/brokerage-fees-calculator/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">
                      Fees Calculator
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact" className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop User Profile/Logout Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {profile ? (
            <>
              <button
                onClick={handleLogout}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Logout
              </button>
              {profile.role === 'admin' && (
                <Link
                  to="/dashboard"
                  className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Dashboard
                </Link>
              )}
              <Link
                to="/profile"
                className="flex items-center space-x-2 text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                <FaUserCircle className="text-2xl" />
                <span className="font-semibold">Profile</span>
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-gray-800"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-50 p-6">
          <ul className="space-y-4">
            <li>
              <Link to="/" onClick={closeMenu} className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                About
              </Link>
            </li>
            {profile && (
              <li className="relative group">
                <button className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-300">
                  <ul className="py-2">
                    <li><Link to="/fright" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Air Freight Service</Link></li>
                    <li><Link to="/sea_fright_services" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Sea Freight Services</Link></li>
                    <li><Link to="/train_fright_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Train Freight Service</Link></li>
                    <li><Link to="/market_entry_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Market Entry Service</Link></li>
                    <li><Link to="/export_premium_vehicle" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Export Premium Vehicle</Link></li>
                    <li><Link to="/wine_export" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Wine Export Service</Link></li>
                    <li><Link to="/project_cargo_services" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Project Cargo Services</Link></li>
                    <li><Link to="/warehousing_service" onClick={closeMenu} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100">Warehousing Service</Link></li>
                  </ul>
                </div>
              </li>
            )}
            <li>
              <Link to="/tools" onClick={closeMenu} className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Tools
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className="text-sm font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out">
                Contact
              </Link>
            </li>
            <div className="mt-6 flex items-center justify-between">
              {profile ? (
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Login
                </Link>
              )}
              {profile && profile.role === 'admin' && (
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;