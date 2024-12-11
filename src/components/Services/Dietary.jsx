import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import diet from '../../Assets/img/Icons_larger_dietary-svcs.png.jpg'
import svcs from '../../Assets/img/Icons_larger_dietary-svcs.png.jpg'
const Dietary = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="diet-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>DIETARY SERVICES</h1>
                                        <p>Our full-time dietary department at Venkataeswara Hospitals is responsible for providing the healthiest food possible for both patients and visitors.</p>
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
                            <img src={diet} alt="speech" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>With a full-time dietary department, comprising qualified and experienced dietitians, Venkataeswara Hospitals provides both Inpatient and Outpatient Dietary Care Services. The department assesses nutritional needs, educates, and ensures that every patient receives the right diet.</p>
                    <p>A good diet can help your body to:</p>
                    <ul className="list">
                        <li>feel stronger, healthier and have more energy</li>
                        <li>handle life stress</li>
                        <li>fight off infections</li>
                        <li>recover and heal faster</li>
                        <li>cope with treatment side effects</li>
                    </ul>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 order-lg-first innerpad">
                    <p>Our dietitians have the expertise to advise patients undergoing treatment in the following clinical areas:</p>
                    <ul className="list">
                        <li>Cardiology</li>
                        <li>Diabetes</li>
                        <li>Respiratory diseases</li>
                        <li>Renal failure</li>
                        <li>Liver failure</li>
                        <li>Post-operative care</li>
                        <li>Total parental feeding</li>
                        <li>Burns</li>
                        <li>Attempted weight loss or weight gain</li>
                    </ul>
                </div>
                <div className="col-lg-6 order-first background2">
                    <p className="image-center1">
                        <picture>
                            <img src={svcs} alt="svcs" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dietary
