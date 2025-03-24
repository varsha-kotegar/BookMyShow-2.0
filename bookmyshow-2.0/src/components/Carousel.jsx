import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"; 

const MovieCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://via.placeholder.com/1200x400" alt="First slide" />
        <Carousel.Caption>
          <h3>Avengers: Endgame</h3>
          <p>Experience the epic conclusion.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://via.placeholder.com/1200x400" alt="Second slide" />
        <Carousel.Caption>
          <h3>Spider-Man: No Way Home</h3>
          <p>Multiverse adventure!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
