import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import opthea from '../../Assets/img/Icons_larger_Operating-theatres.png.jpg'

const Operatingtheatres = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="opthea-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>OPERATION THEATRES</h1>
                                        <p>Venkataeswara Hospitals is equipped with three Operation Theatres. Two theatres are utilised for major procedures, while the third caters to more minor surgical procedures. The main feature of the theatres is the
                                            <span>0.3-micron</span> filter fitted with laminar airflow systems. This reduces infection contracted during procedures to the minimum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p className='image-center'>
                        <picture>
                            <img src={opthea} alt="speech" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <h4>Theatre No. 1</h4>
                    <p><strong>Procedures undertaken:</strong></p>
                    <ul className="list">
                        <li>Orthopaedic (including Joint Replacement)</li>
                        <li>Neurological</li>
                        <li>Cardiothoracic & Vascular Surgery</li>
                        <li>Plastic and Cosmetic Surgery</li>
                        <li>Ophthalmological Surgery</li>
                    </ul>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6 ">
                    <h4>Theatre No. 2</h4>
                    <p><strong>Procedures undertaken:</strong></p>
                    <ul className="list">
                        <li>Laparoscopic Surgery</li>
                        <li>General Surgery</li>
                        <li>OBG (Obstetrics and Gynaecology) Surgery</li>
                        <li>Gastroenterological Surgery</li>
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <h4>Theatre No. 3</h4>
                    <p><strong>Procedures undertaken:</strong></p>
                    <ul className="list">
                        <li>Endoscopic Procedures</li>
                        <li>Minor Surgical Procedures</li>
                    </ul>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 order-lg-first innerpad">
                    <h4>All Operation Theatres are equipped with:</h4>
                    <ul className="list">
                        <li>Harmonic Scalpel</li>
                        <li>C-Arm</li>
                        <li>Anaesthesia Ventilator</li>
                        <li>Laparoscopy Instruments</li>
                        <li>Diathermy</li>
                        <li>Adequate Surgical instruments</li>
                    </ul>
                    <h4>Special Features</h4>
                    <p>The Theatre functions round-the-clock on a regular basis, and has centralised Uninterrupted Power Supply to ensure patient safety.</p>
                </div>
                <div className="col-lg-6 order-first background2 ">
                    <h4>HYGIENE</h4>
                    <ul className="list">
                        <li>Bio-medical waste is segregated well</li>
                        <li>A very good waste disposal system is in force</li>
                        <li>The infection rate in the Hospital is Zero Percent</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Operatingtheatres
