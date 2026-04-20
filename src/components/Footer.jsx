import { Link } from "react-scroll";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 ">

      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 mb-5">

        <div>
          <h1 className="text-xl font-bold tracking-widest mb-3">
            DRESH <span className="text-gold font">Sparkles</span>
          </h1>
          <p className="text-sm text-gray-500">
            Services professionnels de blanchisserie et d’entretien des tissus auxquels vous pouvez faire confiance.
          </p>
        </div>

        <div>
          <h3 className="text-[#fabf1e] font-semibold mb-3">Services</h3>
          <ul className="text-gray-500 text-sm space-y-2 cursor-pointer">

            <li>
              <Link to="services" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e]">
                Lavage & Repassage
              </Link>
            </li>

            <li>
              <Link to="services" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e]">
                Couettes & Rideaux
              </Link>
            </li>

            <li>
              <Link to="services" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e]">
                Enlèvement des taches
              </Link>
            </li>

            <li>
              <Link to="services" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e]">
                Nettoyage à sec
              </Link>
            </li>

          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#fabf1e] mb-3">Liens rapides</h3>
          <ul className="text-sm space-y-2">

            <li>
              <Link to="services" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e] text-gray-500">
                Services
              </Link>
            </li>

            <li>
              <Link to="promotion" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e] text-gray-500">
                Promotion
              </Link>
            </li>

            <li>
              <Link to="pricing" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e] text-gray-500">
                Tarifs
              </Link>
            </li>

            <li>
              <Link to="contact" smooth duration={800}
                className="cursor-pointer hover:text-[#fabf1e] text-gray-500">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-orange-300 font-semibold mb-3">Contact</h3>
          <ul className="text-gray-400">

            <li className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-[#b31b15]" />
              +229 019 146 3171
            </li>

            <li className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-orange-300" />
              adebahisu@gmail.com
            </li>

            <li className="flex items-center gap-3 text-sm">
              <GrLocationPin className="text-[#b31b15]" />
              Zone desservie : Akpakpa, Cotonou
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-gray-400 text-sm text-center py-6">
        © 2026 DRESH Sparkles – Cotonou. Tous droits réservés.
      </div>

    </footer>
  );
};

export default Footer;