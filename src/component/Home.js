import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import logo from '../image/movie_db_logo.svg'

const Home = props => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let items = props.items.slice(10, 16);

  return (
    <div className="home">
      <div className="home-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {items.length > 0 &&
        <div className="subject">
          <h1 className="home-title">Top Rated Movies to Discover</h1>
          <Link to="/movie">
            <Button size="lg" variant="success">Explore More...</Button>{' '}
          </Link>
        </div>}
      <Carousel className="slides" activeIndex={index} onSelect={handleSelect}>
        {items.map((it, index) => (
          <Carousel.Item className="slide" key={index}>
            <img className="home-image poster"
              src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
              alt={it.title}
            />
            <img className="home-image backdrop"
              src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
              alt={it.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {items.length > 0 && <h3 className="home-subtitle">Explore more to like, block movies and browse movie details.</h3>}
    </div>
  );
};

export default Home;
