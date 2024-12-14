import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../Assets/logo/cropped-Venkateaswara-logo-1.png'
import './Academic.css'
import Card from './Card'

const Enrollonline = () => {

    return (
        <>
            <div className="hfeed site-page">
                <div className="site-header ast-theme-transparent-header masthead">
                    <div className="ast-primary-header-bar">
                        <div className="ast-primary-header-bar main-header-bar site-header-focus-item">
                            <div className="site-primary-header-wrap ast-builder-grid-row-container  ast-container">
                                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout">
                                    <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                        <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                                            <div className="site-branding ast-site-identity">
                                                <span className='site-logo-img'>
                                                    <img src={logo2} alt="" style={{ width: "250px", height: "85px" }} className='custom-logo' />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                                        <aside className="header-widget-area widget-area site-header-focus-item header-widget-area-inner">
                                            <section className='widget widget_block widget_text'>
                                                <p className="has-text-align-left">
                                                    No.36 - A, Chamiers Road, Nandanam, Chennai - 600 035.
                                                </p>
                                            </section>
                                        </aside>
                                    </div>
                                    <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                        <div className="site-header-primary-section-right-center site-header-section ast-flex ast-grid-right-center-section"></div>
                                        <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item">
                                            <div className="ast-main-header-bar-alignment">
                                                <div className="main-header-bar-navigation">
                                                    <nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item">
                                                        <div className="main-navigation ast-inline-flex">
                                                            <ul className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile">
                                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1846">
                                                                    Contact Us
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="entry-content clear">
                    <div className="wp-block-uagb-container uagb-block-228c477d alignfull uagb-is-root-container">
                        <div className="uagb-container-inner-blocks-wrap">
                            <div className="wp-block-uagb-container uagb-block-eec0964e">
                                <div className="wp-block-uagb-advanced-heading uagb-block-a5772583">
                                    <h1 className="uagb-heading-text">
                                        <strong>Venkataeswara Allied Health Sciences</strong>
                                    </h1>
                                </div>
                                <div className="wp-block-uagb-info-box uagb-block-18caa9ac uagb-infobox__content-wrap  uagb-infobox-icon-above-title uagb-infobox-image-valign-top">
                                    <div className="uagb-ifb-content">
                                        <div className="uagb-ifb-title-wrap">
                                            <h4 className="uagb-ifb-title">
                                                (Unit of Venkataeswara Hospital)
                                                <br />
                                                Affiliated Under the Tamil Nadu Dr. M.G.R. Medical University.
                                                <br />
                                                No. 7/11 Street, Nandanam Extn, Nandanam, Chennai – 35
                                            </h4>
                                        </div>
                                        <p className="uagb-ifb-desc">Embark on a transformative journey in healthcare education with Venkateshwara Allied Sciences. We are delighted to announce that admissions for the 2024 intake are now open, offering aspiring healthcare professionals the opportunity to pursue excellence in their chosen fields.</p>

                                    </div>
                                </div>
                                <div className="uagb-buttons__wrap uagb-buttons-layout-wrap ">
                                    <div className="wp-block-uagb-buttons-child uagb-buttons__outer-wrap uagb-block-439bb50b wp-block-button">
                                        <div className="uagb-button__wrapper">
                                            <button className='b1'>Enquiry Now</button>
                                            <button className='b2'>Learn More</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="wp-block-uagb-info-box uagb-block-bc9c693c uagb-infobox__content-wrap  uagb-infobox-icon-above-title uagb-infobox-image-valign-top">
                        <div className="uagb-ifb-content">
                            <div className="uagb-ifb-title-wrap">
                                <h2 className="uagb-ifb-title">Our Best courses</h2>
                            </div>
                            <p className="uagb-ifb-desc">
                            At Venkataeswara Hospitals, we offer state-of-the-art infrastructure, advanced equipment, and a team of highly qualified medical professionals dedicated to educating the medical assistants of tomorrow.
                            </p>
                        </div>
                    </div>
                    <div className="wp-block-uagb-container uagb-block-08a451cf alignfull uagb-is-root-container">
                        <div className="uagb-container-inner-blocks-wrap">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Enrollonline;