import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import tie from '../../Assets/img/Icons_larger_TieUps.jpg'

const Tieups = () => {
    const insurance = [
        { id: 1, list: "Alankit Health Care" }, { id: 1, list: "TTK Health Care" }, { id: 1, list: "Subclavian Cathetarization" },
        { id: 1, list: "Paramount Health Care" }, { id: 1, list: "Family Health Care" }, { id: 1, list: "East West Assist" },
        { id: 1, list: "MedSave" }, { id: 1, list: "Genins" }, { id: 1, list: "Good Health Plan" },
        { id: 1, list: "Heritage India" }, { id: 1, list: "MD India" }, { id: 1, list: "Medi Assit" },
        { id: 1, list: "Raksha TPA" }, { id: 1, list: "Vipul Medi Corp" }, { id: 1, list: "Park Medi Corp" },
        { id: 1, list: "Safeway Mediclaim" }, { id: 1, list: "Dedicated Health Care" }, { id: 1, list: "Medicare TPA" },
        { id: 1, list: "Cholamandalam" }, { id: 1, list: "E-Meditek" }, { id: 1, list: "United India Insurance" },
    ]
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="tieups-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>TIE-UPS</h1>
                                        <p>We have tie-ups with the following insurance companies and corporates to support our patients by facilitating cashless medical facilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 background">
                    <p className='image-center'>
                        <picture>
                            <img src={tie} alt="Tieup" style={{ width: "300px", height: "300px" }} />
                        </picture>
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <h4>Insurance</h4>
                    <ul className="list">
                        {insurance.map((item)=>(
                                <li key={item.id}>{item.list}</li>                            
                        ))
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tieups
