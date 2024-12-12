import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import chairman from '../../Assets/img/chairman.jpg'
import './Aboutus.css';

const Founderhistoryvh = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="found-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>FOUNDER OF VENKATAESWARA HOSPITALS</h1>
                                        <h4>Dr.Thillai Vallal</h4>
                                        <p>Venkataeswara Hospitals was founded in 2003 by leading cardiologist Dr. Thillai Vallal with the aim to provide high-quality, holistic medical services to the people of Chennai and beyond at a reasonable price.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 background">
                    <p>
                        <picture>
                            <img src={chairman} alt="chairman" style={{width:"220px",height:"220px"}}/>
                        </picture>
                        <br />
                        Dr. Thillai Vallal hails from Tirunelveli District, Tamil Nadu. He completed his Post Graduation, MD (Int. Med)., D.M. (Cardio.) from Madras Medical College under the tutelage of leading physicians such as Dr. (Prof.) K.V. Thiruvengadam MD, FRCP, and Dr. (Prof.) A.M. Selvaraj MD, FRCP, in 1987.
                        Dr. Thillai Vallal subsequently undertook and completed his Doctorate in Cardiology from Madras Medical College in 1992.
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Dr. Thillai Vallal is an active member of the Cardiological Society of India, the Association of Physicians of India, Indian Medical Association and European Society of Cardiology. Despite his very busy schedule, he is a senior teaching faculty at The Tamil Nadu Dr. M.G.R. Medical University and is the Chairman of Allied Health Sciences (which includes 37 Allied Medical Specialties).</p>
                    <p>He has been specially invited by The Tamil Nadu Dr. M.G.R Medical University to improve the quality of education offered to medical students and junior doctors. Thanks to his initiatives, a subject has been introduced by the University to educate young doctors not only on the prevention of lifestyle diseases but also on the ways and means of communicating this information to the general public in order to increase awareness of disease mechanisms and how to prevent their transmission.</p>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 order-lg-first innerpad">
                    <p>After the completion of his Doctorate in Cardiology, Dr. Thillai worked as a Consultant in a few major tertiary care hospitals. He soon realised that there was a marked difference in the quality of care provided and the cost associated, in each of these three hospitals. Therefore, he decided, he would start a Cardiac Care Centre with multispeciality services, with the aim to embrace high technology and close monitoring with the utmost care for patient safety, while always keeping costs as low as possible.</p>
                    <p><iframe src="https://www.youtube.com/embed/60GJx1ktbA0" style={{width:"560px",height:"315px"}} frameborder="0"></iframe></p>
                </div>
                <div className="col-lg-6 order-first background2 ">
                    <p>Venkataeswara Multispeciality Hospitals was founded in 2003 and very quickly became popular, not just in Chennai but also with the people of the entire state of Tamil Nadu and neighbouring states as well.</p>
                    <p>Thanks to the patronage of our patients, Venkataeswara Hospitals is now looking forward to its further expansion and will be increasing its bed capacity and adding high-end diagnostic facilities including a 128-slice cardiac/general CT scan, a state-of-the-art Cardiac Cath Lab, Operation Theatres, Dialysis Centre and more, to help serve our patients holistically and comprehensively.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Founderhistoryvh
