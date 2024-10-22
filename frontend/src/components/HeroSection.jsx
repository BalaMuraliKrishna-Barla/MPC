import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/HeroSection.css'; // Custom styles including animations

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content-left">
        {/* Title with fade-in animation */}
        <h1 className="hero-title fade-in">
          Empower Your Communication Skills
        </h1>

        {/* Subtitle with slide-in animation */}
        <p className="hero-subtitle slide-in">
          Practice, engage, and improve with personalized activities and AI-driven feedback. Join a community dedicated to enhancing communication in real-time.
        </p>

        {/* CTA Button with hover effect */}
        <Button className="hero-cta bounce-in" variant="primary" size="lg">
          Get Started Today
        </Button>
      </div>

      <div className="hero-content-right">
        {/* Animated illustration or image */}
        <img
          src="Hero-Section-Right-Side-Image.png" // Replace with your image path
          alt="Communication Illustration"
          className="hero-image pop-in"
        />
      </div>
    </div>
  );
};

export default HeroSection;
