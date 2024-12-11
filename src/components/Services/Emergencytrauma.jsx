import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Emergencytrauma = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="emergen-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>EMERGENCY AND TRAUMA</h1>
                                        <p>As a Trauma Care Centre, Venkataeswara Hospitals has the resources to take care of complex, critical injuries. Our Trauma Centre is equipped with all required technology and a full complement of trained specialists and skilled trauma care providers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Our 24-hour emergency casualty ward is manned by a team of trained and experienced Casualty Medical Officers and Nurses, who not only receive continual and regular medical education but are also actively involved in training other staff.</p>
                    <p>The emergency ward at Venkataeswara Hospitals has the capability to handle all types of polytrauma, mass trauma and all other kinds of medical emergencies, including cardiac emergencies, poisonings etc.</p>
                </div>
                <div className="col-lg-6 innerpad">

                    <p>Teamwork is the speciality of our Emergency Casualty and Trauma Unit. A team of all required specialists is assembled to provide the highest level of care necessary in any emergency situation.</p>
                    <p>Our Trauma Centre focuses on systematic assessment, effective communication and rapid manpower mobilisation in order to save lives and reduce suffering and disability.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Emergencytrauma
