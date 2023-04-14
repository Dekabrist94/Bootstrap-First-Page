import React from 'react';
import Slider from '../Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Milana from '../img/milana.jpg';
export const Home = () => {
  return (
    <>
      <Slider />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="Milana" />
              <Card.Body>
                <Card.Title>MAV</Card.Title>
                <Card.Text>SOME TEXT AGAIN</Card.Text>
                <Button variant="primary">Gotta GO!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
