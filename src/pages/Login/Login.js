import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Lock, AccountCircle } from '@mui/icons-material';
import './Login.css'; // Import CSS file for additional styling

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-page">
      <div className="glassmorphic-container">
        <h2 className="login-title">Login</h2>
        <div className="input-container">
          <AccountCircle className="input-icon" />
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button variant="contained" onClick={handleLogin} className="login-button">
          Login
        </Button>
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