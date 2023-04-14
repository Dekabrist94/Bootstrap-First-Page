import React from 'react';
import { Carousel } from 'react-bootstrap';
import Milana from '../src/img/milana.jpg';
export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: '600px' }}>
          {' '}
          {/*npm install --save styled-components*/}
          <img className="d-block " src={Milana} alt="First Slide" />
          <Carousel.Caption>
            <h3>My Best Works</h3>
            <p>2023</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
