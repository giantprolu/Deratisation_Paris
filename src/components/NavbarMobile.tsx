import { useState, useRef, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

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

  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-gray-700 md:hidden" 
        aria-label="Menu Button"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div ref={menuRef} className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-lg" aria-label="Mobile Navigation">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors" aria-label="Accueil" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="/services" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors" aria-label="Services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="/contact" className="block text-gray-700 hover:text-primary-600 py-2 transition-colors" aria-label="Contact" onClick={() => setIsOpen(false)}>Contact</a>
            <button onClick={handlePhoneClick} className="flex items-center gap-2 w-full px-4 py-2 bg-primary-600 hover:bg-primary-dark text-white rounded-lg transition-colors mt-2" aria-label="Phone Number">
              <PhoneCall className="w-4 h-4" />
              <span>07 67 39 38 85</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
