import React from 'react';

function CityTabs({ cities, activeCity, onCityClick }) {
  const handleButtonClick = (city) => {
    console.log('Button clicked for city:', city); // Add this line
    onCityClick(city);
  };

  return (
    <div className="text-center mb-4">
      {cities.map((city) => (
        <button
          key={city}
          className={`btn btn-outline-primary ${
            city === activeCity ? 'active' : ''
          } mx-2`}
          onClick={() => handleButtonClick(city)} // Update to use handleButtonClick
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default CityTabs;
