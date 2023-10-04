// src/pages/PropertyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../data/hotels.json';
import HotelCard from '../components/HotelCard';

function PropertyPage() {
  const { id } = useParams();
  const property = hotelsData.find((hotel) => hotel.id === parseInt(id));

  return (
    <div className="property-page">
      <h1>Property Details</h1>
      <HotelCard hotel={property} />
    </div>
  );
}

export default PropertyPage;
