export const domotikCategories = {
  securite: {
    legend: "Surveillance et sécurité",
    url: "surveillance-et-securite",
    description:
      "Grâce aux caméras de surveillance, au sein de votre domicile, vous pouvez vous prémunir contre d'éventuels intrus et ainsi gagner en sécurité.",
    picture: "securite.svg",
    landing: "securite.png",
  },
  temperature: {
    legend: "Chauffage et climatisation",
    url: "chauffage-et-climatisation",
    description:
      "La domotique permet de contrôler et de gérer la température d'un logement de manière simple et efficace grâce à l'utilisation de thermostats connectés, de capteurs de température, de radiateurs connectés et de climatiseurs connectés.",
    picture: "temperature.svg",
    landing: "temperature.png",
  },
  garage: { legend: "Garage", url: "garage", picture: "garage.svg", landing: "garage.png" },
  automatisation: {
    legend: "Automatisation",
    url: "automatisation",
    description:
      "La gestion de l'automatisation dans la domotique consiste à mettre en place un système de contrôle qui permet de gérer de manière automatique les différentes fonctions de l'habitat afin de simplifier la vie quotidienne, d'offrir un confort accru, de faciliter la maintenance de l'habitat et de faciliter l'ajout de nouvelles fonctions.",
    picture: "automatisation.svg",
    landing: "automatisation.png",
  },
  eclairage: {
    legend: "Eclairage",
    url: "eclairage",
    picture: "eclairage.svg",
    landing: "lumiere.png",
    description:
      "Grâce à la domotique, vous pouvez contrôler à distance les lumières de votre habitat en créant une ambiance personnalisée selon le moment de la journée. Le sytème d'éclairage peut également être entièrement automatisé.",
  },
  electricite: {
    legend: "Electricité",
    url: "electricite",
    picture: "electricite.svg",
    landing: "electricite.png",
    description:
      "L'électricité est reliable au réseau domotique de votre domicile. Ainsi vous pouvez contrôler plus efficacement votre consommation. Cela permet également de couper l'alimentation éléctriques de certains appareils.",
  },
  eau: {
    legend: "Plomberie",
    url: "plomberie",
    picture: "eau.svg",
    landing: "eau.png",
    description:
      "La domotique peut vous permettre de contrôler la présence de fuites d'eau à distance ainsi que d'agir en conséquences pour couper le débit.",
  },
  appareil: {
    legend: "Appareils connectés et multimedia",
    url: "appareils-connectes",
    description:
      "De nombreux appareils peuvent-être reliés à la domotique, ils peuvent-être en lien avec la domotique.",
    picture: "appareil.svg",
    landing: "multimedia.png",
  },
  centralisation: {
    legend: "Centralisation",
    url: "centralisation",
    description:
      "La centralisation des données dans la domotique permettent de relier tous les appareils connectés présents dans le logement ainsi que de les contrôler à distance.",
    picture: "centralisation.svg",
    landing: "centralisation.png",
  },
  volet: { legend: "Volet", url: "volets", picture: "volet.svg", landing: "store.png" },
};

export const domotikList = [
  {
    legend: "Alarme",
    category: domotikCategories.centralisation,
    description:
      "L'alarme intrusion fait partie des systèmes de sécurité les plus couramment utilisés en domotique. Elle permet de protéger votre maison contre les cambriolages en détectant les mouvements et en donnant l'alerte en cas de tentative d'intrusion. Les alarmes intrusion modernes sont souvent connectées à une centrale de sécurité et peuvent être contrôlées à distance grâce à une application smartphone.",
    picture: "alarme.svg",
  },
  {
    legend: "Arrosage automatique",
    category: domotikCategories.automatisation,
    description:
      "L'arrosage automatique est un système de domotique qui permet de gérer l'arrosage des plantes et du jardin de manière automatique. Il se compose généralement d'un réseau de tuyaux et de buses reliées à un programmateur et à une pompe. Le programmateur peut être réglé pour arroser les plantes à des intervalles prédéfinis, en tenant compte de la météo et de l'humidité du sol. L'arrosage automatique peut être contrôlé à distance grâce à une application smartphone, ce qui permet de l'ajuster en fonction de vos besoins et de ceux de votre jardin.",
    picture: "arrosage.svg",
  },
  {
    legend: "Baie informatique",
    category: domotikCategories.centralisation,
    description:
      "Toutes les données de la domotique peuvent être stockées et reliées via une baie informatique. Vous pouvez également conserver toutes les données enregistrées sur les caméras de surveillances sur des intervalles de temps très importantes.",
    picture: "baie.svg",
  },
  {
    legend: "Borne électrique connectée",
    category: domotikCategories.appareil,
    description:
      "Par exemple, vous pouvez utiliser une application smartphone pour allumer ou éteindre les bornes électriques, ou pour programmer leur mise en marche et leur arrêt à des heures prédéfinies. Les bornes électriques pour voiture peuvent être particulièrement utiles dans les parkings ou les garages privés, pour recharger les véhicules électriques de toute la famille sans avoir à se déplacer.",
    picture: "borne.svg",
  },
  {
    legend: "Box internet",
    category: domotikCategories.centralisation,
    description:
      "Elles fonctionnent en reliant les appareils domotiques à Internet via un réseau Wi-Fi ou Ethernet, offrant ainsi aux utilisateurs un contrôle centralisé sur tous les appareils connectés. Les box Internet liées à la domotique peuvent être utilisées pour contrôler les lumières, les thermostats, les serrures de porte, les caméras de sécurité et d'autres appareils électroniques.",
    picture: "box.svg",
  },
  {
    legend: "Borne wifi",
    category: domotikCategories.centralisation,
    description:
      "Les bornes wifi modernes peuvent être configurées et gérées à distance, offrant ainsi un moyen facile et pratique de surveiller et de contrôler l'ensemble du réseau wifi de la maison.",
    picture: "wifi.svg",
  },
  {
    legend: "Chatière",
    category: domotikCategories.appareil,
    description:
      "Une chatière connectée est un dispositif de domotique qui permet de contrôler l'accès de votre chat à l'intérieur et à l'extérieur de la maison. Elle se présente sous la forme d'une chatière équipée d'un lecteur RFID (Radio Frequency Identification) qui peut être reliée à un réseau de domotique. Lorsque votre chat approche de la chatière, le lecteur RFID lit l'identifiant de son collier et détermine s'il a le droit de sortir ou de rentrer. ",
    picture: "chatiere.svg",
  },
  {
    legend: "Chaudière",
    category: domotikCategories.temperature,
    description:
      "Une chaudière reliée à la domotique est un dispositif de chauffage qui peut être contrôlé et géré à distance. Elle se compose généralement d'une chaudière standard qui est connectée à un thermostat intelligent et à une application smartphone.",
    picture: "chaudiere.svg",
  },
  {
    legend: "Caméra",
    category: domotikCategories.securite,
    description:
      "Ces caméras peuvent être connectées à un réseau domotique et être contrôlées à distance depuis un smartphone, une tablette ou un ordinateur. Elles peuvent être équipées de fonctionnalités telles que la détection de mouvement, la vision nocturne, l'enregistrement en continu et la notification d'alertes en temps réel en cas d'intrusion. Les caméras de surveillance liées à la domotique offrent aux utilisateurs une tranquillité d'esprit en leur permettant de surveiller leur propriété à tout moment et de n'importe où.",
    picture: "caméra-ext.svg",
  },
  {
    legend: "Radiateur",
    category: domotikCategories.temperature,
    description:
      "La gestion du chauffage peut-être gérée à distance et centralisée à travers la domotique. Le chauffage relié à la domotique peut être particulièrement utile pour réduire les coûts d'énergie et pour améliorer le confort de votre foyer.",
    picture: "radiateur.svg",
  },
  {
    legend: "Climatisation",
    category: domotikCategories.temperature,
    description:
      " Vous pouvez utiliser l'application smartphone pour contrôler la climatisation à distance et pour ajuster la température de la maison en fonction de vos besoins.",
    picture: "climatisation.svg",
  },
  {
    legend: "Détecteur incendie",
    category: domotikCategories.securite,
    description:
      "Il existe plusieurs types d'alarmes incendie qui peuvent être intégrées à une installation de domotique. Elles peuvent être équipées de capteurs de fumée ou de chaleur, qui détectent les premiers signes d'un incendie et donnent l'alerte en conséquence. Certaines alarmes incendie peuvent également être couplées à d'autres dispositifs de sécurité, comme des détecteurs de monoxyde de carbone ou des caméras de surveillance, pour offrir une protection encore plus complète.",
    picture: "alarme_incendie.svg",
  },

  {
    legend: "Fuites d'eau/gaz",
    category: domotikCategories.eau,
    description:
      "Les détecteurs de fuite d'eau et de gaz sont des équipements de domotique qui permettent de détecter la présence de fuites dans votre maison.  Ces détecteurs peuvent envoyer une notification à votre smartphone ou à votre assistant vocal en cas de détection de fuite. Ils peuvent également être configurés pour couper automatiquement l'eau ou le gaz en cas de fuite importante. ",
    picture: "eau.svg",
  },
  {
    legend: "Eclairage extérieur",
    category: domotikCategories.eclairage,
    description:
      "L'éclairage extérieur relié à la domotique permet de contrôler et de personnaliser l'éclairage de votre jardin ou de votre patio depuis votre smartphone ou votre assistant vocal. L'éclairage extérieur connecté peut être également programmé pour s'allumer et s'éteindre automatiquement en fonction de l'heure ou de la présence de mouvement. Cela permet d'économiser de l'énergie et de sécuriser votre maison en simulant une présence humaine. L'éclairage extérieur domotique est également très pratique pour mettre en valeur votre jardin ou votre terrasse et en créer une ambiance agréable pour vos soirées en extérieur.",
    picture: "eclairage_ext.svg",
  },
  {
    legend: "Détecteur de mouvement",
    category: domotikCategories.automatisation,
    description:
      "Les détecteurs de mouvements sont des capteurs utilisés en domotique pour détecter la présence de mouvements dans une zone spécifique de la maison. Ils peuvent être utilisés pour contrôler automatiquement les éclairages, les systèmes de chauffage, de climatisation ou de ventilation, les systèmes d'alarme, et bien d'autres applications.",
    picture: "detecteur-mouvement.svg",
  },
  {
    legend: "Detecteur d’ouverture",
    category: domotikCategories.securite,
    description:
      "Lorsqu'une porte ou une fenêtre est ouverte, le détecteur envoie un signal à un système de contrôle central qui peut déclencher une action spécifique, comme l'allumage des lumières ou l'envoi d'une alerte à un propriétaire. ",
    picture: "detecteur-porte.svg",
  },
  {
    legend: "Système audio",
    category: domotikCategories.appareil,
    description:
      "Les haut-parleurs reliés à la domotique permettent de diffuser de la musique et d'autres contenus audio dans toute votre maison de manière synchronisée. Vous pouvez ainsi contrôler la musique depuis votre smartphone ou votre assistant vocal et la diffuser dans chaque pièce de votre maison ou dans certaines pièces seulement. Les haut-parleurs domotiques peuvent être connectés à différentes sources de musique, comme votre bibliothèque musicale en ligne, les services de streaming de musique ou encore votre téléviseur. Ils peuvent également être intégrés à d'autres équipements de domotique, comme les systèmes de contrôle de la température et de l'éclairage, pour créer une ambiance musicale personnalisée. Les haut-parleurs domotiques sont pratiques pour profiter de votre musique préférée dans toute votre maison de manière simple et intuitive.",
    picture: "enceinte.svg",
  },
  {
    legend: "Passerelle connectée",
    category: domotikCategories.appareil,
    description:
      "Les assistants vocaux sont des équipements de domotique qui permettent de contrôler diverses fonctionnalités de votre maison en utilisant votre voix. Vous pouvez ainsi allumer et éteindre l'éclairage, régler la température, diffuser de la musique et de nombreuses autres actions, simplement en donnant des commandes vocales à votre assistant vocal. Ces assistants vocaux sont également reliés à Internet et peuvent répondre à vos questions, vous donner des informations sur le temps, la météo, la circulation, etc. Ils peuvent également être connectés à d'autres équipements de domotique, comme les thermostats et les haut-parleurs, pour encore plus de contrôle et de convenance. ",
    picture: "enceinte_co.svg",
  },
  {
    legend: "Mirroir connecté",
    category: domotikCategories.appareil,
    description:
      "Les miroirs connectés reliés à la domotique sont de plus en plus populaires et offrent de nombreux avantages pratiques. En plus de leur fonction principale qui est de refléter votre image, ces miroirs peuvent également être connectés à Internet et à d'autres appareils de votre maison connectée. Cela vous permet de consulter des informations en temps réel, comme la météo, les actualités ou votre agenda, directement sur le miroir. Vous pouvez également utiliser la reconnaissance vocale pour contrôler d'autres appareils de votre maison connectée, comme l'éclairage ou la thermostat, simplement en parlant devant le miroir. Enfin, certains miroirs connectés disposent également de caméras et de capteurs pour suivre votre activité physique ou votre sommeil, ce qui peut être utile pour améliorer votre bien-être et votre santé.",
    picture: "mirroir.svg",
  },
  {
    legend: "Eclairage intérieur",
    category: domotikCategories.eclairage,
    description:
      "Toutes les lumières et l'éclairage de votre maison peut être géré à distance et centralisé. Vous pouvez également régler l'intensité lumineuse ainsi que la couleur des éclairages afin de créer des ambiances personnalisées.",
    picture: "lumiere.png",
  },
  {
    legend: "Interrupteur intelligeant",
    category: domotikCategories.electricite,
    description:
      " Ils sont généralement installés à la place des interrupteurs traditionnels et peuvent être utilisés pour allumer ou éteindre les lumières individuelles ou les groupes de lumières. Ces interrupteurs peuvent également être programmés pour allumer ou éteindre les lumières automatiquement en fonction de l'heure ou de la présence de personnes dans la pièce. Les interrupteurs connectés peuvent également être utilisés pour contrôler d'autres appareils électriques tels que les ventilateurs ou les prises électriques.",
    picture: "interrupteur.svg",
  },

  {
    legend: "Porte de garage",
    category: domotikCategories.garage,
    description:
      "Les portes de garage peuvent être reliées à la domotique afin de les rendre plus pratiques et plus sécurisées. Grâce à une connexion à Internet, il est possible de contrôler et de surveiller les portes de garage à distance, depuis un smartphone ou une tablette. Il est également possible de programmer des horaires d'ouverture et de fermeture automatiques, ainsi que de recevoir des notifications en cas d'intrusion ou de tentative d'effraction. La domotique peut également permettre de rendre les portes de garage plus efficaces énergétiquement, en gérant la ventilation et en adaptant la température de l'espace de garage.",
    picture: "garage.svg",
  },
  {
    legend: "Visiophone",
    category: domotikCategories.securite,
    description:
      "A distance, sur votre ordinateur ou votre tablette, vous pouvez ouvrir aux personnes de confiance qui veulent rentrer dans votre maison ou appartement. Cela permet également de faire entrer un livreur pour qu'il puisse déposer des colis durant votre absence.",
    picture: "interphone.svg",
  },
  {
    legend: "Porte de clôture",
    category: domotikCategories.securite,
    description:
      "Les portails peuvent également être reliés à la domotique afin de les rendre plus pratiques et plus sécurisés. Grâce à une connexion à Internet, il est possible de contrôler et de surveiller les portails à distance, depuis un smartphone ou une tablette. Il est également possible de programmer des horaires d'ouverture et de fermeture automatiques, ainsi que de recevoir des notifications en cas d'intrusion ou de tentative d'effraction. La domotique peut également permettre de rendre les portails plus efficaces énergétiquement, en gérant l'éclairage et en adaptant la température de l'espace autour du portail. De plus, certains portails peuvent être équipés de capteurs de mouvement ou de caméras de surveillance, ce qui peut contribuer à augmenter la sécurité de la maison.",
    picture: "portail_entree.svg",
  },
  {
    legend: "Portail",
    category: domotikCategories.securite,
    description:
      "Les portails de garages reliés à la domotique permettent de contrôler l'ouverture et la fermeture du portail à distance, généralement via une application smartphone ou une télécommande. Cette fonctionnalité peut être particulièrement pratique lorsque vous êtes absent de chez vous et que vous souhaitez donner accès à votre garage à un tiers, par exemple pour la livraison de colis. Elle peut également être utile en cas d'oubli de la télécommande ou de panne de l'ouvre-portail. En outre, certaines options peuvent être configurées pour recevoir des notifications en cas d'ouverture ou de fermeture anormales du portail,",
    picture: "portail_garage.svg",
  },
  {
    legend: "Tableau électrique",
    category: domotikCategories.electricite,
    description:
      "Les tableaux électriques connectés à la domotique permettent de contrôler et de gérer l'ensemble des circuits électriques de votre maison de manière plus pratique et sécurisée. Grâce à ces tableaux, vous pouvez par exemple allumer ou éteindre les lumières de votre maison à distance, programmer des horaires d'allumage ou d'extinction pour chaque circuit, ou encore suivre la consommation d'énergie de chaque appareil électrique. Vous pouvez également utiliser ces tableaux pour créer des scénarios automatisés qui réagissent à des événements précis, comme l'arrivée d'un invité ou le départ de la maison. En cas de problème électrique, ces tableaux peuvent également envoyer une notification pour vous alerter et vous permettre de réagir rapidement.",
    picture: "elec.svg",
  },
  {
    legend: "Prise électrique",
    category: domotikCategories.electricite,
    description:
      "Tous les appareils électriques, peuvent être de manière générale controlés à distance par le système de domotique. Merci de nous contacter pour plus de détails",
    picture: "prise.svg",
  },
  {
    legend: "Prise réseau",
    category: domotikCategories.centralisation,
    description:
      "Les prises réseaux connectées permettent de relier vos appareils électroniques au réseau internet de la maison. Ces prises sont reliés à la box internet et permettent de partager l'internet à haut-débit sans passer par le wifi.",
    picture: "prise-réseau.svg",
  },
  {
    legend: "Volet roulant",
    category: domotikCategories.volet,
    description:
      "Les volets domotiques permettent de réguler la température et la luminosité de la maison en bloquant le soleil lorsqu'il est trop chaud et en laissant entrer la lumière lorsqu'il fait plus frais, ce qui peut contribuer à réduire les coûts d'énergie. Ils peuvent être programmés pour s'ouvrir et se fermer à des heures prédéfinies et contrôlés à distance grâce à une application smartphone. Il existe plusieurs types de volets domotiques sur le marché, chacun présentant des avantages et des inconvénients différents.",
    picture: "volet.svg",
  },
  {
    legend: "Serrure connectée",
    category: domotikCategories.securite,
    description:
      "Les serrures connectées reliées à la domotique permettent de contrôler et de gérer l'accès à votre maison de manière plus pratique et sécurisée. Avec une serrure connectée, vous pouvez ouvrir et fermer votre porte à distance, programmer des codes d'accès temporaires pour les invités, et même recevoir des notifications lorsque la porte est ouverte ou fermée. ",
    picture: "serrure.svg",
  },
  {
    legend: "Station meteo",
    category: domotikCategories.automatisation,
    description:
      "Les stations météorologiques reliées à la domotique permettent de collecter et d'enregistrer des données météorologiques en temps réel, comme la température, l'humidité, la pression atmosphérique et les précipitations. Ces informations peuvent être utilisées pour piloter automatiquement différents systèmes de la maison connectée, tels que le chauffage, la ventilation, l'arrosage du jardin et même les stores et les lumières. Par exemple, si la température extérieure est très chaude, le système de climatisation peut être activé automatiquement pour maintenir un niveau de confort optimal à l'intérieur de la maison. Les stations météorologiques reliées à la domotique peuvent également fournir des alertes en cas de conditions météorologiques dangereuses, comme des tempêtes de neige ou de pluie, afin de permettre aux utilisateurs de prendre les mesures de sécurité nécessaires.",
    picture: "meteo.svg",
  },
  {
    legend: "Thermomètre et hygrometre",
    category: domotikCategories.automatisation,
    description:
      "Ces capteurs peuvent être utilisés pour surveiller les conditions environnementales dans la maison et peuvent déclencher des actions automatiques, telles que l'activation d'un système de chauffage ou de climatisation en fonction des besoins. ",
    picture: "thermometre.svg",
  },
];
