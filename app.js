//quand la page est entièrement chargée
window.addEventListener('load', function () {

    //cache toutes les sections par défaut sauf la section accueil
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        if (section.id != "accueil") {
            section.style.display = "none";
        }
    });

    // Calcule mon âge en fonction de la date de naissance
    var today = new Date(); // Date du jour
    var now = today.toLocaleDateString();
    var anniv = "17/03/2004"; // Date de naissance
    var annee = anniv.substring(6); // Prend les 4 derniers caractères pour l'année
    var mois = anniv.substring(3, 5); // Les caractères 3 et 4 pour le mois
    var jour = anniv.substring(0, 2); // Les caractères 0 et 1 pour le jour
    var dateNaissance = new Date(annee, mois - 1, jour); // Soustrayez 1 du mois car les mois vont de 0 à 11

    // Calcul de l'âge
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age--;
    }

    document.getElementById('age').innerHTML = age; // Affiche l'âge dans la div 'age' de la page HTML

    // récupération de l'année en cours
    var annee = new Date().getFullYear();
    // affichage dans le footer span class="anneeActuelle"
    document.querySelector('.anneeActuelle').innerHTML = annee;
});

//Va afficher seulement la section en cours (quand la page est chargée)
document.addEventListener("DOMContentLoaded", function () {//DOM = Document Object Model
    const menuLinks = document.querySelectorAll("a");
    const sections = document.querySelectorAll(".section");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            //si le lien contient #, on va chercher l'id de la section
            if (this.getAttribute("href").includes("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);

                // console.log(targetId);

                sections.forEach((section) => {
                    section.style.display = "none";
                });

                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    // console.log(targetId);
                    targetSection.style.display = "block";
                } else {
                    // console.error("Section introuvable");
                }
                //revenir en haut de la page
                window.scrollTo(0, 0);
                
            }
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.toggle('show');//va m'alterner entre show et hide
}
function closeMenu() {
    const menu = document.querySelector('.menu ul');
    menu.classList.remove('show');//seulement pour fermer le menu
}