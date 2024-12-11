import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Nephrology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="neph-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>NEPHROLOGY</h1>
                                        <p>Nephrologists specialise in the functioning of the kidneys of both adult and paediatric patients. They deal with the diagnosis, treatment, cure and management of all diseases and disorders pertaining to the kidneys.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>The kidneys are at risk to be impacted by a number of diseases and disorders. Hypertension and diabetes can cause kidney damage. Kidney stone formation can be acutely painful and cause discomfort or even blockage during attempted urination. Other common renal diseases include improper processing or metabolism of fluids, electrolytes, acids and minerals, glomerular diseases, acute or chronic kidney diseases, and acute or chronic renal failure.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Our Nephrologist Consultant team is trained and equipped to handle these kidney-related complications and disorders. They are also prepared to manage kidney transplants when required, as well as managing end-stage renal disease through dialysis and palliative care.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Nephrologist Specialists</h4>
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

export default Nephrology
