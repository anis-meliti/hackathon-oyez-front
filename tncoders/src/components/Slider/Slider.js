import React, { useState } from "react";
// ****** bootStrap******
import { Carousel } from "react-bootstrap";
// ******Style******
import "./slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="layer">
          <img
            className="d-block w-100"
            src={require("../../assets/career_centerjpg.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Choose another career </h3>
            <p>you can always start over</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="layer">
          <img
            className="d-block w-100"
            src={require("../../assets/career-change.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>You only have to change your career into what you want</h3>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="layer">
          <img
            className="d-block w-100"
            src={require("../../assets/career.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>With us you can find a new way </h3>
            <p>With us you just have to search your new field of expertise</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
