import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Oncology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="oncolmedi-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>MEDICAL ONCOLOGY</h1>
                                        <p>This super speciality is concerned with the diagnosis, staging and medical treatment of various cancers. This includes inpatient and outpatient care of cancer patients, including the provision of chemotherapy and radiotherapy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>With the increasing incidence of cancer, expertise in medical oncology has become the need of the hour. Thankfully, with novel therapies that have emerged in the recent past, it is now possible to “cure” many more patients than it has ever been before. It is also possible to reduce their suffering substantially.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>We at Venkataeswara Hospitals offer both day care or outpatient care as well as inpatient care for cancer patients, providing chemotherapy, radiology and surgery aftercare through our Medical Oncology Department. Patients who receive chemotherapy or radiotherapy at Venkataeswara Hospitals as inpatients are followed up with carefully via the Outpatient Department.</p>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 order-lg-first innerpad">
                    <p>Total Adult Medical Care is provided by our three senior medical oncologists, who assess, treat and obtain specialist advice when required in order to provide the best possible care for our patients.</p>
                    <p>Our busy and efficient Outpatient Department sees about 100 cancer patients a day.</p>
                </div>
                <div className="col-lg-6 order-first background2">
                    <p>Our counsellors provide much-needed psychological support to both patients and their families. Those suffering from advanced stages of the disease are offered palliative care.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Oncologist Specialists</h4>
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

export default Oncology
