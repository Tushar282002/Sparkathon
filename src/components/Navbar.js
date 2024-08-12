import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
       <Navbar.Brand as={Link} to="/">
        <img
          src="/assets/a.png" // Path to the image in the public folder
          alt="Brand Logo"
          style={{ width: '4em', height: 'auto' }} // Adjust size as needed
        />
      </Navbar.Brand>
      {/* <Navbar.Brand as={Link} to="/">In-Store Navigation</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
          <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
