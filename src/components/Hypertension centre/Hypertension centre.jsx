import React from 'react';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import './Hyper.css';

const Hypertension = () => {
    const hypimg = [
        { src: require('../../Assets/hypimg/1-250x250.jpg') },
        { src: require('../../Assets/hypimg/2-250x250.jpg') },
        { src: require('../../Assets/hypimg/3-250x250.jpg') },
        { src: require('../../Assets/hypimg/4-250x250.jpg') },
        { src: require('../../Assets/hypimg/5-250x250.jpg') },
        { src: require('../../Assets/hypimg/6-250x250.jpg') },
        { src: require('../../Assets/hypimg/7-250x250.jpg') },
        { src: require('../../Assets/hypimg/8-250x250.jpg') },
        { src: require('../../Assets/hypimg/9-250x250.jpg') },
        { src: require('../../Assets/hypimg/10-250x250.jpg') },
        { src: require('../../Assets/hypimg/11-250x250.jpg') },
        { src: require('../../Assets/hypimg/12-250x250.jpg') },
        { src: require('../../Assets/hypimg/13-250x250.jpg') },
        { src: require('../../Assets/hypimg/14-250x250.jpg') },
        { src: require('../../Assets/hypimg/15-250x250.jpg') },
        { src: require('../../Assets/hypimg/16-250x250.jpg') },
        { src: require('../../Assets/hypimg/17-250x250.jpg') },
        { src: require('../../Assets/hypimg/18-250x250.jpg') },
        { src: require('../../Assets/hypimg/19-250x250.jpg') },
        { src: require('../../Assets/hypimg/20-250x250.jpg') },
        { src: require('../../Assets/hypimg/21-250x250.jpg') },
    ];

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
                                        <h2>Hypertension Centre</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-left">
                <div className="gallery-item">
                    {hypimg.map((image, index) => (
                        <img key={index} src={image.src} alt={`Hypertension ${index + 1}`} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Hypertension;
