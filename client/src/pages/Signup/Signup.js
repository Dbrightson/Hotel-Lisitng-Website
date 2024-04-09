import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { AccountCircle, Lock, Mail } from '@mui/icons-material';
import axios from 'axios';
import './Signup.css';

function SignupPage() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validatePassword = (pass) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(pass);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8080/api/users';
      const data = { firstName, lastName, email, password };
      const response = await axios.post(url, data);
      Navigate('/login');
      showMessage('Registration successful! Please log in to continue.', 'success');
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setRegistrationError(error.response.data.message);
        showMessage('An error occurred during registration.', 'error');
      } else {
        console.error('Error:', error);
      }
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      showMessage('Passwords do not match.', 'error');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      showMessage('Invalid password format.', 'error');
      return;
    }
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType(''); // Clear message type as well
    }, 5000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignup(e);
    }
  };

  return (
    <div className="signup-page">
      <div className="glassmorphic-container">
        <h2 className="signup-title">Sign Up</h2>
        <form onKeyDown={handleKeyDown} onSubmit={handleSignup} className="signup-form">
          <div className="input-container">
            <AccountCircle className="input-icon" />
            <TextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <AccountCircle className="input-icon" />
            <TextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <Mail className="input-icon" />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <Lock className="input-icon" />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-container">
            <Lock className="input-icon" />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={passwordError !== ''}
              helperText={passwordError}
              className="input-field"
            />
          </div>
          <Button variant="contained" type="submit" className="signup-button">
            Sign Up
          </Button>
        </form>
        {/* Error and success message container */}
        <div className={`message-container ${messageType}`}>
          {message && <div className={`message ${messageType}`}>{message}</div>}
          {registrationError && <div className="message error">{registrationError}</div>}
        </div>
        <div className="login-link">
          <Link to="/login" className="link">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
