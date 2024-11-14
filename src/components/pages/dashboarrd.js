import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHotel, FaUsers, FaClipboardList, FaEdit, FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/context';

function Dashboard() {
  const { profile } = useAuth();  // Assuming you are using context for the profile data
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Handle tab change and close sidebar on mobile
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'view-users':
        return <div>Content for View Users</div>;
      case 'view-requests':
        return <div>Content for View Requests</div>;
      case 'update':
        return <div>Content for Update</div>;
      case 'delete':
        return <div>Content for Delete</div>;
      case 'view-bookings':
        return <div>Content for View All Bookings</div>;
      default:
        return <div>Select an option from the sidebar to get started.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block bg-gray-800 text-white w-64 p-4 space-y-6 fixed top-0 left-0 h-full transition-all duration-300`}
      >
        <div className="text-center text-xl font-semibold text-white mb-8">
          Admin Panel
        </div>

        {/* Sidebar Profile with Initial */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#003366] flex items-center justify-center text-2xl font-bold text-yellow-400">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-center text-xl font-bold text-yellow-400 mt-2">
            {profile.name}
          </h2>
          <p className="text-center text-gray-300">{profile.email}</p>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <Link
            to="/users"
            className="flex items-center space-x-2 w-full py-2 px-4 bg-[#003366] rounded-lg hover:bg-[#00509e] transition"
            onClick={() => handleTabClick('view-users')}
          >
            <FaUsers className="text-xl text-white" />
            <span className="text-white">View Users</span>
          </Link>
          <Link
            to="#"
            className="flex items-center space-x-2 w-full py-2 px-4 bg-[#003366] rounded-lg hover:bg-[#00509e] transition"
            onClick={() => handleTabClick('view-requests')}
          >
            <FaClipboardList className="text-xl text-white" />
            <span className="text-white">View Requests</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-8">
        {/* Header with Hamburger Icon */}
        <div className="flex justify-between items-center mb-8">
          <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Render content dynamically */}
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
