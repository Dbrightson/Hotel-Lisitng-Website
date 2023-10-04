import React from 'react';

function CityTabs({ cities, activeCity, onCityClick }) {
  const handleClick = function (city) {
    console.log('Button clicked for city:', city);
    onCityClick(city);
  };

  return (
    <div className="text-center mb-4">
      {cities.map(function (city) {
        const isActive = city === activeCity;
        const classes = `btn btn-outline-primary ${isActive ? 'active' : ''} mx-2`;

        return (
          <button key={city} className={classes} onClick={() => handleClick(city)}>
            {city}
          </button>
        );
      })}
    </div>
  );
}

export default CityTabs;
