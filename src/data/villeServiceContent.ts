export interface ComboContent {
  intro: string;
  faqQuestion: string;
  faqAnswer: string;
}

// Contenu unique par combinaison ville x service : chaque paragraphe est écrit
// spécifiquement pour ce couple (angle local + service), pas un simple recyclage
// du texte de service générique avec le nom de la ville substitué.
export const comboContent: Record<string, Record<string, ComboContent>> = {
  deratisation: {
    paris: {
      intro: "Dans les immeubles haussmanniens parisiens, les rats et souris progressent par les caves voûtées, les gaines techniques et les réseaux d'égouts très denses en sous-sol. Les cuisines de restaurant et les commerces alimentaires du centre-ville sont particulièrement exposés. Nos techniciens interviennent dans les parties communes comme chez les particuliers, avec un traitement adapté à la configuration en sous-sol typique du bâti parisien ancien.",
      faqQuestion: "Les rats remontent-ils par les canalisations dans les immeubles parisiens ?",
      faqAnswer: "Oui, c'est une voie d'entrée fréquente dans l'habitat ancien parisien. Nous inspectons systématiquement les canalisations et points de jonction avant de poser les postes d'appâtage."
    },
    bondy: {
      intro: "À Bondy, la proximité du canal de l'Ourcq et les nombreux jardins pavillonnaires favorisent la présence de rats qui trouvent refuge dans les appentis, les composts et les abris de jardin. Notre base locale nous permet d'intervenir rapidement dans les quartiers pavillonnaires comme dans les copropriétés, avec un diagnostic qui prend en compte les accès extérieurs propres à l'habitat individuel.",
      faqQuestion: "Les rats du canal de l'Ourcq viennent-ils jusque dans les jardins de Bondy ?",
      faqAnswer: "Oui, les berges du canal sont un point de passage classique. Nous sécurisons en priorité les accès de jardin et les points bas proches des clôtures."
    },
    montreuil: {
      intro: "Montreuil compte de nombreuses cours d'artisans réhabilitées et un habitat mitoyen dense, notamment dans le Bas-Montreuil, où les murs communicants entre logements et anciens ateliers facilitent la circulation des rongeurs. Nous adaptons notre diagnostic à ce tissu urbain particulier, en identifiant les points de passage entre bâtiments voisins avant de traiter.",
      faqQuestion: "Une infestation de rats peut-elle venir d'un atelier voisin à Montreuil ?",
      faqAnswer: "C'est fréquent dans le Bas-Montreuil où les bâtiments sont mitoyens. Nous recommandons d'informer les occupants voisins pour traiter la source en même temps."
    },
    bobigny: {
      intro: "À Bobigny, les grands ensembles et les bâtiments administratifs autour du quartier de l'Abreuvoir présentent des sous-sols et vide-ordures propices aux rongeurs. Nos interventions dans ces structures collectives respectent les contraintes des établissements recevant du public, avec des comptes-rendus adaptés aux syndics et gestionnaires.",
      faqQuestion: "Comment traitez-vous une infestation de rats dans un grand ensemble à Bobigny ?",
      faqAnswer: "Nous traitons prioritairement les vide-ordures et sous-sols communs, puis établissons un rapport pour le syndic afin de déclencher un traitement collectif si nécessaire."
    },
    'saint-denis': {
      intro: "Les berges du canal Saint-Denis et de la Seine, ainsi que les zones industrielles reconverties, exposent la ville à une pression de rongeurs plus forte que la moyenne, en particulier autour du marché et des commerces alimentaires du centre-ville. Nous intervenons avec des protocoles renforcés pour ces zones à forte densité commerciale.",
      faqQuestion: "Le marché de Saint-Denis est-il une zone à risque pour les rats ?",
      faqAnswer: "Oui, la concentration de commerces alimentaires en fait une zone sensible. Nous proposons des contrats de surveillance régulière pour les commerçants du secteur."
    },
    'aulnay-sous-bois': {
      intro: "L'habitat pavillonnaire dominant à Aulnay-sous-Bois, hérité en partie de l'ancien site industriel PSA, génère des infestations typiques des jardins et sous-sols de pavillon : soupiraux mal protégés, canalisations extérieures, jonctions de toiture. Nous ciblons ces points d'entrée spécifiques aux maisons individuelles lors de chaque intervention.",
      faqQuestion: "Quels sont les points d'entrée des rats dans un pavillon à Aulnay-sous-Bois ?",
      faqAnswer: "Le plus souvent les soupiraux, les jonctions de toiture et les canalisations extérieures. Nous les inspectons systématiquement avant de poser un traitement."
    }
  },
  desinfection: {
    paris: {
      intro: "La densité de restaurants et commerces alimentaires à Paris impose des standards de désinfection stricts, notamment après une infestation de nuisibles ou pour un contrôle HACCP. Nous intervenons dans les cuisines professionnelles et espaces recevant du public avec des protocoles conformes aux normes sanitaires en vigueur dans la capitale.",
      faqQuestion: "La désinfection est-elle obligatoire pour les restaurants parisiens après une infestation ?",
      faqAnswer: "Elle est fortement recommandée pour respecter les normes HACCP. Nous délivrons un certificat de désinfection utile lors des contrôles sanitaires."
    },
    bondy: {
      intro: "À Bondy, nos interventions de désinfection concernent surtout les copropriétés ayant récemment traité une infestation de rongeurs ou d'insectes, où un assainissement complet des zones touchées (caves, parties communes) est nécessaire avant de considérer le traitement comme terminé.",
      faqQuestion: "Faut-il désinfecter après une dératisation à Bondy ?",
      faqAnswer: "Oui, notamment dans les caves et parties communes où l'urine et les déjections de rongeurs peuvent persister. Nous proposons cette étape en complément du traitement anti-nuisibles."
    },
    montreuil: {
      intro: "Les ateliers d'artistes et locaux professionnels réhabilités de Montreuil nécessitent souvent une désinfection adaptée à des espaces de travail mixtes (stockage, création, accueil du public), différente d'un logement classique. Nous ajustons nos produits et méthodes selon l'usage réel du local.",
      faqQuestion: "La désinfection d'un atelier à Montreuil suit-elle le même protocole qu'un logement ?",
      faqAnswer: "Non, nous adaptons le protocole selon l'usage du local (stockage de matériaux, accueil du public) et le type de surfaces à traiter."
    },
    bobigny: {
      intro: "Les administrations et établissements recevant du public de Bobigny, ville préfecture, exigent une désinfection discrète et rapide qui ne perturbe pas l'activité. Nous planifions nos interventions en horaires adaptés et fournissons une certification de désinfection pour les audits internes.",
      faqQuestion: "Pouvez-vous désinfecter un bâtiment administratif à Bobigny sans interrompre l'activité ?",
      faqAnswer: "Oui, nous planifions généralement ces interventions en dehors des heures d'ouverture ou par zones pour ne pas perturber le fonctionnement du site."
    },
    'saint-denis': {
      intro: "Entre le marché historique et les zones industrielles reconverties, Saint-Denis compte de nombreux commerces alimentaires et locaux d'activité qui nécessitent une désinfection régulière, notamment en prévention avant chaque saison à risque d'infestation.",
      faqQuestion: "Proposez-vous des contrats de désinfection préventive pour les commerces de Saint-Denis ?",
      faqAnswer: "Oui, nous proposons des passages réguliers programmés, particulièrement adaptés aux commerces alimentaires du marché."
    },
    'aulnay-sous-bois': {
      intro: "Dans les pavillons d'Aulnay-sous-Bois, la désinfection intervient le plus souvent après un sinistre nuisible localisé (cave, garage, sous-sol) plutôt qu'à l'échelle d'un immeuble entier. Nous ciblons précisément la zone touchée pour un traitement efficace et économique.",
      faqQuestion: "Une désinfection partielle est-elle possible pour un seul pavillon à Aulnay-sous-Bois ?",
      faqAnswer: "Oui, contrairement à un immeuble collectif, nous pouvons cibler uniquement la pièce ou le sous-sol concerné dans un pavillon individuel."
    }
  },
  desinsectisation: {
    paris: {
      intro: "Paris cumule deux profils d'infestation fréquents : les cafards dans les cuisines de restaurant du centre-ville et les punaises de lit dans les logements meublés, hôtels et locations touristiques à forte rotation d'occupants. Nos techniciens adaptent le traitement selon qu'il s'agit d'un établissement recevant du public ou d'un logement privé.",
      faqQuestion: "Les punaises de lit sont-elles plus fréquentes à Paris à cause du tourisme ?",
      faqAnswer: "La forte rotation d'occupants dans les meublés et locations touristiques favorise effectivement leur propagation. Un traitement rapide dès les premiers signes limite la casse."
    },
    bondy: {
      intro: "À Bondy, les infestations de cafards concernent surtout les logements collectifs pavillonnaires et les petites copropriétés, où la circulation entre logements mitoyens complique parfois le traitement si un seul foyer est traité isolément. Nous recommandons systématiquement un diagnostic des logements voisins.",
      faqQuestion: "Faut-il traiter tout l'immeuble si un logement a des cafards à Bondy ?",
      faqAnswer: "C'est fortement conseillé dans les petites copropriétés, car les cafards circulent facilement entre logements mitoyens par les gaines et canalisations communes."
    },
    montreuil: {
      intro: "Les ateliers d'artistes et logements partagés de Montreuil, souvent situés dans d'anciens bâtiments artisanaux, présentent des configurations complexes (mezzanines, cloisons légères, stockage de matériaux) où cafards et punaises de lit trouvent de nombreuses cachettes. Nous adaptons notre inspection à ces espaces atypiques.",
      faqQuestion: "Un atelier avec beaucoup de stockage est-il plus difficile à traiter à Montreuil ?",
      faqAnswer: "Oui, le stockage de matériaux multiplie les cachettes potentielles. Un diagnostic approfondi avant traitement est particulièrement important dans ce type de local."
    },
    bobigny: {
      intro: "Dans les grands ensembles de Bobigny, les cafards se propagent facilement d'un logement à l'autre via les gaines techniques et vide-ordures communs. Nous privilégions le gel appât en profondeur dans les parties communes en complément du traitement des logements individuels.",
      faqQuestion: "Pourquoi les cafards reviennent-ils souvent dans les grands ensembles à Bobigny ?",
      faqAnswer: "Parce qu'ils se réfugient dans les gaines techniques communes entre deux traitements. Un traitement coordonné avec le syndic sur plusieurs logements donne de bien meilleurs résultats."
    },
    'saint-denis': {
      intro: "Le marché alimentaire de Saint-Denis et la densité des logements collectifs du centre-ville créent un terrain favorable aux cafards, tandis que les punaises de lit se concentrent davantage dans les logements à forte occupation. Nous distinguons ces deux profils dès le diagnostic pour adapter le traitement.",
      faqQuestion: "Le marché de Saint-Denis favorise-t-il les infestations de cafards alentour ?",
      faqAnswer: "La proximité de commerces alimentaires est un facteur aggravant classique. Nous proposons un suivi renforcé pour les logements et commerces situés à proximité immédiate."
    },
    'aulnay-sous-bois': {
      intro: "Les copropriétés d'Aulnay-sous-Bois font face à des infestations de punaises de lit qui se propagent via les parties communes (ascenseurs, paliers, caves), et à des cafards dans les cuisines des logements les plus anciens. Nous traitons chaque cas selon son origine réelle, structurelle ou individuelle.",
      faqQuestion: "Les punaises de lit se propagent-elles via les paliers dans les copropriétés d'Aulnay-sous-Bois ?",
      faqAnswer: "Oui, c'est une voie de propagation courante en habitat collectif. Un diagnostic des logements voisins est recommandé dès qu'un cas est détecté."
    }
  },
  'guepes-frelons-hauteur': {
    paris: {
      intro: "Les façades haussmanniennes, cours intérieures et toitures en zinc de Paris offrent de nombreux recoins propices aux nids de guêpes et de frelons asiatiques, souvent difficiles d'accès sans nacelle ou intervention cordiste. Nous intervenons en toute sécurité sur ces configurations typiques du bâti parisien.",
      faqQuestion: "Comment accédez-vous à un nid de frelons sur une toiture haussmannienne à Paris ?",
      faqAnswer: "Selon la configuration, nous utilisons une perche télescopique depuis une cour intérieure ou une intervention cordiste pour les toitures les plus hautes et les plus difficiles d'accès."
    },
    bondy: {
      intro: "Les jardins pavillonnaires de Bondy et les arbres bordant le canal de l'Ourcq abritent régulièrement des nids de guêpes et de frelons asiatiques en hauteur. Nous intervenons rapidement dans ces jardins avec du matériel adapté aux arbres de grande taille.",
      faqQuestion: "Les frelons asiatiques nichent-ils dans les arbres près du canal à Bondy ?",
      faqAnswer: "Oui, les arbres de grande hauteur en bord de canal sont des sites de nidification fréquents pour cette espèce invasive."
    },
    montreuil: {
      intro: "Les jardins et cours d'artisans de Montreuil, notamment autour des célèbres Murs à Pêches, offrent un environnement végétalisé propice aux nids de guêpes et frelons, parfois nichés dans les vieux murs ou les arbres fruitiers de ces jardins historiques.",
      faqQuestion: "Les Murs à Pêches sont-ils une zone à risque pour les nids de frelons à Montreuil ?",
      faqAnswer: "La végétation dense et les vieux murs de cette zone historique en font effectivement un site propice à la nidification, notamment pour les frelons asiatiques."
    },
    bobigny: {
      intro: "Les espaces verts entourant les bâtiments administratifs de Bobigny et les grands arbres du secteur abritent parfois des nids de guêpes ou de frelons en hauteur, nécessitant une intervention rapide pour sécuriser les abords fréquentés par le public.",
      faqQuestion: "Intervenez-vous en urgence pour un nid de frelons près d'un bâtiment public à Bobigny ?",
      faqAnswer: "Oui, ce type de situation est traité en priorité pour sécuriser rapidement les zones de passage du public."
    },
    'saint-denis': {
      intro: "Les entrepôts et zones industrielles reconverties de Saint-Denis, ainsi que les berges du canal, comptent de nombreux nids de frelons et guêpes installés en toiture ou dans des structures métalliques en hauteur, nécessitant un matériel d'accès spécifique.",
      faqQuestion: "Les entrepôts de Saint-Denis sont-ils propices aux nids de frelons ?",
      faqAnswer: "Les structures métalliques en hauteur et les zones peu fréquentées de ces bâtiments sont effectivement des sites de nidification fréquents."
    },
    'aulnay-sous-bois': {
      intro: "Les grands jardins pavillonnaires d'Aulnay-sous-Bois et leurs arbres anciens sont particulièrement propices aux nids de frelons asiatiques, parfois situés à plus de 10 mètres de hauteur dans les arbres de jardin, loin de la maison mais dangereux pour les occupants.",
      faqQuestion: "Un nid de frelons dans un arbre de jardin à Aulnay-sous-Bois est-il dangereux même loin de la maison ?",
      faqAnswer: "Oui, le rayon d'action des frelons asiatiques dépasse largement la zone du nid. Une intervention est recommandée dès sa localisation, même éloignée de l'habitation."
    }
  },
  depigeonnage: {
    paris: {
      intro: "Les façades haussmanniennes et monuments parisiens offrent aux pigeons de nombreux rebords, corniches et balcons pour se percher, avec un risque de dégradation esthétique et sanitaire important sur le patrimoine bâti. Nous posons des dispositifs discrets respectant l'architecture des immeubles classés ou non.",
      faqQuestion: "Peut-on installer des pics anti-pigeons sur un immeuble haussmannien classé à Paris ?",
      faqAnswer: "Oui, nous utilisons des systèmes discrets et transparents conçus pour respecter l'esthétique des façades, y compris sur du bâti ancien ou classé."
    },
    bondy: {
      intro: "Les toitures et balcons des immeubles de Bondy sont régulièrement colonisés par des pigeons, avec des nuisances de fientes sur les parties communes et les véhicules stationnés en pied d'immeuble. Nous intervenons en priorité sur ces zones de nidification les plus fréquentes.",
      faqQuestion: "Les pigeons salissent-ils souvent les parkings en pied d'immeuble à Bondy ?",
      faqAnswer: "C'est une nuisance fréquente lorsque des pigeons nichent en toiture juste au-dessus. Un traitement des points de perchage résout généralement le problème."
    },
    montreuil: {
      intro: "Les cours d'ateliers et corniches des bâtiments réhabilités de Montreuil constituent des perchoirs appréciés des pigeons, en particulier dans les zones peu fréquentées où les fientes s'accumulent sans être nettoyées régulièrement. Nous combinons dissuasion et nettoyage pour ces cas.",
      faqQuestion: "Comment traiter des fientes accumulées dans une cour d'atelier à Montreuil ?",
      faqAnswer: "Nous proposons un nettoyage et une désinfection complète en complément de la pose de dispositifs dissuasifs pour éviter le retour des pigeons."
    },
    bobigny: {
      intro: "Les bâtiments administratifs et grands ensembles de Bobigny, avec leurs larges corniches et toitures plates, attirent des colonies de pigeons parfois importantes. Nous intervenons avec des solutions durables adaptées à ces grandes surfaces, en coordination avec les syndics et gestionnaires publics.",
      faqQuestion: "Comment gérer une colonie importante de pigeons sur un grand ensemble à Bobigny ?",
      faqAnswer: "Nous réalisons un diagnostic complet des zones de nidification puis équipons les points stratégiques (corniches, toitures plates) de dispositifs adaptés à grande échelle."
    },
    'saint-denis': {
      intro: "Autour de la basilique et du marché historique de Saint-Denis, les pigeons profitent de la présence humaine et des reliefs architecturaux pour nicher en nombre, avec des enjeux de préservation du patrimoine. Nous adaptons nos dispositifs aux contraintes des bâtiments historiques du secteur.",
      faqQuestion: "Peut-on installer des dispositifs anti-pigeons près d'un monument historique à Saint-Denis ?",
      faqAnswer: "Oui, sous réserve d'utiliser des systèmes discrets et réversibles adaptés aux exigences de préservation du patrimoine, comme les filets fins ou les pics transparents."
    },
    'aulnay-sous-bois': {
      intro: "Les toitures de pavillon à Aulnay-sous-Bois sont plus rarement touchées que les immeubles collectifs, mais certains secteurs proches d'anciens bâtiments industriels concentrent des populations de pigeons plus importantes. Nous intervenons au cas par cas selon la configuration du bâti individuel.",
      faqQuestion: "Le dépigeonnage est-il utile pour un simple pavillon à Aulnay-sous-Bois ?",
      faqAnswer: "Cela dépend de la proximité de zones de nidification importantes. Nous évaluons systématiquement la pertinence de l'intervention avant de proposer un devis."
    }
  },
  'hygiene-du-batiment': {
    paris: {
      intro: "Les commerces alimentaires et restaurants parisiens doivent respecter des protocoles HACCP stricts, avec des contrôles fréquents dans un contexte de forte concurrence et de visibilité publique. Nous proposons des audits et interventions régulières adaptés à cette exigence de conformité continue.",
      faqQuestion: "À quelle fréquence un restaurant parisien doit-il faire auditer son hygiène ?",
      faqAnswer: "Cela dépend du type d'établissement, mais un contrôle trimestriel avec passages de contrôle intermédiaires est une bonne pratique courante que nous recommandons."
    },
    bondy: {
      intro: "Dans les copropriétés de Bondy, l'entretien des parties communes (caves, vide-ordures, halls) est le principal enjeu d'hygiène, souvent lié à la prévention des nuisibles. Nous proposons des interventions coordonnées avec les syndics pour un entretien régulier et documenté.",
      faqQuestion: "L'hygiène des parties communes prévient-elle les infestations à Bondy ?",
      faqAnswer: "Oui, un entretien régulier des vide-ordures et caves réduit fortement le risque d'infestation de rongeurs et d'insectes."
    },
    montreuil: {
      intro: "Les locaux professionnels et ateliers de Montreuil nécessitent souvent un protocole d'hygiène sur-mesure, différent d'un immeuble résidentiel classique, notamment lorsque l'activité mêle stockage, production et accueil de public. Nous adaptons nos prestations à ces usages mixtes.",
      faqQuestion: "Un atelier d'artiste à Montreuil a-t-il besoin d'un protocole d'hygiène spécifique ?",
      faqAnswer: "Cela dépend de l'activité exercée. Nous établissons un protocole adapté après une visite d'évaluation du local."
    },
    bobigny: {
      intro: "Les établissements administratifs de Bobigny, ville préfecture, sont soumis à des exigences d'hygiène renforcées pour les espaces recevant du public. Nous intervenons avec des plannings adaptés pour ne pas perturber l'activité tout en garantissant la conformité sanitaire.",
      faqQuestion: "Les administrations de Bobigny ont-elles des obligations d'hygiène particulières ?",
      faqAnswer: "Les établissements recevant du public sont soumis à des normes sanitaires renforcées. Nous fournissons un rapport de conformité utile pour les contrôles internes."
    },
    'saint-denis': {
      intro: "Les commerces du marché de Saint-Denis et les locaux d'activité des zones industrielles reconverties nécessitent un entretien d'hygiène rigoureux pour limiter les risques liés à la forte fréquentation et à la manipulation de denrées alimentaires.",
      faqQuestion: "Les commerçants du marché de Saint-Denis doivent-ils respecter des normes HACCP ?",
      faqAnswer: "Oui, tout commerce alimentaire est soumis aux normes HACCP. Nous proposons un accompagnement complet incluant audit et protocole d'entretien."
    },
    'aulnay-sous-bois': {
      intro: "Dans les copropriétés pavillonnaires d'Aulnay-sous-Bois, l'hygiène du bâtiment concerne surtout les parties communes des petites résidences et les locaux techniques partagés, avec un besoin d'entretien plus ponctuel que dans les grands ensembles urbains denses.",
      faqQuestion: "L'entretien d'hygiène est-il différent pour une petite résidence à Aulnay-sous-Bois ?",
      faqAnswer: "Oui, les besoins sont généralement plus ponctuels que dans un grand ensemble urbain, avec un focus sur les locaux techniques et parties communes partagées."
    }
  },
  'debarras-pro': {
    paris: {
      intro: "Les successions dans les appartements parisiens, souvent situés en étage sans ascenseur dans le bâti ancien, demandent une organisation logistique précise pour l'évacuation du mobilier. Nous adaptons notre matériel (monte-meuble, équipe renforcée) à ces contraintes typiques de la capitale.",
      faqQuestion: "Comment gérez-vous un débarras dans un appartement parisien sans ascenseur ?",
      faqAnswer: "Nous utilisons un monte-meuble ou une équipe renforcée selon la configuration, pour évacuer efficacement même depuis les étages élevés du bâti ancien."
    },
    bondy: {
      intro: "À Bondy, les débarras concernent principalement des pavillons et maisons individuelles avec jardin, garage et dépendances, ce qui implique souvent des volumes plus importants qu'en appartement et un accès facilité pour nos véhicules.",
      faqQuestion: "Un débarras de pavillon avec garage prend-il plus de temps à Bondy ?",
      faqAnswer: "Généralement oui, le volume à traiter (maison, garage, dépendances) est plus important qu'en appartement, mais l'accès facilité pour nos véhicules compense en partie ce délai."
    },
    montreuil: {
      intro: "Les anciens ateliers et locaux artisanaux de Montreuil, parfois transformés en habitation ou en espace de stockage, nécessitent un débarras adapté à des volumes atypiques : matériaux de construction, outillage, archives professionnelles accumulées sur plusieurs années.",
      faqQuestion: "Comment débarrasser un ancien atelier reconverti à Montreuil ?",
      faqAnswer: "Nous évaluons en amont le type de matériaux présents (outillage, matériaux de construction) pour organiser un tri et une évacuation conformes aux filières appropriées."
    },
    bobigny: {
      intro: "Les débarras dans les grands ensembles de Bobigny impliquent souvent une coordination avec le syndic pour l'accès aux parties communes et l'utilisation des ascenseurs, notamment pour les successions dans des logements aux étages élevés.",
      faqQuestion: "Faut-il l'accord du syndic pour un débarras dans un grand ensemble à Bobigny ?",
      faqAnswer: "L'utilisation des parties communes (ascenseurs, halls) nécessite généralement une coordination avec le syndic, que nous pouvons gérer directement avec vous."
    },
    'saint-denis': {
      intro: "Les locaux commerciaux et industriels de Saint-Denis nécessitent parfois des débarras de grande ampleur, avec du matériel professionnel ou des stocks à évacuer, en plus des débarras classiques de logements du centre-ville.",
      faqQuestion: "Prenez-vous en charge le débarras de matériel professionnel à Saint-Denis ?",
      faqAnswer: "Oui, nous adaptons notre équipe et nos véhicules aux débarras de locaux commerciaux ou industriels, y compris pour de grands volumes de matériel."
    },
    'aulnay-sous-bois': {
      intro: "Les pavillons d'Aulnay-sous-Bois avec garage et jardin génèrent souvent des débarras incluant des objets encombrants extérieurs (mobilier de jardin, outillage) en plus du contenu de la maison, ce qui demande une évaluation précise du volume total.",
      faqQuestion: "Le débarras d'un pavillon à Aulnay-sous-Bois inclut-il le jardin et le garage ?",
      faqAnswer: "Oui, nous évaluons l'ensemble du volume à débarrasser lors du devis, y compris le garage, les dépendances et le mobilier de jardin."
    }
  }
};
