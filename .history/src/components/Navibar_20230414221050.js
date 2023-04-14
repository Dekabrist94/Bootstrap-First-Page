import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from 'styled-components';
{
  /*npm install react-bootstrap bootstrap */
}

const Style = styles.div`
a, .navbar-brand, .navbar-nav .nav-link{
  color:#adb1b8;
  &:hover{
    color:white
  }
}
`;

export const Navibar = () => {
  return (
    <>
      <Style>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="ms-5 me-5">MAV</Navbar.Brand> {/*LOGO */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Svernut Menu */}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/*Razvernut Menu */}
              <Nav className="me-auto ">
                <Nav.Link>
                  <Link className="ms-3 text-decoration-none" to="/">
                    Home
                  </Link>
                  <Link className="ms-3 text-decoration-none" to="/users">
                    {' '}
                    Users
                  </Link>
                  <Link className="ms-3  text-decoration-none" to="/about">
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
          </Container>
        </Navbar>
      </Style>
    </>
  );
};
