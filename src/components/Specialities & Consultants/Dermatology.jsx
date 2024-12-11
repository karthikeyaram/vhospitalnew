import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Dermatology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="dermo-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Dermatology</h1>
                                        <p>Dermatology is concerned with the diagnosis and treatment of diseases of the skin, hair, nails and adjacent mucous membranes. As well as medical problems, our dermatologists are also skilled in cosmetic dermatology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Skin is the largest organ in the body, and yet many of us ignore skin conditions such as acne or psoriasis or treat them based on advertisers’ recommendations! Visit an expert.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Our dermatology specialists at Venkataeswara Hospitals have the skills, experience and equipment to perform a wide range of dermatology treatments. We treat diseases such as psoriasis, warts, acne and freckles, as well as treating more cosmetic problems such as scars and age-related skin deterioration. Our treatments include cryosurgery, excisions and injections. More crucially, we diagnose and treat moles and skin cancer.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Dermatologist Specialists</h4>
                <div className="rowse doctor">
                    <div className="pods-ui-notice-front">
                        <p><strong>Pods Embed Error:</strong>WHERE contains SQL that is not allowed.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dermatology
