import { useState, useEffect } from 'react';
import { Phone, FileText, MessageCircle, X } from 'lucide-react';

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Masquer l'indice après 5 secondes ou lors du premier clic
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCallClick = () => {
    window.location.href = 'tel:+33767393885';
    setIsExpanded(false);
  };

  const handleQuoteClick = () => {
    window.location.href = '/contact';
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setShowHint(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 md:hidden">
      {/* Tooltip d'aide */}
      {showHint && !isExpanded && (
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm py-2 px-4 rounded-xl shadow-xl whitespace-nowrap animate-fadeInUp">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Besoin d'aide ? Cliquez ici !</span>
          </div>
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}

      {/* Actions expandues */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-fadeInUp">
          {/* Bouton Appeler */}
          <button
            onClick={handleCallClick}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group min-w-[200px]"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Appeler maintenant</div>
              <div className="text-xs opacity-90">07 67 39 38 85</div>
            </div>
          </button>

          {/* Bouton Devis */}
          <button
            onClick={handleQuoteClick}
            className="flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white py-3 px-5 rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group min-w-[200px]"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Demander un devis</div>
              <div className="text-xs opacity-90">Gratuit et rapide</div>
            </div>
          </button>
        </div>
      )}

      {/* Overlay pour fermer */}
      {isExpanded && (
        <div 
          className="fixed inset-0 -z-10 bg-black/10"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Bouton principal - Plus explicite */}
      <button
        onClick={toggleExpanded}
        className={`relative w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isExpanded ? 'rotate-45 scale-110' : 'hover:scale-110'
        }`}
        aria-label={isExpanded ? 'Fermer le menu' : 'Ouvrir le menu d\'aide'}
      >
        {isExpanded ? (
          <X className="w-6 h-6 transition-transform duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-transform duration-300" />
        )}
        
        {/* Indicateur visuel pour montrer que c'est cliquable */}
        {!isExpanded && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Phone className="w-2 h-2 text-white" />
          </div>
        )}
      </button>

      {/* Animation de pulsation pour attirer l'attention */}
      {!isExpanded && showHint && (
        <div className="absolute inset-0 w-16 h-16 bg-primary-400 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
}