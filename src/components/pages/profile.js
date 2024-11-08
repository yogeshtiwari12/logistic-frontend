import React from 'react';
import { useAuth } from '../context/context';
import { User, Mail, Phone, UserCheck } from 'lucide-react';

const Profile = () => {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full sm:w-96 max-w-md transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">User Profile</h2>

        {/* Profile Picture */}
        <div className="mx-auto bg-indigo-100 rounded-full h-24 w-24 flex items-center justify-center mb-6">
          <span className="text-4xl font-bold text-indigo-600">
            {profile ? profile.name.charAt(0).toUpperCase() : ''}
          </span>
        </div>

        {/* User Information */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-600">
              <User className="w-5 h-5" />
              <span className="font-semibold">Name:</span>
            </div>
            <span className="text-gray-700">{profile ? profile.name : 'Loading...'}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-600">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Email:</span>
            </div>
            <span className="text-gray-700">{profile ? profile.email : 'Loading...'}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-600">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Phone:</span>
            </div>
            <span className="text-gray-700">{profile ? profile.phone : 'Loading...'}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-600">
              <UserCheck className="w-5 h-5" />
              <span className="font-semibold">Role:</span>
            </div>
            <span className="text-gray-700 capitalize">{profile ? profile.role : 'Loading...'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4 text-center">
          {/* Disabled View Profile Button */}
         
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
