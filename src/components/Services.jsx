import { motion } from "framer-motion";

const services = [
    "Lavage & Repassage",
    "Nettoyage à Sec",
    "Enlévment des Taches",
    "Couettes & Rideaux",
    "service Rapide",
    "Ramassage & Livraison Gratuits",
];

const Services =  () => {
    return (
        <section id="services" className="py-24 bg-blue-100">
        <h3 className="text-center text-4xl font-bold text-black mb-16"> Nos Services Premium</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 " >
            {services.map((service, index) => (
                <motion.div
                key={index}
                whileHover={{ scale: 1.05}}
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6}}
                className="hover:bg-green-300 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 text-center ">
                <p className="text-lg font-semibold text-black">
                    {service}
                </p>

                </motion.div>
            ))}
        </div>



        </section>
    )
}

export default Services;

