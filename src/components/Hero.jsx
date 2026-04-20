import { motion } from "framer-motion";
import { Link } from "react-scroll";
import bg from "../assets/laundry-bg.JPG";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-start overflow-hidden px-4 sm:px-8 md:px-20 py-32 md:py-40"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-3xl p-6 sm:p-8 md:p-12 rounded-2xl text-left text-white"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6"
        >
          DRESH SPARKLES
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        >
          L'Excellence du Soin Textile à Cotonou
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl mb-6 "
        >
          Chez DRESH Sparkles, nous redéfinissons le service de blanchisserie à Cotonou.
          Nous offrons un service moderne, rapide et professionnel avec ramassage et livraison 100% gratuits.
          Votre linge mérite un traitement d’exception.
        </motion.p>

        <motion.div variants={itemVariants} className="w-full">
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 rounded-full font-extrabold transition"
            >
              Réserver Maintenant
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;