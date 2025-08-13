import Nav from './components/Nav';
import CallToAction from './components/CallToAction'
import Specials from './components/specials';
import Footer from './components/Footer';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';




function Homepage() {
  return (
    <>
      <Nav />
      <CallToAction id="CallToAction-section"/>
      <Specials id="Spescials-section" />
      <CustomersSay />
      <Chicago id="About-section"/>
      <Footer />
    </>
  );
}

export default Homepage;
