import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Cardiology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="cardio-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left-cardio">
                                    <div className="boxe">
                                        <h1>Cardiology and Preventive Cardiology</h1>
                                        <p>We believe that the best way to bring a smile to our patients’ faces is to touch their hearts with preventive and curative care.</p>
                                        <p>ONE HEART. ONE LIFE.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Venkataeswara Hospitals is proud to be home to a dedicated team of cardiologist consultants headed by celebrated cardiologist Dr. Su. Thillai Vallal. Our team provides 24×7 cover for all cardiac emergencies.</p>
                    <p>The experienced team of cardiologist consultants is backed by a dedicated team of intensivists and nurses in the Intensive Care Unit, as well as by a sincere and dedicated team of dietitians who give helpful, realistic advice on how to follow a cardiac diet.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>We at Venkataeswara Hospitals strive to promote heart health, in order to prevent heart diseases among patients in the community.</p>
                    <p>We believe that cardiac problems are completely predictable and preventable, and therefore strive to promote preventive cardiology as well as curative cardiology. That’s why, in 2011, we received approval from The Tamil Nadu Dr. M.G.R. Medical University to start a Fellowship Programme in Preventive Cardiology.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <p>We offer a range of services to help diagnose cardiac health issues at an early stage, including:</p>
                    <ul className='list'>
                        <li>2D Echocardiogram [Echo]</li>
                        <li>Electrocardiogram [ECG]</li>
                        <li>Treadmill Testing [TMT]</li>
                        <li>24 Hours ECG monitoring [Holter]</li>
                        <li>24 Hours Ambulatory BP Recording</li>
                        <li>Master Health Checkup [Executive]</li>
                    </ul>
                    <p>We maintain 24-hour computer recordings of ECGs and patient’s vital signs in order to keep a close watch on the patient’s condition and pick up transient cardiac arrhythmias or abnormalities.</p>
                </div>
                <div className="col-lg-6 pad-left3">
                    <p>Venkataeswara Hospitals conducts regular cardiac healthcare camps, especially on World Heart Day every year. Through these camps, we aim to reach out to the general public in order to educate them on their own cardiac care. We believe that heart attacks and cardiac issues are completely predictable and preventable.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Cardiologist Specialists</h4>
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

export default Cardiology
