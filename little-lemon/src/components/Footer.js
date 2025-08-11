import React from "react";
import logo from "../assets1/logov.png"; // عدل المسار لو تحتاج
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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
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
