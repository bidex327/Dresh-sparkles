import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl p-8 shadow-sm text-xl font-medium">
          <h1 className="text-2xl font-bold mb-6">Tarification à l’article</h1>
          
          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Chemises / T-shirts</span>
            <span className="text-[#ebb209]">à partir de 360 FCFA</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Pantalons / Jeans</span>
            <span className="text-[#ebb209]">à partir de 450 FCFA</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Tenues traditionnelles (Agbada, etc.)</span>
            <span className="text-[#ebb209]">à partir de 810 FCFA</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Draps</span>
            <span className="text-[#ebb209]">à partir de 585 FCFA</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Couettes</span>
            <span className="text-[#ebb209]">à partir de 585 FCFA</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-300 gap-5">
            <span>Costumes (2 pièces)</span>
            <span className="text-[#ebb209]">à partir de 1125 FCFA</span>
          </div>

        </div>

        <div className="bg-black text-white rounded-2xl p-8 shadow-sm border border-orange-400">
          
          <h2 className="text-[#ebb209] font-bold mb-4 text-2xl">
            Forfaits d’abonnement
          </h2>

          <p className="text-gray-300 mb-5">
            Idéal pour les particuliers, les familles et les entreprises. Tarification personnalisée selon le volume.
          </p>

          <div className="bg-[#241f18] flex items-center rounded-full mb-4 p-4 gap-4">
            <div>
              <IoCalendarNumberSharp className="text-[#ebb209] rounded-full"/>
            </div>
            <div>
              <h4 className="font-semibold">Forfait hebdomadaire</h4>
              <p className="text-sm text-gray-400">
                Parfait pour les professionnels occupés
              </p>
            </div>
          </div>

          <div className="bg-[#241f18] flex items-center rounded-full mb-4 p-4 gap-4">
            <div>
              <IoCalendarNumberSharp className="text-[#ebb209] rounded-full"/>
            </div>
            <div>
              <h4 className="font-semibold">Forfait mensuel</h4>
              <p className="text-sm text-gray-400">
                Meilleur choix pour les familles
              </p>
            </div>
          </div>

          <button className="w-full bg-[#ebb209] hover:bg-[#cc8904] text-black py-3 rounded-xl font-semibold  transition">
            Obtenir un devis personnalisé
          </button>

        </div>

      </div>
    </section>
  );
};

export default Pricing;