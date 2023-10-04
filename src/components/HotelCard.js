import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RoomIcon from '@mui/icons-material/Room';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HotelCard = ({ hotel }) => {
  const {
    name,
    address,
    rooms,
    bathrooms,
    beds,
    sqft,
    imageUrl,
    price,
  } = hotel;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const cardStyle = {
    backgroundColor: '#33374B', // Background color
    borderRadius: '15px', // Rounded corners
    margin: '10px', // Adjust margin
    color: 'white', // Text color
    position: 'relative', // Position for favorite icon
    width: '250px', // Square shape
  };

  const imageStyle = {
    height: '200px', // Adjust image height
    objectFit: 'cover', // Cover image style
  };

  const favoriteButtonStyle = {
    position: 'absolute', // Position relative to card
    top: '10px', // Adjust top position
    right: '10px', // Adjust right position
    width: '30px',
    height: '30px',
    fontSize: '20px',
    padding: '5px',
    background: isFavorite ? '#0026FF' : 'transparent',
    borderRadius: '50%',
    color: isFavorite ? 'white' : '#0026FF',
    border: `1px solid ${isFavorite ? 'transparent' : '#0026FF'}`,
  };

  const iconStyle = {
    fontSize: '20px', // Adjust icon size
    marginRight: '5px', // Adjust icon margin
    color: '#0026FF', // Icon color
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="card" style={cardStyle}>
        <CardMedia component="img" alt={name} image={imageUrl} style={imageStyle} />
        <CardContent>
          <FavoriteBorderIcon
            fontSize="small"
            className="btn"
            onClick={handleFavoriteClick}
            style={favoriteButtonStyle}
          />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">Address: {address}</Typography>
          <div className="d-flex align-items-center mt-2">
            <RoomIcon style={iconStyle} />
            <Typography variant="body2">Rooms: {rooms}</Typography>
          </div>
          <div className="d-flex align-items-center">
            <KingBedIcon style={iconStyle} />
            <Typography variant="body2">Beds: {beds}</Typography>
          </div>
          <div className="d-flex align-items-center">
            <BathtubIcon style={iconStyle} />
            <Typography variant="body2">Bathrooms: {bathrooms}</Typography>
          </div>
          <div className="d-flex align-items-center">
            <ArrowForwardIcon style={iconStyle} />
            <Typography variant="body2">Dimension: {sqft} sqft</Typography>
          </div>
          <div className="mt-3">
            <Typography variant="h6">${price} /Month</Typography>
          </div>
        </CardContent>
      </div>
    </Grid>
  );
};

export default HotelCard;
