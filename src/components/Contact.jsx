import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // import icons
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../api/axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, message, service } = formData;

    if (!name || !phoneNumber || !email || !message || !service) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const response = await api.post("/api/messages", formData);

      if (response.data.success) {
        toast.success("Message sent successfully!!");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          message: "",
          service: "",
        });
      } else {
        toast.error("failed to send message ");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Server error. please try again",
      );
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-center">
      <ToastContainer position="top-right" autoClose={2000} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Book a Pickup</h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Ready to experience professional laundry service? Contact us to
          schedule your first pickup.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Call */}
          <div className="bg-white p-6 px-8 py-3 rounded-full shadow hover:shadow-orange-500 border-white/20 ">
            <div className="text-[#ebb209] text-3xl mb-3">📞</div>
            <h2 className="font-bold text-xl text-black">
              Call or WhatsApp Us
            </h2>

            <p className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-luxuryGreen" /> +229 019 146 3171
            </p>

            <p className="text-lg font-semibold mb-6 flex items-center justify-center gap-2">
              <a
                href="https://wa.me/2290191402522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-300 transition"
              >
                <FaWhatsapp className="text-orange-500" /> WhatsApp
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 px-8 py-3 rounded-full shadow hover:shadow-orange-500 border-white/20">
            <div className="text-[#ebb209] text-3xl mb-3">📧</div>

            <h3 className="font-semibold text-lg mb-2">Send Us an Email</h3>

            <a
              href="mailto:adebayobidemi36@gmail.com"
              className="text-orange-500 hover:text-orange-300 transition"
            >
              adebayobidemi36@gmail.com
            </a>

            <p className="text-xl text-black mt-2">Response within 24 hours</p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 px-8 py-3 rounded-full shadow hover:shadow-orange-500 border-white/20">
            <div className="text-[#ebb209] text-3xl mb-3">📍</div>

            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>

            <p className="text-orange-500 hover:text-orange-300">
              📍 After Proci Morgue, before Gbeka Hall - Akpakpa, Cotonou.
            </p>

            <p className="text-xl text-black mt-2">
              Service area: Akpakpa, Cotonou.
            </p>
          </div>
        </div>

        <div className="p-24 text-black mt-5 max-w-3xl mx-auto bg-white backdrop-blur-lg rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-5 text-center">Booking</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white border border-[#d0d5db] focus:outline-orange-200"
            />

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-white border border-[#d0d5db] focus:outline-orange-200"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email (optional)"
              className="w-full p-3 rounded-lg bg-white border border-[#d0d5db] focus:outline-orange-200"
            />

            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. No starch, Hand-wash only, etc."
              className="w-full p-3 rounded-lg bg-white border border-[#d0d5db] focus:outline-orange-200"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-4 w-full bg-white rounded-lg focus:outline-0 border border-white/30"
            >
              <option>Choose a service</option>
              <option>Wash & Iron</option>
              <option>Dry Cleaning</option>
              <option>Wash & Fold</option>
              <option>Stain Removal</option>
              <option>Beddings & Curtains</option>
              <option>Corporate / Hotel Laundry</option>
            </select>

            <button className="w-full border border-white/30 bg-[#ebb209] text-black py-3 rounded-lg font-bold hover:bg-[#cc8904] transition">
              Confirm Booking
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
