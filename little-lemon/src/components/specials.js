import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import greek from "../assets1/greek salad.jpg";
import bruchetta from "../assets1/bruchetta.png";
import lemon from "../assets1/lemon dessert.jpg";
import "./Specials.css";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Crispy lettuce, peppers, olives, The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greek
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$7.99",
    description:
      "Grilled bread smeared with garlic, seasoned with salt and olive oil, topped with tomatoes. Perfect appetizer for any occasion.",
    image: bruchetta
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.99",
    description:
      "A refreshing lemon dessert straight from grandma’s recipe book, with a sweet crust and creamy lemon filling.",
    image: lemon
  }
];

export default function Specials() {
  return (
    <div id='Spescials-section' className="specials-wrapper">
      {/* Header Section */}
      <header className="specials-header">
        <h1 className="specials-title">This Week Specials!</h1>
        <button className="menu-button">Online Menu</button>
      </header>

      {/* Specials Cards */}
      <div className="specials-container">
        {specialsData.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.name} className="special-img" />

            <div className="special-header">
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>

            <p className="special-description">{item.description}</p>

            <div className="order-delivery">
              <span className="order-text">Order Delivery</span>
              <FaMotorcycle className="order-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
