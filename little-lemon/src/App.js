//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import CallToAction from './components/CallToAction'
import Specials from './components/specials';
import Footer from './components/Footer';
import CustomersSay from './components/CustomersSay'
import Chicago from './components/Chicago'
import BookingPage from "./components/BookingPage";
import './App.css';


function App() {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
      <BookingPage />
    </>
  );
}

export default App;
