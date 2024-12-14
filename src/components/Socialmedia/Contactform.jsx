import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Socialmedia.css';

const Contactform = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); 
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // This will route to the contact page
  };

  const handleAppointmentClick = () => {
    setShowPopup(true); // Show the appointment popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden'; // Disable background scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [showPopup]);

  useEffect(() => {
    const handleScroll = () => {
      const commonDiv = document.querySelector('.common');
      const currentScrollY = window.scrollY; // Get current scroll position

      if (currentScrollY > prevScrollY) {
        // Scrolling down, move the div to bottom: 0px
        commonDiv.style.bottom = '0px';
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up, keep the div at bottom: 60px
        commonDiv.style.bottom = '60px';
      }
      
      // Update previous scroll position
      setPrevScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]); // Re-run the effect when prevScrollY changes

  return (
    <>
      <div className="common" >
        <div className="con">
          <h3 onClick={handleContactClick} className="link">
            Contact Us
          </h3>
        </div>
        <div className="appoint">
          <h3 onClick={handleAppointmentClick} className="link">
            Request an Appointment
          </h3>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClosePopup}>X</button>
            <form>
              <h3 className='h3content'>Request an Appointment</h3>
              <input type="text" placeholder="FullName" required />
              <select required>
                <option value="">Select Department</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="hr">HR</option>
              </select>
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
              <input type="date" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contactform;
