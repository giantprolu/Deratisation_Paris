import React from 'react';
import { Building2, Bug, Rat, Bird, Sparkles, BoxesIcon, HardHat } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  metaDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  interventionSteps: { icon: string; title: string; description: string }[];
  equipments?: { 
    name: string; 
    description: string; 
    image: string;
    imageAlt?: string;
    imageTitle?: string;
  }[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Dératisation',
    slug: 'deratisation',
    description: 'Expert en dératisation à Paris et Île-de-France. Élimination rapide et garantie des rats, souris et rongeurs nuisibles. Solutions professionnelles certifiées pour particuliers, entreprises, restaurants et commerces. Intervention d\'urgence 24h/7j avec techniciens diplômés.',
    fullDescription: `Notre service professionnel de dératisation à Paris et en région parisienne offre une protection complète contre toutes les infestations de rongeurs urbains (rats noirs, rats d'égout, souris domestiques, mulots). Spécialistes certifiés de la lutte antiparasitaire en milieu urbain dense, nous intervenons rapidement dans tous les arrondissements de Paris et en Île-de-France chez les particuliers, entreprises, restaurants, hôtels, commerces alimentaires, copropriétés et collectivités. Nos techniciens diplômés Certibiocide utilisent des méthodes éprouvées et des rodenticides professionnels homologués, respectueux de l'environnement et conformes aux normes sanitaires strictes. Nous garantissons une élimination durable et définitive des rongeurs grâce à une approche globale associant diagnostic précis, traitement curatif ciblé et prévention long terme. Discrétion assurée et conformité HACCP pour les professionnels de la restauration.`,
    icon: Rat,
    metaDescription: 'Dératisation Paris - Expert certifié anti-rats & souris. Intervention rapide 24h/7j tous arrondissements. Devis gratuit, garantie résultat. Traitement professionnel Île-de-France.',
    imageAlt: 'Intervention de dératisation professionnelle à Paris - Technicien expert éliminant les rongeurs nuisibles avec équipement certifié',
    imageTitle: 'Dératisation Paris - Traitement professionnel anti-rats et souris par expert certifié Certibiocide',
    features: [
      'Rodenticides professionnels : Brodifacoum, Bromadiolone, Difenacoum, Diféthialone',
      'Formulations adaptées : Bloc paraffiné, pâte, céréales',
      'Lutte efficace contre rats et souris',
      'Identification précise de l\'espèce (rats noirs, rats d\'égout, souris domestiques)',
      'Traitement spécifique avec postes d\'appâtage sécurisés et rodenticides homologués',
      'Préconisations post-traitement pour éviter la réinfestation',
      'Chaque traitement consigné dans un compte rendu avec les produits utilisés',
      'Colmatage hermétique et sécurisation de tous les points d\'entrée potentiels',
      'Décontamination et désinfection complète des zones infestées',
      'Installation de dispositifs de surveillance et de prévention'
    ],
    benefits: [
      'Procédures rigoureuses et ciblées pour chaque situation',
      'Biocides appliqués dans le respect des normes d\'hygiène et de sécurité les plus strictes',
      'Experts formés aux risques sanitaires',
      'Adapté à tous types de lieux : immeubles, hôtels, écoles, logements',
      'Véhicules banalisés pour interventions discrètes',
      'Personnel formé agissant avec professionnalisme',
      'Traitements certifiés Certibiocide pour garantir la sécurité',
      'Service après-vente et garantie de réintervention'
    ],
    image: '/images/deratisation.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Diagnostic Expert", 
        description: "Inspection minutieuse de votre établissement parisien : identification précise des espèces de rongeurs, localisation des nids et galeries, cartographie des passages utilisés, évaluation du niveau d'infestation et analyse des facteurs favorisants (déchets, stockage alimentaire, ouvertures)." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/bug.png", 
        title: "Traitement Professionnel", 
        description: "Déploiement de notre stratégie d'éradication : installation stratégique de postes d'appâtage verrouillés, pose de pièges mécaniques nouvelle génération, application de rodenticides professionnels à action rapide et sécurisée. Techniques adaptées aux spécificités parisiennes (immeubles anciens, caves, sous-sols, gaines techniques)." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Sécurisation & Suivi", 
        description: "Protection long terme de vos locaux : colmatage professionnel de tous les accès avec matériaux durables, installation de grilles anti-rongeurs sur aérations, pose de brosses sur seuils de portes. Programme de surveillance avec passages de contrôle réguliers et rapport détaillé après chaque visite." 
      },
    ],
    equipments: [
      {
        name: 'Postes d\'Appâtage Sécurisés Nouvelle Génération',
        description: 'Stations d\'appâtage professionnelles ultra-sécurisées avec système de verrouillage à clé inviolable, spécialement conçues pour les environnements urbains parisiens. Ces boîtiers robustes en plastique haute densité anti-UV protègent les rodenticides des intempéries et empêchent tout accès accidentel (enfants, animaux domestiques, oiseaux). Équipés de compartiments à appâts et de pièges mécaniques intégrés. Traçabilité optimale avec système de numérotation pour suivi GPS. Conformes aux normes européennes de sécurité biocides. Essentiels pour une dératisation responsable et efficace en milieu urbain dense.',
        image: '/images/deratisation-postes-appats.webp',
        imageAlt: 'Postes d\'appâtage sécurisés professionnels avec rodenticides pour dératisation Paris',
        imageTitle: 'Station appâtage anti-rats Paris - Équipement sécurisé certifié avec Brodifacoum'
      }
    ]
  },
  {
    id: '2',
    title: 'Désinfection',
    slug: 'desinfection',
    description: 'Service professionnel de désinfection à Paris et Île-de-France. Élimination totale des bactéries, virus et parasites après infestation. Traitement complet des surfaces et de l\'air pour un environnement sain et sécurisé. Intervention rapide avec produits certifiés.',
    fullDescription: 'Notre service de désinfection professionnelle garantit un assainissement complet de vos locaux à Paris et en région parisienne. Après une infestation de nuisibles (rongeurs, insectes) ou en prévention, nous intervenons avec des protocoles rigoureux pour éliminer tous les agents pathogènes : bactéries, virus, champignons et parasites. Nous utilisons des produits biocides professionnels homologués par l\'ANSM et des techniques de nébulisation avancées pour traiter l\'ensemble des surfaces et volumes. Nos interventions respectent scrupuleusement les normes d\'hygiène HACCP et les protocoles sanitaires les plus stricts. Adaptées aux particuliers, professionnels de santé, restaurateurs, hôteliers et entreprises, nos prestations incluent la décontamination complète, le traitement de l\'air et la certification de salubrité.',
    icon: Sparkles,
    metaDescription: 'Désinfection Paris - Service professionnel certifié. Élimination bactéries, virus, parasites. Traitement post-infestation. Devis gratuit, intervention rapide 24h/7j.',
    imageAlt: 'Technicien en équipement de protection effectuant une désinfection professionnelle à Paris',
    imageTitle: 'Désinfection professionnelle Paris - Traitement certifié par experts sanitaires',
    features: [
      'Traitement virucide, fongicide ou bactéricide selon les besoins',
      'Zones sensibles identifiées et traitées en priorité',
      'Remise d\'un certificat de désinfection après intervention',
      'Procédures respectant les normes sanitaires en vigueur (EN 14476, etc.)',
      'Désinfection professionnelle de toutes surfaces contaminées',
      'Traitement de l\'air ambiant par nébulisation ou thermo-nébulisation',
      'Décontamination après infestation de rongeurs ou d\'insectes',
      'Application de produits virucides, bactéricides et fongicides homologués',
      'Prévention des risques sanitaires et des maladies transmissibles',
      'Conseils pour maintenir un environnement sain durablement'
    ],
    benefits: [
      'Traçabilité stricte de chaque désinfection',
      'Utilisation de machines à vapeur sèche, nébulisateurs ULV, produits de qualité hospitalière',
      'Équipements de désinfection professionnels adaptés',
      'Désinfection de bureaux, logements, locaux professionnels, véhicules, etc.',
      'Pour tous les environnements',
      'Équipes qualifiées pour opérations en milieu sensible (logements, bureaux, locaux médicaux)',
      'Produits virucides, bactéricides et fongicides certifiés',
      'Interventions sûres et traçables'
    ],
    image: '/images/desinfection.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/microscope.png",
        title: 'Diagnostic Sanitaire',
        description: 'Évaluation approfondie des zones contaminées, identification des agents pathogènes présents, analyse des risques sanitaires et définition du protocole de désinfection adapté.'
      },
      {
        icon: "https://img.icons8.com/ios/50/spray.png",
        title: 'Traitement Intensif',
        description: 'Application de solutions désinfectantes professionnelles par pulvérisation, nébulisation ou atomisation. Traitement complet des surfaces, volumes et circuits d\'air selon les normes en vigueur.'
      },
      {
        icon: "https://img.icons8.com/ios/50/shield.png",
        title: 'Prévention & Suivi',
        description: 'Mise en place de protocoles d\'hygiène préventifs, formation du personnel aux bonnes pratiques, contrôles post-traitement et certification sanitaire de vos locaux.'
      }
    ],
    equipments: [
      {
        name: 'Nébulisateurs Professionnels ULV',
        description: 'Équipements de nébulisation à froid dernière génération pour une diffusion optimale des produits désinfectants. Ces appareils ULV (Ultra Low Volume) produisent un brouillard ultra-fin qui atteint tous les recoins, surfaces et volumes. Idéals pour la désinfection complète de grands espaces, bureaux, restaurants, hôtels et locaux commerciaux. Efficacité maximale avec une consommation minimale de produits.',
        image: '/images/NébulisateursProfessionnelsULV.webp',
        imageAlt: 'Nébulisateur professionnel ULV pour désinfection complète des locaux',
        imageTitle: 'Équipement de nébulisation professionnelle - Désinfection totale Paris'
      },
      {
        name: 'Produits Biocides Certifiés',
        description: 'Gamme complète de désinfectants professionnels homologués par l\'ANSM : virucides (efficaces contre coronavirus), bactéricides, fongicides et sporicides. Produits aux normes EN 14476, EN 1276 et EN 13697, adaptés aux secteurs alimentaire, médical et industriel. Solutions écologiques disponibles pour les environnements sensibles. Traçabilité complète avec fiches de données de sécurité.',
        image: '/images/ProduitsBiocidesCertifies.webp',
        imageAlt: 'Produits désinfectants professionnels certifiés pour assainissement',
        imageTitle: 'Biocides professionnels homologués - Désinfection certifiée Paris'
      },
      {
        name: 'Équipements de Protection Intégrale',
        description: 'Tenues de protection complètes pour interventions en zones contaminées : combinaisons jetables étanches, masques respiratoires FFP3, lunettes de protection, gants nitrile professionnels et sur-chaussures. Équipements conformes aux normes européennes EN 14126 pour la protection contre les agents infectieux. Sécurité maximale de nos techniciens et de vos occupants pendant et après l\'intervention.',
        image: '/images/technicien-frelons-exterieur.webp',
        imageAlt: 'Équipement de protection individuelle complet pour désinfection',
        imageTitle: 'EPI professionnel désinfection - Protection maximale techniciens Paris'
      }
    ]
  },
  {
    id: '3',
    title: 'Désinsectisation',
    slug: 'desinsectisation',
    description: 'Expert en désinsectisation à Paris et Île-de-France. Élimination définitive des cafards, punaises de lit, frelons asiatiques, guêpes, fourmis, mites et tous insectes nuisibles. Traitement garanti avec produits professionnels homologués. Intervention rapide particuliers et entreprises.',
    fullDescription: 'Notre service professionnel de désinsectisation à Paris offre une protection complète contre tous les types d\'insectes nuisibles et rampants. Spécialistes certifiés des infestations urbaines, nous intervenons rapidement contre les cafards (blattes germaniques et orientales), punaises de lit, frelons asiatiques, guêpes, frelons européens, fourmis, mites alimentaires et textiles, puces, araignées, poissons d\'argent et autres nuisibles. Nos techniciens diplômés Certibiocide utilisent des insecticides professionnels de dernière génération, respectueux de l\'environnement et conformes aux réglementations. Nous adaptons nos méthodes à chaque situation : pulvérisation, fumigation, gel appât, pièges à phéromones, traitement thermique pour les punaises de lit. Interventions garanties pour particuliers, restaurants, hôtels, commerces alimentaires, bureaux et copropriétés dans tout Paris et la région parisienne.',
    icon: Bug,
    metaDescription: 'Désinsectisation Paris - Élimination cafards, punaises de lit, frelons, guêpes. Traitement professionnel garanti. Intervention rapide 24h. Devis gratuit Île-de-France.',
    imageAlt: 'Intervention de désinsectisation professionnelle à Paris contre cafards et insectes',
    imageTitle: 'Désinsectisation Paris - Traitement professionnel anti-insectes certifié',
    features: [
      'Identification de l\'espèce (cafards, punaises, guêpes, etc.)',
      'Traitement spécifique (gels, nébulisation, pulvérisation)',
      'Préconisations post-traitement pour éviter la réinfestation',
      'Chaque traitement consigné dans un compte rendu avec produits utilisés',
      'Destruction des nids de guêpes, frelons asiatiques et frelons européens',
      'Traitement des mites alimentaires et textiles avec pièges à phéromones',
      'Éradication des puces pour protéger vos animaux et votre famille',
      'Prévention durable avec barrières insecticides et conseils personnalisés',
      'Produits biocides professionnels rémanents pour une action longue durée',
      'Interventions discrètes adaptées aux normes HACCP pour les professionnels de l\'alimentaire'
    ],
    benefits: [
      'Méthodologie précise selon l\'insecte cible',
      'Biocides appliqués dans le respect des normes d\'hygiène et de sécurité les plus strictes',
      'Intervention discrète et rapide avec véhicules banalisés',
      'Personnel formé agissant avec discrétion dans immeubles, hôtels, écoles, logements',
      'Techniciens habilités à intervenir contre tous types d\'infestations',
      'Certification Certibiocide garantissant l\'utilisation de produits homologués et sécurisés',
      'Protection longue durée grâce aux produits rémanents professionnels',
      'Devis gratuit et tarifs transparents pour particuliers et professionnels'
    ],
    image: '/images/désinsectisation.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Inspection Entomologique", 
        description: "Diagnostic précis de l'infestation : identification des espèces, localisation des nids et zones de reproduction, évaluation du niveau d'infestation et des facteurs favorisant la prolifération." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/bug.png", 
        title: "Traitement Professionnel", 
        description: "Application de traitements ciblés adaptés à chaque insecte : pulvérisation d'insecticides rémanents, pose de gel appât, fumigation, pièges à phéromones ou traitement thermique selon la situation." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Prévention & Contrôle", 
        description: "Mise en place de mesures préventives durables : barrières insecticides, colmatage des accès, pièges de monitoring, conseils d'hygiène et contrôles de suivi pour éviter toute réinfestation." 
      },
    ],
    equipments: [
      {
        name: 'Pulvérisateurs Professionnels Haute Pression',
        description: 'Équipements de pulvérisation professionnels pour application précise des insecticides sur toutes surfaces. Nos pulvérisateurs haute pression permettent de traiter efficacement les zones difficiles d\'accès, fissures, plinthes et recoins où se cachent les insectes. Buses réglables pour adapter le débit et la diffusion selon les besoins. Cuves en matériaux résistants aux produits chimiques pour une utilisation durable et sécurisée.',
        image: '/images/PulverisateursProfessionnelsHautePression.webp',
        imageAlt: 'Pulvérisateur professionnel haute pression pour traitement anti-insectes',
        imageTitle: 'Équipement pulvérisation insecticide - Désinsectisation professionnelle Paris'
      },
      {
        name: 'Insecticides Biocides Certifiés',
        description: 'Gamme complète d\'insecticides professionnels homologués à action rémanente prolongée. Produits spécifiques pour chaque type d\'insecte : anti-cafards, anti-punaises de lit, anti-fourmis, anti-guêpes. Formulations en gel appât, liquide de pulvérisation, poudre insecticide et fumigène. Efficacité prouvée avec action choc et protection longue durée. Produits respectueux de l\'environnement conformes aux normes européennes et utilisables en présence alimentaire après séchage.',
        image: '/images/ProduitsBiocidesCertifies.webp',
        imageAlt: 'Produits insecticides professionnels certifiés pour désinsectisation',
        imageTitle: 'Biocides anti-insectes certifiés - Traitement professionnel Paris'
      }
    ]
  },
  {
    id: '4',
    title: 'Nids de Guêpes et Frelons',
    slug: 'guepes-frelons-hauteur',
    description: 'Spécialistes de la destruction de nids de guêpes et frelons asiatiques en hauteur à Paris et Île-de-France. Interventions sécurisées sur toitures, arbres, façades, cheminées, combles. Équipes formées aux travaux en hauteur avec certification Certibiocide. Matériel professionnel : nacelles, harnais, perches télescopiques.',
    fullDescription: 'Notre service spécialisé dans la destruction de nids de guêpes et frelons en hauteur garantit des interventions sécurisées et efficaces. Nos équipes sont formées aux travaux en hauteur et disposent de la certification Certibiocide, garantissant des interventions sûres et conformes aux normes sanitaires. Nous intervenons sur toutes les zones difficiles d\'accès : toitures, arbres de grande hauteur, façades d\'immeubles, cheminées, combles, corniches, gouttières et volets roulants. Notre expertise spécifique des frelons asiatiques nous permet d\'assurer une localisation rapide des nids (parfois à plus de 10 mètres de hauteur) et d\'appliquer des techniques adaptées à cette espèce invasive, tant en préventif qu\'en curatif. Nous utilisons du matériel professionnel haute performance : nacelles élévatrices, harnais antichute et EPI complets, perches télescopiques, lances à injection longue portée, systèmes d\'ancrage et méthodes d\'accès par corde (type cordiste).',
    icon: HardHat,
    metaDescription: 'Destruction nids guêpes frelons hauteur Paris - Interventions sécurisées toitures, arbres, façades. Experts certifiés Certibiocide. Matériel professionnel. Devis gratuit.',
    imageAlt: 'Intervention professionnelle en hauteur pour destruction de nid de frelons asiatiques',
    imageTitle: 'Destruction nids guêpes frelons Paris - Intervention hauteur sécurisée certifiée',
    features: [
      'Localisation rapide des nids (parfois à +10 m de hauteur)',
      'Techniques adaptées aux frelons asiatiques, espèce invasive',
      'Intervention préventive et curative',
      'Interventions sécurisées en toute hauteur sur toitures',
      'Destruction de nids dans les arbres de grande hauteur',
      'Intervention sur façades d\'immeubles et zones difficiles d\'accès',
      'Traitement des nids en cheminées et combles',
      'Accès aux corniches, gouttières et volets roulants',
      'Équipes formées aux travaux en hauteur',
      'Certification Certibiocide garantissant conformité aux normes sanitaires'
    ],
    benefits: [
      'Nacelles élévatrices pour accès sécurisé aux grandes hauteurs',
      'Harnais antichute et EPI complets pour sécurité maximale',
      'Perches télescopiques permettant intervention à distance',
      'Lances à injection longue portée pour traitement précis',
      'Systèmes d\'ancrage professionnels certifiés',
      'Méthodes d\'accès par corde (type cordiste) pour zones inaccessibles',
      'Intervention rapide et efficace avec matériel adapté',
      'Respect des normes de sécurité et protocoles sanitaires'
    ],
    image: '/images/nid-frelons-arbre-hauteur.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/search.png",
        title: 'Localisation du Nid',
        description: 'Repérage précis du nid de guêpes ou frelons, même en hauteur (+10m). Évaluation de l\'accessibilité, identification de l\'espèce (frelon asiatique, guêpe commune, etc.) et planification de la méthode d\'intervention la plus sûre.'
      },
      {
        icon: "https://img.icons8.com/ios/50/construction-helmet.png",
        title: 'Sécurisation de la Zone',
        description: 'Mise en place des équipements de sécurité : installation des systèmes d\'ancrage, vérification des harnais antichute, positionnement de la nacelle élévatrice ou préparation de l\'accès par corde. Périmètre de sécurité établi au sol.'
      },
      {
        icon: "https://img.icons8.com/ios/50/poison.png",
        title: 'Destruction Professionnelle',
        description: 'Intervention sécurisée avec perches télescopiques ou lances à injection. Application de biocides certifiés directement dans le nid. Retrait du nid si nécessaire. Vérification complète et traitement préventif de la zone pour éviter toute réinfestation.'
      }
    ],
    equipments: [
      {
        name: 'Nacelles Élévatrices Professionnelles',
        description: 'Nacelles automotrices de 12 à 25 mètres de hauteur pour accéder en toute sécurité aux nids situés sur les toitures, façades et arbres de grande hauteur. Stabilisateurs automatiques et commandes précises pour un positionnement optimal. Conformes aux normes de sécurité pour travaux en hauteur. Permettent d\'intervenir efficacement sur les nids de frelons asiatiques souvent situés à plus de 10 mètres du sol.',
        image: '/images/NacellesElevatricesProfessionnelles.webp',
        imageAlt: 'Nid de frelons asiatiques en hauteur dans un arbre nécessitant intervention nacelle',
        imageTitle: 'Nid frelons hauteur Paris - Intervention professionnelle avec nacelle élévatrice'
      },
      {
        name: 'Perches Télescopiques et Lances à Injection',
        description: 'Perches télescopiques professionnelles extensibles de 3 à 12 mètres pour traiter les nids sans approche directe. Lances à injection longue portée avec système de pulvérisation haute pression pour application précise des biocides au cœur du nid. Embouts adaptés aux différentes configurations. Permettent un traitement efficace tout en maintenant une distance de sécurité. Matériaux légers en fibre de carbone ou aluminium pour manipulation aisée en hauteur.',
        image: '/images/technicien-lance-telescopique.webp',
        imageAlt: 'Technicien utilisant lance télescopique professionnelle pour destruction nid frelons',
        imageTitle: 'Perches télescopiques Paris - Intervention professionnelle anti-frelons longue portée'
      }
    ]
  },
  {
    id: '5',
    title: 'Dépigeonnage',
    slug: 'depigeonnage',
    description: 'Spécialiste du dépigeonnage à Paris et Île-de-France. Solutions durables contre les pigeons et volatiles nuisibles. Installation de pics anti-pigeons, filets de protection, répulsifs ultrasoniques. Protection des façades, balcons, toitures. Intervention certifiée immeubles et monuments.',
    fullDescription: 'Notre service professionnel de dépigeonnage à Paris protège efficacement vos bâtiments contre les nuisances et dégradations causées par les pigeons et autres volatiles. Les pigeons urbains représentent un véritable fléau pour les immeubles parisiens : leurs fientes corrosives attaquent les façades, leurs nids obstruent les gouttières, et leurs parasites menacent la santé publique. Experts en effarouchement d\'oiseaux, nous proposons des solutions éthiques, durables et conformes à la réglementation sur la protection animale. Nos méthodes incluent l\'installation de pics anti-pigeons en acier inoxydable, la pose de filets de protection discrets, les systèmes répulsifs à ultrasons et les fils tendus. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, monuments historiques, bâtiments industriels, commerces, hôtels, églises. Service complet incluant le nettoyage et la désinfection des zones souillées par les fientes.',
    icon: Bird,
    metaDescription: 'Dépigeonnage Paris - Installation pics anti-pigeons, filets protection. Solutions durables contre volatiles. Devis gratuit. Expert protection bâtiments Île-de-France.',
    imageAlt: 'Installation de pics anti-pigeons sur façade parisienne par professionnel',
    imageTitle: 'Dépigeonnage Paris - Protection professionnelle contre pigeons et volatiles',
    features: [
      'Analyse des points de nidification',
      'Pose de systèmes dissuasifs',
      'Éventuelle capture dans le respect de la faune urbaine',
      'Rapport d\'intervention fourni, avec suivi photo si besoin',
      'Installation de pics anti-pigeons en acier inoxydable sur rebords et corniches',
      'Pose de filets de protection transparents et résistants',
      'Systèmes d\'effarouchement à ultrasons et répulsifs visuels',
      'Fils tendus discrets pour empêcher le perchage',
      'Nettoyage professionnel et désinfection des zones souillées',
      'Maintenance et contrôles réguliers des installations'
    ],
    benefits: [
      'Méthode durable et éthique',
      'Décontamination des fientes et traitement des zones souillées inclus',
      'Hygiène renforcée',
      'Intervention en toiture, corniches, monuments, bâtiments publics',
      'Adaptabilité à tout type de bâtiment',
      'Solutions respectueuses du bien-être animal',
      'Installation discrète respectant l\'architecture',
      'Conformité aux règles de copropriété et normes urbanistiques'
    ],
    image: '/images/dépigeonnage.webp',
    interventionSteps: [
      { 
        icon: "https://img.icons8.com/sf-regular/48/search.png", 
        title: "Diagnostic Avifaune", 
        description: "Analyse détaillée des zones à risque, identification des points de perchage et de nidification, évaluation du niveau d'infestation et des comportements des pigeons pour définir la stratégie d'éloignement optimale." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/dove.png", 
        title: "Installation Protection", 
        description: "Mise en place des dispositifs anti-pigeons adaptés : pics en acier inoxydable, filets de protection haute résistance, systèmes à ultrasons, fils tendus. Travaux en hauteur sécurisés par cordistes certifiés." 
      },
      { 
        icon: "https://img.icons8.com/ios/50/shield.png", 
        title: "Entretien & Suivi", 
        description: "Nettoyage et désinfection des zones souillées, vérification régulière de l'efficacité des installations, maintenance préventive et conseils pour éviter le retour des volatiles. Garantie de durabilité." 
      },
    ],
    equipments: [
      {
        name: 'Pics Anti-Pigeons en Acier Inoxydable',
        description: 'Systèmes de picots professionnels en acier inoxydable 316 pour empêcher définitivement les pigeons de se poser. Disponibles en différentes largeurs et configurations pour s\'adapter à tous les supports : rebords de fenêtres, corniches, gouttières, enseignes, climatiseurs. Installation sur base polycarbonate UV-résistante collée ou vissée. Discrets, durables (garantie 10 ans), résistants aux intempéries et conformes aux réglementations urbaines. Solution la plus efficace et la plus économique à long terme.',
        image: '/images/PicsAnti-PigeonsenAcierInoxydable.webp',
        imageAlt: 'Pics anti-pigeons professionnels en acier inoxydable pour façades',
        imageTitle: 'Pics anti-pigeons Paris - Protection durable façades et rebords'
      },
      {
        name: 'Filets de Protection Anti-Volatiles',
        description: 'Filets professionnels haute résistance en polyéthylène traité anti-UV pour protéger balcons, coursives, patios et grandes surfaces. Mailles adaptées (50mm ou 75mm) pour bloquer pigeons et mouettes tout en restant discrets. Installation sur câbles périmétriques en acier inoxydable avec fixations murales certifiées. Résistants aux intempéries, aux UV et au feu (classement M2). Respectent l\'esthétique des bâtiments parisiens, même classés monuments historiques. Durée de vie exceptionnelle de 15 à 20 ans.',
        image: '/images/FiletsdeProtectionAnti-Volatiles.webp',
        imageAlt: 'Filets de protection anti-pigeons pour balcons et façades',
        imageTitle: 'Filets anti-volatiles Paris - Protection invisible et durable'
      }
    ]
  },
  {
    id: '6',
    title: 'Hygiène du Bâtiment',
    slug: 'hygiene-du-batiment',
    description: 'Services professionnels d\'hygiène et d\'entretien pour bâtiments à Paris. Nettoyage, désinfection, désodorisation des locaux professionnels et résidentiels. Protocoles HACCP pour restaurants et commerces alimentaires. Audits d\'hygiène et mise aux normes sanitaires.',
    fullDescription: 'Notre service d\'hygiène du bâtiment à Paris garantit un environnement sain, propre et conforme aux normes sanitaires les plus strictes. Nous intervenons auprès des entreprises, commerces, restaurants, hôtels, établissements de santé, copropriétés et particuliers pour maintenir des locaux irréprochables. Nos prestations incluent le nettoyage professionnel approfondi, la désinfection régulière des surfaces et équipements, la désodorisation, le traitement des sols et des sanitaires. Nous mettons en place des protocoles d\'hygiène personnalisés conformes aux normes HACCP pour les secteurs alimentaires, et aux réglementations sanitaires pour les établissements recevant du public. Nos équipes formées utilisent des produits professionnels écologiques certifiés Ecolabel. Service sur-mesure avec planning d\'intervention adapté à votre activité pour ne pas perturber votre fonctionnement.',
    icon: Building2,
    metaDescription: 'Hygiène bâtiment Paris - Nettoyage professionnel, désinfection locaux. Protocoles HACCP restaurants. Audit hygiène. Devis gratuit entreprises et particuliers.',
    imageAlt: 'Agent d\'hygiène professionnel effectuant le nettoyage et la désinfection d\'un bâtiment à Paris',
    imageTitle: 'Hygiène du bâtiment Paris - Services professionnels nettoyage et désinfection',
    features: [
      'Nettoyage des parties communes et techniques',
      'Évacuation des détritus et désinfection ponctuelle',
      'Rapport de passage périodique fourni',
      'Cahier de liaison pour assurer le suivi',
      'Traitement et entretien des sols (carrelage, parquet, moquette, béton)',
      'Nettoyage et désinfection des sanitaires avec produits bactéricides',
      'Désodorisation et assainissement de l\'air ambiant',
      'Protocoles HACCP pour cuisines professionnelles et zones alimentaires',
      'Audits d\'hygiène avec rapports détaillés et recommandations',
      'Formation du personnel aux bonnes pratiques d\'hygiène'
    ],
    benefits: [
      'Protocole d\'entretien rigoureux',
      'Interventions favorisant la salubrité et la prévention des nuisibles',
      'Cadre sain au quotidien',
      'Équipes intervenant selon vos horaires pour ne pas perturber les occupants',
      'Souplesse et réactivité',
      'Environnement de travail sain et agréable',
      'Conformité garantie aux normes sanitaires et réglementations',
      'Produits écologiques certifiés respectueux de l\'environnement'
    ],
    image: '/images/hygienedubat.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/checklist.png",
        title: 'Audit & Diagnostic',
        description: 'Évaluation complète de l\'état d\'hygiène de vos locaux, identification des zones à risque, analyse des besoins spécifiques et définition d\'un protocole d\'entretien personnalisé adapté à votre activité.'
      },
      {
        icon: "https://img.icons8.com/ios/50/broom.png",
        title: 'Nettoyage & Désinfection',
        description: 'Application des protocoles d\'hygiène avec produits professionnels certifiés : nettoyage méthodique, désinfection des surfaces, traitement des sols, entretien des sanitaires et désodorisation complète.'
      },
      {
        icon: "https://img.icons8.com/ios/50/calendar.png",
        title: 'Suivi Régulier',
        description: 'Interventions programmées selon planning établi, contrôles qualité réguliers, ajustement des protocoles si nécessaire, traçabilité avec rapports détaillés et certification de conformité sanitaire.'
      }
    ],
    equipments: [
      {
        name: 'Matériel de Nettoyage Professionnel',
        description: 'Équipements de nettoyage professionnels dernière génération pour une efficacité optimale : autolaveuses pour grands espaces, mono-brosses pour traitement des sols, aspirateurs HEPA professionnels, nettoyeurs vapeur haute pression pour désinfection écologique sans produits chimiques. Chariots de ménage complets équipés de tous les accessoires nécessaires. Matériel ergonomique pour la sécurité et le confort de nos agents d\'hygiène.',
        image: '/images/MatérieldeNettoyageProfessionnel.webp',
        imageAlt: 'Équipement de nettoyage professionnel pour entretien hygiène bâtiments',
        imageTitle: 'Matériel nettoyage professionnel Paris - Équipements haute performance'
      },
      {
        name: 'Produits d\'Entretien Écologiques Certifiés',
        description: 'Gamme complète de produits d\'entretien professionnels écologiques certifiés Ecolabel : détergents multi-surfaces biodégradables, désinfectants bactéricides sans javel, dégraissants alimentaires, détartrants sanitaires, produits de traitement des sols. Formulations concentrées économiques et efficaces, sans danger pour l\'utilisateur et l\'environnement. Conformes aux normes de sécurité alimentaire pour utilisation en zones HACCP.',
        image: '/images/ProduitsBiocidesCertifies.webp',
        imageAlt: 'Produits d\'entretien écologiques professionnels certifiés',
        imageTitle: 'Produits nettoyage écologiques Paris - Certifiés Ecolabel professionnels'
      },
      {
        name: 'Systèmes de Traçabilité et Contrôle Qualité',
        description: 'Outils digitaux de traçabilité pour documenter et garantir la qualité de nos interventions : planning d\'intervention digitalisé, check-lists de contrôle qualité, relevés de température pour zones réfrigérées, rapports d\'intervention détaillés avec photos avant/après. Certificats de conformité sanitaire pour vos audits et contrôles officiels. Tableau de bord en ligne pour suivre l\'historique des prestations et planifier les interventions futures.',
        image: '/images/SystèmesdeTraçabilitéetContrôleQualité.webp',
        imageAlt: 'Système de traçabilité digitale pour contrôle qualité hygiène',
        imageTitle: 'Traçabilité hygiène Paris - Reporting et certification qualité digitale'
      }
    ]
  },
  {
    id: '7',
    title: 'Débarras Post-Mortem',
    slug: 'debarras-pro',
    description: 'Service de débarras professionnel et post-mortem à Paris et Île-de-France. Évacuation rapide et discrète de locaux, appartements. Tri sélectif, recyclage, nettoyage complet. Intervention spécialisée pour entreprises, particuliers, successions. Devis gratuit et tarifs transparents.',
    fullDescription: 'Notre service de débarras professionnel et post-mortem à Paris prend en charge l\'évacuation complète de tous types de locaux dans des situations délicates. Spécialement formées pour le débarras post-mortem, nos équipes interviennent dans le strict respect des protocoles sanitaires, avec discrétion, efficacité et professionnalisme, garantissant un assainissement complet des lieux. Que ce soit pour vider un appartement après succession, débarrasser des locaux insalubres, évacuer des bureaux, caves ou greniers, nous intervenons rapidement avec une équipe expérimentée et équipée. Nous assurons le tri sélectif des objets et déchets : valorisation et don des objets réutilisables, recyclage des matériaux, évacuation conforme des déchets dangereux. Service complet incluant le démontage du mobilier, le nettoyage après débarras, et la remise en état des lieux.',
    icon: BoxesIcon,
    metaDescription: 'Débarras post-mortem Paris - Évacuation discrète locaux, appartements. Tri sélectif, assainissement. Devis gratuit. Intervention rapide et professionnelle Île-de-France.',
    imageAlt: 'Équipe de débarras professionnel post-mortem évacuant un local à Paris avec discrétion',
    imageTitle: 'Débarras post-mortem Paris - Évacuation professionnelle et assainissement',
    features: [
      'Évaluation des volumes à évacuer',
      'Tri des déchets (recyclables / encombrants / dangereux)',
      'Évacuation et nettoyage de fin de chantier',
      'Remise d\'un bordereau',
      'Traitement de logements insalubres, locaux industriels, bureaux, caves, greniers',
      'Évacuation de caves, greniers, garages et espaces de stockage',
      'Recyclage des matériaux conformément aux filières agréées',
      'Traitement spécifique des déchets dangereux et polluants',
      'Démontage et évacuation de mobilier encombrant',
      'Nettoyage complet après débarras pour remise en état des lieux'
    ],
    benefits: [
      'Organisation et efficacité',
      'Valorisation des déchets et traçabilité des flux assurées',
      'Respect des normes environnementales',
      'Équipes spécialement formées pour le débarras post-mortem',
      'Intervention discrète dans le strict respect des protocoles sanitaires',
      'Assainissement complet des lieux garanti',
      'Service adapté aux situations sensibles (succession, saisie)',
      'Tarifs transparents et compétitifs avec devis détaillé gratuit'
    ],
    image: '/images/debarras.webp',
    interventionSteps: [
      {
        icon: "https://img.icons8.com/ios/50/clipboard.png",
        title: 'Évaluation & Devis',
        description: 'Visite sur place pour évaluer le volume à débarrasser, identifier les objets valorisables et les déchets spécifiques. Établissement d\'un devis détaillé gratuit et transparent avec planning d\'intervention.'
      },
      {
        icon: "https://img.icons8.com/ios/50/truck.png",
        title: 'Débarras & Tri',
        description: 'Intervention de l\'équipe avec démontage si nécessaire, tri sélectif méthodique, chargement dans nos véhicules adaptés. Séparation des objets à donner, à recycler et à éliminer selon les filières appropriées.'
      },
      {
        icon: "https://img.icons8.com/ios/50/recycle-sign.png",
        title: 'Évacuation & Traçabilité',
        description: 'Évacuation conforme vers les centres de tri et déchetteries agréées, recyclage maximal, valorisation des objets réutilisables par don ou revente. Remise des bordereaux de suivi et certificats d\'élimination.'
      }
    ],
    equipments: [
      {
        name: 'Véhicules et Camions de Débarras',
        description: 'Flotte de véhicules adaptés à tous types de débarras : camions de 20m³ à 40m³ pour les gros volumes, camionnettes pour les accès difficiles dans Paris, monte-meubles pour les étages sans ascenseur. Équipements de protection pour les véhicules et les lieux (bâches, protections de sol et murs). Personnel qualifié pour le portage et la manutention en toute sécurité, même dans les escaliers étroits typiques des immeubles parisiens.',
        image: '/images/VéhiculesetCamionsdeDébarras.webp',
        imageAlt: 'Camion de débarras professionnel pour évacuation de locaux à Paris',
        imageTitle: 'Véhicules débarras Paris - Camions équipés pour évacuation rapide'
      },
      {
        name: 'Système de Tri et Traçabilité des Déchets',
        description: 'Organisation professionnelle du tri sélectif avec contenants spécifiques par catégorie : bois, métaux, plastiques, cartons, textiles, verre, déchets dangereux, DEEE. Partenariats avec déchetteries agréées, centres de tri, associations caritatives et structures de réemploi. Documentation complète avec bordereaux de suivi des déchets (BSD), certificats d\'élimination, justificatifs de don. Respect total de la réglementation environnementale et des filières REP (Responsabilité Élargie des Producteurs).',
        image: '/images/SystèmedeTrietTraçabilitédesDéchets.webp',
        imageAlt: 'Système de tri sélectif et traçabilité des déchets de débarras',
        imageTitle: 'Tri sélectif débarras Paris - Traçabilité et recyclage conformes'
      }
    ]
  }
];
