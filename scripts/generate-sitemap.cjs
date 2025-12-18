const fs = require('fs');
const path = require('path');

// Emplacement du sitemap public
const sitemapPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');

// Domain par défaut si SITE_URL non défini
const DEFAULT_SITE_URL = 'https://hygiene-protect-3d.fr';

const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

if (!fs.existsSync(sitemapPath)) {
  console.error('[generate-sitemap] sitemap.xml introuvable à', sitemapPath);
  process.exit(1);
}

let content = fs.readFileSync(sitemapPath, 'utf8');

// Remplace toutes les loc existantes par la valeur de siteUrl
content = content.replace(/<loc>https?:\/\/[^<]+<\/loc>/g, (match) => {
  // Extraire le chemin après le host
  const m = match.match(/<loc>(https?:\/\/[^/]+)([^<]*)<\/loc>/);
  if (m) {
    const pathPart = m[2] || '/';
    return `<loc>${siteUrl}${pathPart}</loc>`;
  }
  return match;
});

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('[generate-sitemap] sitemap.xml mis à jour avec SITE_URL =', siteUrl);