import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import eye from '../../Assets/img/Icons_larger_ophthalmology.png.jpg'

const Ophthalmologicalsurgery = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="optho-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>Ophthalmological Surgery</h1>
                                        <p>From correcting refractory error to providing prescriptions for spectacles and contact lenses, to treating more complex eye diseases, the Ophthalmological Clinic at Venkataeswara Hospitals provides basic and comprehensive eye care for the entire family.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows inner-image">
                <div className="col-lg-6 background">
                    <p className='image-center'>
                        <img className='inner-image' src={eye} alt="eye logo" style={{width:"200px",height:"250px"}} />
                    </p>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>The Ophthalmological team at Venkataeswara Hospitals is highly capable of detecting and treating common eye diseases and disorders, such as cataracts, pterygium, conjunctivitis, corneal ulcers, ectropion, entropion, chronic dacryocystitis, chalazion, glaucoma, diabetic retinopathy and retinal detachment. Many of these diseases are treated through surgical methods. In addition, LASIK eye surgery can also be performed to correct near- or far-sightedness.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ophthalmologicalsurgery
