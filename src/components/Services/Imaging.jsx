import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Imaging = () => {
  return (
    <>
    <Nav/>
    <div className="inner-asth">
                <div className="imaging-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left2">
                                    <div className="boxe">
                                        <h1>IMAGING SERVICES</h1>                                        
                                        <p>Our Imaging Department provides a wide range of medical imaging types and modalities. While most imaging is conducted during regular office hours, we ensure that care beyond hours is not restricted. Special attention is given to on-call emergencies as well.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>The Venkataeswara Hospitals Imaging Department offers a wide range of examinations, with a variety of imaging modalities. These imaging examinations include:</p>
                    <ul className="list">
                        <li>Radiography (X-rays)</li>
                        <li>Ultrasound</li>
                        <li>Echocardiography</li>
                        <li>Vascular Doppler Study</li>
                        <li>Computed Tomography (CT scan)</li>
                        <li>Nuclear Medicine</li>
                        <li>Angiography</li>
                        <li>Mammography</li>
                        <li>Obstetric scanning</li>
                    </ul>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Though the majority of examinations are performed during normal working hours, the Imaging Department provides services for on-call emergencies as well. We also have working agreements with a select few high-quality scan centres to provide quick, accurate evaluation of our patients when required.</p>
                    <p>Our priority at Venkataeswara Hospitals is to ensure that patients are treated as individuals. We provide care tailored to each patient’s individual needs with compassion and concern, in order to ensure the best outcome possible in every case.</p>
                </div>
            </div>
    <Footer/>
    </>
  )
}

export default Imaging
