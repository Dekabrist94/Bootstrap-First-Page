import React from 'react';
import { Carousel } from 'react-bootstrap';
import Milana from '../Milana.jpg';
export const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Milana} alt="First Slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
