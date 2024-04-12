import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import CSS file for additional styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Company</h3>
          <ul>
            <li><a href="/termsandconditions">Terms and Conditions </a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
