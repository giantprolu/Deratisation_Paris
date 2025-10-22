// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://hygiene-protect-3d.fr',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        'https://hygiene-protect-3d.fr/',
        'https://hygiene-protect-3d.fr/services',
        'https://hygiene-protect-3d.fr/contact',
        'https://hygiene-protect-3d.fr/mentions-legales',
        'https://hygiene-protect-3d.fr/politique-de-confidentialite',
      ],
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});