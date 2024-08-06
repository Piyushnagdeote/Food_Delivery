import React, { useEffect, useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) { // Show button if scrolled down more than 200px
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='Footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Discover the best dining experiences near you with our app – your ultimate food companion!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>91+ 9370318639</li>
            <li>pnagdeote219@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tamato.com - All rights Reserved.</p>
      {/* Scroll to Top Button */}
      <div className={`scroll-to-top ${showScroll ? 'show-scroll-to-top' : ''}`} onClick={scrollToTop}>
        <img src={assets.arrow_icon} alt="Scroll up" />
      </div>
    </div>
  );
};

export default Footer;

