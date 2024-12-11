import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import health from '../../Assets/img/Icons_larger_Health-Checkup.png.jpg'
import Healthcontent from './Healthcontent'

const Healthcheckups = () => {


   
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="health-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>HEALTH CHECKUPS</h1>
                                        <p>Venkataeswara Hospitals offers comprehensive health checks that help you get started on the journey to good health. These checks are not only to assess your present health status, but also to screen for any risk factors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p className='image-center'>
                        <picture>
                            <img src={health} alt="speech" style={{ width: "200px", height: "200px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>As part of our healthcare packages, a number of tests are performed under the supervision of our expert doctors, based on your individual requirements, medical history and age group. Special care has been taken in designing the healthcare packages. Venkataeswara Hospitals’ health checkups offer you a range of screening programmes to suit your unique individual needs.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h4>OUR PROGRAMMES AIM TO:</h4>
                    <ul className="list">
                        <li>Target, reduce and eliminate health risks</li>
                        <li>Discover potential health problems</li>
                        <li>Promote holistic wellness</li>
                        <li>Facilitate prompt, expert and compassionate treatment of existing injuries and diseases</li>

                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <p>Venkataeswara Hospitals is committed to preventive care, as prevention is the best way to maintain and build a healthy society. Venkataeswara Hospitals offers comprehensive whole body health checkups that help you to identify your positives and negatives and to get started on the journey to good health.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-12 pad-left">
                    <div className="su-accordian su-u-trim accordian">
                        <br />                      
                        <Healthcontent/> 
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Healthcheckups
