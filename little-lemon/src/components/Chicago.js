import React from "react";
import "./Chicago.css";
import restaurant1 from "../assets1/Mario and Adrian A.jpg";
import restaurant2 from "../assets1/Mario and Adrian b.jpg";

export default function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-text">
        <h1 className="chicago-title">Little Lemon</h1>
        <p className="chicago-subtitle">Chicago</p>
        <p className="chicago-description">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The chefs
          draw inspiration from Italian, Greek, and Turkish culture and have a
          menu of 12–15 items that they rotate seasonally. The restaurant has a
          rustic and relaxed atmosphere with moderate prices, making it a
          popular place for both locals and tourists.
        </p>
      </div>

      <div className="chicago-images">
        <img src={restaurant1} alt="Restaurant Interior" className="img-top" />
        <img src={restaurant2} alt="Restaurant Exterior" className="img-bottom" />
      </div>
    </section>
  );
}
