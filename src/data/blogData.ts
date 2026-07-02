export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  content: { heading: string; text: string }[];
  image: string;
  imageAlt: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Comment reconnaître une infestation de rats ?',
    slug: 'comment-reconnaitre-une-infestation-de-rats',
    excerpt: 'Crottes, traces de grignotage, bruits nocturnes... les signes d\'une présence de rats ou de souris sont souvent visibles avant que l\'infestation ne devienne massive. Voici comment les repérer.',
    metaDescription: 'Comment reconnaître une infestation de rats ou de souris chez soi ? Signes, indices et bons réflexes avant d\'appeler un professionnel de la dératisation.',
    category: 'Dératisation',
    publishDate: '2026-01-15',
    content: [
      {
        heading: 'Les crottes, le signe le plus fiable',
        text: 'Les excréments de rongeurs sont souvent le premier indice détecté : petits grains sombres de 5 à 15 mm selon l\'espèce, concentrés le long des plinthes, sous l\'évier, dans les placards ou les caves. Leur fraîcheur (brillants et souples s\'ils sont récents, secs et cassants s\'ils sont anciens) donne une idée de l\'activité en cours.'
      },
      {
        heading: 'Traces de grignotage et dégâts matériels',
        text: 'Rats et souris rongent en permanence pour user leurs incisives : emballages alimentaires percés, fils électriques dénudés, plinthes ou huisseries entamées, isolants de combles arrachés pour faire des nids. Des trous de 2 à 5 cm à la base des murs ou autour des canalisations sont également révélateurs.'
      },
      {
        heading: 'Bruits, odeurs et traces de passage',
        text: 'Des grattements ou des courses dans les cloisons, les faux plafonds ou les combles, surtout la nuit, sont un signe classique. Une odeur d\'ammoniaque persistante dans un espace confiné (cave, sous-évier) peut également indiquer la présence d\'urine de rongeurs. Enfin, des traces de graisse le long des murs (le pelage des rats laisse une trace sombre sur leurs trajets habituels) confirment un passage régulier.'
      },
      {
        heading: 'Que faire si vous repérez ces signes ?',
        text: 'Dès les premiers indices, évitez de laisser de la nourriture accessible et bouchez les accès visibles, mais n\'attendez pas pour agir : une femelle peut avoir plusieurs portées par an, et une infestation non traitée s\'aggrave rapidement. Un diagnostic professionnel permet d\'identifier l\'espèce, la source d\'entrée et le traitement adapté avant que la situation ne devienne difficile à maîtriser.'
      }
    ],
    image: '/images/deratisation.webp',
    imageAlt: 'Signes d\'infestation de rats dans un logement'
  },
  {
    id: '2',
    title: 'Comment se débarrasser des cafards efficacement ?',
    slug: 'comment-se-debarrasser-des-cafards',
    excerpt: 'Les cafards se reproduisent vite et résistent à de nombreux traitements grand public. Voici pourquoi les solutions maison échouent souvent et ce qui fonctionne réellement.',
    metaDescription: 'Comment se débarrasser des cafards durablement ? Pourquoi les solutions maison échouent et quelles méthodes professionnelles sont réellement efficaces.',
    category: 'Désinsectisation',
    publishDate: '2026-01-22',
    content: [
      {
        heading: 'Pourquoi les cafards sont difficiles à éliminer soi-même',
        text: 'Une blatte femelle peut produire plusieurs centaines de descendants en quelques mois, et les cafards se cachent dans des zones difficiles d\'accès : derrière les plinthes, dans les gaines techniques, sous les appareils électroménagers. Les sprays du commerce tuent les individus visibles mais ne détruisent pas les nids ni les œufs (oothèques), ce qui explique les réinfestations rapides.'
      },
      {
        heading: 'Les bons réflexes en attendant l\'intervention',
        text: 'Supprimez les sources de nourriture et d\'eau accessibles (vaisselle qui traîne, miettes, fuites), rangez les aliments dans des contenants hermétiques et passez l\'aspirateur régulièrement, y compris dans les zones difficiles d\'accès. Ces gestes limitent la prolifération mais ne suffisent pas à éradiquer une infestation installée.'
      },
      {
        heading: 'Le traitement professionnel : gel appât et barrière insecticide',
        text: 'Un professionnel identifie d\'abord l\'espèce (blatte germanique ou orientale) et les zones de nidification, puis applique un gel appât que les cafards ramènent au nid, contaminant leurs congénères par contact. Ce traitement est complété par une barrière insecticide rémanente sur les points de passage. Contrairement aux sprays, cette méthode cible la colonie entière, œufs compris.'
      },
      {
        heading: 'Prévenir une nouvelle infestation',
        text: 'Une fois le traitement effectué, colmater les fissures et points d\'entrée, maintenir une hygiène rigoureuse en cuisine et surveiller les parties communes en immeuble collectif (les cafards circulent facilement d\'un logement à l\'autre par les gaines) sont les meilleures garanties de résultat durable.'
      }
    ],
    image: '/images/désinsectisation.webp',
    imageAlt: 'Traitement professionnel contre les cafards'
  },
  {
    id: '3',
    title: 'Qui paie une dératisation en copropriété ?',
    slug: 'qui-paie-une-deratisation-en-copropriete',
    excerpt: 'Rongeurs dans les parties communes, cave ou vide-ordures : la question de la prise en charge financière revient souvent en copropriété. Voici ce que prévoit la réglementation.',
    metaDescription: 'Qui paie la dératisation en copropriété : syndic, charges communes ou propriétaire individuel ? Explications sur la répartition des frais selon la situation.',
    category: 'Copropriété',
    publishDate: '2026-02-03',
    content: [
      {
        heading: 'Dans les parties communes : une charge collective',
        text: 'Lorsque l\'infestation concerne les parties communes (cave, hall, vide-ordures, gaines techniques, jardin collectif), la dératisation relève de l\'entretien de l\'immeuble. Elle est décidée et financée par le syndicat des copropriétaires, via les charges communes, sur proposition du syndic. Une simple constatation de nuisibles dans les parties communes suffit généralement à justifier une intervention sans vote préalable en assemblée générale, s\'agissant d\'un acte d\'urgence ou d\'entretien courant.'
      },
      {
        heading: 'Dans un logement privatif : à la charge du propriétaire ou du locataire',
        text: 'Si l\'infestation est localisée dans un seul appartement, sans lien avéré avec les parties communes, la prise en charge revient en principe à l\'occupant du logement. Un locataire peut être tenu de traiter une infestation liée à un défaut d\'entretien de son fait, tandis qu\'une infestation structurelle (venant d\'une cave commune ou d\'un réseau d\'égout) engage la responsabilité de la copropriété.'
      },
      {
        heading: 'Comment se déroule la procédure',
        text: 'En pratique, le syndic fait réaliser un diagnostic par un professionnel pour déterminer l\'origine de l\'infestation. Si elle provient des parties communes, l\'intervention et son coût sont intégrés au budget de charges, parfois via un contrat annuel de prévention plutôt qu\'une intervention ponctuelle. Il est conseillé de signaler rapidement toute présence de nuisibles au syndic par écrit, ce qui permet d\'engager sa responsabilité et d\'accélérer la prise de décision.'
      },
      {
        heading: 'Un contrat annuel plutôt que des interventions isolées',
        text: 'De nombreuses copropriétés optent pour un contrat de dératisation préventive avec passages réguliers, plus économique et efficace sur la durée qu\'une succession d\'interventions curatives. Cette solution permet aussi de disposer d\'un interlocuteur unique en cas de réapparition des nuisibles.'
      }
    ],
    image: '/images/hygienedubat.webp',
    imageAlt: 'Copropriété et gestion de la dératisation des parties communes'
  },
  {
    id: '4',
    title: 'Les dangers des punaises de lit pour la santé et le logement',
    slug: 'les-dangers-des-punaises-de-lit',
    excerpt: 'Les punaises de lit ne transmettent pas de maladies graves, mais leurs piqûres et leur prolifération rapide en font un problème de santé et de bien-être qu\'il ne faut pas sous-estimer.',
    metaDescription: 'Punaises de lit : quels sont les risques pour la santé, comment repérer une infestation et pourquoi agir vite est essentiel pour éviter la propagation.',
    category: 'Punaises de lit',
    publishDate: '2026-02-12',
    content: [
      {
        heading: 'Des piqûres irritantes, parfois source d\'allergies',
        text: 'Les punaises de lit piquent la nuit pour se nourrir de sang, laissant des marques rouges regroupées en ligne, souvent sur les zones découvertes (bras, jambes, cou). Ces piqûres provoquent des démangeaisons parfois intenses et peuvent, chez certaines personnes, entraîner des réactions allergiques ou des surinfections liées au grattage.'
      },
      {
        heading: 'Un impact réel sur le sommeil et la santé mentale',
        text: 'Au-delà des piqûres, une infestation de punaises de lit perturbe fortement le sommeil et génère un stress psychologique important : anxiété, sentiment de honte ou d\'isolement, difficulté à se sentir chez soi. Ce retentissement est souvent sous-estimé alors qu\'il constitue l\'un des impacts les plus lourds pour les personnes concernées.'
      },
      {
        heading: 'Une prolifération très rapide',
        text: 'Une femelle punaise de lit peut pondre plusieurs centaines d\'œufs au cours de sa vie. Sans traitement, une infestation détectée dans une chambre peut gagner l\'ensemble d\'un logement, voire les logements voisins, en quelques semaines, notamment via les vêtements, bagages et meubles infestés.'
      },
      {
        heading: 'Pourquoi un traitement professionnel est nécessaire',
        text: 'Les punaises de lit résistent à de nombreux insecticides grand public et se cachent dans des interstices très fins (sommiers, plinthes, prises électriques). Un traitement professionnel combine généralement un traitement thermique ou chimique ciblé et un suivi à plusieurs semaines d\'intervalle pour traiter les œufs qui éclosent après la première intervention. Plus l\'intervention est précoce, plus elle est rapide et économique.'
      }
    ],
    image: '/images/désinsectisation.webp',
    imageAlt: 'Traitement professionnel contre les punaises de lit'
  }
];
