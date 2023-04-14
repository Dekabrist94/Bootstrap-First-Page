import React from 'react';
import { Carousel } from 'react-bootstrap';
import Milana from '../img/milana.jpg';
export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-30" src={Milana} alt="First Slide" />
          <Carousel.Caption>
            <h3>My Best Works</h3>
            <p>2023</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}