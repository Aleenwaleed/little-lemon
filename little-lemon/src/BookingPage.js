import React from "react";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";

export default function BookingPage() {
  return (
    <main style={{ padding: "20px" }}>
      <Nav />
      <BookingForm />
    </main>
  );
}
