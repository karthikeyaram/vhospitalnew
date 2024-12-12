import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Insurance = () => {
    const insurance = [
        { id: 1, list: "TTK Healthcare TPA Pvt. Ltd." }, { id: 2, list: "Medi Assist India Pvt. Ltd." },
        { id: 3, list: "Raksha Health Insurance TPA Pvt. Ltd." }, { id: 4, list: "United Healthcare Parekh Insurance TPA Pvt. Ltd." },
        { id: 5, list: "Vipul Medcorp Insurance TPA Pvt. Ltd." }, { id: 6, list: "Good Health Insurance TPA Ltd." },
        { id: 7, list: "MD India Healthcare Insurance TPA Pvt. Ltd." }, { id: 8, list: "MedSave Health Insurance TPA Ltd." },
        { id: 9, list: "Family Health Plan TPA Ltd." }, { id: 10, list: "E-Meditek (TPA) Services Ltd." },
        { id: 11, list: "Paramount Health Services & Insurance TPA Pvt. Ltd." }, { id: 12, list: "Medicare TPA Pvt. Ltd." },
        { id: 13, list: "Gennis India TPA Pvt. Ltd." }, { id: 14, list: "Park Mediclaim Consultant Pvt. Ltd." },
        { id: 15, list: "Dedicated Healthcare Service TPA Pvt. Ltd." }, { id: 16, list: "Alankit Healthcare TPA Ltd." },
        { id: 17, list: "Health India TPA Pvt. Ltd." }, { id: 18, list: "Safeway TPA Pvt. Ltd." },
        { id: 19, list: "East West Assist TPA Pvt. Ltd." }, { id: 20, list: "Sri Gokulam Health Services TPA (P) Ltd." }
    ];
    const insurance2 = [
        { id: 1, list: "Star Health and Allied Insurance" }, { id: 2, list: "Future Generali Insurance" },
        { id: 3, list: "Chola MS General Insurance" }, { id: 4, list: "IFFCO-Tokio General Insurance" },
        { id: 5, list: "HDFC ERGO General Insurance Company Ltd." }, { id: 6, list: "Religare Health Insurance Company Ltd." },
        { id: 7, list: "Apollo Munich" }, { id: 8, list: "Bajaj Allianz" }
    ];
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="insurance-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>INSURANCE SERVICES</h1>
                                        <p>We have tie-ups with the following insurance companies and TPAs to facilitate cashless medical facilities for our patients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h4>List of TPAs we partner with</h4>
                    <ul className="list">
                        {insurance.map((item) => (
                            <li key={item.id}>{item.list}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6 pad-left">
                    <h4>LIST OF INSURANCE COMPANIES</h4>
                    <ul className="list">
                        {insurance2.map((item2) => (
                            <li key={item2.id}>{item2.list}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Insurance;
