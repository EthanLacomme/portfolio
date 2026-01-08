// Traductions pour les rédactions de projets

window.REDACTION_TRANSLATIONS = {
    fr: {
        // Général
        nav: {
            retourPortfolio: "Retour au portfolio"
        },
        footer: {
            credit: "Rédaction de projet | Ethan Lacomme"
        },
        
        // The Crew San Antonio
        the_crew: {
            titre: "Layout - The Crew San Antonio",
            sousTitre: "Créer un niveau compelling et narratif",
            
            introduction: {
                titre: "Introduction",
                contenu: "The Crew San Antonio est un projet de layout réalisé dans le cadre de ma formation. Le défi principal était de créer un environnement urbain immersif et narratif qui guide le joueur à travers différents quartiers de San Antonio."
            },
            
            objectifs: {
                titre: "Objectifs du Layout",
                contenu: "Les objectifs principaux pour ce projet étaient:",
                points: [
                    "Créer une expérience narrative cohérente",
                    "Guider les mouvements du joueur de manière organique",
                    "Mettre en avant la verticalité et l'exploration",
                    "Utiliser l'architecture comme outil narratif",
                    "Assurer une lisibilité visuelle optimale"
                ]
            },
            
            processus: {
                titre: "Processus de Création",
                phases: [
                    {
                        titre: "Analyse et Recherche",
                        contenu: "Phase initiale d'étude de la ville réelle, ses architectures caractéristiques et ses espaces publics."
                    },
                    {
                        titre: "Blockout",
                        contenu: "Création d'une première version en formes géométriques simples pour tester les flux de circulation et les vues."
                    },
                    {
                        titre: "Décoration et Polish",
                        contenu: "Ajout des détails architecturaux, des éléments décor et de l'ambiance visuelle."
                    }
                ]
            },
            
            resultats: {
                titre: "Résultats et Apprentissages",
                contenu: "Ce projet m'a permis d'acquérir une compréhension profonde de la composition spatiale et du level design narratif. J'ai appris à utiliser l'architecture et l'agencement spatial pour créer une progression naturelle et engageante."
            }
        },
        
        // Gamagoramon
        gamagoramon: {
            titre: "Gamagoramon - Projet de Jeu Créatif",
            sousTitre: "Un mélange unique de gameplay et de design visuel",
            
            introduction: {
                titre: "Introduction",
                contenu: "Gamagoramon est un projet de jeu créatif qui explore l'intersection entre des mécaniques de gameplay innovantes et un design visuel distinctif. Ce projet met en avant l'expérimentation avec les principes du game design et la vision artistique."
            },
            
            concept: {
                titre: "Concept du Jeu",
                contenu: "Le projet combine des éléments de gameplay stratégique avec une esthétique visuellement unique, créant une expérience engageante qui se distingue par sa direction artistique distinctive et ses mécaniques créatives."
            },
            
            objectifs: {
                titre: "Objectifs du Projet",
                contenu: "Les objectifs principaux étaient :",
                points: [
                    "Explorer une vision artistique unique et originale",
                    "Développer des mécaniques de gameplay engageantes",
                    "Créer une cohésion visuelle distinctive",
                    "Équilibrer créativité et implémentation technique",
                    "Démontrer une direction artistique claire"
                ]
            },
            
            resultats: {
                titre: "Résultats et Expérience",
                contenu: "Ce projet a approfondi ma compréhension des principes du game design, de la cohésion visuelle et de la façon d'équilibrer la vision créative avec l'implémentation technique. Il a démontré l'importance du design itératif et du maintien d'une direction artistique claire tout au long du développement."
            },
            
            github: {
                titre: "Voir sur GitHub"
            }
        }
    },
    
    en: {
        // Général
        nav: {
            retourPortfolio: "Back to portfolio"
        },
        footer: {
            credit: "Project Report | Ethan Lacomme"
        },
        
        // The Crew San Antonio
        the_crew: {
            titre: "Layout - The Crew San Antonio",
            sousTitre: "Creating a compelling and narrative level",
            
            introduction: {
                titre: "Introduction",
                contenu: "The Crew San Antonio is a layout project completed as part of my training. The main challenge was to create an immersive and narrative urban environment that guides the player through different neighborhoods of San Antonio."
            },
            
            objectifs: {
                titre: "Layout Objectives",
                contenu: "The main objectives for this project were:",
                points: [
                    "Create a coherent narrative experience",
                    "Guide player movement organically",
                    "Showcase verticality and exploration",
                    "Use architecture as a narrative tool",
                    "Ensure optimal visual readability"
                ]
            },
            
            processus: {
                titre: "Creation Process",
                phases: [
                    {
                        titre: "Analysis and Research",
                        contenu: "Initial study phase of the real city, its characteristic architectures and public spaces."
                    },
                    {
                        titre: "Blockout",
                        contenu: "Creation of a first version with simple geometric shapes to test circulation flows and views."
                    },
                    {
                        titre: "Decoration and Polish",
                        contenu: "Adding architectural details, decorative elements and visual atmosphere."
                    }
                ]
            },
            
            resultats: {
                titre: "Results and Learnings",
                contenu: "This project allowed me to gain a deep understanding of spatial composition and narrative level design. I learned to use architecture and spatial layout to create natural and engaging progression."
            }
        },
        
        // Gamagoramon
        gamagoramon: {
            titre: "Gamagoramon - Creative Game Project",
            sousTitre: "A unique blend of gameplay and visual design",
            
            introduction: {
                titre: "Introduction",
                contenu: "Gamagoramon is a creative game project that explores the intersection of innovative gameplay mechanics and distinctive visual design. This project showcases experimentation with game design principles and artistic vision."
            },
            
            concept: {
                titre: "Game Concept",
                contenu: "The project combines strategic gameplay elements with a visually unique aesthetic, creating an engaging experience that stands out through its distinctive art direction and creative mechanics."
            },
            
            objectifs: {
                titre: "Project Objectives",
                contenu: "The main objectives were:",
                points: [
                    "Explore a unique and original artistic vision",
                    "Develop engaging gameplay mechanics",
                    "Create distinctive visual cohesion",
                    "Balance creativity with technical implementation",
                    "Demonstrate clear artistic direction"
                ]
            },
            
            resultats: {
                titre: "Results and Experience",
                contenu: "This project deepened my understanding of game design principles, visual cohesion, and how to balance creative vision with technical implementation. It demonstrated the importance of iterative design and maintaining a clear artistic direction throughout development."
            },
            
            github: {
                titre: "View on GitHub"
            }
        }
    }
};

/**
 * Récupère une traduction pour les rédactions
 * @param {string} key - Clé de traduction (ex: "the_crew.titre")
 * @returns {string} - Texte traduit
 */
function tr(key) {
    const keys = key.split('.');
    const lang = window.currentLanguage || 'en';
    let value = REDACTION_TRANSLATIONS[lang];
    
    for (let k of keys) {
        value = value[k];
        if (!value) return key;
    }
    
    return value;
}

/**
 * Mets à jour le bouton de langue (appelé depuis translations.js)
 */
function updateLanguageButton() {
    const langText = document.getElementById('lang-text');
    const langIcon = document.getElementById('lang-icon');
    
    if (langText) {
        // Affiche la langue vers laquelle on peut aller (l'inverse de la langue actuelle)
        langText.textContent = window.currentLanguage === 'fr' ? 'EN' : 'FR';
    }
    
    if (langIcon) {
        // Affiche le drapeau de la langue vers laquelle on peut aller
        langIcon.textContent = window.currentLanguage === 'fr' ? '🇺🇸' : '🇫🇷';
    }
}

/**
 * Mets à jour tous les éléments [data-i18n-r] dans une rédaction
 */
function updateRedactionTranslations() {
    document.querySelectorAll('[data-i18n-r]').forEach(el => {
        const key = el.getAttribute('data-i18n-r');
        const translated = tr(key);
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translated;
        } else {
            el.textContent = translated;
        }
    });
}

/**
 * Aligne la langue de la rédaction avec celle du portfolio principal
 */
function initRedactionLanguage() {
    // Priorité 1: Paramètre d'URL (lang=fr)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Priorité 2: window.opener.currentLanguage
    let openerLang = null;
    try {
        openerLang = window.opener && !window.opener.closed ? window.opener.currentLanguage : null;
    } catch (_) {
        openerLang = null;
    }

    // Priorité 3: window.opener.localStorage
    let openerStoredLang = null;
    try {
        openerStoredLang = window.opener && !window.opener.closed
            ? window.opener.localStorage.getItem('portfolio-language')
            : null;
    } catch (_) {
        openerStoredLang = null;
    }

    // Priorité 4: localStorage local
    const storedLang = localStorage.getItem('portfolio-language');
    
    // Déterminer la langue finale
    const targetLang = urlLang || openerLang || openerStoredLang || storedLang || 'en';

    console.log('Debug lang sync:', { urlLang, openerLang, openerStoredLang, storedLang, targetLang });

    // Mettre à jour le localStorage local avec la bonne langue
    if (targetLang && storedLang !== targetLang) {
        localStorage.setItem('portfolio-language', targetLang);
    }

    // Forcer la langue dans window.currentLanguage
    window.currentLanguage = targetLang;

    document.documentElement.setAttribute('lang', targetLang);
}

/**
 * Ferme la rédaction pour remettre le focus sur l'onglet d'origine
 */
function closeRedactionPage() {
    const mainUrl = '../../index.html';

    // Toujours tenter de fermer la fenêtre pour remettre le focus sur l'onglet parent
    window.close();

    if (window.opener && !window.opener.closed) return;

    if (window.history.length > 1) {
        window.history.back();
        return;
    }

    window.location.replace(mainUrl);
}

// Synchroniser la langue dès le chargement du script (avant DOMContentLoaded)
// Cet appel assure que window.currentLanguage est défini avant que les traductions ne s'appliquent
initRedactionLanguage();

/**
 * Initialise la rédaction au chargement
 */
document.addEventListener('DOMContentLoaded', function() {
    // Réappeler pour s'assurer que la langue est définie correctement 
    // au cas où translations.js l'aurait écrasée
    initRedactionLanguage();
    
    // Mettre à jour les traductions après avoir défini la langue
    updateRedactionTranslations();

    // Mettre à jour la liste des objectifs dynamiquement
    const objectifsList = document.getElementById('objectifs-list');
    if (objectifsList) {
        const lang = window.currentLanguage || 'en';
        const points = REDACTION_TRANSLATIONS[lang].the_crew.objectifs.points;
        objectifsList.innerHTML = points.map(p => `<li>${p}</li>`).join('');
    }

    const closeBtn = document.querySelector('.btn-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            closeRedactionPage();
        });
    }
});
