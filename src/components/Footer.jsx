import React from 'react';
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import { FaTwitter } from 'react-icons/fa';



function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              We are a pizza delivery service committed to providing you with
              delicious and freshly made pizzas right to your doorstep.
            </p>
          </div>
          <div className="footer-section">
            <h2>Contact Information</h2>
            <p>123 Pizza Street, Bihar</p>
            <p>Phone: 7762805789</p>
            <p>Email: girianamika7277@gmail.com</p>
          </div>
          <div className="footer-section">
            <h2>Opening Hours</h2>
            <p>Monday - Friday: 9am - 9pm</p>
            <p>Saturday - Sunday: 10am - 10pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Anamika giri. All rights reserved. </p>
          <p> <FaFacebook className='icon'/><FaInstagram className='icon'/><FaTwitter className='icon'/></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
