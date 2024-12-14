import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Career = () => {
    return (
        <>
            <Nav />
            <div className="inner-asth">
                <div className="career-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="banner-left1">
                                    <div className="boxe">
                                        <h1>CAREER</h1>
                                        <p>We value your prayers as much as we believe in our advanced research methods and technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows innerimage">
                <div className="col-lg-6 background">
                    <h3 className="white" style={{ color: "white" }}>It’s time to be a part of something bigger.</h3>
                </div>
                <div className="col-lg-6 innerpad">
                    <p>Welcome and thank you for your interest in a career with Venkataeswara Hospital. We at Venkataeswara Hospitals are a community of compassionate caregivers. Our chief aim here is to provide the utmost care a patient deserves.</p>
                    <p>Find fulfilling career opportunities at Venkataeswara Hospitals, join us and get ready to serve the best of healthcare services to our community.</p>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-6">
                    <h3 style={{ fontWeight: "400" }}><strong>Current Opening:</strong></h3>
                    <div className="row2"></div>
                    <div className="row2">
                        <h6 className='position'>POSITION : Insurance Executive</h6>
                        <h6 className='position'>POSITION : Accounts Executive</h6>
                        <h6 className='position'>POSITION : Pharmacist</h6>
                    </div>
                </div>
                <div className="col-lg-6 pad-left">
                    <h3 style={{ paddingTop: "43px" }}></h3>
                    <div className="row2 mrg-1"></div>
                    <div className="row2 ">
                        <h6 className="position">POSITION : Male Staff Nurse</h6>
                        <h6 className="position">POSITION : Staff Nurse Labour room</h6>
                        <h6 className="position">POSITION : ICU incharge</h6>
                    </div>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-12 pad-lefts">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "0 100px", // Adds 100px margin on left and right
                        }}
                    >
                        <div>
                            <h3 style={{marginBottom:"20px",color:"#916a1e"}}>Apply with your resume</h3>
                        </div>
                        <div className="screen-reader-response" role='form'>
                            <form className="wpcf7-form" action="" method="POST">
                                {/* Your Name */}
                                <div className="form-group">
                                    <label htmlFor="your-name"> Your Name (required)</label>
                                    <input type="text" id="your-name" name="your-name" placeholder="Enter your name" required />
                                </div>

                                {/* Your Email */}
                                <div className="form-group">
                                    <label htmlFor="your-email"> Your Email (required)</label>
                                    <input type="email" id="your-email" name="your-email" placeholder="Enter your email" required />
                                </div>

                                {/* Required Field (Select Options) */}
                                <div className="form-group">
                                    <label htmlFor="required-select"> Applied for (required)</label>
                                    <select id="required-select" name="required-select" required>
                                        <option value="">Insurance Executive</option>
                                        <option value="1">Accounts Executive</option>
                                        <option value="2">Pharmacist</option>
                                        <option value="3">Male Staff Nurse</option>
                                        <option value="4">Staff Nurse Labour room</option>
                                        <option value="5">ICU incharge</option>
                                    </select>
                                </div>

                                {/* Choose File */}
                                <div className="form-group">
                                    <input type="file" id="file-upload" name="file-upload" />
                                    {/* <span>No file chosen</span> */}
                                </div>
                                <div className="form-group">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Career
