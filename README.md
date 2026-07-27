# Hygiène Protect 3D — Site vitrine

## 1. Présentation

Site vitrine statique pour **Hygiène Protect 3D**, entreprise de dératisation, désinsectisation, désinfection et dépigeonnage basée à Bondy (93140), intervenant en Île-de-France.

URL de production : `https://hygiene-protect-3d.fr`

L'objectif du site est le référencement local (SEO géolocalisé Île-de-France) et la génération de demandes de devis via formulaire de contact.

---

## 2. Stack et versions

| Technologie | Version |
|---|---|
| Astro (SSG) | ^5.15.3 |
| React (îlots interactifs) | ^19.2.0 |
| Tailwind CSS | ^3.4.18 |
| Node.js | 18+ |

Le site est généré en HTML statique (`output: 'static'`). React est utilisé uniquement pour les composants interactifs (formulaire de contact, menu mobile, CTA flottant).

---

## 3. Installation et commandes

```bash
npm install

# Développement local
npm run dev           # http://localhost:4321

# Build standard
npm run build

# Build de production (régénère le sitemap puis build)
npm run build:production

# Prévisualiser le build
npm run preview

# Générer le sitemap principal uniquement
npm run generate:sitemap

# Générer le sitemap local (villes IDF)
npm run generate:local-sitemap
```

Le dossier de sortie est `dist/`. Ce dossier n'est pas versionné.

---

## 4. Arborescence

```
.
├── astro.config.mjs          Configuration Astro (site URL, intégrations, sitemap)
├── tailwind.config.js        Couleurs personnalisées (primary, accent)
├── postcss.config.js         PostCSS / autoprefixer
├── tsconfig.json             TypeScript strict
├── scripts/
│   ├── generate-sitemap.cjs          Réécrit les URLs dans public/sitemap.xml
│   └── generate-local-sitemap.cjs    Génère un sitemap secondaire pour les villes IDF
├── public/
│   ├── images/               Toutes les images du site (.webp, .jpeg)
│   ├── js/
│   │   └── map-client.js     Initialisation de la carte Leaflet (chargé via CDN)
│   ├── sitemap.xml           Sitemap principal (généré, versionné)
│   ├── robots.txt            Directives pour les robots
│   ├── manifest.json         PWA manifest
│   ├── favicon.svg / *.ico   Favicons multi-résolutions
│   └── google61ae4580c7d69d4c.html   Fichier de vérification Google Search Console
└── src/
    ├── layouts/
    │   └── Layout.astro      Layout unique : <head> SEO, GTM, Schema.org JSON-LD
    ├── pages/
    │   ├── index.astro                 Page d'accueil
    │   ├── services.astro              Liste des services
    │   ├── services/[slug].astro       Page détail par service (routes dynamiques)
    │   ├── contact.astro               Page contact
    │   ├── mentions-legales.astro      Mentions légales
    │   ├── 404.astro                   Page 404
    │   └── politique-de-confidentialite.astro
    ├── components/
    │   ├── Navbar.astro               Navigation desktop (statique)
    │   ├── NavbarMobile.tsx           Menu burger mobile (React)
    │   ├── Hero.astro                 Section hero
    │   ├── About.astro                Section à propos
    │   ├── Services.astro             Grille des services (page d'accueil)
    │   ├── ServiceSEO.astro           Balises SEO et JSON-LD par page service
    │   ├── InterventionProcess.astro  Processus d'intervention
    │   ├── MapSection.astro           Section carte (wrapper)
    │   ├── Map.astro                  Conteneur Leaflet + chargement CDN
    │   ├── Contact.tsx                Formulaire de contact Formspree (React)
    │   ├── ContactSidebar.tsx         Bloc contact latéral (React)
    │   ├── ProtectedEmail.tsx         Affichage email obfusqué (React)
    │   ├── FloatingActionButton.tsx   Bouton flottant appel/devis (React)
    │   ├── MobileCTA.astro            Wrapper du CTA flottant mobile
    │   ├── MobileFloatingCTA.tsx      Barre fixe mobile (React)
    │   ├── GoogleReviews.astro        Section avis Google + carte embed
    │   ├── Button.astro               Composant bouton générique
    │   ├── Breadcrumbs.astro          Fil d'Ariane (pages service)
    │   └── Footer.astro               Pied de page
    ├── data/
    │   ├── services.ts       Données de chaque service (titre, slug, descriptions, images, étapes)
    │   └── seoData.ts        Fonctions utilitaires SEO (mots-clés géolocalisés, titres, meta)
    ├── utils/
    │   └── emailProtection.ts   Encodage et obfuscation d'email
    └── styles/
        ├── global-clean.css           CSS global importé dans Layout.astro
        └── components/                Fichiers CSS par composant
```

---

## 5. Où modifier le contenu métier

### Téléphone
Présent dans plusieurs fichiers. Remplacer `07 67 39 38 85` et `+33767393885` dans :
- `src/layouts/Layout.astro` (Schema.org JSON-LD)
- `src/components/Footer.astro`
- `src/components/ContactSidebar.tsx`
- `src/components/MobileFloatingCTA.tsx`
- `src/components/Hero.astro`
- `src/components/Navbar.astro`
- `src/data/seoData.ts` (meta descriptions)
- `src/data/services.ts` (meta descriptions)

### E-mail de contact
- E-mail affiché publiquement : `hygieneprotect3d@hotmail.com` dans `src/components/Footer.astro:83`
- E-mail dans les données structurées JSON-LD : `contact@hygiene-protect-3d.fr` dans `src/layouts/Layout.astro:102` et `src/components/ServiceSEO.astro:144`

### Adresse et coordonnées GPS
- Adresse : Bondy, 93140 — dans `src/layouts/Layout.astro` (JSON-LD LocalBusiness)
- Coordonnées GPS : latitude `48.9022`, longitude `2.4833` — dans `src/layouts/Layout.astro` et `src/components/ServiceSEO.astro`
- Coordonnées de la carte Leaflet : `public/js/map-client.js`

### Services proposés
Fichier unique : `src/data/services.ts`
Chaque service est un objet avec : `id`, `title`, `slug`, `description`, `fullDescription`, `metaDescription`, `features`, `benefits`, `image`, `interventionSteps`, `equipments`, `gallery`.

### Zones d'intervention
- Liste des villes et départements IDF : `src/data/seoData.ts` (objet `cities` dans `generateLocationKeywords`)
- Rayon de couverture affiché : `src/components/MapSection.astro` (texte "30km")
- Zone couverte dans JSON-LD : `src/layouts/Layout.astro` (`geoRadius: "50000"`)

### URL de production
Définie à un seul endroit : `astro.config.mjs` (`site: 'https://hygiene-protect-3d.fr'`).
Les scripts de sitemap lisent la variable d'environnement `SITE_URL` avec cette valeur comme fallback.

---

## 6. Variables d'environnement

Le projet ne requiert aucune variable d'environnement obligatoire pour fonctionner. Une seule variable optionnelle est lue par les scripts de sitemap :

| Variable | Valeur par défaut | Rôle |
|---|---|---|
| `SITE_URL` | `https://hygiene-protect-3d.fr` | Préfixe des URLs dans sitemap.xml |

Si l'URL de production change, mettre à jour `SITE_URL` dans l'environnement de build **et** `site` dans `astro.config.mjs`.

---

## 7. Services tiers

### Formspree (formulaire de contact)

- **Rôle** : Réceptionne les soumissions du formulaire de contact et les envoie par e-mail.
- **Où** : `src/components/Contact.tsx:6` — `useForm("mkgqybgb")`
- **Compte nécessaire** : oui, sur [formspree.io](https://formspree.io)

**ATTENTION** : L'identifiant `mkgqybgb` correspond au compte du propriétaire précédent, qui ne sera pas transmis. Si cet identifiant n'est pas remplacé, les formulaires soumis par les visiteurs ne parviendront à personne, sans aucun message d'erreur visible.

Pour le remplacer : créer un compte Formspree, créer un nouveau formulaire, copier l'identifiant obtenu (ex. `xabcdefg`), et le remplacer dans `Contact.tsx:6`.

### Google Tag Manager

- **Rôle** : Gestion des balises analytics et marketing (Google Analytics, etc.).
- **Où** : `src/layouts/Layout.astro` — ID `GTM-MVTTPRMF` présent aux lignes 49, 164.
- **Compte nécessaire** : oui, sur [tagmanager.google.com](https://tagmanager.google.com)

Le conteneur GTM actuel appartient au propriétaire précédent. Le repreneur doit créer son propre conteneur GTM et remplacer `GTM-MVTTPRMF` dans `Layout.astro`. Sans ce remplacement, aucune donnée analytique n'est collectée mais le site fonctionne normalement.

### Google Search Console

- **Rôle** : Vérification de propriété du site auprès de Google.
- **Où** : `public/google61ae4580c7d69d4c.html` — fichier de vérification lié au compte actuel.
- **Compte nécessaire** : oui, sur [search.google.com/search-console](https://search.google.com/search-console)

Le repreneur doit ajouter sa propre vérification GSC (nouveau fichier HTML ou balise meta). L'ancien fichier peut être conservé sans danger, mais il ne donne pas accès au compte GSC précédent.

### Leaflet (carte interactive)

- **Rôle** : Affichage de la carte de zone d'intervention sur la page d'accueil.
- **Où** : chargé via CDN unpkg dans `src/components/Map.astro`. Logique d'initialisation dans `public/js/map-client.js`.
- **Compte nécessaire** : non. Open source, sans clé d'API.

---

## 8. Déploiement

Le build produit un site entièrement statique dans `dist/`. Ce dossier peut être déposé sur n'importe quel hébergeur statique (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Apache, nginx, etc.).

```bash
npm run build:production
# Le dossier dist/ contient le site prêt à déployer
```

### Si l'hébergeur est Vercel

Vercel détecte Astro automatiquement. Aucune configuration manuelle n'est requise. La commande de build à renseigner dans Vercel est `npm run build:production`, le dossier de sortie est `dist`.

### Si l'hébergeur n'est pas Vercel

Retirer le package `vercel` des devDependencies dans `package.json` (il n'est utilisé que comme CLI de déploiement). Vérifier que l'hébergeur sert correctement les fichiers sans extension (routes Astro comme `/services`, `/contact`).

---

## 9. Points d'attention et pièges connus

**Sitemap et build de production** : utiliser `npm run build:production` et non `npm run build`. La commande `build` seule ne régénère pas le sitemap. Le script `generate-sitemap.cjs` réécrit les URLs dans `public/sitemap.xml` à partir de la variable `SITE_URL`.

**Leaflet et SSR** : Leaflet ne peut pas être importé côté serveur. La carte est chargée via CDN dans `Map.astro` et initialisée dans `public/js/map-client.js`. Ne pas importer le package npm `leaflet` dans un composant rendu côté serveur.

**Images** : toutes les images sont dans `public/images/`. Les chemins dans le code commencent par `/images/...`. Ne pas déplacer ce dossier sans mettre à jour les références dans `services.ts` et les composants.

**E-mail Formspree** : sans remplacement de l'ID Formspree, les soumissions de formulaire sont silencieusement perdues. Il n'y a pas de message d'erreur côté visiteur.

**Fichier de vérification Google** : `public/google61ae4580c7d69d4c.html` appartient au compte Google Search Console précédent. Il n'empêche pas le site de fonctionner, mais le repreneur n'aura pas accès aux données de ce compte.

**GTM** : sans remplacement de l'ID GTM, aucune donnée analytique n'est collectée. Le site reste fonctionnel.
