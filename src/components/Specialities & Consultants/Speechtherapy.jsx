import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import speech from '../../Assets/img/Icons_larger_speech-therapist.png.jpg'

const Speechtherapy = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="speech-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>SPEECH THERAPY</h1>
                                        <p>Speech Therapy Consultants, or Speech Therapists, work with those who require support and assistance in speaking, especially those who were born with hearing or speaking impairments and especially with children. Expert Consultants are trained in speech pathology and speech correction.</p>
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
                                <img src={speech} alt="speech" style={{width:"200px",height:"200px"}}/>
                            </picture>
                        </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Speech therapy is a highly specialised field, specifically in order to support children in their journey towards a more “normal” life. This rewarding field of therapeutic medicine primarily aids auditorily challenged children or those who are psychologically wounded. Do consult one of our trained, experienced speech therapy consultants for more information.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Speechtherapy
