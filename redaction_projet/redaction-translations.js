// Traductions pour les rédactions de projets (système identique à translations.js)

window.REDACTION_TRANSLATIONS = {
    // Uniquement les traductions anglaises; le français reste dans le HTML
    en: {
        // General
        nav: {
            retourPortfolio: "← Back to Portfolio"
        },
        
        // LD Medieval
        ldmedieval: {
            titre: "Medieval level design",
            sousTitre: "Layout and blockout in a given environment",
            documentBtn: "View the layout document",
            playBtn: "View on github",
            
            introduction: {
                titre: "Introduction",
                contenu: "This level design project aims to meet the requirements of a navigation exercise in a medieval town. From the two reference shots below, the goal is to guide the player through a merchant street, enter a specific building to retrieve an object, and exit from the back and return to the starting point."
            },
            
            brief: {
                titre: "Level Brief",
                sousTitre: "The Context",
                contenu: "The level starts as the master writer, speaking with an herbalist on his doorstep, asks the apprentice (the player) to fetch a book about plants so they can continue their research.",
                objectifJoueur: "Player Objective",
                objectifTexte: "The player must head down the merchant street, reach the writer's building at the end, retrieve the target book inside, then exit through the back door into the adjacent street to return to the starting point."
            },
            
            gameplay: {
                titre: "Gameplay & Mechanics",
                phase1Titre: "Phase 1: Navigation",
                phase1: "First, locate the target building. It is readable thanks to landmarks: the hanging sign (inkwell/feather), a statue facing it, and large transparent windows along the market stretch.",
                phase2Titre: "Phase 2: Search",
                phase2: "Inside, the player searches for the target book identified by its distinct logo compared to the other books.",
                phase3Titre: "Phase 3: Return",
                phase3: "Once the book is collected, an exit door opens to the adjacent street, leading back to the starting point to deliver it to the master writer."
            },
            
            layout: {
                titre: "Layout & Blockout",
                contenu1: "Here is the layout used as the foundation for the blockout: three main zones—merchant street, writer's building interior, and the backyard alley exit.",
                contenu2: "The level is a sequence of streets with obstacles guiding the player toward the building via the market. The writer's house interior and its backyard provide the return path. The blockout was resized to open an extra street, creating a longer detour to the target building."
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
        
        // Veille : les IA et l'usurpation d'identité
        veilleIA: {
            titre: "AI and Identity Theft",
            dates: "Technology watch · created 04/13/2024, updated 04/24/2024",
            intro: {
                titre: "Introduction",
                p1: "Artificial intelligence (AI) is revolutionizing many fields, but its growing use raises concerns about the ways it can be misused.",
                p2: "This technology watch explores the problems AI raises by calling into question the authenticity of content, and the efforts needed to detect it."
            },
            usurpation: {
                titre: "Identity theft in the age of AI",
                p1: "AI-based identity theft uses machine learning on a person, from every possible personal trait, from appearance to voice, in order to reproduce them as realistically as possible.",
                p2: "In the hands of malicious people, the results of this practice can be used to create fake social media profiles, generate counterfeit videos or audio, or harm the reputation of the victim.",
                p3: "An alarming example of AI-generated content is deepfakes: videos created from a person's data and generated realistically. They are very often used to spread false information, for parody and/or political purposes, using the appearance of a well-known person to reach a wide audience."
            },
            menaces: {
                titre: "Threats and malicious uses",
                p1: "This practice can have consequences for many people, such as:",
                liste: [
                    "Disinformation and manipulation",
                    "Damage to the victim's reputation",
                    "Theft of the victim's identity",
                    "Scams targeting deceived people"
                ],
                p2: "Tools such as DeepFaceLab, Deepswap or DeepFakes Web can be used to create deepfakes. There are also image generators such as DALL-E, which create images from text."
            },
            lutte: {
                titre: "How to detect and fight deepfakes?",
                p1: "Faced with these risks, several solutions help detect this type of content and protect against it.",
                detection: {
                    titre: "Detecting deepfakes",
                    p: "For now, despite their realism, deepfakes can still be spotted with the naked eye thanks to details or finishes that are not yet perfected: an extra finger on a hand, an unrealistic shape…"
                },
                medias: {
                    titre: "Checking media",
                    p: "News shared by media outlets should be checked against other sources before being trusted."
                },
                education: {
                    titre: "Education and awareness",
                    p: "It is also important to raise awareness of the risks of deepfakes and to teach people how to detect them."
                },
                reglementation: {
                    titre: "Regulation and cooperation",
                    p: "In the European Union, AI regulation is still being developed and constantly evolving, especially since OpenAI's rise at the end of 2022 and the popularity, for better and for worse, it brought to AI. Laws are in force that allow, for example, filing a complaint against deepfakes using one's image."
                }
            },
            conclusion: {
                titre: "Conclusion",
                p: "AI offers immense potential for the future, but its ever-wider use must come with greater vigilance against the risk of misuse. Awareness and regulation are ways to fight future abuses."
            },
            sources: {
                titre: "Sources and references",
                s1: "Deepfakes on Wikipedia (French)",
                s2: "Examples of tools to create deepfakes (French)",
                s3: "DeepFaceLab GitHub (obsolete)",
                s4: "Example of AI regulation by the European Union (French)",
                s5: "Video by YouTuber Cyprien on the problems of AI (French)",
                s6: "OpenAI website"
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

// ---------------------------------------------------------------------
//  PAGES DÉTAILLÉES, dans l'ordre de navigation "précédent / suivant".
//  Chemins depuis la racine du site. Pour une nouvelle page : ajouter une ligne.
// ---------------------------------------------------------------------
const PAGES_DETAILLEES = [
    { chemin: "redaction_projet/grandmas_home/index.html",              fr: "Grandma's Home",                    en: "Grandma's Home" },
    { chemin: "redaction_projet/gamagoramon/index.html",                fr: "Gamagoramon",                       en: "Gamagoramon" },
    { chemin: "redaction_projet/layout_medieval/index.html",            fr: "Level design médiéval",             en: "Medieval level design" },
    { chemin: "documents/veilles/IAetUsurpationDidentité/index.html",   fr: "Les IA et l'usurpation d'identité", en: "AI and Identity Theft" }
];

// Racine du site, déduite de l'adresse de ce script (…/redaction_projet/redaction-translations.js)
const RACINE_SITE = document.currentScript.src.replace(/redaction_projet\/redaction-translations\.js.*$/, '');

// Langue partagée avec le portfolio via le localStorage
window.currentLanguage = localStorage.getItem('portfolio-language') || 'fr';
document.documentElement.lang = window.currentLanguage;

// Valeur anglaise d'une clé du type "gamagoramon.titre" (null si absente)
function getTranslationValue(key) {
    return key.split('.').reduce((value, k) => value?.[k], REDACTION_TRANSLATIONS.en) ?? null;
}

// Applique les traductions anglaises (en français, le HTML d'origine est conservé)
function updateAllRedactionTranslations() {
    if (window.currentLanguage !== 'en') return;
    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const value = getTranslationValue(el.getAttribute('data-i18n-r'));
        if (value === null) return;
        if (Array.isArray(value)) {
            el.innerHTML = value.map(item => `<li>${item}</li>`).join('');
        } else {
            el.textContent = value;
        }
    });
}

// Le bouton affiche la langue vers laquelle on peut basculer.
// Son étiquette (lue par les lecteurs d'écran et affichée au survol) dit ce qu'il fait.
function updateLanguageButton() {
    const isFr = window.currentLanguage === 'fr';
    const bouton = document.getElementById('lang-toggle-btn');
    document.getElementById('lang-text').textContent = isFr ? 'EN' : 'FR';
    document.getElementById('lang-icon').textContent = isFr ? '🇺🇸' : '🇫🇷';
    document.getElementById('lang-icon').setAttribute('aria-hidden', 'true');
    bouton.setAttribute('aria-label', isFr ? 'Passer le site en anglais' : 'Switch the site to French');
    bouton.title = isFr ? 'Passer le site en anglais' : 'Switch the site to French';
}

// Ajoute "← Projet précédent / Projet suivant →" en bas de la page
function renderProjectNav() {
    const ici = decodeURIComponent(location.pathname);
    const index = PAGES_DETAILLEES.findIndex(page => ici.endsWith(page.chemin));
    if (index === -1) return;

    const en = window.currentLanguage === 'en';
    const lien = (page, sens) => {
        if (!page) return '<span></span>';
        const libelle = sens === 'prec' ? (en ? '← Previous' : '← Précédent') : (en ? 'Next →' : 'Suivant →');
        return `<a class="projet-nav__lien projet-nav__lien--${sens}" href="${RACINE_SITE}${encodeURI(page.chemin)}">
                    <span class="projet-nav__sens">${libelle}</span>
                    <span class="projet-nav__titre">${en ? page.en : page.fr}</span>
                </a>`;
    };

    let nav = document.getElementById('projet-nav');
    if (!nav) {
        nav = document.createElement('nav');
        nav.id = 'projet-nav';
        nav.className = 'projet-nav';
        document.querySelector('.redaction-content').appendChild(nav);
    }
    nav.setAttribute('aria-label', en ? 'Other projects' : 'Autres projets');
    nav.innerHTML = lien(PAGES_DETAILLEES[index - 1], 'prec') + lien(PAGES_DETAILLEES[index + 1], 'suiv');
}

function applyLanguage(lang) {
    // Retour au français : on recharge pour retrouver le HTML d'origine
    if (lang === 'fr') {
        location.reload();
        return;
    }
    window.currentLanguage = lang;
    document.documentElement.lang = lang;
    updateLanguageButton();
    updateAllRedactionTranslations();
    renderProjectNav();
}

function toggleLanguage() {
    const lang = window.currentLanguage === 'fr' ? 'en' : 'fr';
    localStorage.setItem('portfolio-language', lang);
    applyLanguage(lang);
}

// Synchronise la langue si elle change dans un autre onglet
window.addEventListener('storage', e => {
    if (e.key === 'portfolio-language' && e.newValue && e.newValue !== window.currentLanguage) {
        applyLanguage(e.newValue);
    }
});

// ---------------------------------------------------------------------
//  Vidéos légères : chaque lecteur YouTube de la page est remplacé par sa
//  miniature ; le vrai lecteur (lourd) ne se charge qu'au clic.
// ---------------------------------------------------------------------
function makeVideosLight() {
    const label = window.currentLanguage === 'en' ? 'Play video' : 'Lire la vidéo';
    document.querySelectorAll('iframe[src*="youtube"]').forEach(iframe => {
        const id = iframe.src.match(/embed\/([\w-]{11})/)?.[1];
        if (!id) return;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'video-lite';
        button.setAttribute('aria-label', label);
        button.innerHTML = `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
                            <span class="video-lite__play" aria-hidden="true"></span>`;
        button.addEventListener('click', () => {
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
            button.replaceWith(iframe);
        });
        iframe.replaceWith(button);
    });
}

// ---------------------------------------------------------------------
//  Bouton "retour en haut" (apparaît après un écran de défilement)
// ---------------------------------------------------------------------
function addBackToTop() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'retour-haut';
    button.hidden = true;
    button.setAttribute('aria-label', window.currentLanguage === 'en' ? 'Back to top' : 'Retour en haut');
    button.innerHTML = '<span aria-hidden="true">↑</span>';
    button.addEventListener('click', () => window.scrollTo({ top: 0 }));
    document.body.appendChild(button);

    // Barre de lecture : fin trait jaune sous la barre de navigation
    const barre = document.createElement('div');
    barre.className = 'progression';
    barre.setAttribute('aria-hidden', 'true');
    document.querySelector('.redaction-nav')?.appendChild(barre);

    const majDefilement = () => {
        button.hidden = window.scrollY < window.innerHeight;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        barre.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    window.addEventListener('scroll', majDefilement, { passive: true });
    majDefilement();
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguageButton();
    updateAllRedactionTranslations();
    makeVideosLight();
    addBackToTop();
    renderProjectNav();
});
