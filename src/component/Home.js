import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
/////我不知道为什么这里的异步数据导不进去，所以我用的刚好有的link
const Home = props => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // let items=props.items
  //let mvOne=items[0];
  let imOne = "/ejdD20cdHNFAYAN2DlqPToXKyzx.jpg";
  let imTwo = "/svYzz6A6xleZv5toTLAhigXd1DX.jpg";
  let imThree = "/avedvodAZUcwqevBfm8p4G2NziQ.jpg";
  return (
    <div className="Carousel1">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="home-image"
            src={`https://image.tmdb.org/t/p/w500${imOne}`}
            alt="Third Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-image"
            src={`https://image.tmdb.org/t/p/w500${imTwo}`}
            alt="Third Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-image"
            src={`https://image.tmdb.org/t/p/w500${imThree}`}
            alt="Third Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-image"
            src="https://tse1.mm.bing.net/th?id=OIP.nsQ_CfYGJyRADWb1BERmqQAAAA&pid=Api&P=0&w=204&h=153"
            alt="Fourth Slider"
          />

          <Link className="home-link" to="/movie">
            Explore More...
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
