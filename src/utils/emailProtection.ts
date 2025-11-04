/**
 * Utilitaires pour protéger les adresses e-mail contre les bots
 */

/**
 * Encode une adresse e-mail en utilisant l'encodage HTML
 * @param email L'adresse e-mail à encoder
 * @returns L'adresse e-mail encodée
 */
export const encodeEmail = (email: string): string => {
  return email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('');
};

/**
 * Décode une adresse e-mail encodée
 * @param encodedEmail L'adresse e-mail encodée
 * @returns L'adresse e-mail décodée
 */
export const decodeEmail = (encodedEmail: string): string => {
  if (typeof document === 'undefined') return encodedEmail;
  const temp = document.createElement('div');
  temp.innerHTML = encodedEmail;
  return temp.textContent || temp.innerText || '';
};

/**
 * Obfusque une adresse e-mail pour l'affichage
 * @param email L'adresse e-mail à obfusquer
 * @returns L'adresse e-mail obfusquée
 */
export const obfuscateEmail = (email: string): string => {
  const [localPart, domain] = email.split('@');
  if (!localPart || !domain) return email;
  
  const obfuscatedLocal = localPart.length > 2 
    ? `${localPart[0]}${'*'.repeat(localPart.length - 2)}${localPart[localPart.length - 1]}`
    : localPart;
  
  const [domainName, extension] = domain.split('.');
  const obfuscatedDomain = domainName.length > 2
    ? `${domainName[0]}${'*'.repeat(domainName.length - 2)}${domainName[domainName.length - 1]}`
    : domainName;
  
  return `${obfuscatedLocal}@${obfuscatedDomain}.${extension}`;
};

/**
 * Crée un lien mailto protégé contre les bots
 * @param email L'adresse e-mail
 * @param subject Le sujet optionnel
 * @returns L'URL mailto obfusquée
 */
export const createProtectedMailto = (email: string, subject?: string): string => {
  const encodedEmail = email
    .split('')
    .map(char => {
      const code = char.charCodeAt(0);
      return Math.random() > 0.5 ? `%${code.toString(16)}` : char;
    })
    .join('');
  
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${encodedEmail}${subjectParam}`;
};

/**
 * Hook pour gérer l'affichage protégé d'une adresse e-mail (pour React)
 */
export const useProtectedEmail = (email: string) => {
  const getDisplayEmail = (showReal: boolean = false): string => {
    return showReal ? email : obfuscateEmail(email);
  };
  
  const getMailtoLink = (subject?: string): string => {
    return createProtectedMailto(email, subject);
  };
  
  const copyToClipboard = async (): Promise<boolean> => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return false;
    try {
      await navigator.clipboard.writeText(email);
      return true;
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
      return false;
    }
  };
  
  return {
    getDisplayEmail,
    getMailtoLink,
    copyToClipboard,
    obfuscated: obfuscateEmail(email)
  };
};