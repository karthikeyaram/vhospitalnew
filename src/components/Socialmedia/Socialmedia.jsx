import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa';
import './Socialmedia.css';

const Socialmedia = () => {
  const socialLinks = [
    { id: 1, icon: <FaFacebook />, name: "Facebook", url: "https://www.facebook.com" },
    { id: 2, icon: <FaTwitter />, name: "Twitter", url: "https://www.twitter.com" },
    { id: 3, icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com" },
    { id: 4, icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com" },
    { id: 5, icon: <FaYoutube />, name: "YouTube", url: "https://www.youtube.com" },
    { id: 6, icon: <FaGoogle />, name: "Google", url: "https://www.google.com" },
  ];

  return (
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
  );
};

export default Socialmedia;
