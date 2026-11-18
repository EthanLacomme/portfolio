// =====================================================================
//  DONNÉES DES EXPÉRIENCES (section "Mes expériences")
//  C'est le seul fichier à modifier pour ajouter une formation, un stage...
//  Guide complet : voir _GUIDE.md
//
//  Seules les 3 expériences les plus récentes sont affichées ;
//  les plus anciennes apparaissent avec le bouton "Voir les plus anciennes".
// =====================================================================


// ---------------------------------------------------------------------
//  TYPES D'EXPÉRIENCE (petite étiquette de couleur sur chaque carte)
//  Pour un nouveau type, ajoute une ligne ici.
// ---------------------------------------------------------------------
window.TYPES_EXPERIENCES = {
    formation: { fr: "Formation",  en: "Education" },
    stage:     { fr: "Stage",      en: "Internship" },
    emploi:    { fr: "Emploi",     en: "Job" },
    evenement: { fr: "Événement",  en: "Event" }
};


// ---------------------------------------------------------------------
//  EXPÉRIENCES
//  Ajoute les nouvelles expériences À LA FIN de la liste :
//  la dernière de la liste s'affiche en haut de la chronologie.
//
//  Modèle à copier-coller (n'oublie pas la virgule entre deux expériences) :
//
//    {
//        type: "stage",                                    // un type de la liste ci-dessus
//        periode: { fr: "Janv. – mars 2025", en: "Jan – Mar 2025" },  // ou juste "2024 – 2025"
//        titre: { fr: "Mon titre", en: "My title" },       // ou juste "Titre" si identique
//        lieu: "Entreprise / école, Ville",               // optionnel
//        description: {
//            fr: "Ce que j'ai fait.",
//            en: "What I did."
//        },
//        liens: [                                          // optionnel, mêmes types que les projets
//            { type: "page", url: "https://..." }
//        ]
//    }
// ---------------------------------------------------------------------
window.EXPERIENCES = [
    {
        type: "stage",
        periode: "2024",
        titre: {
            fr: "Stage – Développement d'une application de gestion",
            en: "Internship – Management application development"
        },
        description: {
            fr: "Développement d'un système d'images et de statistiques sur une application de gestion et de réservation de véhicules.",
            en: "Developed an image and statistics system for a vehicle management and booking application."
        },
        liens: [
            { type: "doc", url: "documents/projets/Documentation_GVH.pdf" }
        ]
    },
    {
        type: "stage",
        periode: "2025",
        titre: {
            fr: "Stage – Jeu Kinect sur Unity",
            en: "Internship – Kinect game on Unity"
        },
        description: {
            fr: "Création en binôme d'Avoiding Space, un jeu Kinect où l'on pilote un vaisseau en esquivant des obstacles.",
            en: "Created Avoiding Space with a classmate, a Kinect game where you pilot a spaceship and dodge obstacles."
        },
        liens: [
            { type: "itch", url: "https://ouki13.itch.io/avoiding-space" }
        ]
    },
    {
        type: "formation",
        periode: "2025 – 2026",
        titre: {
            fr: "Jeu vidéo – Level design (Bac+3)",
            en: "Video games – Level design (Bachelor's level)"
        },
        lieu: "Gamagora, Université Lumière Lyon 2",
        description: {
            fr: "Formation au level design : layouts, blockouts, game design et production de jeux en équipe.",
            en: "Level design training: layouts, blockouts, game design and team game production."
        },
        liens: [
            { type: "site", url: "https://icom.univ-lyon2.fr/gamagora" }
        ]
    },
    {
        type: "evenement",
        periode: "2026",
        titre: "Gamagora Game Show",
        description: {
            fr: "Présentation de Grandma's Home, un jeu multijoueur de type prop hunt réalisé en équipe en 3 mois. J'y étais level designer et programmeur système.",
            en: "Presented Grandma's Home, a multiplayer prop hunt game made as a team in 3 months. I was level designer and systems programmer."
        },
        liens: [
            { type: "page", url: "redaction_projet/grandmas_home/index.html" }
        ]
    }
];
