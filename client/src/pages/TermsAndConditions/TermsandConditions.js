import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const contentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "justify",
  fontSize: "18px",
  lineHeight: "1.6",
};

const sectionStyle = {
  marginTop: "100px", // Adjust top margin to avoid content being hidden under fixed navbar
  padding: "50px",
  backgroundColor: "#F4F4FD",
  color: "#333",
  fontFamily: "Arial, sans-serif",
};

function TermsAndConditionsPage() {
  const [sections, setSections] = useState([
    { content: "Introduction", visible: true },
    { content: "User Agreement", visible: false },
    { content: "Booking Terms", visible: false },
    { content: "Payment Policy", visible: false },
    { content: "Privacy Policy", visible: false },
    { content: "Cancellation Policy", visible: false },
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderSectionContent = (section) => (
    <div style={contentStyle}>
      <h2
        style={{
          color: "#0d00ff",
          fontFamily: "oswald",
          marginBottom: "20px",
          fontWeight:'900',
          fontSize:'36px',
        }}
      >
        {section.content}
      </h2>
      {section.content === "Introduction" && (
        <p style={{ fontFamily: "comforta", fontSize:"24px" }}>
          Welcome to Brightson Hotels International! These terms and conditions
          outline the rules and regulations for the use of our website.
        </p>
      )}
      {section.content === "User Agreement" && (
        <p style={{ fontFamily: "comforta", fontSize:"24px" }}>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use Brightson Hotels International's
          website if you do not agree to take all of the terms and conditions
          stated on this page.
        </p>
      )}
      {section.content === "Booking Terms" && (
  <div style={{ fontFamily: "comforta", fontSize: "24px" }}>
    <p>
      When booking a room with Brightson Hotels International, you agree to the following terms and conditions:
    </p>
    <ul style={{ fontSize: "18px", fontWeight: "bold",fontFamily:'roboto' ,listStyleType: "disc",  }}>
      <li>Check-in time is at 10:00 AM and check-out is at 8:00 PM.</li>
      <li>Full payment is required at the time of booking.</li>
      <li>Room rates are subject to change without notice.</li>
      <li>No refunds for early check-out.</li>
    </ul>
  </div>
)}


      {section.content === "Payment Policy" && (
        <p style={{ fontFamily: "comforta", fontSize:"24px" }}>
          Our payment policy requires full payment at the time of booking. We
          accept all major credit cards and PayPal.
        </p>
      )}

        {section.content === "Privacy Policy" && (
        <p style={{ fontFamily: "comforta", fontSize:"24px" }}>
          We employ the use of cookies. By accessing Brightson Hotels
          International, you agreed to use cookies in agreement with the
          Brightson Hotels International's Privacy Policy.
        </p>
      )}

      {section.content === "Cancellation Policy" && (
        <p style={{ fontFamily: "comforta", fontSize:"24px" }}>
          Cancellations made within 24 hours of booking are eligible for a full
          refund. Cancellations made after this period are subject to a
          cancellation fee equal to one night's stay.
        </p>
      )}
    </div>
  );

  return (
    <div>
      <Navbar />
      <header>
        <h1
          style={{ fontFamily: "Oswald", textAlign: "center", marginTop: "40" }}
        >
          Terms and Conditions
        </h1>
      </header>
      {sections.map((section, index) => (
        <section
          key={index}
          style={{
            ...sectionStyle,
            opacity: section.visible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {renderSectionContent(section)}
        </section>
      ))}
      <Footer />
    </div>
  );
}

export default TermsAndConditionsPage;
