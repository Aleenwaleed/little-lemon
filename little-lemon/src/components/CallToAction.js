import React from 'react';
import './CallToAction.css';
import { Link } from "react-router-dom";
import heroImage from '../assets1/Hero.jpg'; 

export default function CallToAction() {
  return (
    <section id="CallToAction-section" className="call-to-action">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <p>Chicago <br></br>Experience the freshest Mediterranean dishes in a cozy atmosphere. <br></br> 
        Our chefs prepare every meal with love and the finest ingredients.  <br></br>
        Join us for an unforgettable dining experience with family and friends.
        </p>

         <Link to="/Booking">
        <button className="cta-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="cta-image">
        <img src={heroImage} alt="Delicious food" />
      </div>
    </section>
  );
}
