import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../../Assets/img/card1.jpg'
import card2 from '../../Assets/img/card2.jpeg'
import card3 from '../../Assets/img/card3.jpg'
import card4 from '../../Assets/img/card4.jpg'



const Card = () => {

    const card = [
        { id: 1, img: card1, title: "B.Sc. Physician Assistant Course", content: "Prepare for pivotal roles in healthcare, focusing on patient assessments and medical assistance.", apply: "Apply Now" },
        { id: 2, img: card2, title: "B.Sc. Cardiac Technology Course", content: "Specialize in advanced cardiovascular care, merging technical proficiency with patient – centered service.", apply: "Apply Now" },
        { id: 3, img: card3, title: "B.Sc. Critical Care Technology Course", content: "Gain expertise in emergency care, mastering critical interventions for optimal patient outcomes.", apply: "Apply Now" },
        { id: 4, img: card4, title: "Diploma in Patient Care Assistant", content: "Diploma in Patient Care Assistant (DNPA) is a 2-year diploma course in which one gets to learn about patient cares assistant/aide skills and knowledge.", apply: "Apply Now" },
    ]
    return (
        <>
            {card.map((item) => (
                <div key={item.id} className="wp-block-uagb-container uagb-block-308e8d69">
                    <div className="wp-block-uagb-image uagb-block-5d82f6c2 wp-block-uagb-image--layout-default wp-block-uagb-image--effect-static wp-block-uagb-image--align-none">
                        <figure className="wp-block-uagb-image__figure">
                            <img src={item.img} alt={item.title} style={{ width: "242px", height: "182px" }} />
                        </figure>
                    </div>
                    <div className="wp-block-uagb-info-box uagb-block-8777a2a6 uagb-infobox__content-wrap uagb-infobox-icon-above-title uagb-infobox-image-valign-top">
                        <div className="uagb-ifb-content">
                            <div className="uagb-ifb-title-wrap">
                                <h3 className="uagb-ifb-title"><strong>B.Sc. Physician Assistant Course</strong></h3>
                            </div>
                            <p className="uagb-ifb-desc">
                                {item.content}
                            </p>
                            <div className="uagb-ifb-link-wrap">
                                <Link to='/your-component' className="uagb-ifb-link">
                                    {item.apply} 
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card-content">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <button>{item.apply}</button>
                    </div> */}
                </div>
            ))}

        </>
    )
}

export default Card
