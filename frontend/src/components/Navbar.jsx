import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { FaBars } from 'react-icons/fa';

const GlassNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Navbar expand="lg" className={`header ${isActive ? 'active' : ''}`}>
        <Container>
          <Navbar.Brand href="#" className="logo">Logo</Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={handleMenuClick} 
            className="menu-icon"
          >
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">How It Works</Nav.Link>
              <Nav.Link href="#">Community</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className={`nav-bg ${isActive ? 'active' : ''}`}></div>
      </Navbar>
    </>
  );
};

export default GlassNavbar;
