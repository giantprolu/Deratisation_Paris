export interface Ville {
  id: string;
  title: string;
  slug: string;
  city: string;
  department: string;
  postalCode: string;
  description: string;
  fullDescription: string;
  metaDescription: string;
  localContext: string;
  neighborhoods: string[];
  image: string;
  imageAlt: string;
  imageTitle: string;
}

export const villes: Ville[] = [
  {
    id: '1',
    title: 'Dératisation Paris',
    slug: 'paris',
    city: 'Paris',
    department: '75',
    postalCode: '75000',
    description: 'Expert en dératisation, désinsectisation et désinfection à Paris. Intervention rapide dans tous les arrondissements contre rats, souris, cafards et punaises de lit. Devis gratuit, technicien certifié Certibiocide.',
    fullDescription: `Paris concentre un habitat ancien, des réseaux d'égouts denses et une forte activité de restauration : trois facteurs qui favorisent la prolifération des rongeurs et des insectes nuisibles. Nous intervenons dans tous les arrondissements parisiens, des immeubles haussmanniens du centre aux copropriétés récentes de la périphérie, pour traiter durablement les infestations de rats, souris, cafards et punaises de lit. Nos techniciens certifiés Certibiocide connaissent les contraintes spécifiques de l'habitat parisien (caves voûtées, gaines techniques, immeubles mitoyens) et adaptent leurs protocoles en conséquence. Intervention rapide, discrète, avec véhicule banalisé si besoin, pour particuliers, syndics de copropriété, restaurateurs et commerces.`,
    metaDescription: 'Dératisation Paris - Expert certifié anti-rats, cafards & punaises de lit. Intervention rapide tous arrondissements. Devis gratuit 24h/24.',
    localContext: 'Immeubles haussmanniens, copropriétés, réseaux d\'égouts et forte densité de restauration favorisent les infestations de rongeurs et de cafards.',
    neighborhoods: ['Paris 10e', 'Paris 11e', 'Paris 18e', 'Paris 19e', 'Paris 20e'],
    image: '/images/deratisation2.webp',
    imageAlt: 'Intervention de dératisation professionnelle dans un immeuble parisien',
    imageTitle: 'Dératisation Paris - Traitement professionnel anti-nuisibles'
  },
  {
    id: '2',
    title: 'Dératisation Bondy',
    slug: 'bondy',
    city: 'Bondy',
    department: '93',
    postalCode: '93140',
    description: 'Entreprise de dératisation et désinsectisation basée à Bondy. Intervention rapide dans toute la ville et ses environs contre rats, souris, cafards et nuisibles. Devis gratuit sous 24h.',
    fullDescription: `Basés directement à Bondy, nous intervenons en priorité sur la commune et ses quartiers pavillonnaires, ses copropriétés et ses zones d'activité proches du canal de l'Ourcq. La proximité de notre base nous permet des délais d'intervention particulièrement courts, y compris en urgence. Nous traitons les infestations de rats et souris dans les jardins, caves et sous-sols, ainsi que les cafards et punaises de lit dans les logements collectifs. Nos techniciens certifiés Certibiocide établissent un diagnostic précis avant chaque traitement et proposent des solutions de prévention adaptées aux pavillons comme aux immeubles.`,
    metaDescription: 'Dératisation Bondy - Entreprise locale certifiée. Intervention rapide anti-rats, cafards, punaises de lit. Devis gratuit, délai d\'intervention court.',
    localContext: 'Base d\'intervention locale : quartiers pavillonnaires, copropriétés et zones d\'activité proches du canal de l\'Ourcq, délais d\'intervention très courts.',
    neighborhoods: ['Bondy Nord', 'Bondy Centre', 'La Sablière', 'Les Coquetiers'],
    image: '/images/deratisation.webp',
    imageAlt: 'Technicien de dératisation intervenant à Bondy',
    imageTitle: 'Dératisation Bondy - Entreprise locale certifiée Certibiocide'
  },
  {
    id: '3',
    title: 'Dératisation Montreuil',
    slug: 'montreuil',
    city: 'Montreuil',
    department: '93',
    postalCode: '93100',
    description: 'Service de dératisation et désinsectisation à Montreuil. Traitement des rats, souris, cafards et punaises de lit dans les logements, ateliers et commerces. Devis gratuit et intervention rapide.',
    fullDescription: `Montreuil mêle grands ensembles, anciennes cours d'artisans réhabilitées et pavillons de la Zone d'Aménagement Concerté du Bas-Montreuil, un tissu urbain varié où les nuisibles trouvent facilement refuge dans les murs mitoyens et les caves communicantes. Nous intervenons chez les particuliers comme dans les ateliers d'artistes et locaux professionnels, avec un diagnostic adapté à chaque type d'habitat. Traitement des rats et souris dans les parties communes, des cafards en cuisine et des punaises de lit en chambre, avec un rapport d'intervention détaillé et des conseils de prévention pour éviter toute réinfestation.`,
    metaDescription: 'Dératisation Montreuil - Traitement anti-rats, cafards, punaises de lit. Intervention rapide logements et locaux pro. Devis gratuit.',
    localContext: 'Tissu urbain varié (grands ensembles, cours d\'artisans, pavillons) avec murs mitoyens et caves communicantes propices à la propagation des nuisibles.',
    neighborhoods: ['Bas-Montreuil', 'Haut-Montreuil', 'Croix-de-Chavaux', 'Murs à Pêches'],
    image: '/images/deratisation2.webp',
    imageAlt: 'Intervention de désinsectisation dans un logement à Montreuil',
    imageTitle: 'Dératisation Montreuil - Expert certifié anti-nuisibles'
  },
  {
    id: '4',
    title: 'Dératisation Bobigny',
    slug: 'bobigny',
    city: 'Bobigny',
    department: '93',
    postalCode: '93000',
    description: 'Dératisation et désinsectisation à Bobigny. Intervention chez les particuliers, copropriétés et administrations contre rats, souris et cafards. Devis gratuit, technicien certifié.',
    fullDescription: `Préfecture de Seine-Saint-Denis, Bobigny compte de nombreux grands ensembles, des bâtiments administratifs et des établissements recevant du public, autant de sites où une infestation de rongeurs ou d'insectes doit être traitée rapidement et sans perturber l'activité. Nous intervenons chez les particuliers, dans les copropriétés du quartier de l'Abreuvoir ou de l'Étoile, ainsi qu'auprès d'administrations et de commerces. Nos protocoles respectent les contraintes HACCP pour les établissements recevant du public et garantissent une intervention discrète, avec compte-rendu détaillé après chaque passage.`,
    metaDescription: 'Dératisation Bobigny - Expert certifié anti-rats, souris, cafards. Intervention particuliers, copropriétés, administrations. Devis gratuit.',
    localContext: 'Grands ensembles, bâtiments administratifs et établissements recevant du public nécessitant des interventions discrètes et conformes aux normes.',
    neighborhoods: ['Abreuvoir', 'Étoile', 'Karl Marx', 'Centre-ville'],
    image: '/images/deratisation.webp',
    imageAlt: 'Technicien en intervention de dératisation à Bobigny',
    imageTitle: 'Dératisation Bobigny - Traitement professionnel certifié'
  },
  {
    id: '5',
    title: 'Dératisation Saint-Denis',
    slug: 'saint-denis',
    city: 'Saint-Denis',
    department: '93',
    postalCode: '93200',
    description: 'Dératisation et désinsectisation à Saint-Denis. Intervention rapide contre rats, souris, cafards et punaises de lit dans logements, commerces et zones d\'activité. Devis gratuit.',
    fullDescription: `Ville dense mêlant marché historique, zones industrielles reconverties et grands ensembles, Saint-Denis présente des profils d'infestation variés : rats le long des berges du canal Saint-Denis et de la Seine, cafards dans les commerces alimentaires du centre-ville, punaises de lit dans les logements collectifs. Nous adaptons chaque intervention à ce contexte, avec des techniciens certifiés Certibiocide capables de traiter aussi bien un appartement qu'un local commercial soumis aux normes HACCP. Diagnostic précis, traitement ciblé et plan de prévention sont systématiquement proposés.`,
    metaDescription: 'Dératisation Saint-Denis - Anti-rats, cafards, punaises de lit. Intervention rapide logements et commerces. Devis gratuit, expert certifié.',
    localContext: 'Berges du canal Saint-Denis et de la Seine, marché historique et zones industrielles reconverties, profils d\'infestation variés.',
    neighborhoods: ['Centre-ville', 'Plaine Saint-Denis', 'Franc-Moisin', 'Basilique'],
    image: '/images/deratisation2.webp',
    imageAlt: 'Intervention anti-nuisibles dans un commerce à Saint-Denis',
    imageTitle: 'Dératisation Saint-Denis - Expert certifié Certibiocide'
  },
  {
    id: '6',
    title: 'Dératisation Aulnay-sous-Bois',
    slug: 'aulnay-sous-bois',
    city: 'Aulnay-sous-Bois',
    department: '93',
    postalCode: '93600',
    description: 'Dératisation et désinsectisation à Aulnay-sous-Bois. Intervention chez les particuliers, pavillons et copropriétés contre rats, souris, cafards. Devis gratuit et intervention rapide.',
    fullDescription: `Ville résidentielle marquée par un habitat pavillonnaire important et de grandes copropriétés héritées de l'ancien site industriel PSA, Aulnay-sous-Bois voit régulièrement des infestations de rongeurs dans les jardins et les sous-sols, ainsi que des cafards dans les parties communes des immeubles. Nous intervenons rapidement chez les particuliers comme dans les copropriétés, avec une attention particulière portée aux points d'entrée typiques des pavillons (soupiraux, canalisations, jonctions de toiture). Chaque intervention est suivie d'un rapport détaillé et de conseils de prévention pour limiter le risque de retour.`,
    metaDescription: 'Dératisation Aulnay-sous-Bois - Anti-rats, souris, cafards. Intervention pavillons et copropriétés. Devis gratuit, technicien certifié.',
    localContext: 'Habitat pavillonnaire important et grandes copropriétés, infestations fréquentes dans jardins, sous-sols et parties communes.',
    neighborhoods: ['Le Vieux Pays', 'Les Aulnes', 'La Rose des Vents', 'Gros Saule'],
    image: '/images/deratisation.webp',
    imageAlt: 'Intervention de dératisation dans un pavillon à Aulnay-sous-Bois',
    imageTitle: 'Dératisation Aulnay-sous-Bois - Traitement professionnel certifié'
  }
];
