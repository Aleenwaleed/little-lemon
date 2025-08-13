import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets1/logo little lemon.png';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      {}
      <div className="logo-container">
        <img 
          src={logo}
          alt="Little Lemon Logo" 
          className="logo"
        />
      </div>

      {}
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><a href='#About-section' className="nav-link">About</a></li>
        <li><a href="#Spescials-section" className="nav-link">Mune</a></li>
        <li><Link to="/Booking" className="nav-link">Reservations</Link></li>
        <li><a href="#Spescials-section" className="nav-link">Order Online</a></li>
        <li><Link to="/" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
}


