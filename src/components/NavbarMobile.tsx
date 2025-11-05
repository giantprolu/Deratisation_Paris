import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 md:hidden" 
        aria-label="Menu Button"
      >
        <div className="relative w-6 h-6">
          <span 
            className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 top-2.5' : ''
            }`}
          />
          <span 
            className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 top-2.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      {isOpen && (
        <div 
          ref={menuRef} 
          className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl z-50 md:hidden overflow-hidden animate-slideInUp"
        >
          <div className="p-6">
            {/* Navigation Links */}
            <div className="space-y-2">
              <a 
                href="/" 
                className="group flex items-center gap-4 text-gray-700 hover:text-primary-600 py-4 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-lg">🏠</span>
                </div>
                <span>Accueil</span>
              </a>

              <a 
                href="/services" 
                className="group flex items-center gap-4 text-gray-700 hover:text-primary-600 py-4 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-green-600 text-lg">🛡️</span>
                </div>
                <span>Services</span>
              </a>

              <a 
                href="/contact" 
                className="group flex items-center gap-4 text-gray-700 hover:text-primary-600 py-4 px-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-purple-600 text-lg">💬</span>
                </div>
                <span>Contact</span>
              </a>
            </div>

            {/* Footer du menu */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">Urgence 24h/7j</div>
                <div className="text-lg font-bold text-primary-600">07 67 39 38 85</div>
                <div className="text-xs text-gray-400 mt-1">Intervention rapide</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
