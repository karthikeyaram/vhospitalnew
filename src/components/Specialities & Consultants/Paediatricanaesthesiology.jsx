import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Paediatricanaesthesiology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="paediat-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Paediatric Anaesthesiology</h1>
                                        <p>Children and adults have very different requirements when it comes to their healthcare. Anaesthesiology, especially, is a field of medicine where paediatric care is quite different from adult care. Paediatric anaesthetists work with children in the Intensive Care Unit or the Operation Theatre, to provide local or general anaesthesia for patients suffering from pain or undergoing surgical treatment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Paediatric Anesthesiologists work with young patients, ranging from infants to teenagers, to help manage their pain before and after surgery. In addition, they monitor the patient’s vital signs during surgical procedures.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Venkataeswara Hospitals supports its Paediatric Anaesthesiology team with all required equipment and technical support. At Venkataeswara Hospitals, we believe that there’s nothing more important than holistic and universal healthcare, and we cherish our very youngest patients. Our team is well experienced with paediatric anaesthesia.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Paediatricanaesthesiology
