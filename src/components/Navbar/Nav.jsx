import React from 'react';
import './Nav.css';
import logo1 from '../../Assets/logo/logo-2.png.jpg';
import logo2 from '../../Assets/logo/erlogo.png.jpg';
import { GoTriangleDown } from "react-icons/go";
import { Link } from 'react-router-dom';

const Nav = () => {
    const navbarData = [
        { id: 1, title: "Hypertension centre", path: "/hypertension-centre" },
        {
            id: 2, title: "Specialities & Consultants",
            sublist: [
                { id: 1.1, subtitle: "Allergy & Asthma", path: "/consultants-venkataeswara-hospitals/alergy-asthma" },
                { id: 1.2, subtitle: "Anaesthesiology", path: "/consultants-venkataeswara-hospitals/anesthetist" },
                { id: 1.3, subtitle: "Cardiology", path: "/consultants-venkataeswara-hospitals/cardiology" },
                { id: 1.4, subtitle: "Cardiothoracic Surgery", path: "/consultants-venkataeswara-hospitals/cardiothoracic-surgeon" },
                { id: 1.5, subtitle: "Counselling", path: "/consultants-venkataeswara-hospitals/counselor" },
                { id: 1.6, subtitle: "Dental Surgery", path: "/consultants-venkataeswara-hospitals/dental-surgeons" },
                { id: 1.7, subtitle: "Dental and Maxillo-facial Surgery", path: "/consultants-venkataeswara-hospitals/faciomaxillary-surgeons" },
                { id: 1.8, subtitle: "Dermatology", path: "/consultants-venkataeswara-hospitals/dermatology" },
                { id: 1.9, subtitle: "Diabetology", path: "/consultants-venkataeswara-hospitals/diabetology" },
                { id: 1.9, subtitle: "Endoscopy", path: "/consultants-venkataeswara-hospitals/endoscopists" },
                { id: 1.9, subtitle: "ENT Surgery", path: "/consultants-venkataeswara-hospitals/ent-surgeons" },
                { id: 1.9, subtitle: "Gastroenterological Surgery", path: "/consultants-venkataeswara-hospitals/gastroenterology-surgeons" },
                { id: 1.9, subtitle: "Gastroenterology", path: "/consultants-venkataeswara-hospitals/gastroenterology" },
                { id: 1.9, subtitle: "General and Internal Medicine", path: "/consultants-venkataeswara-hospitals/general-internal-medicine" },
                { id: 1.9, subtitle: "General and Laparoscopic Surgery", path: "/consultants-venkataeswara-hospitals/general-surgery" },
                { id: 1.9, subtitle: "Hepatology", path: "/consultants-venkataeswara-hospitals/hepatology" },
                { id: 1.9, subtitle: "Nephrology", path: "/consultants-venkataeswara-hospitals/nephrology" },
                { id: 1.9, subtitle: "Neurology", path: "/consultants-venkataeswara-hospitals/neurology" },
                { id: 1.9, subtitle: "Neurosurgery", path: "/consultants-venkataeswara-hospitals/neuro-surgeons" },
                { id: 1.9, subtitle: "Obstetrics and Gynaecology", path: "/consultants-venkataeswara-hospitals/obstetrics-gynaecology" },
                { id: 1.9, subtitle: "Oncological Surgery", path: "/consultants-venkataeswara-hospitals/oncological-surgeons" },
                { id: 1.9, subtitle: "Oncology", path: "/consultants-venkataeswara-hospitals/medical-oncology" },
                { id: 1.9, subtitle: "Ophthalmological Surgery", path: "/consultants-venkataeswara-hospitals/ophthalmological-surgery" },
                { id: 1.9, subtitle: "Ophthalmology", path: "/consultants-venkataeswara-hospitals/ophthal" },
                { id: 1.9, subtitle: "Orthopaedic Surgery", path: "/consultants-venkataeswara-hospitals/orthopaedic-surgeons" },
                { id: 1.9, subtitle: "Paediatrics", path: "/consultants-venkataeswara-hospitals/paediatrician-2" },
                { id: 1.9, subtitle: "Paediatric Anaesthesiology", path: "/consultants-venkataeswara-hospitals/Paediatricanaesthesiology" },
                { id: 1.9, subtitle: "Plastic Surgery", path: "/consultants-venkataeswara-hospitals/plastic-surgeon" },
                { id: 1.9, subtitle: "Psychiatry", path: "/consultants-venkataeswara-hospitals/psychartist" },
                { id: 1.9, subtitle: "Psychology", path: "/consultants-venkataeswara-hospitals/psychology" },
                { id: 1.9, subtitle: "Pulmonology", path: "/consultants-venkataeswara-hospitals/pulmonologist" },
                { id: 1.9, subtitle: "Rheumatology", path: "/consultants-venkataeswara-hospitals/rheumatology" },
                { id: 1.9, subtitle: "Speech Therapy", path: "/consultants-venkataeswara-hospitals/speech-therapist" },
                { id: 1.9, subtitle: "Urology", path: "/consultants-venkataeswara-hospitals/urology" },
                { id: 1.9, subtitle: "Vascular Surgery", path: "/consultants-venkataeswara-hospitals/vascular-surgeon" },
                { id: 1.9, subtitle: "Visiting Consultants", path: "/consultants-venkataeswara-hospitals/visiting-consultants" }

            ]
        },
        {
            id: 3, title: "Services",
            sublist: [
                { id: 3.1, subtitle: "Ambulance", path: "/services/ambulance-venkataeswara-hospitals/" },
                { id: 3.2, subtitle: "Dietary", path: "/services/dietary-venkataeswara-hospitals/" },
                { id: 3.3, subtitle: "Emergency/Trauma", path: "/services/emergency-trauma-venkataeswara-hospitals/" },
                { id: 3.4, subtitle: "Health Checkups", path: "/services/health-checkups-venkataeswara-hospitals/" },
                { id: 3.5, subtitle: "Imaging", path: "/services/imaging-venkataeswara-hospitals/" },
                { id: 3.6, subtitle: "Intensive Care Unit (ICU)", path: "/specialities/icu-venkataeswara-hospitals/" },
                { id: 3.7, subtitle: "Laboratory", path: "/services/laboratory-venkataeswara-hospitals/" },
                { id: 3.8, subtitle: "Operating Theatres", path: "/operating-theatres" },
                { id: 3.9, subtitle: "Physiotherapy & Rehabilitation", path: "/physiotherapy" }
            ]
        },
        {
            id: 4, title: "Academic", sublist: [
                { id: 4.1, subtitle: "Enroll Online", path: "/enroll-online" },
                { id: 4.2, subtitle: "Download Form", path: "/download-form" }
            ]
        },
        {
            id: 5, title: "About Us", 
            sublist: [
                { id: 5.1, subtitle: "Founder/History of VH", path: "/founder-history" },
                { id: 5.2, subtitle: "Mission and Vision", path: "/mission-vision" },
                { id: 5.3, subtitle: "Guiding Philosophy", path: "/guiding-philosophy" },
                { id: 5.4, subtitle: "Insurance", path: "/insurance" },
                { id: 5.5, subtitle: "Tie - Ups", path: "/tie-ups" },
                { id: 5.6, subtitle: "Gallery", path: "/gallery" },
                { id: 5.7, subtitle: "Testimonial - Videos", path: "/testimonials" },
                { id: 5.8, subtitle: "Career", path: "/career" }
            ]
        },
        {
            id: 6, title: "News & Media",
            sublist: [
                { id: 6.1, subtitle: "News", path: "/news" },
                { id: 6.2, subtitle: "Events", path: "/events" },
                { id: 6.3, subtitle: "Interviews", path: "/interviews" },
                { id: 6.4, subtitle: "Watch Our Videos", path: "/videos" },
                { id: 6.5, subtitle: "Venkataeswara Hospital Reviews", path: "/reviews" }
            ]
        },
        { id: 7, title: "COVID-19", path: "/" },
        { id: 8, title: "Blog", path: "/" },
        { id: 9, title: "Contact", path: "/" }
    ];

    return (
        <div className='nav_container'>
            <div className="logo_item">
                <div className="logo_nav">
                <Link to="/">
                    <div className='nav_logo1' >
                        <img src={logo1} alt="logo" />
                    </div>
                </Link>
                <div className='nav_logo2'>
                    <img src={logo2} alt="logo" />
                </div>
                </div>
                
            </div>
            <div className="nav_item">
                <ul>
                    {navbarData.map((navData) => (
                        <li key={navData.id} className='navbar_list'>
                            <Link
                                to={navData.path}
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                            >
                                <p>
                                    {navData.title}
                                    {navData.sublist && <span className="dropdown-arrow"></span>}
                                </p>
                            </Link>
                            {navData.sublist && (
                                <ul className="dropdown_container">
                                    {navData.sublist.map((item, id) => (
                                        typeof item === "object" ? (
                                            <li key={id} className="dropdown_item">
                                                <Link
                                                    to={item.path}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {item.subtitle}
                                                </Link>
                                            </li>
                                        ) : (
                                            <li key={id} className="dropdown_item">
                                                {item}
                                            </li>
                                        )
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
