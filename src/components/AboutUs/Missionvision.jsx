import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import vision from '../../Assets/img/Icons_larger_VisionMission.png.jpg'

const Missionvision = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="mission-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>MISSION AND VISION</h1>
                                        <p>Your Health, Our Passion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 background">
                    <p>
                        <picture>
                            <img src={vision} alt="chairman" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <h4>OUR VISION</h4>
                    <ul className="list">
                        <li>To become the most trusted hospital for saving lives in the region</li>
                        <li>To be the centre of excellence and apex institution for affordable healthcare</li>
                    </ul>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h4>OUR MISSION</h4>
                    <ul className="list">
                        <li>To deliver consistent, patient-centred, holistic and affordable healthcare</li>
                        <li>To contribute to a healthy society by consistently updating and improving available healthcare facilities</li>
                        <li>To deliver comprehensive advanced care for cardiovascular emergencies and comprehensive trauma care</li>
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <h4>OUR VALUES</h4>
                    <ul className="list">
                        <li>Comprehensive and quality care</li>
                        <li>Transparency</li>
                        <li>Teamwork and collaboration</li>
                        <li>Employer of choice</li>
                        <li>Self/group accountability</li>
                        <li>Integrity</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Missionvision
