const Promotion = () => {
  return (
  <section id="promotion" className="py-16 px-6 md:px-16 bg-gray-100 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Pourquoi Choisir <span className="text-orange-500">DRESH SPARKLES ?</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Nous allons au-delà des services de blanchisserie basiques. Vos vêtements sont traités avec professionnalisme et respect.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-5 mb-4">
            <div className="bg-orange-100 text-orange-500 rounded-full p-2">✔</div>
            <div>
              <h4 className="font-semibold">Détergents Hypoallergéniques</h4>
              <p className="text-gray-600 text-sm">
                Produits sûrs pour les tissus et respectueux de la peau pour tous vos vêtements.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-5 mb-4">
            <div className="bg-orange-100 text-orange-500 rounded-full p-2">✔</div>
            <div>
              <h4 className="font-semibold">Soin Adapté aux Tissus</h4>
              <p className="text-gray-600 text-sm">
                Différentes méthodes de lavage pour chaque type de tissu.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-5 mb-4">
            <div className="bg-orange-100 text-orange-500 rounded-full p-2">✔</div>
            <div>
              <h4 className="font-semibold">Séparation des Couleurs Garantie</h4>
              <p className="text-gray-600 text-sm">
                Les blancs et les couleurs sont lavés séparément pour éviter les transferts.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-5 mb-4">
            <div className="bg-orange-100 text-orange-500 rounded-full p-2">✔</div>
            <div>
              <h4 className="font-semibold">Contrôle de Qualité</h4>
              <p className="text-gray-600 text-sm">
                Chaque article est vérifié avant livraison pour votre satisfaction.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-3">
            <div className="bg-orange-100 text-orange-500 rounded-full p-2">✔</div>
            <div>
              <h4 className="font-semibold">Politique de Protection Contre les Dommages</h4>
              <p className="text-gray-600 text-sm">
                Politique claire pour la gestion des rares cas de dommages.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-900 p-6 rounded-2xl">
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-500">48h</h3>
              <p className="text-gray-600 text-sm mt-2">
                Délai Standard
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-600 text-sm mt-2">
                Vérification Qualité
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-500">Gratuit</h3>
              <p className="text-gray-600 text-sm mt-2">
                Ramassage & Livraison
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-500">5★</h3>
              <p className="text-gray-600 text-sm mt-2">
                Note des Clients
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Promotion;