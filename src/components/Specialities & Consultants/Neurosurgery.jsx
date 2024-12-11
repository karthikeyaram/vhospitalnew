import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Neurosurgery = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="neurosur-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>NEUROSURGERY</h1>
                                        <p>Brain surgeries are highly technical and challenging surgical procedures. Our team of neurosurgeons at Venkataeswara Hospitals is experienced, qualified and has the expertise to perform all requisite neurosurgical procedures, as indicated and as required, with good results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Neurosurgical procedures are typically performed on the brain, spine and pituitary glands of patients suffering from diseases such as cancers of these organs, intracerebral haemorrhages, disc prolapse, trauma, or other similar disorders which seriously threaten the life and health of the patient, including surgical trauma.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Operating from Venkataeswara Hospitals’ three Operation Theatres, our Neurosurgery Department provides comprehensive and holistic surgical treatment support for patients (adult and paediatric) suffering from diseases and disorders pertaining to the brain and nervous system.</p>
                    <p>With technical support provided by the Hospital in terms of the latest equipment and facilities, procured to suit the latest in industry standards, the team achieves good results.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Neurosurgeon Specialists</h4>
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

export default Neurosurgery
