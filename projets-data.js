// =====================================================================
//  DONNÉES DES PROJETS
//  C'est le seul fichier à modifier pour ajouter un projet ou une catégorie.
//  Guide complet : voir _GUIDE.md
// =====================================================================


// ---------------------------------------------------------------------
//  CATÉGORIES (les boutons de filtre sont créés automatiquement à partir de cette liste)
//  - id : nom court utilisé dans les projets (sans espace ni accent)
//  - fr / en : nom affiché dans chaque langue
//  - parent (optionnel) : fait de la catégorie un sous-tag de ce domaine.
//    Un projet tagué "blockout" apparaît aussi dans son domaine "levelDesign".
//  L'ordre ici = l'ordre dans le filtre.
// ---------------------------------------------------------------------
window.CATEGORIES = [
    // Domaines (1re rangée de filtres)
    { id: "jeux",          fr: "Jeux",            en: "Games" },
    { id: "levelDesign",   fr: "Level Design",    en: "Level Design" },
    { id: "programmation", fr: "Programmations",  en: "Programming" },
    { id: "other",         fr: "Autres",          en: "Others" },

    // Sous-tags : "parent" = id du domaine. Ils apparaissent dans une 2e rangée
    // quand on clique sur leur domaine.
    { id: "layout",   parent: "levelDesign", fr: "Layout",   en: "Layout" },
    { id: "blockout", parent: "levelDesign", fr: "Blockout", en: "Blockout" },
    { id: "vr",       parent: "levelDesign", fr: "Réalité virtuelle", en: "Virtual reality" }
];


// ---------------------------------------------------------------------
//  TYPES DE LIENS (texte des boutons sous chaque projet, déjà traduit)
//  Pour un nouveau type de bouton, ajoute une ligne ici.
// ---------------------------------------------------------------------
window.TYPES_LIENS = {
    doc:      { fr: "Voir sa documentation", en: "View documentation" },
    manuel:   { fr: "Manuel utilisateur",    en: "User manual" },
    document: { fr: "Voir le document",      en: "View the document" },
    github:   { fr: "Voir sur github",       en: "View on github" },
    itch:     { fr: "Voir sur itch",         en: "View on itch" },
    page:     { fr: "En savoir plus",        en: "Learn more" },
    site:     { fr: "Voir le site",          en: "Visit website" }
};


// ---------------------------------------------------------------------
//  PROJETS
//  Ajoute les nouveaux projets À LA FIN de la liste :
//  le dernier de la liste s'affiche en premier sur le site.
//
//  Modèle à copier-coller (n'oublie pas la virgule entre deux projets) :
//
//    {
//        titre: { fr: "Mon projet", en: "My project" },   // ou juste "Mon projet" si identique
//        categories: ["jeux", "levelDesign", "blockout"],  // ids de la liste CATÉGORIES (domaines et/ou sous-tags)
//        outils: ["unreal", "blender"],                    // ids de outils-data.js (optionnel)
//        video: "https://youtu.be/XXXXXXXXXXX",            // OU  image: "img/miniature_projets/mon_image.jpg",
//        description: {
//            fr: "Description en français.",
//            en: "Description in English."
//        },
//        liens: [                                          // optionnel
//            { type: "itch", url: "https://..." },
//            { type: "page", url: "redaction_projet/mon_projet/index.html" }
//        ]
//    }
// ---------------------------------------------------------------------
window.PROJETS = [
    {
        titre: "Adminer",
        categories: ["programmation"],
        outils: ["linux", "vscode"],
        image: "img/miniature_projets/logoAdminer.webp",
        description: {
            fr: "Adminer est une application permettant de gérer des bases de données avec une interface web. J'ai réalisé son installation sur un environnement Linux et effectué des tests sur des données.",
            en: "Adminer is an application for managing databases with a web interface. I installed it on a Linux environment and performed tests on data."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_adminer.pdf" },
            { type: "manuel", url: "documents/projets/Documentation_adminer_Manuel.pdf" }
        ]
    },
    {
        titre: {
            fr: "Site vitrine",
            en: "Showcase Website"
        },
        categories: ["programmation"],
        outils: ["html", "css", "php", "javascript", "vscode"],
        image: "img/miniature_projets/logoCI_site_vitrine.webp",
        imageStyle: "width: 80%;",
        description: {
            fr: "Une base de site vitrine faite de zéro en HTML, CSS, PHP et JavaScript. Réalisé pour une entreprise de prestation informatique.",
            en: "A showcase website built from scratch in HTML, CSS, PHP and JavaScript. Created for an IT services company."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_site_vitrine_CI.pdf" }
        ]
    },
    {
        titre: "OCS Inventory",
        categories: ["programmation"],
        outils: ["linux", "vscode"],
        image: "img/miniature_projets/logoOCS.webp",
        description: {
            fr: "OCS Inventory est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement Linux, un exemple de remontée de poste et d'installation de plugins.",
            en: "OCS Inventory is an application for managing IT infrastructure. I installed it on a Linux environment, with an example of computer registration and plugin installation."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_OCS_inventory.pdf" },
            { type: "manuel", url: "documents/projets/Documentation_OCS_inventory_Manuel.pdf" }
        ]
    },
    {
        titre: "Snipe IT",
        categories: ["programmation"],
        outils: ["linux", "vscode"],
        image: "img/miniature_projets/logoSnipeIT.webp",
        imageStyle: "width: 80%;",
        description: {
            fr: "Snipe IT est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement Linux et un exemple de remontée de poste.",
            en: "Snipe IT is an application for managing IT infrastructure. I installed it on a Linux environment with an example of computer registration."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_snipe_IT.pdf" },
            { type: "manuel", url: "documents/projets/Documentation_snipe_IT_Manuel.pdf" }
        ]
    },
    {
        titre: {
            fr: "Veille sur les IA et l'usurpation d'identité",
            en: "AI and Identity Theft Research"
        },
        categories: ["other"],
        image: "img/miniature_veilles/IAetUsurpationDidentité.jpg",
        description: {
            fr: "Les IA sont de plus en plus présentes dans notre quotidien. Malgré les avantages qu'elles apportent, elles sont néanmoins aussi utilisées pour des raisons contestables.",
            en: "AI is increasingly present in our daily lives, despite the advantages they bring, they are also used for questionable reasons."
        },
        liens: [
            { type: "page", url: "documents/veilles/IAetUsurpationDidentité/index.html" }
        ]
    },
    {
        titre: "GLPI",
        categories: ["programmation"],
        outils: ["linux", "vscode"],
        image: "img/miniature_projets/logoGLPI.webp",
        description: {
            fr: "GLPI est une application permettant de gérer un parc informatique. J'ai réalisé son installation sur un environnement Linux, un exemple de remontée de poste et de gestion de tickets.",
            en: "GLPI is an application for managing IT infrastructure. I installed it on a Linux environment, with an example of computer registration and ticket management."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_GLPI.pdf" },
            { type: "manuel", url: "documents/projets/Documentation_GLPI_Manuel.pdf" }
        ]
    },
    {
        titre: "Mamoot",
        categories: ["programmation"],
        outils: ["php", "css", "javascript", "vscode"],
        image: "img/miniature_projets/logoMamoot.webp",
        description: {
            fr: "Mamoot est un site pour créer et jouer à des quiz, conçu avec le framework Symfony. J'ai réalisé l'intégration de la maquette en CSS, le back-end administrateur et l'animation du podium en JavaScript...",
            en: "Mamoot is a website for creating and playing quizzes, designed with the Symfony framework. I worked on converting the mockup to CSS, backend administration, podium animation in JavaScript..."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_mamoot.pdf" }
        ]
    },
    {
        titre: {
            fr: "Gestion des véhicules (GVH)",
            en: "Vehicle Management (GVH)"
        },
        categories: ["programmation"],
        outils: ["vscode"],
        image: "img/miniature_projets/logoCNFPT_GVH.webp",
        description: {
            fr: "GVH est une application permettant de gérer et réserver des véhicules. J'y ai développé un système d'images et de statistiques.",
            en: "GVH is an application for managing and booking vehicles. I developed an image and statistics system."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_GVH.pdf" }
        ]
    },
    {
        titre: {
            fr: "Jeu de plateforme",
            en: "Platform Game"
        },
        categories: ["jeux"],
        outils: ["unreal", "blender"],
        video: "https://youtu.be/sjP64E0JVOI",
        description: {
            fr: "Un projet de jeu de plateforme réalisé sur Unreal Engine 5 : le but est de finir les niveaux en évitant les obstacles. J'ai réalisé le personnage jouable simplifié sur Blender.",
            en: "A platform game project, created on Unreal Engine 5, the goal is to complete the levels by avoiding obstacles. I made the simplified playable character in Blender."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/ParcoursObstacle" }
        ]
    },
    {
        titre: {
            fr: "Jeu de cibles",
            en: "Target Game"
        },
        categories: ["jeux"],
        outils: ["unreal", "blender"],
        video: "https://youtu.be/dJzHHtEbLH8",
        description: {
            fr: "Un projet de jeu de cibles réalisé sur Unreal Engine 5 : le but est de toucher toutes les cibles placées dans le niveau pour le terminer. J'ai réalisé le personnage jouable simplifié sur Blender.",
            en: "A target game project, created on Unreal Engine 5, the goal is to hit all the targets placed in the level to complete it. I made the simplified playable character in Blender."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/Cibles" }
        ]
    },
    {
        titre: {
            fr: "Jeu de tower defense",
            en: "Tower Defense Game"
        },
        categories: ["jeux"],
        outils: ["unreal"],
        video: "https://youtu.be/4IIcq8GGi2E",
        description: {
            fr: "Un projet de jeu de tower defense réalisé sur Unreal Engine 5 : le but est de défendre sa base contre des vagues d'ennemis en plaçant des tours à des emplacements stratégiques.",
            en: "A Tower Defense game project, created on Unreal Engine 5, the goal is to defend your base against waves of enemies by placing towers in strategic locations."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/TowerDefense" }
        ]
    },
    {
        titre: {
            fr: "Escape Game VR",
            en: "VR Escape Game"
        },
        categories: ["jeux", "levelDesign", "vr"],
        outils: ["unreal"],
        video: "https://youtu.be/QWWXDLYKvv8",
        description: {
            fr: "Un projet d'escape game que j'ai réalisé en réalité virtuelle sur Unreal Engine 5 : le but est de résoudre les différentes énigmes pour s'échapper de la zone.",
            en: "An escape game project I created for virtual reality on Unreal Engine 5, the goal is to solve various puzzles to escape the area."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/EscapeGameVR/releases/tag/Game" }
        ]
    },
    {
        titre: "RechercheEnNature",
        categories: ["jeux"],
        outils: ["unreal", "blender"],
        video: "https://youtu.be/xb1uXeVCSaw",
        description: {
            fr: "Un projet que j'ai réalisé sur Unreal Engine 5 : le but est de collecter des objets pour passer les différentes zones et récupérer le coffre au trésor. J'ai réalisé le personnage jouable simplifié sur Blender.",
            en: "A project I created on Unreal Engine 5, the goal is to collect objects to pass through different areas and retrieve the treasure chest. I made the simplified playable character in Blender."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/RechercheEnNature/releases/tag/v1.0" }
        ]
    },
    {
        titre: "LeProf",
        categories: ["jeux"],
        outils: ["unreal", "blender"],
        video: "https://youtu.be/qsk46R2fxNU",
        description: {
            fr: "Un projet que j'ai réalisé sur Unreal Engine : le but est de répondre aux questions des tableaux avec une réaction adéquate du professeur en fonction d'une bonne ou mauvaise réponse. J'ai réalisé le personnage jouable simplifié sur Blender.",
            en: "A project I created on Unreal Engine, the goal is to answer the board questions with an appropriate reaction from the teacher based on a correct or incorrect answer. I made the simplified playable character in Blender."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/LeProf/releases/tag/1.0.0" }
        ]
    },
    {
        titre: "Combat d'la mort",
        categories: ["jeux"],
        outils: ["unreal"],
        video: "https://youtu.be/c5ezRQF-AtQ",
        description: {
            fr: "Un projet que j'ai réalisé avec un camarade sur Unreal Engine : le but est d'affronter un boss en 4 phases de plus en plus difficiles.",
            en: "A project I created with a classmate on Unreal Engine, the goal is to face a boss in 4 phases that will become increasingly difficult."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/CombatDlaMort/releases/tag/1.0.0" },
            { type: "itch", url: "https://ethanific.itch.io/combat-dla-mort" }
        ]
    },
    {
        titre: "Avoiding Space",
        categories: ["jeux", "programmation"],
        outils: ["unity", "vscode"],
        video: "https://youtu.be/8i7QenSZCpA",
        description: {
            fr: "Un projet Kinect réalisé en stage avec un camarade sur Unity : le but est de contrôler un vaisseau et d'esquiver le plus d'obstacles possible pour survivre le plus longtemps et obtenir un bon score.",
            en: "A Kinect project created during an internship with a classmate on Unity, the goal is to control a spaceship and dodge as many obstacles as possible to survive as long as possible and achieve a good time score."
        },
        liens: [
            { type: "itch", url: "https://ouki13.itch.io/avoiding-space" }
        ]
    },
    {
        titre: "Vr Lab",
        categories: ["jeux", "levelDesign", "vr"],
        outils: ["unreal"],
        video: "https://youtu.be/95kro0N5KEk",
        description: {
            fr: "Un projet de réalité virtuelle de fin d'année fait sur Unreal Engine, avec 4 salles comportant différentes mécaniques.",
            en: "A year-end virtual reality project made on Unreal Engine, with 4 rooms featuring different mechanics."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/VrLab/releases/tag/1.0.0" }
        ]
    },
    {
        titre: "Layout - The Crew San Antonio",
        categories: ["levelDesign", "layout"],
        image: "img/miniature_projets/LogoSanAntonio.webp",
        description: {
            fr: "Un layout de niveau créé par rapport au centre-ville de San Antonio en prenant en compte une taille réduite, 3 points d'intérêt et les mécaniques du jeu The Crew. Dans ce document, je montre plusieurs versions de ce layout en fonction de son avancement.",
            en: "A level layout created based on downtown San Antonio, taking into account a reduced size, 3 points of interest, and the mechanics of The Crew game. In this document I show several versions of this layout depending on its progress."
        },
        liens: [
            { type: "document", url: "documents/jeux/The Crew - San Antonio.pdf" }
        ]
    },
    {
        titre: "Blockout Babble",
        categories: ["jeux", "levelDesign", "blockout"],
        outils: ["unity"],
        video: "https://youtu.be/IaW3MqSHqPM",
        description: {
            fr: "J'ai travaillé sur ce blockout de niveau sur un projet Unity qui nous a été fourni, en prenant en compte les éléments de gameplay et de level design pour guider le joueur à travers les environs et lui faire franchir les obstacles.",
            en: "I worked on this level blockout on a Unity project that was provided to us, taking into account gameplay and level design elements to guide the player through the surroundings and overcome obstacles."
        }
    },
    {
        titre: {
            fr: "Layout - Blockout Médiéval",
            en: "Layout - Medieval Blockout"
        },
        categories: ["jeux", "levelDesign", "layout", "blockout"],
        outils: ["unreal"],
        video: "https://youtu.be/7vMDWR0kaHY",
        description: {
            fr: "Un projet sur Unreal Engine, où il fallait créer un layout et un blockout en fonction de plusieurs consignes. Une page dédiée en dessous présente le projet en détail.",
            en: "A project on Unreal Engine, where I had to create a layout and blockout based on several guidelines. A dedicated page below presents the project in detail."
        },
        liens: [
            { type: "github", url: "https://github.com/Ethanific/Layout-Medieval/releases/tag/Game" },
            { type: "page", url: "redaction_projet/layout_medieval/index.html" }
        ]
    },
    {
        titre: "Gamagoramon",
        categories: ["jeux", "programmation"],
        outils: ["unity", "csharp", "git", "vscode"],
        video: "https://youtu.be/drUS_-FWE0E",
        description: {
            fr: "Un jeu de type Pokémon-like simplifié : le but est de remporter le plus de combats possible avec son équipe de monstres générée aléatoirement, tout comme celle de chaque équipe adverse. Le jeu a été réalisé sur Unity en C# avec un camarade pour un projet.",
            en: "A simplified Pokémon-like game. The goal is to win as many battles as possible with your randomly generated monster team, just like each opposing team. The game was made on Unity in C# with a classmate for a project."
        },
        liens: [
            { type: "itch", url: "https://callhector.itch.io/gamagoramon" },
            { type: "page", url: "redaction_projet/gamagoramon/index.html" }
        ]
    },
    {
        titre: {
            fr: "Système modulaire santé/bouclier avec régénération",
            en: "Modular health/shield system with regeneration"
        },
        categories: ["jeux", "programmation"],
        outils: ["unreal", "cpp", "vscode"],
        video: "https://youtu.be/CCcmdW5Wd94",
        description: {
            fr: "Une démonstration sur Unreal Engine, qui montre la fonctionnalité de mon composant de santé/bouclier écrit en C++, attaché au joueur et synchronisé à l'UI en temps réel. J'ai également rendu le système modulaire avec des valeurs modifiables accessibles via l'éditeur, et créé un système de debug avec des triggers pour simuler divers évènements de changement de valeurs.",
            en: "A demonstration in Unreal Engine, showing the functionality of my health/shield component written in C++, attached to the player and synchronized with the UI in real time. I also made the system modular with editable values accessible through the editor and created a debug system with triggers to simulate many value change events."
        }
    },
    {
        titre: "Grandma's Home",
        categories: ["jeux", "levelDesign", "programmation", "layout", "blockout"],
        outils: ["unity", "csharp", "git", "miro", "vscode"],
        video: "https://youtu.be/ezJ4JYgM4fk",
        description: {
            fr: "Grandma's Home est un jeu multijoueur de type prop hunt dans une ambiance cartoon où les fantômes s'affrontent avec les enfants dans la maison de leur grand-mère. Il a été réalisé dans le cadre du Gamagora Game Show sur une durée de 3 mois.",
            en: "Grandma's Home is a multiplayer prop hunt game in a cartoon atmosphere where ghosts face off against children in their grandmother's house. It was created as part of the Gamagora Game Show over a period of 3 months."
        },
        liens: [
            { type: "itch", url: "https://gamagora.itch.io/grandmas-home" },
            { type: "page", url: "redaction_projet/grandmas_home/index.html" }
        ]
    }
];
