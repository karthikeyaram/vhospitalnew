import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import visit from '../../Assets/img/Icons_larger_Visiting-Consultants.png.jpg'

const Visitingconsultants = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="visit-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Visiting Consultants</h1>
                                        <p>Our in-house Consultants are ably supported by a team of Visiting Consultants. In addition to our strong team of full-time Specialists, Visiting Doctors provide additional care for patients in need.</p>
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
                            <img src={visit} alt="speech" style={{ width: "200px", height: "200px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Visiting doctors are able to split their time and abilities across multiple hospitals or clinics, thus caring for patients all around the city, or even the world. That’s why Venkataeswara Hospitals, and many other Hospitals, are happy to welcome visiting consultants from across specialisations, from time to time.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Visitingconsultants
