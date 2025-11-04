import React, { useState } from 'react';
import { Copy, Eye, EyeOff } from 'lucide-react';
import { useProtectedEmail } from '../utils/emailProtection';

interface ProtectedEmailProps {
  email: string;
  displayText?: string;
  className?: string;
  showCopyButton?: boolean;
  allowReveal?: boolean;
}

const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  email,
  displayText,
  className = '',
  showCopyButton = false,
  allowReveal = false
}) => {
  const [showReal, setShowReal] = useState(false);
  const [copied, setCopied] = useState(false);
  const { getDisplayEmail, getMailtoLink, copyToClipboard } = useProtectedEmail(email);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const success = await copyToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReveal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowReal(!showReal);
  };

  const displayEmailText = displayText || getDisplayEmail(showReal);

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={getMailtoLink('Demande de devis - Dératisation')}
        className="text-primary-600 hover:text-primary-dark hover:underline font-semibold break-all"
        onClick={() => {
          // Petit délai pour éviter les bots trop rapides
          setTimeout(() => {
            window.location.href = getMailtoLink('Demande de devis - Dératisation');
          }, 100);
        }}
      >
        {displayEmailText}
      </a>
      
      {allowReveal && (
        <button
          type="button"
          onClick={handleReveal}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          title={showReal ? 'Masquer l\'adresse' : 'Révéler l\'adresse'}
          aria-label={showReal ? 'Masquer l\'adresse' : 'Révéler l\'adresse'}
        >
          {showReal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      )}
      
      {showCopyButton && (
        <button
          type="button"
          onClick={handleCopy}
          className={`transition-colors ${
            copied 
              ? 'text-green-600 hover:text-green-700' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
          title={copied ? 'Copié !' : 'Copier l\'adresse'}
          aria-label={copied ? 'Copié !' : 'Copier l\'adresse'}
        >
          <Copy className={`w-4 h-4 ${copied ? 'animate-pulse' : ''}`} />
        </button>
      )}
    </div>
  );
};

export default ProtectedEmail;