import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap/jumbotron';

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
