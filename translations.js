// Fichier de traductions multilingues (FR / EN)
window.TRANSLATIONS = {
    fr: {
        // Header & Navigation
        nav: {
            accueil: "Accueil",
            aPropos: "A propos de moi",
            experiences: "Mes expériences",
            outils: "Mes outils",
            projets: "Mes projets",
            contact: "Me contacter",
            retourHaut: "Retour en haut"
        },
        
        // Sections
        accueil: {
            titre: "Bonjour",
            bienvenue: "Bienvenue sur mon portfolio : vous y trouverez mes projets, mon parcours et mes compétences.",
            voirProjets: "Voir mes projets"
        },
        
        aPropos: {
            titre: "A propos de moi",
            ligne1: "Je m'appelle Ethan Lacomme, j'ai ",
            ans: " ans.",
            ligne2: "Toujours prêt à progresser et à relever de nouveaux défis sur des projets variés.",
            ligne3: "Je suis actuellement à la recherche d'un emploi.",
            cv: "Mon CV"
        },
        
        experiences: {
            titre: "Mes expériences",
            voirPlus: "Voir les plus anciennes",
            voirMoins: "Masquer les plus anciennes"
        },

        outils: {
            titre: "Mes outils",
            intro: "Cliquez sur un outil pour voir les projets réalisés avec.",
            projet: "projet",
            projets: "projets"
        },
        
        projets: {
            titre: "Mes projets",
            tout: "Tout",
            tous: "Tous",
            outil: "Outil",
            retirerFiltre: "Retirer le filtre",
            lireSuite: "Lire la suite",
            lireVideo: "Lire la vidéo",
            reduire: "Réduire",
            voirPlus: "Voir plus"
        },
        
        contact: {
            titre: "Me contacter",
            ecrire: "M'écrire",
            copier: "Copier l'adresse",
            copie: "Adresse copiée !",
            linkedIn: "Lien LinkedIn : Ethan Lacomme",
            githubPrincipal: "GitHub Principal",
            githubPortfolio: "GitHub du portfolio"
        },
        
        footer: {
            credit: "Site réalisé par Ethan Lacomme",
            lastUpdate: "Dernière mise à jour publiée le",
            erreurMaj: "Impossible de récupérer la date de la dernière mise à jour du portfolio"
        }
    },
    
    en: {
        // Header & Navigation
        nav: {
            accueil: "Home",
            aPropos: "About Me",
            experiences: "Experience",
            outils: "My Tools",
            projets: "Projects",
            contact: "Contact",
            retourHaut: "Back to top"
        },
        
        // Sections
        accueil: {
            titre: "Hello",
            bienvenue: "Welcome to my portfolio: here you will find my projects, my background and my skills.",
            voirProjets: "See my projects"
        },
        
        aPropos: {
            titre: "About Me",
            ligne1: "My name is Ethan Lacomme, I am ",
            ans: " years old.",
            ligne2: "Always eager to grow and take on new challenges across a variety of projects.",
            ligne3: "I am currently looking for a job.",
            cv: "My Resume"
        },
        
        experiences: {
            titre: "My Experience",
            voirPlus: "Show older",
            voirMoins: "Hide older"
        },

        outils: {
            titre: "My Tools",
            intro: "Click a tool to see the projects made with it.",
            projet: "project",
            projets: "projects"
        },
        
        projets: {
            titre: "My Projects",
            tout: "All",
            tous: "All",
            outil: "Tool",
            retirerFiltre: "Remove filter",
            lireSuite: "Read more",
            lireVideo: "Play video",
            reduire: "Show less",
            voirPlus: "See more"
        },
        
        contact: {
            titre: "Contact Me",
            ecrire: "Email me",
            copier: "Copy address",
            copie: "Address copied!",
            linkedIn: "LinkedIn: Ethan Lacomme",
            githubPrincipal: "Main GitHub",
            githubPortfolio: "Portfolio GitHub"
        },
        
        footer: {
            credit: "Website created by Ethan Lacomme",
            lastUpdate: "Last update published on",
            erreurMaj: "Could not retrieve the date of the portfolio's last update"
        }
    }
};

// Langue actuelle (par défaut français)
window.currentLanguage = localStorage.getItem('portfolio-language') || 'fr';

// Retourne la traduction d'une clé du type "nav.accueil" (ou la clé si absente)
function t(key) {
    return key.split('.').reduce((value, k) => value?.[k], TRANSLATIONS[window.currentLanguage]) || key;
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    window.currentLanguage = lang;
    localStorage.setItem('portfolio-language', lang);
    updateLanguageButton();
    updateAllTranslations();
    refreshProjectsDisplay();
    renderFilters();
    renderExperiences();
    renderOutils();
    renderLastUpdate();
}

function toggleLanguage() {
    setLanguage(window.currentLanguage === 'fr' ? 'en' : 'fr');
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

// Met à jour tous les éléments [data-i18n] du DOM
function updateAllTranslations() {
    document.documentElement.lang = window.currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
}
