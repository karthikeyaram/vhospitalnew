import React from 'react';
import './Home.css';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import Content from './Content';
import quality1 from '../../Assets/img/our1.jpg';
import quality2 from '../../Assets/img/our2.jpg';
import quality3 from '../../Assets/img/our3.jpg';
import Socialmedia from '../Socialmedia/Socialmedia';
import Banner from './Banner';
import Contactform from '../Socialmedia/Contactform';

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
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
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='specialties-section'>
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
      </div> */}

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
              <a href="/" className="readmore">Read more</a>
            </p>
          </div>
          <div className="col-sm-4 pad">
            <img src={quality2} alt="quality" />
            <h4>IMAGING</h4>
            <p>Our Imaging Department provides a wide range of medical imaging types and modalities. While most imaging is conducted during regular office hours, we ensure that care beyond hours is not restricted. Special attention is given to on-call emergencies as well.</p>
            <p className="read-moreborder1">
              <a href="/" className="readmore">Read more</a>
            </p>
          </div>
          <div className="col-sm-4 pad">
            <img src={quality3} alt="quality" />
            <h4>AMBULANCE</h4>
            <p>Our ambulances carry oxygen therapy equipment with defibrillators to provide immediate aid in the event of any deterioration in the health of patients while in our care.</p>
            <p className="read-moreborder1">
              <a href="/" className="readmore">Read more</a>
            </p>
          </div>
        </div>
      </div>
      <Socialmedia />
      <Contactform/>
      <Footer />
    </>
  );
};

export default Home;