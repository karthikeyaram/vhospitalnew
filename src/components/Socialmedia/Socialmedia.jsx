import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaWhatsapp,
  FaTimes,
  FaCommentDots
} from 'react-icons/fa';
import './Socialmedia.css';

const Socialmedia = () => {
  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, name: "Facebook", url: "https://www.facebook.com/Venkataeswara/" },
    { id: 2, icon: <FaTwitter />, name: "Twitter", url: "https://x.com/i/flow/login?redirect_after_login=%2FVHChennai" },
    { id: 3, icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/company/venkataeswara-hospitals/?originalSubdomain=in" },
    { id: 4, icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/vhospitals/" },
    { id: 5, icon: <FaYoutube />, name: "YouTube", url: "https://www.youtube.com/channel/UCJf2urcw-GriRfa1Iu8MeGQ/about" },
    { id: 6, icon: <FaGoogle />, name: "Google", url: "https://www.google.com/search?hl=en-IN&gl=in&q=Venkataeswara+Hospitals,+36+-+A,+Chamiers+Rd,+Nandanam+Extension,+Nandanam,+Chennai,+Tamil+Nadu+600035&ludocid=15776484453524650638&lsig=AB86z5VFIl2VqfAOS8TVTkzIWeer#lrd=0x3a5267b1f0f26955:0xdaf15505e8cf3a8e,3" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleWhatsappClick = () => {
    // Redirect to WhatsApp link using window.location
    window.location.href = 'https://wa.me/919384848287';
  };
  const handleClick = () => {
    // You can integrate your live chat system or open a chat modal here.
    alert("Opening live chat...");
  };
  return (
    <>
      <div className="social-media-container">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {social.icon}
            <span>{social.name}</span>
          </a>
        ))}
      </div>
      <div className="icon-container">
        <Link to="#" onClick={isModalOpen ? closeModal : openModal}>
          {isModalOpen ? (
            // Display close icon when modal is open
            <FaTimes size={40} />
          ) : (
            // Display WhatsApp icon when modal is closed
            <FaWhatsapp size={40} />
          )}
        </Link>


        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content green-modal">
              <div className="message-container">
                <FaWhatsapp size={40} />
                <p><strong>Need help?</strong><br />Please click below to chat on WhatsApp (between 10 a.m. - 6 p.m.)</p>
              </div>
            </div>

            <div className="modal-content white-modal">
              <p>The team typically replies in a few minutes.<br />Venketeshwara Whatsapp Support</p>
              <Link
                to="#"
                onClick={handleWhatsappClick}
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <FaWhatsapp size={40} />
              </Link>
              <p style={{ marginLeft: "50px" }}></p>
            </div>
          </div>
        )}
      </div>
      <div className="chat">
        <div
          onClick={handleClick} className='chats'

        >
          <FaCommentDots />
        </div>
      </div>

    </>


  );
};

export default Socialmedia;


