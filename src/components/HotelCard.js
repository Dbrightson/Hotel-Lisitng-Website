import React, { useState } from 'react';
import hotelsData from '../data/hotels.json';
import CityTabs from '../components/CityTabs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RoomIcon from '@mui/icons-material/Room';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

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
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    margin: '5px', // Reduce margin to 5px
    color: 'white',
    position: 'relative',
    width: '350px',
  };  

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px 15px 0 0', // Rounded top corners
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
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

  const rentNowContainerStyle = {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: 'white',
    color: 'blue',
    padding: '5px 10px',
    borderRadius: '15px',
    fontFamily: 'Oswald',
    fontSize:'15px',
    border: '1px solid blue',
  };

  const contentStyle = {
    padding: '16px', // Adjust padding to your preference
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

  // Define the style for data values (change color to black)
  const dataValueStyle = {
    color: 'black', // Change color to black
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={cardStyle}>
        <div style={imageContainerStyle}>
          <img src={imageUrl} alt={name} style={imageStyle} />
          <div style={rentNowContainerStyle}>For Rent</div>
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
            <RoomIcon style={iconStyle} />
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
                {sqft} sqft
              </Typography>
            </div>
          </div>
          <div className="mt-3" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <Button variant="outlined" style={readMoreButtonStyle}>
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HotelCard;
