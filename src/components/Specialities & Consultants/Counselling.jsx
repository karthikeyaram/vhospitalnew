import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Counselling = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="counsel-sur-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>COUNSELLING</h1>
                                        <p>Mental health is as important as physical health, but not many Indians invest the time and care needed in their own and their family’s mental wellness. Visit a counsellor to discuss your concerns and improve your long-term mental health.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background ">
                    <p>In India, and even around the world, there is still a stigma placed upon those suffering from mental health issues such as depression, learning disorders, attention disorders, etc. Counsellors work with patients to improve holistic wellness and manage mental health issues.</p>
                    <p>Counsellors are qualified professionals who diagnose and help alleviate mental stress. At Venkataeswara Hospitals, we are passionate about your holistic health and well-being. Towards this, we have a dedicated counsellor consultant team that is available to support our patients when they need a sympathetic and impartial listener.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Treatment of mental disease can require a mixed approach that includes counselling, psychotherapy and drug prescription. Counsellors help you cope with mental health conditions, upsetting physical health conditions, bad news or traumatic life events, stress and issues of identity. Counsellors help you talk through your issues in order to help you find your own path to dealing with the emotional issues that are troubling you.</p>
                    <p className=''>Depend on Venkataeswara Hospitals’ tight-knit teams of counsellors, psychologists and psychiatrists to help you get the mental care you deserve.</p>                
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Counselling
