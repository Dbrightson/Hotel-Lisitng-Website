import React, { useState } from 'react';
import hotelsData from '../data/hotels.json';
import CityTabs from '../components/CityTabs';
import HotelCard from '../components/HotelCard';
import Grid from '@mui/material/Grid';

function HomePage() {
  const [activeCity, setActiveCity] = useState('New York');

  const handleCityClick = function (cityName) {
    console.log('Clicked on city:', cityName);
    setActiveCity(cityName);
  };

  const pageStyle = {
    backgroundColor: '#DAECFD', // Background color
    minHeight: '100vh', // Minimum viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align content horizontally
    justifyContent: 'center', // Center align content vertically
  };

  const selectedCity = hotelsData.cities.find(function (city) {
    return city.name === activeCity;
  });

  return (
    <div style={pageStyle}>
      <h1 className="text-center mb-5">Hotel Listing</h1>
      <CityTabs
        cities={hotelsData.cities.map(function (city) {
          return city.name;
        })}
        activeCity={activeCity}
        onCityClick={handleCityClick}
      />
      <Grid container spacing={3}>
        {selectedCity &&
          selectedCity.properties.map(function (property) {
            return <HotelCard key={property.id} hotel={property} />;
          })}
      </Grid>
    </div>
  );
}

export default HomePage;
