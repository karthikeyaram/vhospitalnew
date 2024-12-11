import React, { useState, useEffect } from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import heart from '../../Assets/banner/Banner-1-heart.jpg';
import emergency from '../../Assets/banner/Banner-1-Emergency-2.jpg';
import multispeciality from '../../Assets/banner/Banner-1-Multispeciality.jpg';
import oncology from '../../Assets/banner/Banner-1-oncology-1.jpg';
// import ytbimage from '../../Assets/video-images/sddefault.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import smallicon from './smallicon'
import Content from './Content';
import quality1 from '../../Assets/img/our1.jpg'
import quality2 from '../../Assets/img/our2.jpg'
import quality3 from '../../Assets/img/our3.jpg'
import Socialmedia from '../Socialmedia/Socialmedia';




const images = [heart, emergency, multispeciality, oncology];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 4000); // 4 seconds delay for each slide
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, []);



  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  // Close the popup if clicked outside of the content area
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  const [activeIndexs, setActiveIndexs] = useState(0);

  const nextSlides = () => {
    setActiveIndexs((prevIndex) => (prevIndex + 1) % smallicon.length);
  };

  const prevSlide = () => {
    setActiveIndexs((prevIndex) =>
      prevIndex === 0 ? smallicon.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlides();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);



  return (
    <>
      <Nav />
      <div className="banner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${activeIndex === index ? 'active' : ''} `} //${index === activeIndex ? '' : 'contain-slide'}   
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <button className="arrow arrow-left" onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>
          &#10094;
        </button>
        <button className="arrow arrow-right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-6 cont">
            <div className="banner-left">
              <div className="box">
                <h1>Stay healthy.<br /> Stay happy.</h1>
                <p>At Venkataeswara Hospitals, your health is our passion! Meet our specialists for holistic, sustainable long-term care.</p>
              </div>
            </div>
          </div>
          <div className="col-6 video">
            <div className="video-position">
              <iframe
                src="https://www.youtube.com/embed/_Cl0JhIjwvo?rel=0&autohide=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
              {showPopup && (
                <div className="popup" onClick={handleOverlayClick}>
                  <div className="popup-content">
                    <button className="close-btn" onClick={handleClosePopup}>
                      &times;
                    </button>
                    <h5 style={{ color: "white" }}>Share</h5>
                    <p>
                      <Link to="https://www.youtube.com/watch?v=_Cl0JhIjwvo&t=1s" style={{ backgroundColor: "transparent", color: "white", textDecoration: "none", fontSize: "24px" }}>https://youtu.be/_Cl0JhIjwvo</Link>


                    </p>
                    <div className="social-icons">
                      <button
                        className="facebook"
                        onClick={() => handleRedirect('https://www.facebook.com')}
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="1x" />
                      </button>
                      <button
                        className="twitter"
                        onClick={() => handleRedirect('https://twitter.com')}
                      >
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                      </button>
                      <button
                        className="more"
                        onClick={() => handleRedirect('https://www.youtube.com/watch?v=_Cl0JhIjwvo&t=1s')}
                      >
                        <FontAwesomeIcon icon={faEllipsis} size="1x" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 cont">
            <div className="banner-left">
              <div className="box">
                <h1>BECAUSE WE CARE<br />FOR YOU</h1>
                <p>We are taking all the precautionary measures for your safety and good health. Let’s fight back COVID-19 by following general health guidelines and by staying at home. Life is precious than anything.</p>
              </div>
            </div>
          </div>
          <div className="col-6 video">
            <div className="video-position">
              <iframe
                src="https://www.youtube.com/embed/BT6LrWnUh1Y"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
              {showPopup && (
                <div className="popup" onClick={handleOverlayClick}>
                  <div className="popup-content">
                    <button className="close-btn" onClick={handleClosePopup}>
                      &times;
                    </button>
                    <h5 style={{ color: "white" }}>Share</h5>
                    <p>
                      <Link to="https://www.youtube.com/watch?v=_Cl0JhIjwvo&t=1s" style={{ backgroundColor: "transparent", color: "white", textDecoration: "none", fontSize: "24px" }}>https://youtu.be/BT6LrWnUh1Y</Link>


                    </p>
                    <div className="social-icons">
                      <button
                        className="facebook"
                        onClick={() => handleRedirect('https://www.facebook.com')}
                      >
                        <FontAwesomeIcon icon={faFacebookF} size="1x" />
                      </button>
                      <button
                        className="twitter"
                        onClick={() => handleRedirect('https://twitter.com')}
                      >
                        <FontAwesomeIcon icon={faTwitter} size="1x" />
                      </button>
                      <button
                        className="more"
                        onClick={() => handleRedirect('blob:https://www.youtube.com/625cdc43-fd76-4d57-bb94-6ba98407f335')}
                      >
                        <FontAwesomeIcon icon={faEllipsis} size="1x" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='specialties-section'>
        <div className="row">
          <div className="col-8 special">
            <h3>Welcome to Venkataeswara Hospitals!</h3>
            <p>At Venkataeswara Hospitals, a leading multispeciality hospital, is located in the heart of the city at Chamiers Road, Nandanam, Chennai, standing very close to the main arterial road of Mount Road (Anna Salai). We provide specialised and general medical services with professionalism, competence and a caring touch.</p>
          </div>
        </div>
      </div>
      <div className="slider-wrap">
        <div
          className="bx-wrapper"
          style={{ transform: `translateX(-${activeIndex * 320}px)` }}
        >
          {smallicon.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.Image} alt={`Slide ${index + 1}`} />
              <p>{image.label}</p>
            </div>
          ))}
        </div>
        <button className="arrow arrow-left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow arrow-right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="services">
        <Content />
      </div>
      <div className="quality">
        <div className="row">
          <div className="col-sm-4 pad">
            <img src={quality1} alt="quality" />
            <h4>QUALITY</h4>
            <p>Venkataeswara Hospitals is an ISO 9001:2008 certified organisation. We offer high-quality care and service to all our patients, supported by strong infrastructure and a galaxy of eminent academic and medical specialists.</p>
            <p className="read-moreborder1">
              <Link to="/" className="readmore">Read more</Link>
            </p>
          </div>
          <div className="col-sm-4 pad">
            <img src={quality2} alt="quality" />
            <h4>IMAGING</h4>
            <p>Our Imaging Department provides a wide range of medical imaging types and modalities. While most imaging is conducted during regular office hours, we ensure that care beyond hours is not restricted. Special attention is given to on-call emergencies as well.</p>
            <p className="read-moreborder1">
              <Link to="/" className="readmore">Read more</Link>
            </p>
          </div>
          <div className="col-sm-4 pad">
            <img src={quality3} alt="quality" />
            <h4>AMBULANCE</h4>
            <p>Our ambulances carry oxygen therapy equipment with defibrillators to provide immediate aid in the event of any deterioration in the health of patients while in our care.</p>
            <p className="read-moreborder1">
              <Link to="/" className="readmore">Read more</Link>
            </p>
          </div>
        </div>
      </div>
      <Socialmedia/>
      <Footer />
    </>
  );
};

export default Home;
