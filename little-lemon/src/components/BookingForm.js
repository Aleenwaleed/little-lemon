import React, { useState, useEffect } from "react";
import './BookingForm.css';

// دالة لتحديث الأوقات بناءً على التاريخ
export const updateTimes = (date) => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }
  // fallback إذا ما فيه fetchAPI
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// دالة تهيئة الأوقات
export const initializeTimes = () => {
  return updateTimes(new Date());
};

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("none");
  const [availableTimes, setAvailableTimes] = useState(initializeTimes());
  const [reservation, setReservation] = useState(null);

  // تحديث الأوقات لما يتغير التاريخ
  useEffect(() => {
    const dateObj = new Date(date);
    setAvailableTimes(updateTimes(dateObj));
    setTime("");
  }, [date]);

  function handleSubmit(event) {
    event.preventDefault();

    if (typeof window.submitAPI === 'function') {
      const formData = { firstName, lastName, date, time, guests, occasion };
      const success = window.submitAPI(formData);
      if (success) {
        setReservation(formData);
      } else {
        alert("There was an error submitting your reservation.");
      }
    } else {
      setReservation({ firstName, lastName, date, time, guests, occasion });
    }
  }

  return (
    <>
      <h2 className="booking-header">Reserve a Table</h2>
      <form  id="booking-section" onSubmit={handleSubmit} className="booking-form">
        <div className="name-container">
          <div className="name-field">
            <label htmlFor="first-name" className="booking-label">First Name</label>
            <input
              type="text"
              id="first-name"
              className="booking-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="name-field">
            <label htmlFor="last-name" className="booking-label">Last Name</label>
            <input
              type="text"
              id="last-name"
              className="booking-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <label htmlFor="res-date" className="booking-label">Choose Date</label>
        <input
          type="date"
          id="res-date"
          className="booking-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="res-time" className="booking-label">Choose Time</label>
        <select
          id="res-time"
          className="booking-select"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          disabled={availableTimes.length === 0}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests" className="booking-label">Number of Guests</label>
        <input
          type="number"
          id="guests"
          className="booking-input"
          value={guests}
          min="1"
          max="10"
          onChange={(e) => setGuests(e.target.value)}
          required
        />

        <label htmlFor="occasion" className="booking-label">Occasion</label>
        <select
          id="occasion"
          className="booking-select"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="none">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>

        <input type="submit" value="Make Your Reservation" className="booking-submit" />
      </form>

      {reservation && (
        <div className="confirmation">
          <h3>Booking Confirmed!</h3>
          <p><strong>Name:</strong> {reservation.firstName} {reservation.lastName}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>
          <p><strong>Number of Guests:</strong> {reservation.guests}</p>
          <p><strong>Occasion:</strong> {reservation.occasion}</p>
        </div>
      )}
    </>
  );
}
