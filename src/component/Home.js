import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Carousel1">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Link className="link" to="/movie">
            All Movie List
          </Link>
          <img
            className="d-block w-100"
            src="data:image/png;base64,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"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Link className="link" to="/like">
            Like Movie List{" "}
          </Link>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFQl82_AtsNyZfmmoqNsRLcw0qgSioa1lD1Q&usqp=CAU"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Link className="link" to="/block">
            Block Movie List
          </Link>
          <img
            className="d-block w-100"
            src="https://img95.699pic.com/element/40131/4507.png_860.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
