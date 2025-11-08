import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-section">
          <h2 className="footer-logo">Durvasha Prakrutik</h2>
          <p>
            Your trusted source for natural and organic products.
            We deliver quality and care — straight from nature to you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        {/* <li><a href="/services">Services</a></li> */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Vadodara, Gujarat, India</p>
          <p>📞 +91 90237 56982</p>
          <p>📧 support@business.com</p>
        </div>

        {/* Social Links */}
    {/* <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>*/}  
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Made by Team-1 | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
