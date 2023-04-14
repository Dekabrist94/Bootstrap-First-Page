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
            <Nav.Link>
              <Link className="ms-5 text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-decoration-none" to="/users">
                {' '}
                Users
              </Link>
              <Link className="text-decoration-none" to="/about">
                About
              </Link>{' '}
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
