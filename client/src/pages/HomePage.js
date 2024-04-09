import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate component
import hotelsData from '../data/hotels.json';
import CityTabs from '../components/CityTabs';
import HotelCard from '../components/HotelCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'; // Import Footer component

function HomePage() {
  const [activeCity, setActiveCity] = useState('New York');
  const [numPropertiesToShow, setNumPropertiesToShow] = useState(6);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      console.log('Session storage changed:', sessionStorage.getItem('isLoggedIn'));
      setIsLoggedIn(sessionStorage.getItem('isLoggedIn') === 'true');
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  

  useEffect(() => {
    // Redirect to login if not logged in
    if (!isLoggedIn) {
      window.location.href = '/login'; // Redirect to login page
    }
  }, [isLoggedIn]); // Trigger this effect whenever isLoggedIn changes

  const handleCityClick = function (cityName) {
    setActiveCity(cityName);
    setNumPropertiesToShow(6);
  };

  const handleShowMoreClick = () => {
    setNumPropertiesToShow((prevNum) => prevNum + 3);
  };

  const handleSearch = (query) => {
    const matchedProperties = selectedCity.properties.filter(property =>
      property.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(matchedProperties);
  };

  const pageStyle = {
    backgroundColor: '#F4F4FD',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: '20px',
  };

  const selectedCity = hotelsData.cities.find(function (city) {
    return city.name === activeCity;
  });

  const propertiesToDisplay = searchResults.length > 0 ? searchResults.slice(0, numPropertiesToShow) : selectedCity ? selectedCity.properties.slice(0, numPropertiesToShow) : [];

  return (
    <div style={pageStyle}>
      <Navbar handleSearch={handleSearch} />
      <h1 className="text-center mb-5" style={{ fontFamily: 'Oswald' }}>
        Brightson Hotels International
      </h1>
      <CityTabs
        cities={hotelsData.cities.map(function (city) {
          return city.name;
        })}
        activeCity={activeCity}
        onCityClick={handleCityClick}
      />
      <Grid container spacing={3}>
        {propertiesToDisplay.map(function (property) {
          return <HotelCard key={property.id} hotel={property} />;
        })}
      </Grid>
      {propertiesToDisplay.length < selectedCity?.properties.length && (
        <Button variant="outlined" onClick={handleShowMoreClick} style={{ marginTop: '10px' }}>
          Show More
        </Button>
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
