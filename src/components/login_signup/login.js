import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state

    try {
      const response = await axios.post('https://logistic-backend-bx5m.onrender.com/userroutes1/login', {
        email,
        password,
      },{
        withCredentials: true,
      });

      if (response.status === 200) {
        toast.success(response.data.message || 'Login successful');
        window.location.reload();
        
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError('Invalid credentials or error logging in.');
      toast.error(err.response?.data?.message || 'An error occurred while logging in.');
    } finally {
      setIsLoading(false);  // Reset loading state
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-blue-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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
              type="password"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:scale-105 focus:outline focus:ring-2 focus:ring-blue-300 transition-transform duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-700">
              Don't have an account?{' '}
              <a href="/signup" className="text-red-500 hover:text-red-700 font-semibold">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
