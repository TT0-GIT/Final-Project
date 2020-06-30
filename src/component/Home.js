import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
 
const Home = props => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let items = props.items.slice(0, 3);

  return (
    <div className="Carousel1">
      <h3>Top Rated Movie to Discover</h3>
      <Link to="/movie">Explore More...</Link>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {items.map((it, index) => (
          <Carousel.Item key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
              alt={it.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
