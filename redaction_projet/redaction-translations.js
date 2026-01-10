// Traductions pour les rédactions de projets (système identique à translations.js)

window.REDACTION_TRANSLATIONS = {
    // Uniquement les traductions anglaises; le français reste dans le HTML
    en: {
        // General
        nav: {
            retourPortfolio: "Back to Portfolio"
        },
        footer: {
            credit: "Project writeup | Ethan Lacomme"
        },
        
        // LD Medieval
        ldmedieval: {
            titre: "Medieval level design",
            sousTitre: "Layout and blockout in a given environment",
            documentBtn: "View the layout document",
            playBtn: "View on github",
            
            introduction: {
                titre: "Introduction",
                contenu: "This level design project aims to meet the requirements of a navigation exercise in a medieval town. From the two reference shots below, the goal is to guide the player through a merchant street, enter a specific building to retrieve an object, and exit from the back and return to the starting point.",
                reference1: "Reference - Medieval merchant street",
                reference2: "Reference - Medieval building interior"
            },
            
            brief: {
                titre: "Level Brief",
                sousTitre: "The Context",
                contenu: "The level starts as the master writer, speaking with an herbalist on his doorstep, asks the apprentice (the player) to fetch a book about plants so they can continue their research.",
                objectifJoueur: "Player Objective",
                objectifTexte: "The player must head down the merchant street, reach the writer's building at the end, retrieve the target book inside, then exit through the back door into the adjacent street to return to the starting point.",
                objectifSchema: "Simplified player path"
            },
            
            gameplay: {
                titre: "Gameplay & Mechanics",
                phase1Titre: "Phase 1: Navigation",
                phase1: "First, locate the target building. It is readable thanks to landmarks: the hanging sign (inkwell/feather), a statue facing it, and large transparent windows along the market stretch.",
                phase2Titre: "Phase 2: Search",
                phase2: "Inside, the player searches for the target book identified by its distinct logo compared to the other books.",
                phase3Titre: "Phase 3: Return",
                phase3: "Once the book is collected, an exit door opens to the adjacent street, leading back to the starting point to deliver it to the master writer.",
                navigationLandmarks: "Navigation landmarks",
                targetBook: "Target book to pick"
            },
            
            layout: {
                titre: "Layout & Blockout",
                contenu1: "Here is the layout used as the foundation for the blockout: three main zones—merchant street, writer's building interior, and the backyard alley exit.",
                contenu2: "The level is a sequence of streets with obstacles guiding the player toward the building via the market. The writer's house interior and its backyard provide the return path. The blockout was resized to open an extra street, creating a longer detour to the target building.",
                overview: "Level layout overview",
                extension: "Blockout extension",
                merchantStreet: "Blockout merchant street",
                buildingInterior: "Blockout building interior",
                backyard: "Blockout backyard",
                blockoutTitle: "Blockout"
            },
            
            resultats: {
                titre: "Results and Learnings",
                contenu: "This project strengthened several key level-design skills:",
                points: [
                    "Guiding the player with readable visual landmarks",
                    "Designing a detailed layout as a blockout blueprint",
                    "Managing and organizing a complete asset kit from references",
                    "Adapting blockout to gameplay constraints (sightlines, natural boundaries, extended traversal)"
                ],
                conclusion: "The final blockout stays coherent with the initial brief and layout. The player can navigate the environment smoothly toward the objective, and the exercise reinforced my ability to design with both asset constraints and gameplay goals in mind."
            }
        },
        
        // Gamagoramon
        gamagoramon: {
            titre: "Gamagoramon",
            sousTitre: "Project presentation and specific features",

            introduction: {
                titre: "Introduction",
                contenu: "Gamagoramon is a simplified Pokémon-like game. The goal is to win as many battles as possible with your randomly generated monster team, just like each opposing team."
            },

            gameplay: {
                titre: "Core Features",
                contenu: "The game is based on a simple battle loop. In Pokémon, monsters have 6 different stat types",
                contenu2: "Here I reduced that to only 3 main stats",
                contenu2b: "This simplifies battle calculations while maintaining strategic depth, notably with type affinity.",
                contenu3: "Each monster has 3 different attacks: normal attack, elemental attack of its type (except for normal type), and a special attack among these 3 choices.",
                contenu4: "The player must therefore use their monster team which, being randomly generated, will have advantages or not against opposing teams.",
                contenu5: "In the code I created a global Trainer class that manages the player's and enemies' monster teams. These teams are randomly generated by creating objects in the list from the Monster class which contains the different monster information according to its prefab (sprite, type, name...). Stats are defined based on level, for example if HP per level is 4 and the monster is level 5, then it will have 20 HP, same for other stats.",
                contenu6: "Random generation for the enemy team also goes through a function that defines the level based on the number of battles already won by the player and relative to the level of each monster in their list so that the enemy team is generated coherently.",
                contenu7: "The battle system is based on a loop that alternates between the player's turn and the enemy's until all monsters of one team are knocked out. Each action (attack, heal, block, switch) is managed by specific functions that update stats accordingly and check team status after each action. With each enemy monster KO, the player's monster currently on the field gains a level to strengthen its stats.",
                contenu8: "There is also a menu to change monsters, use healing items, or flee the battle and return to the main menu.",
                statList: [
                    "HP",
                    "Attack",
                    "Defense",
                    "Special Attack",
                    "Special Defense",
                    "Speed"
                ],
                reducedStatList: [
                    "HP",
                    "Attack",
                    "Defense"
                ],
                typeList: [
                    "Fire > Grass | Fire < Water",
                    "Water > Fire | Water < Grass",
                    "Grass > Water | Grass < Fire",
                    "Normal = neutral for all 3 types"
                ],
                attackList: [
                    "Heal (restores HP)",
                    "Block (blocks opponent's attack)",
                    "Switch (changes monster without ending turn)"
                ]
            },

            galerie: {
                titre: "Gallery"
            },

            resultats: {
                titre: "Results and Learnings",
                contenu: "The game overall allows for chaining random battles through team generation, which offers replayability despite the gameplay's simplicity. The battle system is functional with simple strategies to implement and usable items to win as many battles as possible.",
                conclusion: "This project allowed me to strengthen my C# and Unity skills, particularly in class management and object-oriented programming. I was also able to deepen my game system design skills, especially in managing monster and trainer data so that all functions work properly when reading and modifying this data. It also allowed me to work well in a group on Git branch management and task distribution."
            },

            playBtn: "View on itch"
        }
    }
};

/**
 * Récupère une traduction anglaise
 * Retourne SEULEMENT si la langue est 'en'
 * Le français reste dans le HTML par défaut
 * @param {string} key - Clé de traduction (ex: "gamagoramon.titre")
 * @returns {string|null} - Texte traduit en anglais ou null si français
 */
function tr(key) {
    const lang = window.currentLanguage || 'fr';
    
    // Si français, retourner null pour garder le HTML français par défaut
    if (lang !== 'en') {
        return null;
    }
    
    const keys = key.split('.');
    let value = REDACTION_TRANSLATIONS['en'];
    
    for (let k of keys) {
        value = value[k];
        if (!value) return null;
    }
    
    return value;
}

/**
 * Sauvegarde les textes français originaux du HTML
 * Appelée au chargement du DOM pour créer une cache
 */
function saveFrenchTexts() {
    window.FRENCH_TEXTS_CACHE = {};
    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const key = el.getAttribute('data-i18n-r');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            window.FRENCH_TEXTS_CACHE[key] = el.placeholder;
        } else {
            window.FRENCH_TEXTS_CACHE[key] = el.textContent;
        }
    });
    // Aussi les listes
    const pointsList = document.getElementById('resultats-list');
    if (pointsList) {
        window.FRENCH_TEXTS_CACHE['resultats-list'] = pointsList.innerHTML;
    }
    const gamaFeatures = document.getElementById('gama-features');
    if (gamaFeatures) {
        window.FRENCH_TEXTS_CACHE['gama-features'] = gamaFeatures.innerHTML;
    }
}

/**
 * Restaure les textes français originaux du HTML
 * Appelée quand on bascule à 'fr'
 */
function restoreFrenchTexts() {
    if (!window.FRENCH_TEXTS_CACHE) return;
    
    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const key = el.getAttribute('data-i18n-r');
        const originalText = window.FRENCH_TEXTS_CACHE[key];
        if (originalText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = originalText;
            } else {
                el.textContent = originalText;
            }
        }
    });
    // Aussi les listes
    const pointsList = document.getElementById('resultats-list');
    if (pointsList && window.FRENCH_TEXTS_CACHE['resultats-list']) {
        pointsList.innerHTML = window.FRENCH_TEXTS_CACHE['resultats-list'];
    }
    const gamaFeatures = document.getElementById('gama-features');
    if (gamaFeatures && window.FRENCH_TEXTS_CACHE['gama-features']) {
        gamaFeatures.innerHTML = window.FRENCH_TEXTS_CACHE['gama-features'];
    }
}

/**
 * Change la langue en mettant à jour le localStorage global
 */
function setLanguage(lang) {
    if (!['fr', 'en'].includes(lang)) {
        console.warn(`Langue ${lang} non disponible`);
        return;
    }
    
    console.log('[REDACTION] Changement de langue:', window.currentLanguage, '->', lang);
    
    // Sauvegarder dans le localStorage (partagé avec toutes les pages)
    localStorage.setItem('portfolio-language', lang);

    // Si on revient au français, recharger la page pour reprendre le HTML par défaut
    if (lang === 'fr') {
        console.log('[REDACTION] Passage au FR - rechargement de la page');
        location.reload();
    } else {
        // En anglais, appliquer les traductions sans recharger
        console.log('[REDACTION] Passage en EN - application des traductions');
        window.currentLanguage = lang;
        document.documentElement.setAttribute('lang', lang);
        updateLanguageButton();
        updateAllRedactionTranslations();
    }
}

/**
 * Toggle entre français et anglais (identique à la page principale)
 */
function toggleLanguage() {
    // console.log('[REDACTION] Toggle langue appelé, langue actuelle:', window.currentLanguage);
    const newLang = window.currentLanguage === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
}

// S'assurer que la fonction est disponible globalement
window.toggleLanguage = toggleLanguage;

/**
 * Mets à jour le bouton de langue
 */
function updateLanguageButton() {
    const langText = document.getElementById('lang-text');
    const langIcon = document.getElementById('lang-icon');
    
    // console.log('[REDACTION] Mise à jour bouton, langue actuelle:', window.currentLanguage, 'texte trouvé:', !!langText, 'icône trouvée:', !!langIcon);
    
    if (langText) {
        // Affiche la langue vers laquelle on peut aller (l'inverse de la langue actuelle)
        langText.textContent = window.currentLanguage === 'fr' ? 'EN' : 'FR';
        // console.log('[REDACTION] Texte bouton mis à jour:', langText.textContent);
    }
    
    if (langIcon) {
        // Affiche le drapeau de la langue vers laquelle on peut aller
        langIcon.textContent = window.currentLanguage === 'fr' ? '🇺🇸' : '🇫🇷';
        // console.log('[REDACTION] Icône bouton mise à jour:', langIcon.textContent);
    }
}

/**
 * Mets à jour tous les éléments [data-i18n-r] dans une rédaction
 * Bascule entre français et anglais dynamiquement
 */
function updateAllRedactionTranslations() {
    const lang = window.currentLanguage || 'fr';
    // On n'applique les traductions que si la langue est EN;
    // En FR, on laisse le HTML par défaut (aucune modification)
    if (lang !== 'en') {
        return;
    }

    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const key = el.getAttribute('data-i18n-r');
        const keys = key.split('.');
        let value = REDACTION_TRANSLATIONS['en'];
        for (let k of keys) {
            value = value[k];
            if (!value) break;
        }
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.textContent = value;
            }
        }
    });

    // Mettre à jour les listes de points (tableaux)
    updateArrayTranslations();
}

/**
 * Mets à jour les traductions qui sont des tableaux
 */
function updateArrayTranslations() {
    const lang = window.currentLanguage || 'fr';
    
    // LD Medieval - Résultats points
    const pointsList = document.getElementById('resultats-list');
    if (pointsList) {
        if (lang === 'en') {
            const points = REDACTION_TRANSLATIONS['en'].ldmedieval.resultats.points;
            if (points && Array.isArray(points)) {
                pointsList.innerHTML = points.map(p => `<li>${p}</li>`).join('');
            }
        }
    }

    // Gamagoramon - Liste des 7 stats
    const statList = document.getElementById('stat-list');
    if (statList) {
        if (lang === 'en') {
            const stats = REDACTION_TRANSLATIONS['en'].gamagoramon.gameplay.statList;
            if (stats && Array.isArray(stats)) {
                statList.innerHTML = stats.map(s => `<li>${s}</li>`).join('');
            }
        }
    }

    // Gamagoramon - Liste des 3 stats réduites
    const reducedStatList = document.getElementById('reduced-stat-list');
    if (reducedStatList) {
        if (lang === 'en') {
            const stats = REDACTION_TRANSLATIONS['en'].gamagoramon.gameplay.reducedStatList;
            if (stats && Array.isArray(stats)) {
                reducedStatList.innerHTML = stats.map(s => `<li>${s}</li>`).join('');
            }
        }
    }

    // Gamagoramon - Liste des types et affinités
    const typeList = document.getElementById('type-list');
    if (typeList) {
        if (lang === 'en') {
            const types = REDACTION_TRANSLATIONS['en'].gamagoramon.gameplay.typeList;
            if (types && Array.isArray(types)) {
                typeList.innerHTML = types.map(t => `<li>${t}</li>`).join('');
            }
        }
    }

    // Gamagoramon - Liste des attaques spéciales
    const attackList = document.getElementById('attack-list');
    if (attackList) {
        if (lang === 'en') {
            const attacks = REDACTION_TRANSLATIONS['en'].gamagoramon.gameplay.attackList;
            if (attacks && Array.isArray(attacks)) {
                attackList.innerHTML = attacks.map(a => `<li>${a}</li>`).join('');
            }
        }
    }
}

/**
 * Initialise la langue en se basant sur le localStorage global du site
 * Le localStorage est partagé entre toutes les pages du même domaine
 */
function initRedactionLanguage() {
    let targetLang = 'fr'; // Défaut
    
    // Priorité 1: Langue de la page qui a ouvert cette rédaction (window.opener)
    if (window.opener && window.opener.currentLanguage) {
        targetLang = window.opener.currentLanguage;
        console.log('[REDACTION] Langue depuis page principale (opener):', targetLang);
    } 
    // Priorité 2: localStorage (si ouvert directement ou rechargé)
    else {
        const storedLang = localStorage.getItem('portfolio-language');
        targetLang = storedLang || 'fr';
        console.log('[REDACTION] Langue depuis localStorage:', targetLang);
    }
    
    console.log('[REDACTION] Initialisation langue finale:', targetLang);

    window.currentLanguage = targetLang;
    document.documentElement.setAttribute('lang', targetLang);
    
    // Synchroniser le localStorage avec la langue détectée
    localStorage.setItem('portfolio-language', targetLang);
}

/**
 * Écoute les changements du localStorage pour synchroniser entre onglets
 * Si la langue change dans un autre onglet, on met à jour automatiquement
 */
function listenToLanguageChanges() {
    window.addEventListener('storage', function(e) {
        if (e.key === 'portfolio-language' && e.newValue) {
            const newLang = e.newValue;
            if (newLang !== window.currentLanguage) {
                window.currentLanguage = newLang;
                document.documentElement.setAttribute('lang', newLang);
                updateLanguageButton();
                updateAllRedactionTranslations();
            }
        }
    });
}

/**
 * Ferme l'onglet/fenêtre actuelle
 */
function closeRedactionPage() {
    window.close();
}

// Initialiser la langue dès le chargement du script
initRedactionLanguage();

/**
 * Initialise la rédaction au chargement du DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    // Synchroniser l'état visuel du bouton langue
    updateLanguageButton();

    // TOUJOURS mettre à jour les traductions (français ou anglais)
    updateAllRedactionTranslations();

    // Écouter les changements du localStorage pour synchronisation automatique
    listenToLanguageChanges();

    // Attacher les écouteurs pour les boutons
    const closeBtn = document.querySelector('.btn-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            closeRedactionPage();
        });
    }

    // Bouton de langue
    const langBtn = document.getElementById('lang-toggle-btn') || 
                    document.querySelector('.lang-btn');
    
    if (langBtn) {
        // Retirer l'attribut onclick s'il existe pour éviter les doubles appels
        langBtn.removeAttribute('onclick');
        
        // Ajouter notre écouteur
        langBtn.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            toggleLanguage();
        });
    }
});
