import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
    const [activeId, setActiveId] = useState(0);

    
const content =[
    {id:"services",title:"SERVICES",label:"SERVICES",contents:"With a modern clinic managed by qualified and experienced doctors, Venkataeswara Hospitals works to offer the very best in preventative and curative healthcare. We utilise the latest in medical technology to ensure our patients receive accurate diagnoses. We have received the ISO 9001:2008 certification for quality."}
    ,{id:"helth",title:"HEALTH CHECKUPS",label:"HEALTH CHECKUPS",contents:"At Venkataeswara Hospitals, we are committed to providing preventive healthcare. After all, prevention of disease is the best way to building a healthy society. We offer comprehensive health checkups that will help you get started on your journey to good health."}
    ,{id:"lab",title:"LABORATORY",label:"LABORATORY",contents:"Our top priority is the care of our patients. That's why, at Venkataeswara Hospitals, we have invested in the best possible laboratory equipment. We aim to offer the best possible preventive and curative care."}
    ,{id:"clinic",title:"MODERN CLINICAL PRACTICES",label:"MODERN CLINICAL PRACTICES",contents:"With the best in laboratory and imaging equipment, and a team of highly qualified doctors, Venkataeswara Hospitals prioritises accurate diagnosis and provision of treatment information in a timely and compassionate manner to patients and their caregivers."}
    ,{id:"dietry",title:"DIETARY",label:"DIETARY",contents:"We are what we eat! Dietary planning and restriction is one of the most important parts of holistic healthcare. Our team of experienced healthcare providers also shares dietetic advice and post-hospitalisation diet plans, as well as providing dietary care during inpatient hospitalisation, as required."}

]

  // Handle the click on a label
  const handleLabelClick = (id) => {
    setActiveId(id); // Set the active label id
  };
  return (
    <>
    <div className="cone col-5 serv-text">
          <div className="tab-content">
            {/* Only display content when the id matches the active one */}
            {content.map((item, id) => (
              <div
                key={id}
                className={`tab-pane ${activeId === id ? 'active' : ''}`}
              >
                {activeId === id && (
                  <>
                    <h3>{item.title}</h3>
                    <p>{item.contents}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="read-moreborder">
            <Link to="/" className="readmore">Read more</Link>
          </p>
        </div>
        <div className="col-7 inner1">
          {content.map((item, id) => (
            <div key={id} className="content-item">
              <p className={activeId === id ? 'active' : ''} onClick={() => handleLabelClick(id)}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}

export default Content



