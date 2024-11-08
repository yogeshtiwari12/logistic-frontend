import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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



function App() {
  const {profile} = useAuth();
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fright" element={<Fright />} />
        <Route path='/sea_fright_services' element={<Sea_fright_service/>}/>
        <Route path='/train_fright_service' element={<Train_fright_service/>}/>
        <Route path='/market_entry_service' element={<Market_entry_service/>}/>
        <Route path='/export_premium_vehicle' element={<Export_premium_vehicle/>} />
        <Route path='/wine_export' element={<Wine_export/>}/>
        <Route path='/project_cargo_services' element={<Project_cargo_services/>}/>
        <Route path='/warehousing_service' element={<Warehousing_service/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/allusers' element={<Allusers/>} />
        



      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
