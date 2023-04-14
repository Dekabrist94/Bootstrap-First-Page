import React, { useState } from 'react';
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap';
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <Button variant="primary" className=" me-2 " onClick={handleShow}>
                  LogIn
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Sign In
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Style>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter E-Mail:" />
              <Form.Text className="text-muted">Some Text is Living Here</Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Enter Password:" />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Chec type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
