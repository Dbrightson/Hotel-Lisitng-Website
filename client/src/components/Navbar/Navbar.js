import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../logo.png';
import './Navbar.css'; // Import CSS file for additional styling

function Navbar({ handleSearch, user }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // Navigate to the login page if not logged in
    }
  }, [isLoggedIn, navigate]); // Add navigate to dependency array

  const handleSearchClick = () => {
    handleSearch(searchQuery.trim());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery.trim());
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false); // Update isLoggedIn state
    handleMenuClose();
  };

  return (
    <div className="navbar-container">
      <Link to="/home" className="logo">
        <img src={Logo}/>
      </Link>
      <div className="nav-links">
        <Link to="/home" className="nav-link">
          Welcome
        </Link>
        <Link to="/aboutus" className="nav-link">
          About Us
        </Link>
        <Link to="/contactus" className="nav-link">
          Contact Us
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Hotels..."
          value={searchQuery}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="search-input"
        />
        <SearchIcon className="search-icon" onClick={handleSearchClick} />
      </div>
      <div>
        <PersonIcon
          style={{ color: 'blue' }}
          className="profile-icon"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        />
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className="profile-menu">
          <MenuItem 
            style={{ color: 'blue', fontFamily:'cursive' }}
            onClick={handleLogout}>Logout</MenuItem>
        </Menu>

      </div>
    </div>
  );
}

export default Navbar;
