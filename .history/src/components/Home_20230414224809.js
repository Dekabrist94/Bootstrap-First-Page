import React from 'react';
import Slider from '../Slider';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Milana from '../img/milana.jpg';
import Jumbotron from './Jumbotron';
export const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Milana} />
              <Card.Body>
                <Card.Title>MAV</Card.Title>
                <Card.Text>SOME TEXT AGAIN</Card.Text>
                <Button variant="primary">Gotta GO!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Milana} />
              <Card.Body>
                <Card.Title>MAV</Card.Title>
                <Card.Text>SOME TEXT AGAIN</Card.Text>
                <Button variant="primary">Gotta GO!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Milana} />
              <Card.Body>
                <Card.Title>MAV</Card.Title>
                <Card.Text>SOME TEXT AGAIN</Card.Text>
                <Button variant="primary">Gotta GO!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </Jumbotron>
    </>
  );
};
