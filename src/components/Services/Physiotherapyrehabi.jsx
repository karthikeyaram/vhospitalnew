import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import physio from '../../Assets/img/Icons_larger_physiotherapy.png.jpg'

const Physiotherapyrehabi = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="physio-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>PHYSIOTHERAPY & REHABILITATION</h1>
                                        <p>Physiotherapy plays a vital role in pain reduction and rehabilitation of patients suffering from Orthopaedic, Neurological & Cardiopulmonary diseases, and other impairments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                   <p>The members of the Physiotherapy team at Venkataeswara Hospitals are highly efficient and dedicated at assessing and treating the patients. The Department is well-equipped, with all the latest modalities to provide the highest standard of treatment in the field. We are committed to help society by providing the very best quality of treatment.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <h4>We specialise in rehabilitation for:</h4>                    
                    <ul className="list">
                        <li>Musculoskeletal pain relief</li>
                        <li>Orthopaedic issues or trauma</li>
                        <li>Post-operative pain relief</li>
                        <li>Ambulation & mobilisation</li>
                        <li>Stroke & paralysis</li>
                        <li>Rehabilitation</li>
                        <li>Chest physiotherapy</li>
                        <li>ICU care</li>
                    </ul>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6 ">
                    <h4>The physiotherapy department is well-equipped with all necessary modalities, including:</h4>
                    
                    <ul className="list">
                        <li>Short wave diathermy</li>
                        <li>Ultrasound therapy</li>
                        <li>IFT</li>
                        <li>TENS</li>
                        <li>Traction</li>
                        <li>Laser</li>
                        <li>Paraffin wax therapy</li>
                        <li>Electrical stimulation</li>
                        <li>Palatile stimulation</li>
                        <li>Continuous passive motion (CPM)</li>
                        <li>Phonophoresis</li>
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <h4>Advanced treatments are also offered, including:</h4>
                    <ul className="list">
                        <li>Manipulative physiotherapy</li>
                        <li>Joint mobilisation & manipulation</li>
                        <li>Soft tissue mobilisation & manipulation</li>
                        <li>Cyriax deep friction massage</li>
                        <li>Trigger point therapy</li>
                    </ul>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 order-lg-first innerpad">
                    <h4>Other physiotherapy services on offer include:</h4>
                    <ul className="list">
                        <li>Fitness consultation</li>
                        <li>Ergonomic advice</li>
                        <li>Orthotics/Splinting</li>
                    </ul>
                    <h4>Special Features</h4>
                    <p>The Theatre functions round-the-clock on a regular basis, and has centralised Uninterrupted Power Supply to ensure patient safety.</p>
                </div>
                <div className="col-lg-6 order-first background2 ">
                   <p className="image-center1">
                    <picture>
                        <img src={physio} alt="" style={{width:"200px",height:"200px"}} />
                    </picture>
                   </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Physiotherapyrehabi
