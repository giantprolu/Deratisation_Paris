interface ServiceSEOData {
  serviceName: string;
  serviceSlug: string;
  description?: string;
  city?: string;
  department?: string;
}

// Générer des mots-clés hyper-localisés par département
export const generateLocationKeywords = (serviceName: string, department: string): string[] => {
  const cities = {
    '75': ['Paris', 'Paris 1er', 'Paris 2ème', 'Paris 3ème', 'Paris 4ème', 'Paris 5ème', 
           'Paris 6ème', 'Paris 7ème', 'Paris 8ème', 'Paris 9ème', 'Paris 10ème',
           'Paris 11ème', 'Paris 12ème', 'Paris 13ème', 'Paris 14ème', 'Paris 15ème',
           'Paris 16ème', 'Paris 17ème', 'Paris 18ème', 'Paris 19ème', 'Paris 20ème'],
    '93': ['Bondy', 'Montreuil', 'Saint-Denis', 'Aubervilliers', 'Pantin', 'Noisy-le-Grand'],
    '94': ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés'],
    '95': ['Argenteuil', 'Cergy', 'Garges-lès-Gonesse', 'Franconville'],
    '77': ['Meaux', 'Melun', 'Chelles', 'Pontault-Combault'],
    '78': ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye'],
    '91': ['Évry', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge'],
    '92': ['Boulogne-Billancourt', 'Nanterre', 'Colombes', 'Asnières-sur-Seine']
  };

  const departmentCities = cities[department as keyof typeof cities] || ['Paris'];
  
  const keywords: string[] = [];
  departmentCities.forEach(city => {
    keywords.push(
      `${serviceName} ${city}`,
      `${serviceName} urgence ${city}`,
      `${serviceName} professionnel ${city}`,
      `expert ${serviceName} ${city}`,
      `entreprise ${serviceName} ${city}`
    );
  });

  return keywords;
};

// Générer le titre SEO optimisé
export const generateSEOTitle = (data: ServiceSEOData): string => {
  const { serviceName, city = 'Paris' } = data;
  return `${serviceName} ${city} & IDF ⭐ Expert N°1 | Hygiène Protect 3D`;
};

// Générer la meta description
export const generateMetaDescription = (data: ServiceSEOData): string => {
  const { serviceName, description, city = 'Paris' } = data;
  
  if (description) return description;
  
  return `🥇 ${serviceName} ${city} & Île-de-France par expert certifié ✅ Intervention 1H ✅ Garantie résultat ✅ Devis gratuit 24h/24 ☎ 07 67 39 38 85`;
};

// Générer les mots-clés SEO
export const generateSEOKeywords = (data: ServiceSEOData): string => {
  const { serviceName, serviceSlug, city = 'Paris', department = '75' } = data;
  
  const locationKeywords = generateLocationKeywords(serviceName.toLowerCase(), department);
  const allKeywords = [
    ...locationKeywords,
    `${serviceName} ${city}`,
    `${serviceName} urgence ${city}`,
    `${serviceName} pas cher ${city}`,
    `${serviceName} professionnel ${city}`,
    `devis gratuit ${serviceName} ${city}`,
    `expert ${serviceName} ${city}`,
    `société ${serviceName} ${city}`,
    `entreprise ${serviceName} ${city}`
  ];

  return allKeywords.join(', ');
};

// Générer le schema FAQ spécialisé selon le service
export const generateFAQSchema = (serviceSlug: string) => {
  const faqSchemas = {
    deratisation: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte une dératisation à Paris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix d'une dératisation varie selon la surface et le niveau d'infestation. Devis gratuit sous 24h. Tarifs compétitifs dès 120€ pour un traitement complet."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps dure le traitement de dératisation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un traitement de dératisation prend généralement 1 à 2 heures selon la superficie. Les premiers résultats sont visibles dès 24-48h."
          }
        },
        {
          "@type": "Question",
          "name": "La dératisation est-elle dangereuse pour les animaux domestiques ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos produits sont appliqués dans des postes d'appâtage sécurisés. Nous utilisons des méthodes sans danger pour vos animaux domestiques."
          }
        }
      ]
    },
    desinsectisation: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte une désinsectisation à Paris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix varie selon l'insecte et la surface à traiter. Devis gratuit. Tarifs dès 90€ pour un traitement professionnel contre cafards, punaises, fourmis."
          }
        },
        {
          "@type": "Question",
          "name": "Dois-je quitter mon logement pendant la désinsectisation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selon le traitement, une absence de 2-4h peut être recommandée. Nous vous informons précisément des précautions à prendre."
          }
        }
      ]
    },
    general: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Proposez-vous un devis gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, nous proposons un devis gratuit et sans engagement sous 24h. Contactez-nous au 07 67 39 38 85 ou par formulaire."
          }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous en urgence ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, nous intervenons 24h/24 et 7j/7 pour les urgences dans toute l'Île-de-France. Délai d'intervention sous 1h possible."
          }
        }
      ]
    }
  };

  if (serviceSlug.includes('deratisation')) return faqSchemas.deratisation;
  if (serviceSlug.includes('desinsectisation')) return faqSchemas.desinsectisation;
  return faqSchemas.general;
};

// Générer le schema de service
export const generateServiceSchema = (data: ServiceSEOData) => {
  const { serviceName, serviceSlug, city = 'Paris' } = data;
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} ${city}`,
    "description": generateMetaDescription(data),
    "provider": {
      "@type": "Organization",
      "name": "Hygiène Protect 3D",
      "telephone": "+33767393885",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bondy",
        "postalCode": "93140",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 48.8566,
        "longitude": 2.3522
      },
      "geoRadius": "50000"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "120",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  };
};