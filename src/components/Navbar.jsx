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
      className="fixed  w-full z-50 bg-blue-100 backdrop-blur-md text-black px-6 py-4 flex justify-between items-center shadow-lg "
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold  tracking-widest ">
        DRESH <span className="text-gold font">Sparkles</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link
  to="services"
  smooth={true}
  duration={800}
  spy={true}
activeClass="text-gold underline decoration-green-300 decoration-2"
  className="cursor-pointer text-black"
>
          Services
        </Link>
             <Link
  to="promotion"
  smooth={true}
  duration={800}
  spy={true}
activeClass="text-gold underline decoration-green-300 decoration-2"
  className="cursor-pointer hover:text-black"
>
          Promotion
        </Link>
             <Link
  to="booking"
  smooth={true}
  duration={800}
  spy={true}
activeClass="text-gold underline decoration-green-300 decoration-2"
  className="cursor-pointer hover:text-black"
>
          Réservation
        </Link>
                <Link
  to="about"
  smooth={true}
  duration={800}
  spy={true}
activeClass="text-gold underline decoration-green-300 decoration-2"
  className="cursor-pointer hover:text-black"
>
          About
        </Link>
             <Link
  to="contact"
  smooth={true}
  duration={800}
  spy={true}
activeClass="text-gold underline decoration-green-300 decoration-2"
  className="cursor-pointer hover:text-black"
>
          Contact
        </Link>
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-luxuryGreen w-full flex flex-col items-center space-y-6 py-6 shadow-lg"
          >
            <Link
  onClick={() => setIsOpen(false)}
  to="services"
  smooth
  duration={800}
  spy
  activeClass="text-black decoration-green-300  underline"
>

              Services
            </Link>
                     <Link
  onClick={() => setIsOpen(false)}
  to="promotion"
  smooth
  duration={800}
  spy
  activeClass="text-black decoration-green  underline"
>
              Promotion
            </Link>
                      <Link
  onClick={() => setIsOpen(false)}
  to="booking"
  smooth
  duration={800}
  spy
  activeClass="text-black decoration-green-300  underline"
>
              Réservation
            </Link>
                      <Link
  onClick={() => setIsOpen(false)}
  to="about"
  smooth
  duration={800}
  spy
  activeClass="text-black decoration-green-300  underline"
>
             About
            </Link>
                      <Link
  onClick={() => setIsOpen(false)}
  to="contact"
  smooth
  duration={800}
  spy
  activeClass="text-black decoration-green-300  underline"
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