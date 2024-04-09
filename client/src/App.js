import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import PropertyPage from './pages/Propertypage/PropertyPage'; // Corrected file name
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import AboutUsPage from './pages/AboutUsPage/AboutUs';
import ContactUsPage from './pages/ContactUsPage/ContactUs';
import { Login } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<HomePage />} /> {/* Use the same component for both '/' and '/home' */}
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
