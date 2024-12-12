import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'

const Gallery = () => {
    const gallery = [
        { src: require('../../Assets/gallery/1.jpg') },{ src: require('../../Assets/gallery/2.jpg') },
        { src: require('../../Assets/gallery/3.jpg') },{ src: require('../../Assets/gallery/4.jpg') },
        { src: require('../../Assets/gallery/5.jpg') },{ src: require('../../Assets/gallery/6.jpg') },
        { src: require('../../Assets/gallery/7.jpg') },{ src: require('../../Assets/gallery/8.jpg') },
        { src: require('../../Assets/gallery/9.jpg') },{ src: require('../../Assets/gallery/10.jpg') },
        { src: require('../../Assets/gallery/11.jpg') },{ src: require('../../Assets/gallery/12.jpg') },
        { src: require('../../Assets/gallery/13.jpg') },{ src: require('../../Assets/gallery/14.jpg') },
        { src: require('../../Assets/gallery/15.jpg') },{ src: require('../../Assets/gallery/16.jpg') },
        { src: require('../../Assets/gallery/17.jpg') },{ src: require('../../Assets/gallery/18.jpg') },
        { src: require('../../Assets/gallery/19.jpg') },{ src: require('../../Assets/gallery/20.jpg') },
        { src: require('../../Assets/gallery/21.jpg') },{ src: require('../../Assets/gallery/22.jpg') },
        { src: require('../../Assets/gallery/23.jpg') },{ src: require('../../Assets/gallery/24.jpg') },
        { src: require('../../Assets/gallery/25.jpg') },{ src: require('../../Assets/gallery/26.jpg') },
        { src: require('../../Assets/gallery/27.jpg') },{ src: require('../../Assets/gallery/28.jpg') },
        { src: require('../../Assets/gallery/29.jpg') },{ src: require('../../Assets/gallery/30.jpg') },
        { src: require('../../Assets/gallery/31.jpg') },{ src: require('../../Assets/gallery/32.jpg') },
        { src: require('../../Assets/gallery/33.jpg') },{ src: require('../../Assets/gallery/34.jpg') },
        { src: require('../../Assets/gallery/35.jpg') },{ src: require('../../Assets/gallery/36.jpg') },
        { src: require('../../Assets/gallery/37.jpg') },{ src: require('../../Assets/gallery/38.jpg') },
        { src: require('../../Assets/gallery/39.jpg') },{ src: require('../../Assets/gallery/40.jpg') },
    ]
    return (
        <>
            <Nav />
            <div className="hyper">
                <div className="banners">
                    <div className="container">
                        <div className="rows">
                            <div className="col-lg-6 order-lg-first">
                                <div className="banner-left">
                                    <div className="boxe">
                                        <h2>GALLERY</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rows padding">
                <div className="col-lg-12 pad-left">
                    <div className="container">
                        <div className="rows">
                            <div className="col-md-6">
                                <iframe loading='lazy' src="https://www.youtube.com/embed/rQE0MhtIEaY" frameborder="0"></iframe>
                            </div>
                            <div className="col-md-6">
                                <iframe loading='lazy' src="https://www.youtube.com/embed/_Cl0JhIjwvo" frameborder="0"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="su-custom-gallery su-custom-gallery-align-left su-custom-gallery-title-hover">
                        {
                            gallery.map((image,index)=>(
                                <div key={index}  className="su-custom-gallery-slide"  style={{width:"250px",height:"250px"}}>
                                        <picture>
                                            <img src={image.src} alt="" />
                                        </picture>
                                </div>

                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery
