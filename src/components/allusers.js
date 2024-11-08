import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/userroutes1/getallusers', {
          withCredentials: true,
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {

      await axios.delete(`http://localhost:4000/userroutes1/deleteuser/${userId}`, {
        withCredentials: true,
      });

      setUsers(users.filter(user => user._id !== userId));

       toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Admin Panel - All Users</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Phone</th>
              <th className="px-6 py-4 text-left font-semibold">Role</th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition-colors duration-300"
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    user.role === 'admin' ? 'text-green-600' : 'text-blue-600'
                  }`}
                >
                  {user.role}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mr-4 transition-colors duration-300">
                    <FiEdit className="inline-block mr-1" /> Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 transition-colors duration-300"
                    onClick={() => handleDelete(user._id)} 
                  >
                    <FiTrash2 className="inline-block mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
