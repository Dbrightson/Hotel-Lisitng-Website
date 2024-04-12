import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hotelsData from "../../data/hotels.json";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Paper from "@mui/material/Paper";

function PropertyPage() {
  const { id } = useParams();
  const property = hotelsData.cities
    .flatMap((city) => city.properties)
    .find((hotel) => hotel.id === parseInt(id));
  const [razorpay, setRazorpay] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    adults: 1,
    kids: 0,
    checkInDate: "",
    checkOutDate: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      setRazorpay(
        new window.Razorpay({
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        })
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openPaymentPage = () => {
    const mandatoryFields = [
      "fullName",
      "email",
      "phone",
      "adults",
      "checkInDate",
      "checkOutDate",
    ];
    const missingFields = mandatoryFields.filter(
      (field) => !bookingDetails[field]
    );
    if (missingFields.length > 0) {
      setError("All fields are mandatory");
      setTimeout(() => setError(""), 5000);
      return;
    }

    const checkIn = new Date(bookingDetails.checkInDate);
    const checkOut = new Date(bookingDetails.checkOutDate);

    // Validate check-in/check-out dates
    if (isNaN(checkOut.getTime()) || isNaN(checkOut.getTime())) {
      console.error(
        "Invalid check-in/check-out dates. Please choose valid dates"
      );
      return;
    }

    const numberOfDays = Math.round(
      (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    );
    if (numberOfDays <= 0) {
      console.error(
        "Invalid check-in/check-out dates. Please choose valid dates for your stay"
      );
      return;
    }

    // Minimum stay check (optional)
    const minStay = 2; // Replace with actual minimum stay requirement (if applicable)
    if (numberOfDays < minStay) {
      console.error(
        `Minimum stay requirement is ${minStay} nights. Please adjust your check-out date`
      );
      return;
    }

    const amountToPay = property.price * numberOfDays * 100;

    const options = {
      amount: amountToPay,
      currency: "INR",
      receipt: "order_receipt_" + new Date().getTime(),
      payment_capture: 1,
      notes: {
        property_id: property.id,
        check_in_date: bookingDetails.checkInDate,
        check_out_date: bookingDetails.checkOutDate,
        adults: bookingDetails.adults,
        kids: bookingDetails.kids,
        fullName: bookingDetails.fullName,
        email: bookingDetails.email,
        phone: bookingDetails.phone,
      },
    };

    razorpay?.open(options);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  return (
    <div className="property-page" style={{ textAlign: "center" }}>
      <Navbar />
      <Typography
        variant="h3"
        gutterBottom
        style={{
          fontFamily: "Oswald",
          marginTop: "20px",
          marginBottom: "70px",
        }}
      >
        Property Details
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Hotel Image and Details */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              marginLeft: "100px",
              border: "5px solid #ECECFF",
              borderRadius: "10px",
              padding: "5px",
              justifyContent: "space-between",
            }}
          >
            <img
              src={property.imageUrl}
              alt={property.name}
              style={{ width: "100%", height: "450px", borderRadius: "5px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ marginLeft: "50px", textAlign: "left" }}>
            <Typography
              variant="h4"
              color="blue"
              fontWeight="bold"
              gutterBottom
            >
              {property.name}
            </Typography>
            <Typography variant="body1" marginBottom="15px" gutterBottom>
              {property.address}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <MeetingRoomIcon
                style={{ fontSize: "24px", marginRight: "5px", color: "blue" }}
              />
              <Typography variant="body2" fontWeight="bold">
                {property.rooms} Rooms
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <KingBedIcon
                style={{ fontSize: "24px", marginRight: "5px", color: "blue" }}
              />
              <Typography variant="body2" fontWeight="bold">
                {property.beds} Beds
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <BathtubIcon
                style={{ fontSize: "24px", marginRight: "5px", color: "blue" }}
              />
              <Typography variant="body2" fontWeight="bold">
                {property.bathrooms} Bathrooms
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <AttachMoneyIcon
                style={{ fontSize: "24px", marginRight: "5px", color: "blue" }}
              />
              <Typography variant="body2" fontWeight="bold">
                {property.price} per night
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <CompareArrowsIcon
                style={{ fontSize: "24px", marginRight: "5px", color: "blue" }}
              />
              <Typography variant="body2" fontWeight="bold">
                {property.sqft} sqft
              </Typography>
            </div>
          </div>
        </Grid>
        {/* Description */}
        <Grid item xs={12}>
          <div style={{ padding: "20px", textAlign: "center" }}>
            <Typography
              variant="h4"
              color="blue"
              fontWeight="bold"
              gutterBottom
              style={{ marginTop: "40px" }}
            >
              Description
            </Typography>
            <Typography
              fontFamily="futura"
              marginTop="30px"
              fontSize="18px"
              variant="body1"
              maxWidth="900px"
              alignContent="center"
              gutterBottom
              style={{ margin: "0 auto", textAlign: "center" }} // Centering the description content horizontally
            >
              {property.description}
            </Typography>
          </div>
        </Grid>
        {/* Booking Details Form */}
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Paper
              elevation={3}
              style={{
                maxWidth: "600px",
                padding: "20px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.3)",
                paddingBottom: "50px",
                paddingTop: "50px",
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="blue"
                gutterBottom
              >
                Booking Details
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                id="fullName"
                name="fullName"
                label="Full Name"
                value={bookingDetails.fullName}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="email"
                name="email"
                label="Email"
                value={bookingDetails.email}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="phone"
                name="phone"
                label="Phone"
                value={bookingDetails.phone}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="adults"
                name="adults"
                label="Adults"
                type="number"
                value={bookingDetails.adults}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="kids"
                name="kids"
                label="Kids"
                type="number"
                value={bookingDetails.kids}
                onChange={handleInputChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="checkInDate"
                name="checkInDate"
                label="Check-In Date"
                type="date"
                value={bookingDetails.checkInDate}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="checkOutDate"
                name="checkOutDate"
                label="Check-Out Date"
                type="date"
                value={bookingDetails.checkOutDate}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button
                variant="contained"
                color="primary"
                style={{
                  width: "300px",
                  backgroundColor: "blue",
                  alignSelf: "end",
                  color: "white",
                  marginTop: "25px",
                }}
                onClick={openPaymentPage}
              >
                Book Now
              </Button>
            </Paper>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default PropertyPage;
