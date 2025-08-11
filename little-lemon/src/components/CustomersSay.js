import React from "react";
import "./CustomersSay.css";

const testimonials = [
  {
    id: 1,
    name: "Aisha Al-Mutairi",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review: "The best restaurant I have ever tried! Excellent service and very delicious food."
  },
  {
    id: 2,
    name: "Yasser Al-Nasser",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    review: "The atmosphere is amazing and the food is outstanding. Highly recommended!"
  },
  {
    id: 3,
    name: "Sara Al-Qahtani",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    review: "Fast service and fresh food. I will definitely come back soon!"
  },
  {
    id: 4,
    name: "Fahad Al-Otaibi",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    review: "Reasonable prices and very tasty dishes."
  }
];

export default function CustomersSay() {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">What do our customers think?</h2>
      <div className="testimonials-container">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <img src={t.image} alt={t.name} className="customer-image" />
            <h3>{t.name}</h3>
            <div className="stars">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
            <p>{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
