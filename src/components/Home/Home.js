import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/skid980.jpg";
import banner2 from "../../images/slid450.jpg";
import banner3 from "../../images/slid85858.jpg";
import "./Home.css";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="home">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className=" d-block w-100 h-25"
              src={banner1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h1>SHOP WITH FASHION STORE</h1>
            <p>Check out our limited S/S 2022</p>
            <button className="shop-now rounded-pill">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </div>

          <Carousel.Caption className="carousel-caption">
            <h1>SHOP WITH FASHION STORE</h1>
            <p>Check out our limited S/S 2022</p>
            <button className="shop-now rounded-pill">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img className=" d-block w-100" src={banner3} alt="Third slide" />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h1>SHOP WITH FASHION STORE</h1>
            <p>Check out our limited S/S 2022</p>
            <button className="shop-now rounded-pill">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Home;
