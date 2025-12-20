// ===========================
// TEMPLATES HTML
// ===========================

/**
 * Template du header contenant :
 * - Nom du portfolio
 * - Bouton de changement de langue (drapeau + texte)
 * - Menu de navigation avec attributs data-i18n pour traduction
 * - Menu burger pour mobile
 */
const headerTemplate = `
<header>
    <div class="nom">
        <h1>Ethan Lacomme</h1>
        <div class="language-switcher">
            <button id="lang-toggle-btn" class="lang-btn" onclick="toggleLanguage()">
                <span id="lang-icon">🇺🇸</span> <span id="lang-text">EN</span>
            </button>
        </div>
    </div>
    <div class="menu">
        <ul>
            <li><a href="#accueil" data-i18n="nav.accueil">Accueil</a></li>
            <li><a href="#informations" data-i18n="nav.aPropos">A propos de moi</a></li>
            <li><a href="#competences" data-i18n="nav.competences">Mes compétences</a></li>
            <li><a href="#projets" data-i18n="nav.projets">Mes projets</a></li>
            <li><a href="#contact" data-i18n="nav.contact">Me contacter</a></li>
        </ul>
    </div>
    <div class="burger-menu" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</header>
`;

/**
 * Template du footer contenant :
 * - Copyright avec année dynamique
 * - Date de dernière mise à jour (récupérée depuis GitHub API)
 * - Crédit du site avec traduction
 */
const footerTemplate = `
<footer>
    <div class="content">
        <div class="left"><p>© <span class="anneeActuelle"></span> Ethan Lacomme</p></div>
        <p id="last-update" style="color: antiquewhite;"></p>
        <div class="right"><p data-i18n="footer.credit">Site réalisé par Ethan Lacomme</p></div>
    </div>
</footer>
`;

/**
 * Injecte les templates header et footer dans le DOM
 * Appelle ensuite les fonctions de traduction pour initialiser la langue
 */
function injectSharedParts() {
    // Injection du header
    const headerTarget = document.getElementById('site-header');
    if (headerTarget) headerTarget.innerHTML = headerTemplate;

    // Injection du footer
    const footerTarget = document.getElementById('site-footer');
    if (footerTarget) footerTarget.innerHTML = footerTemplate;
    
    // Initialisation du bouton de langue (drapeau + texte)
    if (typeof updateLanguageButton === 'function') {
        updateLanguageButton();
    }
    
    // Application des traductions à tous les éléments [data-i18n]
    if (typeof updateAllTranslations === 'function') {
        updateAllTranslations();
    }
}

// ===========================
// VARIABLES GLOBALES
// ===========================

// --- Gestion des projets ---
let allProjects = [];          // Tous les projets chargés depuis projets-data.js
let filteredProjects = [];     // Projets après application du filtre de catégorie
let currentCategory = 'all';   // Catégorie active : 'all', 'jeux', 'general'
let currentColumns = 2;        // Nombre de colonnes d'affichage (1-4, max 2 sur mobile)
let itemsPerPage = 4;          // Nombre de projets à afficher par page
let displayedItems = 0;        // Nombre de projets actuellement affichés

// --- Gestion des compétences ---
let competencesItemsPerPage = 8;  // Nombre de compétences à charger par clic "Voir plus"
let displayedProgrammation = 0;   // Nombre de compétences programmation affichées
let displayedEnvironnement = 0;   // Nombre de compétences environnement affichées

// Réinitialise l'état visuel des sélecteurs sur les valeurs par défaut
function resetControlsToDefaults() {
    const filter = document.getElementById('filterSelect');
    const columns = document.getElementById('projectsPerLineSelect');
    const items = document.getElementById('itemsPerPageSelect');

    if (filter) filter.value = 'all';
    if (columns) columns.value = String(currentColumns); // 2 par défaut
    if (items) items.value = String(itemsPerPage); // 4 par défaut
}

// Charger les projets depuis la variable globale (projets-data.js), sans fetch
async function loadProjects() {
    try {
        const source = typeof window.PROJETS !== 'undefined' ? window.PROJETS : null;
        if (!source || !Array.isArray(source)) {
            throw new Error('Données de projets introuvables');
        }
        // Tri décroissant par id (plus récents en haut)
        allProjects = source.slice().sort((a, b) => b.id - a.id);
        filteredProjects = [...allProjects];
        displayedItems = 0;
        renderProjects(true);
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
        const container = document.getElementById('all-projects');
        if (container) {
            container.innerHTML = '<p style="color: red; text-align: center;">Impossible de charger les projets en local. Vérifiez le fichier projets-data.js.</p>';
        }
    }
}

/**
 * Crée le HTML d'une carte de projet avec traduction
 * @param {Object} project - Objet projet depuis projets-data.js
 * @returns {string} - Code HTML de la carte projet
 */
function createProjectHTML(project) {
    // Récupérer la langue actuelle depuis translations.js
    const lang = window.currentLanguage || 'fr';
    
    // Utiliser les traductions si disponibles pour ce projet
    const projectData = window.TRANSLATIONS && window.TRANSLATIONS[lang]?.projetsData?.[project.id];
    const titre = projectData?.titre || project.titre;
    const description = projectData?.description || project.description;
    
    let mediaHTML = '';
    if (project.type === 'video') {
        mediaHTML = `<iframe src="${project.media}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        const style = project.mediaStyle || '';
        mediaHTML = `<img src="${project.media}" alt="${titre}" class="miniature" style="${style}">`;
    }

    // Traduire les textes des liens
    let liensHTML = project.liens.map(lien => {
        let texteTranslate = lien.texte;
        const liensTranslations = window.TRANSLATIONS?.[lang]?.projetsData?.liens;
        
        if (liensTranslations) {
            if (lien.texte.includes('documentation')) texteTranslate = liensTranslations.documentation;
            else if (lien.texte.includes('Manuel') || lien.texte.includes('utilisateur')) texteTranslate = liensTranslations.manuel;
            else if (lien.texte.includes('github')) texteTranslate = liensTranslations.github;
            else if (lien.texte.includes('itch')) texteTranslate = liensTranslations.itch;
            else if (lien.texte.includes('savoir plus')) texteTranslate = liensTranslations.savoirPlus;
        }
        
        return `<a href="${lien.url}" target="_blank" class="btn btn--sm">${texteTranslate}</a>`;
    }).join('');

    return `
        <div class="blocklist couleur-projet info ${project.categorie}" style="margin-left: auto; margin-right: auto;">
            <div class="project-card__title"><h3>${titre}</h3></div>
            <div class="project-card__media">${mediaHTML}</div>
            <p class="project-card__desc">${description}</p>
            <div class="project-card__actions">${liensHTML}</div>
        </div>
    `;
}

// Afficher les projets
function renderProjects(reset = false) {
    const container = document.getElementById('all-projects');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (reset) {
        displayedItems = 0;
        container.innerHTML = '';
    }

    // Calculer combien d'éléments afficher
    const itemsToShow = itemsPerPage === -1 ? filteredProjects.length : Math.min(displayedItems + itemsPerPage, filteredProjects.length);
    
    // Ajouter les nouveaux projets
    for (let i = displayedItems; i < itemsToShow; i++) {
        container.innerHTML += createProjectHTML(filteredProjects[i]);
    }
    
    displayedItems = itemsToShow;
    
    // Mettre à jour la largeur des colonnes
    updateColumnsWidth();
    
    // Afficher/masquer le bouton "Voir plus"
    if (loadMoreBtn) {
        if (itemsPerPage === -1 || displayedItems >= filteredProjects.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Mettre à jour la largeur des colonnes
function updateColumnsWidth() {
    const projects = document.querySelectorAll('#all-projects .blocklist');
    const container = document.getElementById('all-projects');
    
    // Supprimer les anciennes classes de colonnes
    container.classList.remove('cols-1', 'cols-2', 'cols-3', 'cols-4');
    // Ajouter la nouvelle classe
    container.classList.add('cols-' + currentColumns);
    
    projects.forEach(project => {
        project.style.width = (100 / currentColumns) - 2 + '%'; // 2% pour les marges
    });
}

// Filtrer les projets par catégorie
function filterProjects(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredProjects = allProjects;
    } else {
        filteredProjects = allProjects.filter(project => project.categorie === category);
    }
    
    renderProjects(true);
}

/**
 * Recharge l'affichage des projets lors du changement de langue
 * Conserve le nombre d'items affichés pour ne pas réinitialiser la pagination
 */
function refreshProjectsDisplay() {
    const container = document.getElementById('all-projects');
    if (!container) return;
    
    // Sauvegarder le nombre d'items affichés
    const previousDisplayedItems = displayedItems;
    
    // Vider le conteneur
    container.innerHTML = '';
    
    // Réinitialiser le compteur
    displayedItems = 0;
    
    // Afficher le même nombre d'items qu'avant
    const itemsToShow = Math.min(previousDisplayedItems, filteredProjects.length);
    for (let i = 0; i < itemsToShow; i++) {
        container.innerHTML += createProjectHTML(filteredProjects[i]);
    }
    
    displayedItems = itemsToShow;
    updateColumnsWidth();
    
    // Mettre à jour la visibilité du bouton "Voir plus"
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (itemsPerPage === -1 || displayedItems >= filteredProjects.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Affiche les projets avec X colonnes (1, 2, 3 ou 4)
// Affiche les projets avec X colonnes (1, 2, 3 ou 4)
// Force maximum 2 colonnes sur petits écrans
function setProjectsPerLine(numColumns) {
    let columns = parseInt(numColumns);
    // Limiter à 2 colonnes max sur petits écrans
    if (window.innerWidth <= 1000) {
        columns = Math.min(columns, 2);
    }
    currentColumns = columns;
    updateColumnsWidth();
}

// Gérer le responsive des colonnes au redimensionnement
function handleWindowResize() {
    const columnSelect = document.getElementById('projectsPerLineSelect');
    if (window.innerWidth <= 1000) {
        // Forcer maximum 2 colonnes
        currentColumns = Math.min(currentColumns, 2);
        if (columnSelect) {
            columnSelect.value = String(Math.min(parseInt(columnSelect.value), 2));
            columnSelect.disabled = true;
        }
    } else {
        // Réactiver la sélection sur grands écrans
        if (columnSelect) {
            columnSelect.disabled = false;
        }
    }
    updateColumnsWidth();
}

// Ajouter l'event listener au redimensionnement
window.addEventListener('resize', handleWindowResize);

// Changer le nombre d'éléments par page
function setItemsPerPage(items) {
    itemsPerPage = parseInt(items);
    renderProjects(true);
}

// Charger plus d'éléments
function loadMore() {
    renderProjects(false);
}

// Charger les compétences depuis la variable globale (competences-data.js)
function loadCompetences() {
    try {
        const source = typeof window.COMPETENCES !== 'undefined' ? window.COMPETENCES : null;
        if (!source) {
            throw new Error('Données de compétences introuvables');
        }
        
        // Charger les compétences de programmation
        renderCompetences('programmation', true);
        
        // Charger les compétences d'environnement
        renderCompetences('environnement', true);
    } catch (error) {
        console.error('Erreur lors du chargement des compétences:', error);
    }
}

// Créer le HTML d'une compétence
function createCompetenceHTML(competence) {
    return `
        <div class="blocklist-1 info">
            <img src="${competence.media}" alt="${competence.titre} Logo">
            <a href="${competence.url}" target="_blank">
                <p>${competence.titre}</p>
            </a>
        </div>
    `;
}

// Charger les compétences avec pagination
function renderCompetences(type, reset = false) {
    try {
        const source = typeof window.COMPETENCES !== 'undefined' ? window.COMPETENCES : null;
        if (!source) {
            throw new Error('Données de compétences introuvables');
        }

        const container = document.getElementById(type === 'programmation' ? 'programmation' : 'environnementDev');
        const loadMoreBtn = document.getElementById(type === 'programmation' ? 'loadMoreProgrammationBtn' : 'loadMoreEnvironnementBtn');
        const data = type === 'programmation' ? source.programmation : source.environnement;

        if (!container || !data) return;

        if (reset) {
            if (type === 'programmation') {
                displayedProgrammation = 0;
            } else {
                displayedEnvironnement = 0;
            }
            container.innerHTML = '';
        }

        // Déterminer combien afficher
        const displayedCount = type === 'programmation' ? displayedProgrammation : displayedEnvironnement;
        const itemsToShow = Math.min(displayedCount + competencesItemsPerPage, data.length);

        // Ajouter les nouveaux éléments
        for (let i = displayedCount; i < itemsToShow; i++) {
            container.innerHTML += createCompetenceHTML(data[i]);
        }

        // Mettre à jour le compteur
        if (type === 'programmation') {
            displayedProgrammation = itemsToShow;
        } else {
            displayedEnvironnement = itemsToShow;
        }

        // Afficher/masquer le bouton "Voir plus"
        if (loadMoreBtn) {
            if (itemsToShow >= data.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Erreur lors du rendu des compétences:', error);
    }
}

// Charger plus de compétences
function loadMoreCompetences(type) {
    renderCompetences(type, false);
}

// ===========================
// INITIALISATION AU CHARGEMENT
// ===========================

/**
 * Événement déclenché quand le DOM est prêt (mais avant les images)
 * Initialise tous les composants du portfolio
 */
document.addEventListener('DOMContentLoaded', function() {
    // Injection du header et footer avec traductions
    injectSharedParts();
    
    // Réinitialisation des contrôles à leurs valeurs par défaut
    resetControlsToDefaults();
    
    // Chargement et affichage des projets
    loadProjects();
    
    // Chargement et affichage des compétences
    loadCompetences();
    
    // Application du mode responsive
    handleWindowResize();
});

// Quand la page est entièrement chargée
window.addEventListener('load', function () {
    // Calcule mon âge en fonction de la date de naissance
    const today = new Date(); // Date du jour
    const anniv = "17/03/2004"; // Date de naissance
    const [jour, mois, annee] = anniv.split('/'); // Décomposition de la date
    const dateNaissance = new Date(annee, mois - 1, jour); // Mois commence à 0

    let age = today.getFullYear() - dateNaissance.getFullYear();
    if (
        today.getMonth() < dateNaissance.getMonth() ||
        (today.getMonth() === dateNaissance.getMonth() && today.getDate() < dateNaissance.getDate())
    ) {
        age--;
    }
    document.getElementById('age').innerHTML = age; // Affiche l'âge

    // Affiche l'année actuelle dans le footer
    const anneeActuelle = new Date().getFullYear();
    document.querySelector('.anneeActuelle').innerHTML = anneeActuelle;


    //Récupération de la dernière update du projet sur GitHub
    async function fetchLastUpdated() {
        const url = "https://api.github.com/repos/EthanLacomme/portfolio";
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    
            const data = await response.json();
            const lastUpdated = new Date(data.pushed_at); // Convertir en objet Date
            
            return lastUpdated.toLocaleDateString("fr-FR", { 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
            return "Impossible de récupérer la date de la dernière mise à jour du portfolio";
        }
    }
    
    // Mettre à jour le contenu de l'élément HTML
    fetchLastUpdated().then(date => {
        document.getElementById("last-update").textContent = `Dernière mise à jour publié le ${date}`;
    });
    
});

// Fonction pour afficher/fermer le menu sur mobile
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('show'); // Alterne entre afficher et cacher le menu

    //cache le menu si on clique en dehors
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
    // suppression de l'event
    event.stopPropagation();
}

// Fonction pour afficher ou cacher l'élément avec l'id donné
function toggleContent(id) {
    const content = document.getElementById(id);
    const button = document.querySelector(`[onclick="toggleContent('${id}')"]`);
    const icon = button.querySelector('.icon-toggle');
    
    content.style.display = content.style.display === 'none' ? 'flex' : 'none';
    icon.classList.toggle('rotated');
    
    // Change le texte du bouton
    button.innerHTML = content.style.display === 'none' 
        ? '<span class="icon-toggle">▼</span>'
        : '<span class="icon-toggle">▲</span>';
}

// Note : L'initialisation est gérée par le DOMContentLoaded déclaré plus haut (ligne ~340)