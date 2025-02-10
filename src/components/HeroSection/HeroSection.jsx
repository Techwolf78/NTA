import React from 'react';
import { Carousel } from 'react-bootstrap';
import heroImage1 from "../../assets/images/baner-a.jpeg"; 
import heroImage2 from "../../assets/images/baner-b.jpeg"; 
import './HeroSection.css';  

export default function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={heroImage1} alt="Hero Image 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={heroImage2} alt="Hero Image 2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
