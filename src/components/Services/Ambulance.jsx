import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import ambulan from '../../Assets/img/Icons_larger_ambulance.jpg'
import './Service.css'

const Ambulance = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="ambu-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>AMBULANCE SERVICES</h1>
                                        <p>Your loved ones will be cared for professionally from the moment of pickup to reaching our hospital, with personalised, one-to-one attention at all times. We ensure that their journey with us is as fast and comfortable as possible.</p>
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
                            <img src={ambulan} alt="speech" style={{ width: "200px", height: "200px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Our ambulance carries oxygen therapy equipment with defibrillators, to provide emergency aid in the event of any deterioration of patients’ health en route or before they reach Venkataeswara Hospitals.</p>
                    <p>The ambulance is manned by our experienced paramedical staff, who are trained in advanced life support skills and emergency first aid.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <p>We provide top quality emergency care with the following equipment available in our ambulance, such as:</p>
                    <ul className="list">
                        <li>Monitor</li>
                        <li>Ventilator</li>
                        <li>Defibrillator</li>
                        <li>Infusion pumps</li>
                        <li>Continuous O2 supply</li>
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <ul className="list">
                        <li>24×7 services provided for all patient transport needs</li>
                        <li>Event cover and First Aid support for parties, sports activities and crowded gatherings</li>
                        <li>Patient transfers from home to hospital & from hospital to hospital</li>
                        <li>Fully equipped air-conditioned ambulance for patient comfort</li>
                        <li>Ambulance managed by highly trained medical personnel</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ambulance
