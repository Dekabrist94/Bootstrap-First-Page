import React from 'react';
import Slider from '../Slider';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
