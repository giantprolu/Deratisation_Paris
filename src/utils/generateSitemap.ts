import { services } from '../data/services';

export const generateSitemap = (): string => {
  const baseUrl = 'https://hygiene-protect-3d.fr';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
    { url: '/politique-de-confidentialite', changefreq: 'yearly', priority: '0.3' },
  ];

  // Pages de services dynamiques
  const servicePages = services.map(service => ({
    url: `/services/${service.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const allPages = [...staticPages, ...servicePages];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

// Fonction pour télécharger le sitemap
export const downloadSitemap = (): void => {
  const sitemap = generateSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};