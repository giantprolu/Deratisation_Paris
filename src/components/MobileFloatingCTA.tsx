import { useState } from 'react';
import { Phone, FileText, ChevronUp, ChevronDown } from 'lucide-react';

export default function MobileFloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCallClick = () => {
    window.location.href = 'tel:+33767393885';
  };

  const handleQuoteClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Bouton pour replier/déplier */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center py-2 bg-gray-50 border-b border-gray-100 text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </button>

        {/* Contenu des boutons */}
        {isExpanded && (
          <div className="p-4 space-y-3">
            {/* Bouton Appeler */}
            <button
              onClick={handleCallClick}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors shadow-md"
            >
              <Phone className="w-6 h-6" />
              <span>Appeler maintenant</span>
            </button>

            {/* Bouton Devis */}
            <button
              onClick={handleQuoteClick}
              className="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors shadow-md"
            >
              <FileText className="w-6 h-6" />
              <span>Demander un devis</span>
            </button>
          </div>
        )}

        {/* Version repliée - boutons compacts */}
        {!isExpanded && (
          <div className="flex p-2 gap-2">
            <button
              onClick={handleCallClick}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler</span>
            </button>
            <button
              onClick={handleQuoteClick}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl font-medium transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Devis</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}