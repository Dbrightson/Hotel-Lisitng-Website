import React, { useState } from 'react';
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
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleCityClick = function (cityName) {
    console.log('Clicked on city:', cityName);
    setActiveCity(cityName);
    setNumPropertiesToShow(6); // Reset the number of properties to show when changing the city.
  };

  const handleShowMoreClick = () => {
    setNumPropertiesToShow((prevNum) => prevNum + 3); // Increase the number of properties to show by 3.
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
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
    justifyContent: 'flex-start', // Change to flex-start to keep content at the top
    padding: '20px', // Add padding for better appearance
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
      <Footer /> {/* Include Footer component */}
    </div>
  );
}

export default HomePage;
