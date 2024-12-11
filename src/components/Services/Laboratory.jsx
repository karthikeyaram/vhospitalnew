import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import lab from '../../Assets/img/Icons_larger_laboratory-svcs.png.jpg'

const Laboratory = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="lab-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>LABORATORY SERVICES</h1>
                                        <p>The Venkataeswara Hospitals laboratory plays an essential role in the quality and safety of patient care by providing accurate diagnostic and treatment information to caregivers and patients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Our laboratory is a comprehensive provider of lab testing, expert medical interpretation of specimens, and continuous innovation in laboratory technology. The laboratory collaborates with the various Departments of the Hospital, as well as other hospitals, to enhance patient care through efficient and effective laboratory operations.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Backed by a team of experts in each laboratory discipline, our Hospital Services Team has immediate and in-house access to broad-based resources. We provide comprehensive testing and diagnostic services.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <p>It is the goal of our laboratory to provide services to patients in need of medical testing as inpatients within our facility, or as outpatients, regardless of where their ordering physician may be located. We constantly strive to serve our patients with compassion, and care for them as if they were members of our own family.</p>
                </div>
                <div className="col-lg-6 pad-left">
                    <p>We specialise in meeting the diagnostic testing needs of outpatients, homebound patients and patients in long-term care facilities. Clinical tests conducted at Venkataeswara Hospitals laboratory are used to diagnose and treat patients, as well as for medical personnel to correlate their opinion for clinical evaluation.</p>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 order-lg-first innerpad">
                    <ul className="list">
                        <li>Full range of routine testing for hospitals</li>
                        <li>Collection & transportation support</li>
                        <li>Day-to-day operations management</li>
                        <li>Clinical, Biochemistry, Pathology and Microbiology services</li>
                        <li>Point of Care Testing (POCT)</li>
                        <li>Quality Assurance Programme</li>
                    </ul>
                </div>
                <div className="col-lg-6 order-first background2">
                    <p className="image-center1">
                        <picture>
                            <img src={lab} alt="svcs" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Laboratory
