// SignupPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { AccountCircle, Lock, Mail } from '@mui/icons-material';
import './Signup.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const validatePassword = (pass) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(pass);
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // Send signup data to backend
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: username,
        email: email,
        password: password,
      }),
    })
    .then(response => {
      if (response.ok) {
        console.log('User signed up successfully');
        // Redirect user to login page or perform any other action
      } else {
        console.error('Failed to sign up:', response.statusText);
        setRegistrationError('Failed to register user. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error signing up:', error.message);
      setRegistrationError('An unexpected error occurred. Please try again later.');
    });
  };

  return (
    <div className="signup-page">
      <div className="glassmorphic-container">
        <h2 className="signup-title">Sign Up</h2>
        <div className="input-container">
          <AccountCircle className="input-icon" />
          <TextField
            label="Full Name"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button variant="contained" onClick={handleSignup} className="signup-button">
          Sign Up
        </Button>
        <div className="registration-error">
          {registrationError && <p>{registrationError}</p>}
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
