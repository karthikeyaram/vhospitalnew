import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Psychology = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="psychology-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>PSYCHOLOGY</h1>
                                        <p>Visit a psychologist for assistance in diagnosis and medical treatment of any mental health issues. Help us destroy the stigma attached to mental health diseases. Never allow your mental health to take second place!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p>Psychologists are trained in conducting psychological assessments and performing psychotherapy upon patients suffering from mental conditions which can often be treated without drugs, such as depression and anxiety. They prioritise psychotherapy as a line of treatment. Psychotherapy is a challenging path, but rewarding – and avoids the side effects of medical treatment.</p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Mental illnesses are not easy to diagnose and treat – treatment can require a mixed approach that incorporates both medical intervention and therapy.</p>
                    <p>In order to get you the mental healthcare that you need, therefore, our teams of psychologists, psychiatrists and counsellors work closely together with their patients and each other.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Psychology
