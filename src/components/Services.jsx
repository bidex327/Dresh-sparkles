import { FaTshirt, FaSprayCan, FaBroom, FaBed, FaClock, FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-24 bg-white  min-h-screen" id="services">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-black">Nos Services Premium</h3>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 auto-rows-fr">
        {/* Service Box 1 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg border shadow-black border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaTshirt className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Lavage & Repassage</p>
        </div>

        {/* Service Box 2 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg shadow-black border border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaSprayCan className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Nettoyage à Sec</p>
        </div>

        {/* Service Box 3 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg shadow-black  border border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaBroom className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Enlèvement des Taches</p>
        </div>

        {/* Service Box 4 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg shadow-black  border border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaBed className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Couettes & Rideaux</p>
        </div>

        {/* Service Box 5 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg shadow-black  border border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaClock className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Service Rapide</p>
        </div>

        {/* Service Box 6 */}
        <div className="p-10 rounded-2xl bg-white shadow-lg shadow-black  border border-white/20 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col justify-center">
          <FaTruck className="mx-auto mb-4 text-5xl text-orange-300" />
          <p className="text-xl font-semibold text-black">Ramassage & Livraison Gratuits</p>
        </div>
      </div>
    </div>
  );
};

export default Services;