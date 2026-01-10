// Exposées via une variable globale pour app.js
window.PROJETS = [
    {
        "id": 1,
        "titre": "Adminer",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoAdminer.jpg",
        "description": "Adminer est une application permettant de gérer des bases de données avec une interface web. J'ai réalisé son installation sur un environnement linux et effectué des test sur des données.",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_adminer.pdf"},
            {"texte": "Manuel utilisateur", "url": "documents/projets/Documentation_adminer_Manuel.pdf"}
        ]
    },
    {
        "id": 2,
        "titre": "Site vitrine",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoCI_site_vitrine.jpg",
        "mediaStyle": "width: 80%;",
        "description": "Une base de site vitrine fait de zéro en htlm, css, php et javascript. Réalisé pour une entreprise de prestation informatique.",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_site_vitrine_CI.pdf"}
        ]
    },
    {
        "id": 3,
        "titre": "OCS Inventory",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoOCS.jpg",
        "description": "OCS Inventory est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement linux, un exemple de remontée de poste et d'installation de plugins",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_OCS_inventory.pdf"},
            {"texte": "Manuel utilisateur", "url": "documents/projets/Documentation_OCS_inventory_Manuel.pdf"}
        ]
    },
    {
        "id": 4,
        "titre": "Snipe IT",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoSnipeIT.jpg",
        "mediaStyle": "width: 80%;",
        "description": "Snipe IT est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement linux et un exemple de remontée de poste",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_snipe_IT.pdf"},
            {"texte": "Manuel utilisateur", "url": "documents/projets/Documentation_snipe_IT_Manuel.pdf"}
        ]
    },
    {
        "id": 5,
        "titre": "Veille sur les IA et l'usurpation d'identité",
        "categories": ["other"],
        "type": "image",
        "media": "img/miniature_veilles/IAetUsurpationDidentité.jpg",
        "description": "Les IA sont de plus en plus présentes dans notre quotidien, malgré les avantages qu'elles apportent, elles sont néanmoins aussi utilisées pour des raison contestables.",
        "liens": [
            {"texte": "En savoir plus", "url": "documents/veilles/IAetUsurpationDidentité/index.html"}
        ]
    },
    {
        "id": 6,
        "titre": "GLPI",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoGLPI.jpg",
        "description": "GLPI est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement linux, un exemple de remontée de poste et de gestion de tickets",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_GLPI.pdf"},
            {"texte": "Manuel utilisateur", "url": "documents/projets/Documentation_GLPI_Manuel.pdf"}
        ]
    },
    {
        "id": 7,
        "titre": "Mamoot",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoMamoot.jpg",
        "description": "Mamoot est un site pour créer et jouer à des quiz, conçu avec le framework Symfony. J'ai pu réaliser la mise en forme de la maquette vers le css, backend administrateur, animation du podium en javascript...",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_mamoot.pdf"}
        ]
    },
    {
        "id": 8,
        "titre": "Gestion des véhicules (GVH)",
        "categories": ["programmation"],
        "type": "image",
        "media": "img/miniature_projets/logoCNFPT_GVH.jpg",
        "description": "GVH est une application permettant de gérer et réserver des véhicules. J'y ai développé un système d'images et de statistiques.",
        "liens": [
            {"texte": "Voir sa documentation", "url": "documents/projets/Documentation_GVH.pdf"}
        ]
    },
    {
        "id": 9,
        "titre": "Jeux de plateforme",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/sjP64E0JVOI?si=OvYiXru62Pv62DT0",
        "description": "Un projet de jeux de plateforme, réalisé sur unreal engine 5, le but est de finir les niveau en évitant les obstacles.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/ParcoursObstacle"}
        ]
    },
    {
        "id": 10,
        "titre": "Jeux de cible",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/dJzHHtEbLH8?si=BBP1qBX7dkkg1irQ",
        "description": "Un projet de jeux de cible, réalisé sur unreal engine 5, le but est de toucher toutes les cibles placé dans le niveau pour terminer le niveau.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/Cibles"}
        ]
    },
    {
        "id": 11,
        "titre": "Jeux de tower defense",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/4IIcq8GGi2E?si=N9s6AnU_JdgucopC",
        "description": "Un projet de jeux Tower Defense, réalisé sur unreal engine 5, le but est de défendre sa base contre des vagues d'ennemis en plaçant des tours à des enplacements stratégiques.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/TowerDefense"}
        ]
    },
    {
        "id": 12,
        "titre": "Escape Game VR",
        "categories": ["jeux", "levelDesign"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/QWWXDLYKvv8?si=WBSWRbes3CtIDiBZ",
        "description": "Un projet d'escape game que j'ai réalisé pour de la réalité virtuel sur Unreal Engine 5, le but est de résoudre les différentes énigmes pour s'échapper de la zone.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/EscapeGameVR/releases/tag/Game"}
        ]
    },
    {
        "id": 13,
        "titre": "RechercheEnNature",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/xb1uXeVCSaw?si=yspRiBUd8IMXw5rW",
        "description": "Un projet que j'ai réalisé sur Unreal Engine 5, le but est de collectez des objets pour passez les différentes zone et récupérer le coffre au trésor.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/RechercheEnNature/releases/tag/v1.0"}
        ]
    },
    {
        "id": 14,
        "titre": "LeProf",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/qsk46R2fxNU?si=7gpR78ZRvdfVbMR1",
        "description": "Un projet que j'ai réalisé sur Unreal Engine, le but est de répondre au questions des tableaux avec une réaction adéquate du professeur en fonction d'une bonne ou mauvaise réponse.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/LeProf/releases/tag/1.0.0"}
        ]
    },
    {
        "id": 15,
        "titre": "Combat d'la mort",
        "categories": ["jeux"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/c5ezRQF-AtQ?si=KNejult0PJ7SGlST",
        "description": "Un projet que j'ai réalisé avec un camarade sur Unreal Engine, le but est d'affronter un boss en 4 phases qui vont être de plus en plus compliqué.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/CombatDlaMort/releases/tag/1.0.0"},
            {"texte": "Voir sur itch", "url": "https://ethanific.itch.io/combat-dla-mort"}
        ]
    },
    {
        "id": 16,
        "titre": "Avoiding Space",
        "categories": ["jeux", "programmation"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/8i7QenSZCpA?si=NSR06fKMRgVWxxAi",
        "description": "Un projet sur kinect réalisé à un stage avec un camarade sur Unity, le but est de contrôler un vaisseau et d'esquiver le plus possible d'obstacle pour survivre le plus longtemps et avoir un bon score de temps.",
        "liens": [
            {"texte": "Voir sur itch", "url": "https://ouki13.itch.io/avoiding-space"}
        ]
    },
    {
        "id": 17,
        "titre": "Vr Lab",
        "categories": ["jeux", "levelDesign"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/95kro0N5KEk?si=S_ZUcBYvfcV4FMJ6",
        "description": "Un projet de réalité virtuel de fin d'année fait sur Unreal Engine, avec 4 salles comportant différentes mécaniques.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/VrLab/releases/tag/1.0.0"}
        ]
    },
    {
        "id": 18,
        "titre": "Layout - The Crew San Antonio",
        "categories": ["levelDesign"],
        "type": "image",
        "media": "img/miniature_projets/LogoSanAntonio.jpg",
        "description": "Un layout de niveau créé par rapport au centre-ville de San Antonio en prenant en compte une taille réduite, 3 points d'intérêt et les mécaniques du jeu The Crew. Dans ce document j'y montre plusieurs version de ce layout en fonction de son avancement.",
        "liens": [
            {"texte": "Voir le document", "url": "documents/jeux/The Crew - San Antonio.pdf"}
        ]
    },
    {
        "id": 19,
        "titre": "Blockout Babble",
        "categories": ["jeux", "levelDesign"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/IaW3MqSHqPM?si=rCUKoMxTcmMnTsCE",
        "description": "J'ai travaillé sur ce blockout de niveau sur un projet unity qui nous a été fournit en prenant en compte les élément de gameplay et de level design pour guider le joueur à travers les environs et de traverser les obstacles.",
    },
    {
        "id": 20,
        "titre": "Layout - Blockout Médiéval",
        "categories": ["jeux", "levelDesign"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/7vMDWR0kaHY?si=HTlTGYNFHGmEvHvZ",
        "description": "Un projet sur Unreal Engine, où il fallait créer un layout et un blockout en fonction de plusieurs consignes. Une page dédiée en dessous présente le projet en détail.",
        "liens": [
            {"texte": "Voir sur github", "url": "https://github.com/Ethanific/Layout-Medieval/releases/tag/Game"},
            {"texte": "En savoir plus", "url": "redaction_projet/layout_medieval/index.html"}
        ]
    },
    {
        "id": 21,
        "titre": "Gamagoramon",
        "categories": ["jeux", "programmation"],
        "type": "video",
        "media": "https://www.youtube-nocookie.com/embed/drUS_-FWE0E?si=HJWS_YwVMJPqrpXs",
        "description": "Un jeux de type Pokémon like simplifié, Le but est remporter le plus de combats possible avec son équipe de monstre généré aléatoirement tout comme celle de chaque équipe adverse. Le jeux a été réalisé sur Unity en C# avec un camarade pour un projet.",
        "liens": [
            {"texte": "Voir sur itch", "url": "https://callhector.itch.io/gamagoramon"},
            {"texte": "En savoir plus", "url": "redaction_projet/gamagoramon/index.html"}
        ]
    },
    // {
    //     "id": 22,
    //     "titre": "RollABall",
    //     "categories": ["jeux", "programmation"],
    //     "type": "video",
    //     "media": "",
    //     "description": "Un jeu de plateforme basé sur le contrôle d'une balle avec des mécaniques de physique sur Unity.",
    //     "liens": [
    //         {"texte": "Voir sur github", "url": "https://github.com"}
    //     ]
    // },
    // {
    //     "id": 23,
    //     "titre": "Projet du GGS",
    //     "categories": ["other"],
    //     "type": "image",
    //     "media": "img/miniature_projets/projet_ggs.jpg",
    //     "description": "Un projet réalisé au GGS",
    //     "liens": [
    //         {"texte": "Voir sur github", "url": "https://github.com"}
    //     ]
    // }
];