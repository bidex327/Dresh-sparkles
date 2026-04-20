import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 bg-white backdrop-blur-md text-black px-6 py-4 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-widest">
        DRESH <span className="text-gold font">Sparkles</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="services" smooth duration={800} spy activeClass="text-gold underline decoration-green-300 decoration-2" className="cursor-pointer text-black">
          Services
        </Link>

        <Link to="promotion" smooth duration={800} spy activeClass="text-gold underline decoration-green-300 decoration-2" className="cursor-pointer hover:text-black">
          Promotion
        </Link>

       

        <Link to="pricing" smooth duration={800} spy activeClass="text-gold underline decoration-green-300 decoration-2" className="cursor-pointer hover:text-black">
        pricing
        </Link>

        <Link to="contact" smooth duration={800} spy activeClass="text-gold underline decoration-green-300 decoration-2" className="cursor-pointer hover:text-black">
          Contact
        </Link>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-2xl cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* ✅ MOBILE SIDE DRAWER FIX */}
     <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-blue-100 shadow-lg md:hidden flex flex-col items-center py-6 space-y-6 z-40"
    >
      <Link
        onClick={() => setIsOpen(false)}
        to="services"
        smooth
        duration={800}
        spy
        activeClass="text-black underline decoration-green-300"
      >
        Services
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        to="promotion"
        smooth
        duration={800}
        spy
        activeClass="text-black underline decoration-orange-100"
      >
        Promotion
      </Link>

     

      <Link
        onClick={() => setIsOpen(false)}
        to="pricing"
        smooth
        duration={800}
        spy
        activeClass="text-black underline decoration-orange-100"
      >
       pricing
      </Link>

      <Link
        onClick={() => setIsOpen(false)}
        to="contact"
        smooth
        duration={800}
        spy
        activeClass="text-black underline decoration-orange-100"
      >
        Contact
      </Link>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;