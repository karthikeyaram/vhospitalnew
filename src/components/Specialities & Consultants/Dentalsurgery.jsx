import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Dentalsurgery = () => {
    return (
        <>
            <Nav/>
            <div className="inner-asth">
                <div className="dentel_banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>DENTAL SURGERY</h1>
                                        <p>Keep your smile straight and your teeth healthy with the best surgical dental care with our Dental Surgery team here at Venkataeswara Hospitals!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background ">
                    <p>A smile is a curve that sets everything straight! Keep your smile joyful and your teeth healthy with expert dental care. At Venkataeswara Hospitals, our focus is the holistic care of each of our patients. That’s why our experienced dental surgeon team is ready to provide round-the-clock surgical support to patients of the Dental Department of Venkataeswara Hospitals.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Our dental surgeons have the training, expertise, equipment and experience to perform various routine and specialised dental surgical procedures, including root canal treatments, tooth extractions, wisdom teeth removal, dental implants, cleft lip and cleft palate repair, etc.</p>                    
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dentalsurgery
