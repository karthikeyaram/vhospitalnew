import React from 'react'
import Nav from '../Navbar/Nav'
import './Asth.css'
import Footer from '../Footer/Footer'

const Allergyasthma = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="bannerr">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Allergy & Asthma</h1>
                                        <p>Allergies and asthma, two conditions that usually occur together and affect the patient gravely. These two conditions have many symptoms and side effects in common.</p>
                                        <p>The same substance that may trigger your allergic reactions and symptoms, such as pollen dust, pet dander, etc., may also be the reason behind the appearance of asthma-related signs and symptoms. In some people, skin or food-related allergies may be instrumental in causing asthma symptoms. This condition can also be termed as allergic asthma or allergy-induced asthma.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h3>How can allergic reactions cause Asthma?</h3>
                    <p>An allergic reaction occurs when the immune system identifies a harmless substance, such as pollen dust, or pet dander, as an external substance trying to cause harm to the body. In order to prevent your body from the substance, the immune system creates antibodies that bind to the allergen.</p>
                    <p>These chemicals affect the body and lead to allergic signs and symptoms, including nasal congestion, itchy eyes, skin reaction, etc. In some patients, these allergic reactions may also affect the lungs, causing asthma symptoms.</p>
                    <h3>Who’s at risk of allergic asthma?</h3>
                    <ul>
                        <li>Someone who has a family history of allergy is at an increased risk of developing allergic asthma.</li>
                        <li>Suffering from hay fever may also increase the risk of suffering from asthma.</li>
                    </ul>
                    <p>The Department of Allergy and Immunology at Venkataeswara Hospitals deals with the management of diseases and disorders that are related to the immune system. These may range from common to the rarest of the disorders, spanning across all ages and including numerous organs. Diseases that are treated by allergists/ immunologists are:</p>
                    <ul>
                        <li>Eye infections, such as allergic conjunctivitis.</li>
                        <li>Conditions related to the respiratory tract, including allergic rhinitis, asthma, hypersensitivity pneumonitis, sinusitis, and occupational lung diseases.</li>
                        <li>Gastrointestinal disorders that are caused due to allergic reactions to different kinds of foods.</li>
                        <li>Skin allergies such as contact dermatitis, atopic dermatitis, acute and chronic urticaria.</li>
                        <li>Adverse reactions to different types of food items, drugs, vaccines, and other agents.</li>
                        <li>Diseases that affect the immune system.</li>
                        <li>Systemic diseases such as anaphylaxis, and diseases that involve mast cells or eosinophils.</li>
                        <li>Diseases concerned with the autoimmune response to self-antigens, including auto-inflammatory syndromes.</li>
                        <li>Stem cell, bone marrow, or organ transplantation.</li>
                    </ul>       
                </div>
                <div className="col-lg-6 pad-left">
                        <h3>Is allergy the only reason that causes asthma?</h3>
                        <p className='strongtag'>Allergic asthma is quite common, but not all asthmas are caused by allergies. Asthma may be caused due to varied kinds of triggers. For certain people, it may be triggered by infections, cold air, acid reflux, stress, or exercises.<strong>What is important is to get the symptoms under control and manage your allergic reactions.</strong> </p>
                        <p>Understand the reasons that may have triggered your allergy and asthma symptoms and limit the exposure towards it. Discuss with your doctor and find the most ideal treatment to treat your symptoms, and follow up with your doctor on a regular basis.
                        <br></br><br></br>
                        Symptoms of allergy and asthma may change with time, one may need to adjust the treatment accordingly. Notice the asthma-related symptoms that may be more severe to understand what to do during such situations.</p>
                
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Allergyasthma
