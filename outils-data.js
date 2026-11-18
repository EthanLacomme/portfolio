// =====================================================================
//  OUTILS (section "Mes outils" + petits tags sur les cartes projets)
//  Guide complet : voir _GUIDE.md
//
//  - id     : nom court à utiliser dans le champ "outils" des projets
//  - titre  : nom affiché
//  - image  : logo (optionnel ; sans image, seul le nom s'affiche)
//  - section: true  = affiché dans la section "Mes outils"
//             false = seulement en tag sur les projets (ex. langages)
//
//  Le nombre de projets de chaque outil est calculé automatiquement.
//  L'ordre ici = l'ordre d'affichage.
// =====================================================================
window.OUTILS = [
    // --- Logiciels et moteurs (affichés dans la section) ---
    { id: "unreal",       titre: "Unreal Engine", image: "img/environnements/unrealEngine.webp", section: true },
    { id: "unity",        titre: "Unity",         image: "img/environnements/Unity.webp",        section: true },
    { id: "blender",      titre: "Blender",       image: "img/environnements/blender.webp",      section: true },
    { id: "miro",         titre: "Miro",                                                         section: true },
    { id: "git",          titre: "Git",                                                          section: true },
    { id: "vscode",       titre: "VS Code",       image: "img/environnements/vscode.webp",       section: true },
    { id: "linux",        titre: "Linux",         image: "img/environnements/linux.jpg",         section: true },

    // --- Langages (seulement en tag sur les projets concernés) ---
    { id: "csharp",     titre: "C#",         image: "img/langages_programmation/Csharp.webp",     section: false },
    { id: "cpp",        titre: "C++",                                                             section: false },
    { id: "html",       titre: "HTML",       image: "img/langages_programmation/html.webp",       section: false },
    { id: "css",        titre: "CSS",        image: "img/langages_programmation/css.webp",        section: false },
    { id: "javascript", titre: "JavaScript", image: "img/langages_programmation/javascript.webp",  section: false },
    { id: "php",        titre: "PHP",        image: "img/langages_programmation/php.webp",        section: false },
    { id: "sql",        titre: "SQL",        image: "img/langages_programmation/sql.webp",        section: false },
    { id: "java",       titre: "Java",       image: "img/langages_programmation/java.webp",       section: false },
    { id: "python",     titre: "Python",     image: "img/langages_programmation/python.webp",     section: false }
];
