import React, { useState } from 'react';
import hotelsData from '../data/hotels.json';
import CityTabs from '../components/CityTabs';
import HotelCard from '../components/HotelCard';
import Grid from '@mui/material/Grid';

function HomePage() {
  const [activeCity, setActiveCity] = useState('New York');

  const pageStyle = {
    backgroundColor: '#DAECFD', // Background color
    minHeight: '100vh', // Minimum viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align content horizontally
    justifyContent: 'center', // Center align content vertically
  };

  const handleCityClick = (cityName) => {
    console.log('Clicked on city:', cityName); // Add this line
    setActiveCity(cityName);
  };

  const selectedCity = hotelsData.cities.find((city) => city.name === activeCity);

  return (
    <div style={pageStyle}>
      <h1 className="text-center mb-5">Hotel Listing</h1>
      <CityTabs
        cities={hotelsData.cities.map((city) => city.name)}
        activeCity={activeCity}
        onCityClick={handleCityClick} // Update to use handleCityClick
      />
      <Grid container spacing={3}>
        {selectedCity &&
          selectedCity.properties.map((property) => (
            <HotelCard key={property.id} hotel={property} />
          ))}
      </Grid>
    </div>
  );
}

export default HomePage;
