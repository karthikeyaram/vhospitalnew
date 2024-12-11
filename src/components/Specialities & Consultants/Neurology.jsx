import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Neurology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="neuro-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Neurology</h1>
                                        <p>Venkataeswara Hospitals provides treatment for the entire range of neurological problems that could impact adult and paediatric patients. Our highly experienced team of physicians provide quality neurological inpatient care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Our neurologists treat various neurological conditions routinely, including stroke, intracerebral haemorrhage, Parkinson’s disease, seizures, peripheral neuropathies, meningoencephalitis and encephalopathies.</p>
                    <p>Many comatose patients are admitted to Venkataeswara Hospitals, and our experienced team helps to care for and manage the health of these patients.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Neuro-Rehabilitation is a central aspect of care for neurological conditions that leave behind some form of physical disability. Venkataeswara Hospitals’ multidisciplinary neuro-rehabilitation team includes a neurologist, physiotherapist, a speech and language therapist and an occupational therapist. This team meets regularly to discuss problems faced by individual patients and offer rehabilitation solutions to patients in need, getting them back to their best possible physical condition at the earliest.</p>
                </div>
            </div>
            <div className="consultant-pad">
                <h4>Our Neurologist Specialists</h4>
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

export default Neurology
