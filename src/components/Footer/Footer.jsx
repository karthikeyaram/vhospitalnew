import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareFull } from "react-icons/fa";

const Footer = () => {
    const departments = [
        { name: "Anaesthesiology", path: "/anaesthesiology" },
        { name: "Cardiology", path: "/cardiology" },
        { name: "Cardiothoracic Surgery", path: "/cardiothoracic-surgery" },
        { name: "Counselling", path: "/counselling" },
        { name: "Dental Surgery", path: "/dental-surgery" },
        { name: "Dental and Maxillo-facial Surgery", path: "/maxillo-facial-surgery" },
        { name: "Dermatology", path: "/dermatology" },
        { name: "Diabetology", path: "/diabetology" },
        { name: "Endoscopy", path: "/endoscopy" },
        { name: "ENT Surgery", path: "/ent-surgery" },
        { name: "Gastroenterological Surgery", path: "/gastro-surgery" },
        { name: "Gastroenterology", path: "/gastroenterology" },
        { name: "General and Internal Medicine", path: "/internal-medicine" },
        { name: "General and Laparoscopic Surgery", path: "/laparoscopic-surgery" },
        { name: "Hepatology", path: "/hepatology" },
        { name: "Nephrology", path: "/nephrology" },
        { name: "Neurology", path: "/neurology" },
        { name: "Neurosurgery", path: "/neurosurgery" },
        { name: "Obstetric & Gynaecological Surgery", path: "/gynecology-surgery" },
        { name: "Obstetrics and Gynaecology", path: "/obstetrics-and-gynecology" },
        { name: "Oncological Surgery", path: "/oncology-surgery" },
        { name: "Oncology", path: "/oncology" },
        { name: "Ophthalmological Surgery", path: "/ophthalmological-surgery" },
        { name: "Ophthalmology", path: "/ophthalmology" },
        { name: "Orthopaedic Surgery", path: "/orthopedic-surgery" },
        { name: "Paediatrics", path: "/paediatrics" },
        { name: "Paediatric Anaesthesiology", path: "/paediatric-anaesthesiology" },
        { name: "Plastic Surgery", path: "/plastic-surgery" },
        { name: "Psychiatry", path: "/psychiatry" },
        { name: "Psychology", path: "/psychology" },
        { name: "Pulmonology", path: "/pulmonology" },
        { name: "Rheumatology", path: "/rheumatology" },
        { name: "Speech Therapy", path: "/speech-therapy" },
        { name: "Urological Surgery", path: "/urological-surgery" },
        { name: "Urology", path: "/urology" },
        { name: "Vascular Surgery", path: "/vascular-surgery" },
        { name: "Visiting Consultants", path: "/visiting-consultants" },
    ];


    const chunks = [];
    for (let i = 0; i < departments.length; i += 10) {
        chunks.push(departments.slice(i, i + 10));
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <h2 className="mb-4" style={{ color: "#916a1e" }}>Specialities</h2>
                <div className="row">
                    {chunks.map((chunk, index) => (
                        <div className="col-sm-12 col-lg-6 col-xl-3 " key={index}>
                            <ul className="list-unstyled">
                                {chunk.map((dept, i) => (
                                    <li key={i} className='py-1 '>
                                        <Link to={dept.path} className="text-decoration-none text-dark">
                                            <FaSquareFull style={{ fontSize: "5px", marginBottom: "6px", marginRight: "10px", color: "rgb(70 208 40)" }} />  {dept.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='copyrights_container py-3' style={{ background: "linear-gradient(to right, #c7d715 0, #8db855 100%) ", color: "#fff" }}>
                <div className='container'>
                    <p className='mb-0'>© 2019 Venkataeswara Hospital.</p>
                    <p >All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
