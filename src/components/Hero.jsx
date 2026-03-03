import { motion } from "framer-motion";
import bg from "../assets/laundry-bg.JPG"

const Hero = () => {
    return (
        <section className="h-screen bg-cover bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg})`}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
        initial={{ opacity: 0, y: 60}}
        animate={{ opacity:1, y: 0}}
        transition={{ duration: 1}}
        className="relative z-10 bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-2xl text-center text-black max-w-3xl shadow-2xl border border-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6"> L’Excellence du Soin Textile à Cotonou</h2>
        <p className="text-xl md:text-xl mb-4"> Grande Ouverture – 25 Février 2026</p>
        <p className="text-2xl md:text-3xl text-gold font-extrabold m-6"> 50% de Réduction</p>
        <button className="bg-gold text-luxuryGreen px-8 py-3 rounded-full font-extrabold hover:scale-105 transition"> Réserver Maintenant</button>

        </motion.div>

        </section>
    );
};
export default Hero;





