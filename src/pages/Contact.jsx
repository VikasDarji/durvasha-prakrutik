import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted", { state: formData });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Us</h2>
     

      <div className="contact-grid">
        {/* Left - Contact Form */}
        
        <form onSubmit={handleSubmit} className="contact-box form-box">
          <h2>Send Us a Message</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="Phone"
            required
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
          />

          <label>Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Right - Contact Info */}
        <div className="contact-box info-box">
          <h3>Contact Information</h3>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 90237 56982</p>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>support@business.com</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Vadodara, Gujarat, India</p>
          </div>

          <div className="glow-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
