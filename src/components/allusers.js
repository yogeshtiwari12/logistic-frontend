import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Employees</h1>

      <div className="overflow-hidden bg-white shadow-lg rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition-colors duration-300"
              >
                <td className="px-6 py-4 text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-gray-800">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
