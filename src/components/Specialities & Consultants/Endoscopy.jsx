import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Endoscopy = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="endos-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>ENDOSCOPY</h1>
                                        <p>Endoscopy is a minimally invasive diagnostic procedure, which can cause mild pain similar to a sore throat or indigestion, depending on what kind of endoscopy is prescribed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Endoscopist Consultants are experienced with and trained in performing endoscopies on patients, typically for diagnostic purposes. The term “endoscopy” typically refers to an examination of the upper part of the gastrointestinal tract, also known as an oesophagogastroduodenoscopy.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Endoscopies can be conducted with or without anaesthetising the patient, based on the recommendation of the endoscopist and the clinician. Our endoscopist team supports the medical gastroenterologist consultant team to arrange for fast diagnoses and to improve the overall healthcare and wellness of our patients.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Endoscopy Specialists</h4>
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

export default Endoscopy
