// Modèles communs injectés par JS (pas de fetch nécessaire)
const headerTemplate = `
<header>
    <div class="nom"><h1>Ethan Lacomme</h1></div>
    <div class="menu">
        <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#informations">A propos de moi</a></li>
            <li><a href="#competences">Mes compétences</a></li>
            <li><a href="#projets">Mes projets</a></li>
            <li><a href="#contact">Me contacter</a></li>
        </ul>
    </div>
    <div class="burger-menu" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</header>
`;

const footerTemplate = `
<footer>
    <div class="content">
        <div class="left"><p>© <span class="anneeActuelle">copyright-année</span> Ethan Lacomme</p></div>
        <p id="last-update" style="color: antiquewhite;"></p>
        <div class="right"><p>Site réalisé par Ethan Lacomme</p></div>
    </div>
</footer>
`;

function injectSharedParts() {
    const headerTarget = document.getElementById('site-header');
    if (headerTarget) headerTarget.innerHTML = headerTemplate;

    const footerTarget = document.getElementById('site-footer');
    if (footerTarget) footerTarget.innerHTML = footerTemplate;
}

// Variables globales pour la gestion des projets
let allProjects = [];
let filteredProjects = [];
let currentCategory = 'all';
let currentColumns = 2;
let itemsPerPage = 4;
let displayedItems = 0;

// Variables globales pour la gestion des compétences
let competencesItemsPerPage = 8;
let displayedProgrammation = 0;
let displayedEnvironnement = 0;

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

// Créer le HTML d'un projet
function createProjectHTML(project) {
    let mediaHTML = '';
    if (project.type === 'video') {
        mediaHTML = `<iframe src="${project.media}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        const style = project.mediaStyle || '';
        mediaHTML = `<img src="${project.media}" alt="${project.titre}" class="miniature" style="${style}">`;
    }

    let liensHTML = project.liens.map(lien => 
        `<a href="${lien.url}" target="_blank" class="btn btn--sm">${lien.texte}</a>`
    ).join('');

    return `
        <div class="blocklist couleur-projet info ${project.categorie}" style="margin-left: auto; margin-right: auto;">
            <div class="project-card__title"><h3>${project.titre}</h3></div>
            <div class="project-card__media">${mediaHTML}</div>
            <p class="project-card__desc">${project.description}</p>
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

// Affiche les projets avec X colonnes (1, 2, 3 ou 4)
function setProjectsPerLine(numColumns) {
    currentColumns = parseInt(numColumns);
    updateColumnsWidth();
}

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

document.addEventListener('DOMContentLoaded', function() {
    injectSharedParts();
    resetControlsToDefaults();
    loadProjects();
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

// Initialiser le chargement des projets au démarrage
document.addEventListener('DOMContentLoaded', function() {
    injectSharedParts();
    resetControlsToDefaults();
    loadProjects();
    loadCompetences();
});