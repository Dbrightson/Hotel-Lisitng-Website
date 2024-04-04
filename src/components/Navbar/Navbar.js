import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'; // Import CSS file for additional styling

function Navbar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    handleSearch(searchQuery.trim()); // Pass the trimmed search query to the parent component for filtering
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery.trim());
    }
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        Logo
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Welcome
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
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
      <Link to="/login" className="profile-link">
        <PersonIcon className="profile-icon" />
      </Link>
    </div>
  );
}

export default Navbar;
