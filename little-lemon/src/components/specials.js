import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import greek from '../assets1/greek salad.jpg';
import bruchetta from '../assets1/bruchetta.png';
import lemon from '../assets1/lemon dessert.jpg';
import "./Specials.css";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "Crispy lettuce, peppers, olives, The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.  feta cheese, garnished with crunchy garlic croutons.",
    image: greek
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$7.99",
    description: "Grilled bread Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  with garlic, seasoned with salt and olive oil, topped with tomatoes.",
    image: bruchetta
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.99",
    description: "A refreshing lemon dessert This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. a sweet crust and creamy lemon filling.",
    image: lemon
  }
];

export default function Specials() {
  return (
    <div className="specials-container">
      {specialsData.map(item => (
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
  );
}
