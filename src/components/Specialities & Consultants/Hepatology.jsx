import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Hepatology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="hepo-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>HEPATOLOGY</h1>
                                        <p>Hepatology is the branch of medicine that deals with the diagnosis, care and treatment of diseases and disorders relating to the liver, biliary tree, gall bladder and pancreas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Hepatology is traditionally considered to be a subspeciality of gastroenterology. The care of the liver and associated organs, including the gall bladder and the pancreas, is an evolving field of study.</p>
                    <p>Experienced and expert hepatologists at Venkataeswara Hospitals support both inpatients and outpatients suffering from liver diseases such as jaundice, hepatitis, cirrhosis, liver tumours and abscesses, pancreatitis, gall bladder removal and more.</p>
                    <p>Hepatologists also perform liver function tests as part of our comprehensive diagnostic procedures.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>The liver performs the function of excretion of bile, bilirubin, cholesterol, hormones, and drugs. It also helps to metabolise fats, proteins, and carbohydrates, and produce bile. The liver is one of the major internal organs of the human body.</p>
                    <p>If you experience the following symptoms, visit a hepatologist for testing:</p>
                    <ul className='list'>
                        <li>Jaundice (visible yellowing of the skin, eyes and fingernails)</li>
                        <li>Abdominal pain and swelling</li>
                        <li>Chronic fatigue</li>
                        <li>Nausea or vomiting</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hepatology
