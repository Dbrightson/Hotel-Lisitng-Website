import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RoomIcon from '@mui/icons-material/Room'; // Import RoomIcon
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

const HotelCard = ({ hotel }) => {
  const {
    id,
    name,
    address,
    rooms,
    bathrooms,
    beds,
    sqft,
    imageUrl,
    price,
    Popular, // Add the "Popular" property from the JSON
  } = hotel;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    margin: '10px',
    color: 'white',
    position: 'relative',
    width: '350px',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px 15px 0 0', // Rounded top corners
    height: '200px', // Set a fixed height
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  const ribbonStyle = {
    position: 'absolute',
    top: '3px',
    left: '3px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '4px 8px',
    fontSize: '12px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  };

  const favoriteButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '25px',
    height: '25px',
    fontSize: '20px',
    padding: '5px',
    background: isFavorite ? '#0026FF' : 'white', // Change the background color
    borderRadius: '50%',
    color: isFavorite ? 'white' : '#0026FF', // Change the icon color
    border: `1px solid ${isFavorite ? 'transparent' : '#0026FF'}`,
  };

  const contentStyle = {
    padding: '16px',
  };

  const dataContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  };

  const dataRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const iconStyle = {
    fontSize: '20px',
    marginRight: '5px',
    color: '#0026FF',
  };

  const priceContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const priceStyle = {
    color: 'blue',
    fontWeight: 'bold',
    marginRight: '5px',
  };

  const readMoreButtonStyle = {
    color: 'blue',
    marginTop: '10px',
    fontSize: '12px',
  };

  const dataValueStyle = {
    color: 'black',
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={cardStyle}>
        <div style={imageContainerStyle}>
          <Link to={`/property/${id}`} className="property-link">
            <img src={imageUrl} alt={name} style={imageStyle} />
          </Link>
          {Popular === 'Yes' && (
            <div style={ribbonStyle}>Popular</div>
          )}
          <FavoriteIcon
            fontSize="small"
            className="btn"
            onClick={handleFavoriteClick}
            style={favoriteButtonStyle}
          />
        </div>
        <CardContent style={contentStyle}>
          <Typography variant="h6" style={{ color: 'black', paddingBottom: '15px', fontWeight: 'bold' }}>
            {name}
          </Typography>
          <div style={dataRowStyle}>
            <RoomIcon style={{ ...iconStyle, color: 'blue' }} /> {/* Add RoomIcon with blue color */}
            <Typography variant="body2" style={dataValueStyle}>
              {address}
            </Typography>
          </div>
          <div style={dataContainerStyle}>
            <div style={dataRowStyle}>
              <MeetingRoomIcon style={iconStyle} />
              <Typography variant="body2" style={dataValueStyle}>
                {rooms} 
              </Typography>
            </div>
            <div style={dataRowStyle}>
              <KingBedIcon style={iconStyle} />
              <Typography variant="body2" style={dataValueStyle}>
                {beds} 
              </Typography>
            </div>
            <div style={dataRowStyle}>
              <BathtubIcon style={iconStyle} />
              <Typography variant="body2" style={dataValueStyle}>
                {bathrooms} 
              </Typography>
            </div>
            <div style={dataRowStyle}>
              <CompareArrowsIcon style={iconStyle} />
              <Typography variant="body2" style={dataValueStyle}>
                {sqft} 
              </Typography>
            </div>
          </div>
          <div className="mt-3" style={{ display: 'flex', marginTop:'20px',justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={priceContainerStyle}>
                <Typography variant="h6" style={priceStyle}>
                  ${price}
                </Typography>
                <Typography variant="body2" style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', marginTop: '5px' }}>
                  /Month
                </Typography>
              </div>
            </div>
            <Link to={`/property/${id}`} className="property-link"> {/* Fixed Link */}
              <Button variant="outlined" color="primary" style={readMoreButtonStyle}>
                View Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HotelCard;
