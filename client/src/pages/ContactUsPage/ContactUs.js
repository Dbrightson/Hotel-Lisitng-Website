import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import emailjs from 'emailjs-com';

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thankyouSent, setThankyouSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    try {
        await emailjs.send(serviceId, templateId, {
            user_name: name,
            user_email: email,
            user_message: message,
          }, userId);
          

      setName('');
      setEmail('');
      setMessage('');
      setThankyouSent(true);
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  };

  const pageStyle = {
    backgroundColor: '#F4F4FD',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1000px',
    width: '100%',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  };

  const contactInfoStyle = {
    flex: '1',
    marginRight: '20px',
    padding: '20px',
  };

  const formStyle = {
    flex: '1',
    padding: '20px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    transition: 'border-color 0.3s ease',
    fontSize: '16px',
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={containerStyle} className="glassmorphic-container">
        <div style={contactInfoStyle}>
          <h1 style={{ fontFamily: 'Oswald', textAlign: 'center', marginBottom: '20px' }}>
            Contact Brightson Hotels International
          </h1>
          <div>
            <p>
              Thank you for your interest in Brightson Hotels International! If you have any questions,
              feedback, or inquiries, please feel free to contact us using the information provided below.
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@brightsonhotels.com
            </p>
            <p>
              Our dedicated team is available to assist you with any queries or concerns you may have.
              We value your feedback and strive to provide exceptional service to our guests.
            </p>
          </div>
        </div>
        <div style={formStyle}>
          <h2 style={{ fontFamily: 'Oswald', textAlign: 'center', marginBottom: '20px' }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required style={{ ...inputStyle }} value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" required style={{ ...inputStyle }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea rows="4" placeholder="Message" required style={{ ...inputStyle, resize: 'vertical' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" style={{ backgroundColor: '#0026ff', color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '5px' }}>Submit</button>
          </form>
          {thankyouSent && (
            <p style={{ color: 'green', marginTop: '10px' }}>
              Thank you for your message! We will get back to you as soon as possible.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
