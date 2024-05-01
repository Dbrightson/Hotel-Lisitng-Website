import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Lock, AccountCircle } from '@mui/icons-material';
import axios from 'axios';
import './Login.css';

function LoginPage() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://hotel-lisitng-website.onrender.com/api/auth';
      const response = await axios.post(url, data);
      localStorage.setItem('token', response.data.data);
      sessionStorage.setItem('isLoggedIn', 'true'); // Set isLoggedIn to true
      navigate('/home');
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message); // Set error message received from the server
        showMessage(error.response.data.message, 'error');
      } else {
        setError('An error occurred while processing your request.'); // Set generic error message
        showMessage('An error occurred while processing your request.', 'error');
      }
    }
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="login-page">
      <div className="glassmorphic-container">
        <h2 className="login-title">Login</h2>
        <form onKeyDown={handleKeyDown} onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <AccountCircle className="input-icon" />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <Lock className="input-icon" />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          
          <Button variant="contained" type="submit" className="login-button">
            Login
          </Button>
        </form>

        <div className="message-container">
          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}
        </div>

        <div className="signup-link">
          <Link to="/signup" className="link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
