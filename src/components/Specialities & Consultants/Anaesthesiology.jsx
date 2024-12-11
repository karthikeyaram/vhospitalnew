import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'


const Anaesthesiology = () => {
  return (
    <>
    <Nav/>
    <div className="inner-asth">
                <div className="anas-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left2">
                                    <div className="boxe">
                                        <h1>Anaesthesiology</h1>                                        
                                        <p>Our surgical team at Venkataeswara Hospitals is ably supported by a dedicated anaesthetist team. Our Anaesthetist Consultants help monitor vitals of the patient during, pre- and post-surgery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>No Surgical Department would be complete without anaesthetists! Anaesthesiologists perform perioperative care. Specialising in anaesthesiology, anaesthetists create anaesthetic plans and administer anaesthesia pre-, during and post-surgery.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>At Venkataeswara Hospitals, we don’t just believe in care for our patients. We believe that any procedure they have to undergo should be as comfortable and painless as possible. That’s where our experienced anaesthesiologist team comes into the picture.</p>
                </div>
            </div>
    <Footer/>
    </>
  )
}

export default Anaesthesiology
