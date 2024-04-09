import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'justify',
  fontSize: '18px',
  lineHeight: '1.6',
};

const sectionStyle = {
  marginTop: '100px', // Adjust top margin to avoid content being hidden under fixed navbar
  padding: '50px',
  backgroundColor: '#F4F4FD',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
};

function AboutUsPage() {
  const [sections, setSections] = useState([
    { content: 'Our Story', visible: true },
    { content: 'Our Mission', visible: false },
    { content: 'Our Values', visible: false },
    { content: 'Join Us', visible: false },
  ]);

  const sectionHeight = window.innerHeight * 0.5; // Adjust based on content and viewport height

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrolledSections = Math.floor(scrollTop / sectionHeight);

    setSections((prevSections) =>
      prevSections.map((section, index) => ({
        ...section,
        visible: index <= scrolledSections,
      }))
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderSectionContent = (section) => (
    <div style={contentStyle}>
      <h2 style={{ color: '#0d00ff', fontFamily: 'cursive', marginBottom: '20px' }}>{section.content}</h2>
      {section.content === 'Our Story' && (
        <p style={{ fontFamily: 'monospace' }}>
          Brightson Hotels International is a leading hospitality brand dedicated to providing exceptional experiences to our guests. Established in 20XX, our journey began with a vision to create unforgettable memories for travelers around the world.
        </p>
      )}
      {section.content === 'Our Mission' && (
        <p style={{ fontFamily: 'monospace' }}>
          Our mission is simple: to exceed expectations and inspire delight in every interaction. We strive to create welcoming environments where guests feel at home and cherished. Whether it's a relaxing getaway, a business trip, or a special occasion, we are dedicated to making every moment unforgettable.
        </p>
      )}
      {section.content === 'Our Values' && (
        <p style={{ fontFamily: 'monospace' }}>
          At Brightson Hotels, our values guide everything we do. Integrity, excellence, respect, and inclusivity are at the heart of our operations. We believe in transparency, accountability, and fostering meaningful connections with our guests, employees, and communities.
        </p>
      )}
      {section.content === 'Join Us' && (
        <p style={{ fontFamily: 'monospace' }}>
          Whether you're planning your next adventure or looking for a rewarding career in hospitality, we invite you to experience the warmth and hospitality of Brightson Hotels International. Discover our world-class properties, explore exciting destinations, and embark on a journey of discovery with us.
        </p>
      )}
    </div>
  );

  return (
    <div>
      <Navbar />
      <header>
        <h1 style={{ fontFamily: 'Oswald', textAlign: 'center', marginTop: '40' }}>About Brightson Hotels</h1>
      </header>
      {sections.map((section, index) => (
        <section key={index} style={{ ...sectionStyle, opacity: section.visible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
          {renderSectionContent(section)}
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default AboutUsPage;
