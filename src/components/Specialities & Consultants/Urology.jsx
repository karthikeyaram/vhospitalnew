import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Urology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="urology-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>UROLOGY</h1>
                                        <p>Urology is the branch of medicine that deals with the diagnosis, treatment and care of patients suffering from diseases relating to the male and female urinary tract systems and the male reproductive organ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Our Urology Department at Venkataeswara Hospitals treats various diseases and infections pertaining to the genitourinary tract of men and the urinary tract of women, including urinary incontinence, urinary tract infections, bladder prolapse, kidney diseases, kidney stones, etc.</p>
                    <p>All type of urological surgery procedures, including prostate removal and laparoscopic surgery procedures, are conducted successfully at Venkataeswara Hospitals.</p>
                </div>
                <div className="col-lg-6 innerpad">                    
                    <p>In the case of men, a urologist may also be called upon to help treat prostate issues or male infertility.</p>
                    <p>Paediatric urology is another highly technical field. Not all non-specialised paediatricians are fully equipped to handle urological issues that arise in children.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Urologist Specialists</h4>
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

export default Urology
