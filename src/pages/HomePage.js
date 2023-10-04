import React, { useState } from 'react';
import hotelsData from '../data/hotels.json';
import CityTabs from '../components/CityTabs';
import HotelCard from '../components/HotelCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function HomePage() {
  const [activeCity, setActiveCity] = useState('New York');
  const [numPropertiesToShow, setNumPropertiesToShow] = useState(6);

  const handleCityClick = function (cityName) {
    console.log('Clicked on city:', cityName);
    setActiveCity(cityName);
    setNumPropertiesToShow(6); // Reset the number of properties to show when changing the city.
  };

  const handleShowMoreClick = () => {
    setNumPropertiesToShow((prevNum) => prevNum + 3); // Increase the number of properties to show by 3.
  };

  const pageStyle = {
    backgroundColor: '#F4F4FD',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const selectedCity = hotelsData.cities.find(function (city) {
    return city.name === activeCity;
  });

  const propertiesToDisplay = selectedCity
    ? selectedCity.properties.slice(0, numPropertiesToShow)
    : [];

  return (
    <div style={pageStyle}>
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
    </div>
  );
}

export default HomePage;
