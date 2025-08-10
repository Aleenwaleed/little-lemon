import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets1/logo little lemon.png';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      {/* شعار اللوقو */}
      <div className="logo-container">
        <img 
          src={logo}
          alt="Little Lemon Logo" 
          className="logo"
        />
      </div>

      {/* روابط التنقل */}
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/mune" className="nav-link">Mune</Link></li>
        <li><Link to="/reservations" className="nav-link">Reservations</Link></li>
        <li><Link to="/orderOnline" className="nav-link">Order Online</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
}


// تنسيقات بسيطة باستخدام Inline CSS (تقدرين تنقلينها لملف CSS لو تحبين)
/*const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#ffffff',
  color: '#000000'
};

const logoContainerStyle = {
  flexShrink: 0,
};

const logoStyle = {
  height: '50px',
  width: 'auto',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

//export default Nav;*/
