import Navbar from "../components/Navbar";

import Hero from "../components/Hero";

import Services from "../components/Services";

import Promotion from "../components/Promtion";

import Pricing from "../components/Pricing";

import Contact from "../components/Contact";





import WhatsAppButton from "../components/WhatsAppButton";

import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Services/>
      <Promotion/>
      <Pricing/>
      <Contact/>
  
      <WhatsAppButton/>
      <Footer/>
    </>
  );
};

export default Home;
