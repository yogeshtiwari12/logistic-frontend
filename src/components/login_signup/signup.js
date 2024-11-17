import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://logistic-backend-bx5m.onrender.com/userroutes1/signup', {
        name,
        email,
        phone,
        password,
        role,
      });

      if (response.status) {
        toast.success(response.data.message || 'Sign-up successful');
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setRole('');
        setError(null); // Reset the error state on successful signup
      }
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred during sign-up.';
      setError(errorMessage);
      toast.error(errorMessage); // Display error message
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-blue-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            >
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-700">Already have an account? <a href="/login" className="text-red-500 hover:text-red-700 font-semibold">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
