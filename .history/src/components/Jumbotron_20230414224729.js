import React from 'react';
import { Jumbotron as Jumbo, Containerr } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Jumbotron = () => (
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1>MAV</h1>
      <p>PHOTOGRAPHER</p>
    </Container>
  </Jumbo>
);

export default Jumbotron;
