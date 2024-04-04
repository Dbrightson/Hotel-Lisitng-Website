const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// MongoDB Atlas URI
const dbURI = 'mongodb+srv://god:god@123@hotel.85b0nuk.mongodb.net/?retryWrites=true&w=majority&appName=Hotel';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User model
const User = mongoose.model('User', {
  fullname: String,
  email: String,
  password: String
});

// Signup route
app.post('/signup', (req, res) => {
  const { fullname, email, password } = req.body;
  
  // Create a new user instance
  const newUser = new User({
    fullname,
    email,
    password
  });
  
  // Save the user to the database
  newUser.save()
    .then(() => {
      console.log('User saved successfully');
      res.status(201).json({ message: 'User registered successfully' });
    })
    .catch(err => {
      console.error('Error saving user:', err.message);
      res.status(500).json({ error: 'Failed to register user' });
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
