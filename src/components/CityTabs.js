import React from 'react';
import Button from '@mui/material/Button';

function CityTabs({ cities, activeCity, onCityClick }) {
  const handleClick = function (city) {
    console.log('Button clicked for city:', city);
    onCityClick(city);
  };

  return (
    <div className="text-center mb-4">
      {cities.map(function (city) {
        const isActive = city === activeCity;
        const buttonStyle = {
          textTransform: 'none', // Prevent uppercase text
          backgroundColor: isActive ? '#0026FF' : '#ECECFF',
          color: isActive ? 'white' : 'black',
          borderRadius: '25px', // Add curved border
          marginBottom:'25px',
          marginRight: '8px', // Add margin for spacing
        };

        return (
          <Button
            key={city}
            variant="contained"
            style={buttonStyle}
            onClick={() => handleClick(city)}
          >
            {city}
          </Button>
        );
      })}
    </div>
  );
}

export default CityTabs;
