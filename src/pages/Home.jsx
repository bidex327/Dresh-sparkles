import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Services from "../components/Services";

import Promotion from "../components/Promtion";

import About from "../components/About";

import Contact from "../components/Contact";

import Booking from "../components/Booking";

import Location from "../components/Location";

import WhatsAppButton from "../components/WhatsAppButton";

import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Promotion/>
      <About/>
      <Contact/>
      <Booking/>
      <Location/>
      <WhatsAppButton/>
      <Footer/>
    </>
  );
};

export default Home;
