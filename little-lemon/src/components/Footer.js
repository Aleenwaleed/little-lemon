import React from "react";
import logo from "../assets1/logov.png"; 
import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      <div className="footer-sections">

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href='#CallToAction-section' className="nav-link">Home</a></li>
            <li><a href='#About-section' className="nav-link">About</a></li>
            <li><a href="#Spescials-section" className="nav-link">Mune</a></li>
            <li><Link to="/Booking" className="nav-link">Reservations</Link></li>
            <li><a href="#Spescials-section" className="nav-link">Order Online</a></li>
            <li><Link to="/" className="nav-link">Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>123 Lemon St., Chicago, IL</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
