import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Paediatrics = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="paediat-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Paediatrics</h1>
                                        <p>Prevention of diseases is our passion… especially when our patients are children! Children have unique physical, emotional and medical needs, and we are proud to administer care for our youngest and most vulnerable patients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>With a strong emphasis on holistic healthcare, Venkataeswara Hospitals’ paediatric consultants are trained, experienced, and above all, compassionate.</p>
                    <p>As a baby grows and develops, a healthcare provider is essential for regular baby and child care, as well as specifically when illnesses or injuries occur. A paediatrician, family practice physician, or paediatric nurse practitioner could be your baby’s primary care provider.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Children are not just small adults – in their growing years, children’s healthcare needs are unique. Visit a congenial and experienced paediatric healthcare professional to provide your children with specialised care.</p>
                    <p className='strongtag'><strong>The Well Baby and Immunisation Clinics</strong> run regularly by our paediatricians are very well-attended. Both inpatient and outpatient paediatric services are available at Venkataeswara Hospitals, seven days a week.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Paediatric Specialists</h4>
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

export default Paediatrics
