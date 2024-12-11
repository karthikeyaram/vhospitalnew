import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import './Service.css'

const Healthcontent = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prevSection) => (prevSection === section ? null : section));
    };

    return (
        <>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('basic')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>BASIC HEALTH CHECKUP - Rs. 1,040/-</span>
                    <span>
                        {openSection === 'basic' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'basic' ? 'open' : 'closed'
                        }`}
                >
                    <strong>Haematology</strong>
                    <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>Random Blood Sugar</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <p className="strongtag"><strong>LFT</strong></p>
                            <ul className="list">
                                <li>SGOT</li>
                                <li>SGPT</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Urine Routine (Complete Analysis), Chest X-Ray, ECG, Doctor Consultation, Nutritionist Consultation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('master')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>MASTER HEALTH CHECKUP - Rs. 2,500/-</span>
                    <span>
                        {openSection === 'master' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'master' ? 'open' : 'closed'
                        }`}
                >
                    <strong>Haematology</strong>
                    <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>Blood Sugar (Fasting)</li>
                                <li>Blood Sugar (PP)</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                                <li>Serum Uric Acid</li>
                            </ul>
                            <p className="strongtag"><strong>Lipid Profile</strong></p>
                            <ul className="list">
                                <li>Total Cholesterol</li>
                                <li>Triglycerides</li>
                                <li>HDL Cholesterol</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <p className="strongtag"><strong>LFT</strong></p>
                            <ul className="list">
                                <li>SGOT</li>
                                <li>SGPT</li>
                                <li>Bilirubin</li>
                            </ul>
                            <p className="strongtag"><strong>Endocrinology</strong></p>
                            <ul className="list">
                                <li>TSH</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Blood Group & Rh Typing</li>
                                <li>Urine Routine</li>
                                <li>Chest X-Ray</li>
                                <li>ECG</li>
                                <li>USG Abdomen & Pelvis</li>
                                <li>Nutritionist Consultation</li>
                                <li>Ophthalmologist Opinion</li>
                                <li>Dental Opinion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('executive')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>EXECUTIVE MASTER HEALTH CHECKUP - Rs. 5,500/-</span>
                    <span>
                        {openSection === 'executive' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'executive' ? 'open' : 'closed'
                        }`}
                >
                    <strong>Haematology (Complete Haemogram)</strong>
                    <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>FBS</li>
                                <li>PPBS</li>
                                <li>HbA1C</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                                <li>Serum Uric Acid</li>
                            </ul>
                            <p className="strongtag"><strong>Lipid Profile</strong></p>
                            <ul className="list">
                                <li>Total Cholesterol</li>
                                <li>Triglycerides</li>
                                <li>HDL Cholesterol</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>
                            <p className="strongtag"><strong>LFT</strong></p>
                            <ul className="list">
                                <li>SGOT</li>
                                <li>SGPT</li>
                                <li>Bilirubin</li>
                                <li>Alkaline Phosphatase</li>
                                <li>Gamma GT</li>
                                <li>Protein AG Ratio</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">

                            <p className="strongtag"><strong>Serum Electrolytes</strong></p>
                            <ul className="list">
                                <li>Sodium</li>
                                <li>Potassium</li>
                                <li>Chloride</li>
                                <li>Bicarbonate</li>
                                <li>Calcium</li>
                                <li>Phosphorous</li>
                            </ul>
                            <p className="strongtag"><strong>Serology</strong></p>
                            <ul className="list">
                                <li>VDRL</li>
                                <li>HIV</li>
                                <li>HbsAg</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Blood Group & Rh Typing</li>
                                <li>Urine Routine</li>
                                <li>Stool Routine</li>
                                <li>Occult Blood</li>
                                <li>Chest X-Ray</li>
                                <li>PFT</li>
                                <li>ECG</li>
                                <li>ECHO</li>
                                <li>TMT</li>
                                <li>USG Abdomen & Pelvis</li>
                                <li>PSA (Men)/PAP Smear (Women)/Doctor</li>
                                <li>Nutritionist Consultation</li>
                                <li>Ophthalmologist Opinion</li>
                                <li>Dental Opinion</li>
                                <li>Gynaecologist Opinion (Women)</li>
                                <li>Doctor Consultation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('HEART')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>EXECUTIVE HEART CHECKUP - Rs. 4,500/-</span>
                    <span>
                        {openSection === 'HEART' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'HEART' ? 'open' : 'closed'
                        }`}
                >
                    <strong>Haematology (Complete Haemogram)</strong>
                    <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>FBS</li>
                                <li>PPBS</li>
                                <li>HbA1C</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                                <li>Serum Uric Acid</li>
                            </ul>
                            <p className="strongtag"><strong>Lipid Profile</strong></p>
                            <ul className="list">
                                <li>Total Cholesterol</li>
                                <li>Triglycerides</li>
                                <li>HDL Cholesterol</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>
                            <p className="strongtag"><strong>LFT</strong></p>
                            <ul className="list">
                                <li>SGOT</li>
                                <li>SGPT</li>
                                <li>Bilirubin</li>
                                <li>Alkaline Phosphatase</li>
                                <li>Gamma GT</li>
                                <li>Protein AG Ratio</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">

                            <p className="strongtag"><strong>Serum Electrolytes</strong></p>
                            <ul className="list">
                                <li>Sodium</li>
                                <li>Potassium</li>
                                <li>Chloride</li>
                                <li>Bicarbonate</li>
                                <li>Calcium</li>
                                <li>Phosphorous</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Blood Group & Rh Typing</li>
                                <li>Urine Routine</li>
                                <li>Chest X-Ray</li>
                                <li>ECG</li>
                                <li>ECHO</li>
                                <li>TMT</li>
                                <li>USG Abdomen & Pelvis</li>
                                <li>Nutritionist Consultation</li>
                                <li>Cardiologist Opinion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('WELL')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>WELL WOMEN HEALTH CHECKUP - Rs. 1,900/-</span>
                    <span>
                        {openSection === 'WELL' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'WELL' ? 'open' : 'closed'
                        }`}
                >
                    <strong>Haematology (Complete Haemogram)</strong>
                    <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                            <p className="strongtag"><strong>Lipid Profile</strong></p>
                            <ul className="list">
                                <li>Total Cholesterol</li>
                                <li>Triglycerides</li>
                                <li>HDL Cholesterol</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>

                        </div>
                        <div className="col-sm-6">
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>Random Blood Sugar</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Urine Routine</li>
                                <li>Chest X-Ray</li>
                                <li>ECG</li>
                                <li>USG Abdomen & Pelvis</li>
                                <li>PAP Smear</li>
                                <li>Physical Examination</li>
                                <li>Gynaecologist Consultation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('DIABETIC')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>DIABETIC HEALTH CHECKUP - Rs. 1,000/-</span>
                    <span>
                        {openSection === 'DIABETIC' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'DIABETIC' ? 'open' : 'closed'
                        }`}
                >
                    <div className="rows">
                        <div className="col-sm-6">
                        <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>FBS</li>
                                <li>PPBS</li>
                                <li>HbA1C</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Urine Routine</li>
                                <li>ECG</li>
                                <li>Physical Consultation</li>
                                <li>Nutrition Consultation</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <p className="strongtag"><strong>Lipid Profile</strong></p>
                            <ul className="list">
                                <li>Total Cholesterol</li>
                                <li>Triglycerides</li>
                                <li>HDL Cholesterol</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="su-spoiler su-spoiler-style-default su-spoiler-icon-plus">
                <div
                    className="su-spoiler-title"
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleSection('CHILD')}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <span>BASIC CHILD HEALTH CHECKUP (5 years & above) - Rs. 1,100/-</span>
                    <span>
                        {openSection === 'CHILD' ? <FaMinus /> : <FaPlus />}
                    </span>
                </div>
                <div
                    className={`su-spoiler-content su-u-clearfix su-u-trim ${openSection === 'CHILD' ? 'open' : 'closed'
                        }`}
                >
                        <strong>Haematology (Complete Haemogram)</strong>
                        <p></p>
                    <div className="rows">
                        <div className="col-sm-6">
                            <ul className="list">
                                <li>HB, PCV, RBC, TC, DC, ESR, Platelet Count, Smear Study</li>
                            </ul>
                        <p className="strongtag"><strong>Endocrinology</strong></p>
                            <ul className="list">
                                <li>TSH</li>
                            </ul>
                            <p className="strongtag"><strong>General Tests</strong></p>
                            <ul className="list">
                                <li>Blood Group & Rh Typing</li>
                                <li>Urine Routine</li>
                                <li>Chest X-Ray</li>
                                <li>Paediatrician Consultation</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <p className="strongtag"><strong>Bio-Chemistry</strong></p>
                            <ul className="list">
                                <li>FBS</li>
                                <li>Blood Urea</li>
                                <li>Serum Creatinine</li>
                                <li>LDL Cholesterol</li>
                                <li>VLDL Cholesterol</li>
                                <li>CHOL/HDL Ratio</li>
                            </ul>   
                            <p className="strongtag"><strong>LFT</strong></p>
                            <ul className="list">
                                <li>SGOT</li>
                                <li>SGPT</li>
                            </ul>                         
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Healthcontent;
