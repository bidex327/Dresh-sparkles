import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+22991402522"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppButton;