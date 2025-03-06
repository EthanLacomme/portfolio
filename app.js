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

//filtrer les projets par catégories
function filterProjects(category) {
    const projects = document.querySelectorAll('#projets .blocklist');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'flex'; // Affiche tous les projets
        } else if (project.classList.contains(category)) {
            project.style.display = 'flex'; // Affiche le projet correspondant à la catégorie
        } else {
            project.style.display = 'none'; // Cache les autres projets
        }
    });
}