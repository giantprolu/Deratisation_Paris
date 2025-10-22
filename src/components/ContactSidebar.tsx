import { CheckCircle, Phone } from 'lucide-react';

const ContactSidebar = () => {
  return (
    <div className="sticky top-24 space-y-6">
      {/* CTA Contact */}
      <div className="group bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-bold text-white mb-4">Besoin d'un service ?</h3>
        <p className="mb-6 text-white opacity-90 text-sm sm:text-base">
          Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins.
        </p>
        <a href="/contact" className="block w-full bg-white text-primary-600 px-4 py-3 rounded-lg font-medium text-center mb-3 hover:bg-gray-50 transition-colors">
          Demander un devis
        </a>
        <a href="tel:+33767393885" className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          <Phone className="w-5 h-5" />
          Appel d'urgence
        </a>
      </div>

      {/* Points clés */}
      <div className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Points clés</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Intervention rapide 24h/7j</span>
          </li>
          <li className="flex items-start gap-3 group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Techniciens certifiés</span>
          </li>
          <li className="flex items-start gap-3 group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Produits éco-responsables</span>
          </li>
          <li className="flex items-start gap-3 group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Garantie de résultat</span>
          </li>
          <li className="flex items-start gap-3 group hover:bg-primary-50 rounded-lg p-2 -m-2 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Devis gratuit</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSidebar;
