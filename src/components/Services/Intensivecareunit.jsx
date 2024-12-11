import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import icu from '../../Assets/img/Icons_larger_ICU.png.jpg'

const Intensivecareunit = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="icu-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>INTENSIVE CARE UNIT</h1>
                                        <p>Venkataeswara Hospitals has a 9-bedded closed ICU. We follow certain cardinal principles, in order to ensure hygiene and comprehensive care within the ICU.</p>
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
                            <img src={icu} alt="speech" style={{ width: "200px", height: "200px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Every bed in the Venkataeswara Hospitals ICU is equipped with three state-of-the-art multi-parameter monitors (HR, ECG, RR, SPO2, IBP, NIBP, Temp./ETCO2), with four ventilators and with bedside X-ray USG, 2-D Echo, and a Defibrillator. Our ICU is managed by intensivists round the clock, and we maintain a very high Nurse:Patient ratio of 1:1.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h4>Procedures performed in the ICU:</h4>
                    <ul className="list">
                        <li>Internal jugular vein ventilatory support</li>
                        <li>External jugular vein ventilatory support</li>
                        <li>Subclavian catheterisation</li>
                        <li>Arterial catheterisation (radial and femoral)</li>
                        <li>Thrombolysis</li>
                        <li>Endoscopy and Colonoscopy</li>
                        <li>Post-operative care</li>
                        <li>Tracheostomy</li>
                        <li>Pericardiocentesis</li>
                        <li>Pleurocentesis</li>
                        <li>Pleurodesis</li>
                        <li>Haemodialysis and Peritoneal dialysis</li>
                        <li>Suprapubic cystostomy</li>
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <h4>Cardinal Principles</h4>
                    <ul className="list">
                        <li>Maintaining sterility</li>
                        <li>Management of Deep Venous Thrombosis</li>
                        <li>Management of Hypothermia or Hyperthermia</li>
                        <li>Management of Hypoventilation or Hyperventilation</li>
                        <li>Nutrition and Dietitics
                            <ul className="list">
                                <li>External and parenteral feeding</li>
                                <li>Supplementing minerals, vitamins, micro and macronutrients</li>
                                <li>Management of Hypoglycaemia or Hyperglycaemia</li>
                            </ul>
                        </li>
                        <li>Protection from VAP</li>
                        <li>Following evidence-based practice</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Intensivecareunit
