// Traductions pour les rédactions de projets (système identique à translations.js)

window.REDACTION_TRANSLATIONS = {
    // Uniquement les traductions anglaises; le français reste dans le HTML
    en: {
        // General
        nav: {
            retourPortfolio: "← Back to Portfolio",
            fermerPage: "Close Page"
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
        },

        // Grandma's Home
        grandmasHome: {
            titre: "Grandma's Home",
            sousTitre: "Project presentation and features worked on",

            introduction: {
                titre: "Introduction",
                contenu1: "GRANDMA'S HOME is a cartoon-style multiplayer prop hunt game in which ghosts face off against children inside their grandmother's house. It was created for the Gamagora Game Show over a 3-month period.",
                contenu2: "The children's goal is to neutralize the ghosts with a melee weapon and slow them down with a gun before they sabotage too many objects in the house, but they must also be careful not to damage the furniture while trying to neutralize the ghosts, otherwise their maximum damage budget drops to 0 and they lose the match.",
                contenu3: "As for the ghosts, they can win by surviving until the end of the match if they sabotage enough objects in the house. They can use several abilities such as dash to run briefly, stunt to immobilize children if they are in direct contact, and the ability to transform into certain objects found in the house to hide."
            },

            role: {
                titre: "My role on the project",
                contenu1: "I worked as a level designer and system programmer on the project.",
                contenu2: "I first took part in writing the game concept and game design document to establish the foundations of the project. I also helped manage Git on the level-design side, creating branches for each person and merging the resources produced by the level designers into a shared branch for our group. I found it interesting to show the diagram I created to represent the course of the match with all its branches and outcomes.",
                contenu3: "I also tried to make a layout for the house based on the idea that the rooms would be placed randomly in cells to make each match unique. This was an early-project idea, but it was eventually abandoned because the house would not looking good in the end.",
                contenu4: "In order to find a good design for the house, our team used Miro to gather lots of images from various sources and get an idea of how to build the foundation of the house, which rooms to use, and how to furnish them.",
                contenu5: "At first, the house and garden were meant to be playable, but the play space would have been too large and the exterior modeling of the house would have required too much work from the artists/3D team for the time we had, so we focused directly on the interior while still leaving a simplified visual exterior that I was able to integrate at the end.",
                contenu6: "During the first version of the house in Unity, I was able to start placing the furniture through the blockout with placeholders. This allowed me to validate the sizes and ensure smooth player movement.",
                contenu7: "I also contributed on the ground floor to creating room prefabs with complete furnishing according to a provided script, which is used to make the appearance of small and medium props/objects random with percentages, so that each match has a bit of variation.",
                contenu8: "A preview of an early version of the rooms compared with the first batch of available assets.",
                contenu9: "I set up a modular day-night system with lighting and VFX management in C#. This system has 3 phases:",
                contenu10: "Each phase runs between X and Y percent of the play time. For example, sunset runs from 0% to 40% of the total play time, the lights gradually dim, and the sun angle slowly lowers toward the horizon.",
                contenu11: "The transition phase, between 40% and 50%, is very important because this is when the atmosphere color shift and the activation of the lights and their VFX are handled.",
                contenu12: "Finally, the moonrise phase, from 50% to 100%, brings back some cooler light to simulate moonlight. Note that the skybox background continuously rotates (for the clouds) and has a blend containing 3 colors that transition to fit each phase (twilight, night, purple night). Fog was also added and managed together with the rest to add depth to the house.",
                contenu13: "Several easter eggs related to the other team's games or to other student projects were included in the final version of the game. I even had the chance to see my project Gamagoramon appear in-game in an arcade machine !",
                list1: [
                    "Sunset phase",
                    "Transition phase",
                    "Moonrise phase"
                ]
            },

            galerie: {
                diagramme: "Match flow diagram (in french)",
                layout: "Temporary layout (also in french)",
                miro: "Mood board for the house design",
                "systeme_jour-nuit": "Day-night system",
                salles: "All ground-floor rooms completed"
            },

            resultats: {
                titre: "Results and Learnings",
                contenu: "Overall, the game comes close to what we initially planned, without fully reaching it. On a short project like this, it was decided to make production trade-offs and ignore what was not essential, while still reaching the level of game quality originally intended as well as possible. The final game presented at the Gamagora Game Show managed to make a strong impression thanks to our time and resource management.",
                conclusion: "This project helped me improve my team task organization, for example through Git management and task distribution, and also strengthened my level-design skills and the whole production process that goes with it. I was also able to further deepen my technical skills in Unity, through the importance of properly managing a large number of assets when their attributes had to be changed, which could create issues on already existing placements, for example. And in C# through the management of lights, VFX, and small components in a dynamic and modular way. I really enjoyed seeing this project take shape over the iterations of the house and room furnishing, and bringing it to life with my day-night system."
            },

            playBtn: "View on itch"
        }

    }
};

/**
 * Récupère une traduction anglaise
 * Retourne SEULEMENT si la langue est 'en'
 * Le français reste dans le HTML par défaut
 * @param {string} key - Clé de4 traduction (ex: "gamagoramon.titre")
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
function getTranslationValue(key) {
    const keys = key.split('.');
    let value = REDACTION_TRANSLATIONS['en'];

    for (const k of keys) {
        value = value[k];
        if (value === undefined || value === null) {
            return null;
        }
    }

    return value;
}

// Rend le texte ou la liste traduite dans l'élément HTML
function renderTranslation(el, value) {
    if (Array.isArray(value)) {
        if (el.tagName === 'UL' || el.tagName === 'OL') {
            el.innerHTML = value.map(item => `<li>${item}</li>`).join('');
        }
        return;
    }

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
    } else {
        el.textContent = value;
    }
}

function updateAllRedactionTranslations() {
    const lang = window.currentLanguage || 'fr';
    // On n'applique les traductions que si la langue est EN;
    // En FR, on laisse le HTML par défaut (aucune modification)
    if (lang !== 'en') {
        return;
    }

    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const key = el.getAttribute('data-i18n-r');
        const value = getTranslationValue(key);
        if (value !== null) {
            renderTranslation(el, value);
        }
    });
}

/**
 * Compatibilité avec l'ancien nom de fonction.
 * La logique est maintenant entièrement gérée par updateAllRedactionTranslations().
 */
function updateArrayTranslations() {
    updateAllRedactionTranslations();
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
