import { motion } from "framer-motion";

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-blue-100 text-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto bg-blue-100 backdrop-blur-lg p-10 rounded-2xl shadow-2xl"
      >
        <h3 className="text-3xl font-bold text-center mb-8">
          Réservation
        </h3>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full p-3 rounded-lg bg-white border border-white/30 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="w-full p-3 rounded-lg bg-white border border-white/30 focus:outline-none"
          />

          <select className="w-full p-3 rounded-lg bg-white border border-white/30 focus:outline-none">
            <option>Choisir un service</option>
            <option>Lavage & Repassage</option>
            <option>Nettoyage à Sec</option>
          </select>

          <button className="w-full bg-gold text-black py-3 rounded-lg font-bold hover:bg-green-300 transition">
            Confirmer la Réservation
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Booking;