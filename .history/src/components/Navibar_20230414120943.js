import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navibar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-5 me-5">MAV</Navbar.Brand> {/*LOGO */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Svernut Menu */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*Razvernut Menu */}
          <Nav className="me-auto ">
            <Nav.Link className="text-decoration-none">
              <Link to="/">Home</Link>
              <Link to="/users"> Users</Link>
              <Link to="/about">About</Link>{' '}
            </Nav.Link>
          </Nav>
          <Nav className="me-5">
            <Button variant="primary" className=" me-2">
              LogIn
            </Button>
            <Button variant="primary">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
