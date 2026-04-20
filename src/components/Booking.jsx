import { FaMobileAlt, FaTruckPickup, FaSoap, FaCheckSquare, FaTruck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Booking = () => {
  return (
    <section id="Booking" className="py-24 bg-gray-100 text-center">
      
      {/* Title */}
      <h2 className="text-5xl font-semibold text-gray-800 mb-3">
        How It Works
      </h2>
      <p className="text-gray-500 mb-20">
        Our process is simple and stress-free.
      </p>

      {/* GRID FIXED */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-6">

        {/* STEP 1 */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#fff4c7] flex items-center justify-center text-4xl text-[#d98f07]">
              <FaMobileAlt />
            </div>
            <span className="absolute -top-2 -right-2 bg-[#d98f07] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
          <h4 className="mt-5 font-semibold text-gray-800">Book a Pickup</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Call, message, or email us to schedule
          </p>

          <FaChevronRight className="hidden md:block absolute -right-10 top-10 text-[#d98f07] text-xl" />
        </div>

        {/* STEP 2 */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#fff4c7] flex items-center justify-center text-4xl text-[#d98f07]">
              <FaTruckPickup />
            </div>
            <span className="absolute -top-2 -right-2 bg-[#d98f07] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
          <h4 className="mt-5 font-semibold text-gray-800">We Pick Up</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">
            We arrive at your location
          </p>

          <FaChevronRight className="hidden md:block absolute -right-10 top-10 text-[#d98f07] text-xl" />
        </div>

        {/* STEP 3 */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#fff4c7] flex items-center justify-center text-4xl text-[#d98f07]">
              <FaSoap />
            </div>
            <span className="absolute -top-2 -right-2 bg-[#d98f07] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
          <h4 className="mt-5 font-semibold text-gray-800">Sorting & Washing</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Clothes separated and washed properly
          </p>

          <FaChevronRight className="hidden md:block absolute -right-10 top-10 text-[#d98f07] text-xl" />
        </div>

        {/* STEP 4 */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#fff4c7] flex items-center justify-center text-4xl text-[#d98f07]">
              <FaCheckSquare />
            </div>
            <span className="absolute -top-2 -right-2 bg-[#d98f07] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
              4
            </span>
          </div>
          <h4 className="mt-5 font-semibold text-gray-800">Quality Check</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Items inspected and neatly packed
          </p>

          <FaChevronRight className="hidden md:block absolute -right-10 top-10 text-[#d98f07] text-xl" />
        </div>

        {/* STEP 5 */}
        <div className="relative flex flex-col items-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-[#fff4c7] flex items-center justify-center text-4xl text-[#d98f07]">
              <FaTruck />
            </div>
            <span className="absolute -top-2 -right-2 bg-[#d98f07] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full">
              5
            </span>
          </div>
          <h4 className="mt-5 font-semibold text-gray-800">Delivery</h4>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Clean, fresh clothes delivered to you
          </p>
        </div>

       
      </div>

      <div className="max-w-6xl mx-auto mt-24 px-4 ">
      
      <div className="bg-black border-4 border-orange-300 rounded-3xl px-10  p-8 flex flex-col md:flex-row justify-around items-ce2nter gap-6">
      <div className="text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-bold text-[#fabd23] text-center ">
        48 -72 Hours
      </h3>
      <p className="text-gray-300 mt-2">Regular Laundry Turnaround</p>

      </div>

       <div className="text-center md:text-right">
      <h3 className="text-2xl md:text-3xl font-bold text-[#fabd23] text-center ">
        Custom Timeline
      </h3>
      <p className="text-gray-300 mt-2">Bulk / Corporate Orders</p>

      </div>

      </div>

      </div>

      

    </section>
  );
};

export default Booking;