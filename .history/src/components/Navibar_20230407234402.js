import { Button } from 'bootstrap';
import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

export const Navibar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>MAV</Navbar.Brand> {/*LOGO */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Svernut Menu */}
      <Navbar.Collapse id="responsive-navbar-nav">
        {/*Razvernut Menu */}
        <Nav className="mr-auto">
          <Nav.Link>Home Users About</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary">LogIn</Button>
          <Button variant="primary">SignIn</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
