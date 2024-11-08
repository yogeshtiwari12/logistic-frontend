import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Fright from './components/service pages/fright.js';
import Sea_fright_service from './components/service pages/sea_fright_service.js';
import Train_fright_service from './components/service pages/train_fright_service.js';
import Market_entry_service from './components/service pages/market_entry_service.js';
import Export_premium_vehicle from './components/service pages/export_premium_vehicle.js';
import Wine_export from './components/service pages/wine_export.js';
import Project_cargo_services from './components/project_cargo_services.js';
import Warehousing_service from './components/warehousing_service.js';
import Login from './components/login_signup/login.js';
import SignUp from './components/login_signup/signup.js';
import { Toaster } from 'react-hot-toast'; 
import Profile from './components/pages/profile.js';
import Allusers from './components/allusers.js';
import { useAuth } from './components/context/context.js';

const ProtectedRoute = ({ children }) => {
  const { profile } = useAuth();
  if (!profile) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/fright" element={<ProtectedRoute><Fright /></ProtectedRoute>} />
        <Route path='/sea_fright_services' element={<ProtectedRoute><Sea_fright_service /></ProtectedRoute>} />
        <Route path='/train_fright_service' element={<ProtectedRoute><Train_fright_service /></ProtectedRoute>} />
        <Route path='/market_entry_service' element={<ProtectedRoute><Market_entry_service /></ProtectedRoute>} />
        <Route path='/export_premium_vehicle' element={<ProtectedRoute><Export_premium_vehicle /></ProtectedRoute>} />
        <Route path='/wine_export' element={<ProtectedRoute><Wine_export /></ProtectedRoute>} />
        <Route path='/project_cargo_services' element={<ProtectedRoute><Project_cargo_services /></ProtectedRoute>} />
        <Route path='/warehousing_service' element={<ProtectedRoute><Warehousing_service /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/allusers' element={<ProtectedRoute><Allusers /></ProtectedRoute>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
