const fs = require('fs');
const path = require('path');

// Configuration pour dominer Paris et l'Île-de-France
const SITE_URL = 'https://hygiene-protect-3d.fr';
const currentDate = new Date().toISOString().split('T')[0];

// Villes principales par département (haute recherche SEO)
const cities = {
  '75': [
    'Paris-1er', 'Paris-2eme', 'Paris-3eme', 'Paris-4eme', 'Paris-5eme',
    'Paris-6eme', 'Paris-7eme', 'Paris-8eme', 'Paris-9eme', 'Paris-10eme',
    'Paris-11eme', 'Paris-12eme', 'Paris-13eme', 'Paris-14eme', 'Paris-15eme',
    'Paris-16eme', 'Paris-17eme', 'Paris-18eme', 'Paris-19eme', 'Paris-20eme'
  ],
  '93': ['Bondy', 'Montreuil', 'Saint-Denis', 'Aubervilliers', 'Pantin', 'Noisy-le-Grand'],
  '94': ['Creteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fosses'],
  '95': ['Argenteuil', 'Cergy', 'Garges-les-Gonesse', 'Franconville'],
  '77': ['Meaux', 'Melun', 'Chelles', 'Pontault-Combault'],
  '78': ['Versailles', 'Sartrouville', 'Mantes-la-Jolie', 'Saint-Germain-en-Laye'],
  '91': ['Evry', 'Corbeil-Essonnes', 'Massy', 'Savigny-sur-Orge'],
  '92': ['Boulogne-Billancourt', 'Nanterre', 'Colombes', 'Asnieres-sur-Seine', 'Rueil-Malmaison']
};

// Services principaux
const services = [
  { slug: 'deratisation', priority: '0.9' },
  { slug: 'desinsectisation', priority: '0.85' },
  { slug: 'desinfection', priority: '0.85' },
  { slug: 'guepes-frelons-hauteur', priority: '0.8' },
  { slug: 'depigeonnage', priority: '0.75' },
  { slug: 'hygiene-du-batiment', priority: '0.75' },
  { slug: 'debarras-pro', priority: '0.7' }
];

// Générer le sitemap local optimisé
function generateLocalSitemap() {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Pages principales -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>${SITE_URL}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  
  <url>
    <loc>${SITE_URL}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

  // Ajouter les pages de services principales
  services.forEach(service => {
    sitemapContent += `  <url>
    <loc>${SITE_URL}/services/${service.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${service.priority}</priority>
  </url>
`;
  });

  // Ajouter les pages de services par ville pour dératisation (service principal)
  Object.entries(cities).forEach(([dept, cityList]) => {
    cityList.forEach(city => {
      const citySlug = city.toLowerCase().replace(/[^a-z0-9]/g, '-');
      sitemapContent += `  <url>
    <loc>${SITE_URL}/services/deratisation-${citySlug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });
  });

  // Ajouter pages légales
  sitemapContent += `  <url>
    <loc>${SITE_URL}/mentions-legales</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${SITE_URL}/politique-de-confidentialite</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

  return sitemapContent;
}

// Générer et sauvegarder le sitemap
function saveSitemap() {
  const sitemapContent = generateLocalSitemap();
  const outputPath = path.resolve(__dirname, '..', 'public', 'sitemap-local.xml');
  
  fs.writeFileSync(outputPath, sitemapContent, 'utf8');
  console.log('[generate-local-sitemap] Sitemap local généré :', outputPath);
  console.log(`[generate-local-sitemap] ${services.length} services + villes locales ajoutés`);
}

// Exécuter si appelé directement
if (require.main === module) {
  saveSitemap();
}

module.exports = { generateLocalSitemap, saveSitemap };