import React from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../../data/hotels.json';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function PropertyPage() {
  const { id } = useParams();
  const property = hotelsData.cities
    .flatMap((city) => city.properties)
    .find((hotel) => hotel.id === parseInt(id));

  return (
    <div className="property-page" style={{ textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Oswald', marginTop: '20px', marginBottom: '20px' }}>
        Property Details
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ border: '5px solid #ECECFF', borderRadius: '10px', padding: '5px' }}>
            <img src={property.imageUrl} alt={property.name} style={{ width: '100%', borderRadius: '5px' }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'left' }}>
            <Typography variant="h4" color="blue" fontWeight="bold" gutterBottom>
              {property.name}
            </Typography>
            <Typography variant="body1" marginBottom="15px" gutterBottom>
              {property.address}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <MeetingRoomIcon style={{ fontSize: '24px', marginRight: '5px', color: 'blue' }} />
              <Typography variant="body2" fontWeight="bold">
                {property.rooms} Rooms
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <KingBedIcon style={{ fontSize: '24px', marginRight: '5px', color: 'blue' }} />
              <Typography variant="body2" fontWeight="bold">
                {property.beds} Beds
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <BathtubIcon style={{ fontSize: '24px', marginRight: '5px', color: 'blue' }} />
              <Typography variant="body2" fontWeight="bold">
                {property.bathrooms} Bathrooms
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <AttachMoneyIcon style={{ fontSize: '24px', marginRight: '5px', color: 'blue' }} />
              <Typography variant="body2" fontWeight="bold">
                {property.price} per month
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <CompareArrowsIcon style={{ fontSize: '24px', marginRight: '5px', color: 'blue' }} />
              <Typography variant="body2" fontWeight="bold">
                {property.sqft} sqft
              </Typography>
            </div>
            <Button variant="contained" color="primary" style={{ backgroundColor: 'blue', color: 'white' }}>
              Book Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PropertyPage;
