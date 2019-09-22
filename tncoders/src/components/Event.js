import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Event() {
  return (
    <Carousel className='carousel-cont'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.imgur.com/5cI4ZzA.png'
          alt='Oyez Hackathon'
        />
        <Carousel.Caption>
          {/* <h3>OYEZ HACKATHON</h3>
          <p>Rendez-vous le 21 Septembre</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.imgur.com/EFOJ9Wt.png'
          alt='Demo Day'
        />

        <Carousel.Caption>
          {/* <h3>DEMO DAY FULLSTACK JS</h3>
          <p>Rendez-vous le 04 Octobre</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Event;
