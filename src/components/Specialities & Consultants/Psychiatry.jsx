import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Psychiatry = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="psycha-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>PSYCHIATRY</h1>
                                        <p>The mind is an organ, as unique as any other, and at Venkataeswara Hospitals, disorders affecting the mind are treated with the same care and diagnostic rigour as those of any other organ system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Psychiatrists are trained medical doctors with expertise in complex mental disorders such as schizophrenia and bipolar disorder. They focus more on the underlying neurochemistry of the patient rather than the social and psychological factors impacting the patient, and typically prescribe medical treatments rather than psychotherapy.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>The Venkataeswara Hospitals’ psychiatrist consultants diagnose, treat and prescribe suitable medications where required, to those suffering from mental illnesses or conditions.</p>
                    <p>Since psychological diagnosis is often a process of elimination, our teams of psychiatrists, psychologists and counsellors work together to ensure that you get the best in mental healthcare.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Psychiatrist Specialists</h4>
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

export default Psychiatry
