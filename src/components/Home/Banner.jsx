import React, { useState, useEffect } from 'react';
import './Banner.css'


const images = [
  require('../../Assets/banner/Banner-1-heart.jpg'),
  require('../../Assets/banner/Banner-1-Emergency-2.jpg'),
  require('../../Assets/banner/Banner-1-Multispeciality.jpg'),
  require('../../Assets/banner/Banner-1-oncology-1.jpg')
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 4000);
      return () => clearInterval(slideInterval);
    }, []);
  
    return (
      <div className="banner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className="arro " onClick={prevSlide}>
        
        </button>
        <button className="arro " onClick={nextSlide}>
        
        </button>
      </div>
    );
  };  

export default Banner;