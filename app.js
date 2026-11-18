// ===========================
// TEMPLATES HTML (header / footer)
// ===========================

const headerTemplate = `
<header>
    <div class="nom">
        <h1>Ethan Lacomme</h1>
        <div class="language-switcher">
            <button id="lang-toggle-btn" class="lang-btn" onclick="toggleLanguage()">
                <span id="lang-icon">🇫🇷</span> <span id="lang-text">FR</span>
            </button>
        </div>
    </div>
    <div class="menu">
        <ul>
            <li><a href="#accueil" data-i18n="nav.accueil">Accueil</a></li>
            <li><a href="#informations" data-i18n="nav.aPropos">A propos de moi</a></li>
            <li><a href="#experiences" data-i18n="nav.experiences">Mes expériences</a></li>
            <li><a href="#outils" data-i18n="nav.outils">Mes outils</a></li>
            <li><a href="#projets" data-i18n="nav.projets">Mes projets</a></li>
            <li><a href="#contact" data-i18n="nav.contact">Me contacter</a></li>
            <li class="menu-indicateur" id="menu-indicateur" aria-hidden="true"></li>
        </ul>
    </div>
    <div class="progression" id="progression" aria-hidden="true"></div>
    <button class="burger-menu" onclick="toggleMenu(event)" aria-label="Menu" aria-expanded="false">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </button>
</header>
`;

const footerTemplate = `
<footer>
    <div class="content">
        <div class="left"><p>© <span class="anneeActuelle">${new Date().getFullYear()}</span> Ethan Lacomme</p></div>
        <p id="last-update"></p>
        <div class="right"><p data-i18n="footer.credit">Site réalisé par Ethan Lacomme</p></div>
    </div>
</footer>
`;

// ===========================
// ÉTAT
// ===========================

let currentCategory = 'all'; // Catégorie (domaine ou sous-tag) choisie dans les filtres
let currentOutil = null;     // Outil choisi (null = tous)
let filteredProjects = [];  // Projets après filtres
const itemsPerPage = 8;     // projets affichés par clic sur "Voir plus"
let displayedItems = 0;     // Nombre de projets affichés

const $ = id => document.getElementById(id);

// Texte dans la langue actuelle : accepte "texte" ou { fr: "...", en: "..." }
const txt = value => (typeof value === 'object' ? value[window.currentLanguage] ?? value.fr : value) ?? '';

// Extrait l'identifiant de n'importe quel lien YouTube (youtu.be, watch?v=, embed, shorts)
const youtubeId = url => url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1];

// Vidéo légère : on affiche seulement la miniature YouTube.
// Le vrai lecteur (lourd) n'est chargé qu'au clic.
function videoHTML(url, titre) {
    const id = youtubeId(url);
    return `
        <button type="button" class="video-lite" onclick="playVideo(this)" data-id="${id}" data-title="${titre}" aria-label="${t('projets.lireVideo')} : ${titre}">
            <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
            <span class="video-lite__play" aria-hidden="true"></span>
        </button>`;
}

function playVideo(button) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${button.dataset.id}?autoplay=1`;
    iframe.title = button.dataset.title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
}

// ===========================
// PROJETS
// ===========================

function createProjectHTML(project) {
    const titre = txt(project.titre);

    const mediaHTML = project.video
        ? videoHTML(project.video, titre)
        : `<img src="${project.image}" alt="${titre}" loading="lazy" style="${project.imageStyle || ''}">`;

    const liens = (project.liens || []).map(lien => {
        const texte = txt(window.TYPES_LIENS[lien.type]) || lien.type;
        return `<a href="${lien.url}" target="_blank" class="btn">${texte}</a>`;
    }).join('');

    const outils = (project.outils || []).map(id =>
        `<button type="button" class="tag-outil" aria-pressed="${id === currentOutil}" onclick="selectOutil('${id}', false)">${outilTitre(id)}</button>`
    ).join('');

    return `
        <div class="blocklist couleur-projet">
            <div class="project-card__title"><h3>${titre}</h3></div>
            ${outils ? `<div class="project-card__outils">${outils}</div>` : ''}
            <div class="project-card__media${project.video ? '' : ' project-card__media--image'}">${mediaHTML}</div>
            <p class="project-card__desc">${txt(project.description)}</p>
            <button type="button" class="lire-suite" onclick="toggleDescription(this)" hidden>${t('projets.lireSuite')}</button>
            ${liens ? `<div class="project-card__actions">${liens}</div>` : ''}
        </div>
    `;
}

// ===========================
// FILTRES (domaines, sous-tags, outil)
// ===========================

const categorie = id => window.CATEGORIES.find(c => c.id === id);
const sousTags = id => window.CATEGORIES.filter(c => c.parent === id);
const outilTitre = id => window.OUTILS.find(o => o.id === id)?.titre || id;

// Un projet appartient à une catégorie s'il a ce tag, ou un de ses sous-tags
function dansCategorie(project, id) {
    if (id === 'all') return true;
    const ids = [id, ...sousTags(id).map(c => c.id)];
    return project.categories?.some(c => ids.includes(c));
}
const avecOutil = (project, id) => !id || project.outils?.includes(id);

// Boutons créés à partir de CATEGORIES (projets-data.js).
// 1re rangée : domaines. 2e rangée : sous-tags du domaine choisi.
// Une catégorie sans aucun projet n'est pas affichée.
function renderFilters() {
    const count = id => window.PROJETS.filter(p => dansCategorie(p, id) && avecOutil(p, currentOutil)).length;
    const bouton = (cat, actif, label = txt(cat)) => count(cat.id) === 0 ? '' : `
        <button type="button" class="filtre" aria-pressed="${actif}" onclick="filterProjects('${cat.id}')">
            ${label} <span class="filtre-nombre">${count(cat.id)}</span>
        </button>`;

    // Domaine actif = la catégorie choisie, ou son parent si c'est un sous-tag
    const domaine = categorie(currentCategory)?.parent || currentCategory;

    $('filtres').innerHTML = [{ id: 'all' }, ...window.CATEGORIES.filter(c => !c.parent)]
        .map(cat => bouton(cat, cat.id === domaine, cat.id === 'all' ? t('projets.tout') : txt(cat)))
        .join('');

    const enfants = domaine === 'all' ? [] : sousTags(domaine);
    $('sous-filtres').hidden = enfants.length === 0;
    $('sous-filtres').innerHTML = enfants.length === 0 ? '' :
        bouton(categorie(domaine), currentCategory === domaine, t('projets.tous')) +
        enfants.map(cat => bouton(cat, cat.id === currentCategory)).join('');

    $('filtre-outil').hidden = !currentOutil;
    $('filtre-outil').innerHTML = currentOutil ? `
        ${t('projets.outil')} : <strong>${outilTitre(currentOutil)}</strong>
        <button type="button" onclick="selectOutil(null, false)" aria-label="${t('projets.retirerFiltre')}">✕</button>` : '';
}

/**
 * Affiche les projets.
 * - reset : repart de zéro (filtre / nombre par page changé)
 * - sinon : ajoute une page de plus ("Voir plus")
 * - keepCount : ré-affiche le même nombre (changement de langue)
 */
function renderProjects({ reset = false, keepCount = false } = {}) {
    const container = $('all-projects');
    let start = displayedItems;
    let end;

    if (keepCount) {
        start = 0;
        end = displayedItems;
    } else {
        if (reset) start = 0;
        end = start + itemsPerPage;
    }
    end = Math.min(end, filteredProjects.length);

    const html = filteredProjects.slice(start, end).map(createProjectHTML).join('');
    if (start === 0) container.innerHTML = html;
    else container.insertAdjacentHTML('beforeend', html);

    displayedItems = end;
    $('loadMoreBtn').style.display = displayedItems < filteredProjects.length ? 'block' : 'none';
    updateReadMore();
}

// Affiche "Lire la suite" seulement sous les descriptions coupées
function updateReadMore() {
    document.querySelectorAll('.project-card__desc:not(.ouvert)').forEach(desc => {
        desc.nextElementSibling.hidden = desc.scrollHeight <= desc.clientHeight + 1;
    });
}

function toggleDescription(button) {
    const ouvert = button.previousElementSibling.classList.toggle('ouvert');
    button.textContent = t(ouvert ? 'projets.reduire' : 'projets.lireSuite');
}

function filterProjects(category = currentCategory) {
    currentCategory = category;
    filteredProjects = window.PROJETS
        .filter(p => dansCategorie(p, category) && avecOutil(p, currentOutil))
        .reverse(); // Le dernier projet de la liste s'affiche en premier
    renderProjects({ reset: true });
    renderFilters();
    renderOutils();
}

// Choisit un outil (re-cliquer le même le retire). Depuis la section "Mes outils",
// on descend jusqu'aux projets.
function selectOutil(id, allerAuxProjets = true) {
    currentOutil = id === currentOutil ? null : id;
    filterProjects();
    if (allerAuxProjets) $('projets').scrollIntoView();
}

// Appelé par translations.js lors du changement de langue
function refreshProjectsDisplay() {
    renderProjects({ keepCount: true });
}

function loadMore() {
    renderProjects();
}

// ===========================
// EXPÉRIENCES (chronologie)
// ===========================

const EXPERIENCES_VISIBLES = 3;    // nombre d'expériences récentes affichées
let anciennesExperiencesVisibles = false;

function renderExperiences() {
    const experiences = window.EXPERIENCES || [];
    // Pas d'expérience : on cache la section et son lien dans le menu
    $('experiences').hidden = experiences.length === 0;
    document.querySelector('.menu a[href="#experiences"]').parentElement.hidden = experiences.length === 0;

    $('timeline').innerHTML = experiences.slice().reverse().map((exp, index) => {
        const liens = (exp.liens || []).map(lien =>
            `<a href="${lien.url}" target="_blank" class="btn">${txt(window.TYPES_LIENS[lien.type]) || lien.type}</a>`
        ).join('');
        return `
            <li class="timeline__item" ${index >= EXPERIENCES_VISIBLES && !anciennesExperiencesVisibles ? 'hidden' : ''}>
                <p class="timeline__date">${txt(exp.periode)}</p>
                <div class="timeline__card">
                    <span class="timeline__type" data-type="${exp.type}">${txt(window.TYPES_EXPERIENCES[exp.type]) || exp.type}</span>
                    <h3>${txt(exp.titre)}</h3>
                    ${exp.lieu ? `<p class="timeline__lieu">${txt(exp.lieu)}</p>` : ''}
                    <p>${txt(exp.description)}</p>
                    ${liens ? `<div class="timeline__liens">${liens}</div>` : ''}
                </div>
            </li>`;
    }).join('');

    // Bouton "Voir les plus anciennes" seulement s'il y en a plus que EXPERIENCES_VISIBLES
    const button = $('experiencesBtn');
    button.hidden = experiences.length <= EXPERIENCES_VISIBLES;
    button.textContent = t(anciennesExperiencesVisibles ? 'experiences.voirMoins' : 'experiences.voirPlus');
}

function toggleOldExperiences() {
    anciennesExperiencesVisibles = !anciennesExperiencesVisibles;
    renderExperiences();
    // En repliant, on revient en haut de la section
    if (!anciennesExperiencesVisibles) $('experiences').scrollIntoView();
}

// ===========================
// OUTILS (section "Mes outils")
// ===========================

function renderOutils() {
    const nombre = id => window.PROJETS.filter(p => p.outils?.includes(id)).length;
    $('liste-outils').innerHTML = window.OUTILS.filter(o => o.section).map(o => {
        const n = nombre(o.id);
        const label = n ? `${n} ${t(n > 1 ? 'outils.projets' : 'outils.projet')}` : '';
        return `
            <button type="button" class="outil" aria-pressed="${o.id === currentOutil}" ${n ? `onclick="selectOutil('${o.id}')"` : 'disabled'}>
                ${o.image ? `<img src="${o.image}" alt="" loading="lazy">` : `<span class="outil__initiale" aria-hidden="true">${o.titre[0]}</span>`}
                <span class="outil__nom">${o.titre}</span>
                ${label ? `<span class="outil__nombre">${label}</span>` : ''}
            </button>`;
    }).join('');
}

// ===========================
// DIVERS
// ===========================

function computeAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const beforeBirthday = today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    return beforeBirthday ? age - 1 : age;
}

// Date du dernier push du dépôt GitHub (affichée au format de la langue choisie)
let lastUpdate;   // Date, ou null si la récupération a échoué

async function showLastUpdate() {
    try {
        const response = await fetch('https://api.github.com/repos/EthanLacomme/portfolio');
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        lastUpdate = new Date((await response.json()).pushed_at);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        lastUpdate = null;
    }
    renderLastUpdate();
}

// Appelé aussi par translations.js lors du changement de langue
function renderLastUpdate() {
    if (lastUpdate === undefined) return; // pas encore chargée
    $('last-update').innerHTML = lastUpdate
        ? `${t('footer.lastUpdate')} ${lastUpdate.toLocaleDateString(window.currentLanguage === 'en' ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}`
        : t('footer.erreurMaj');
}

// Adresse mail (assemblée ici pour ne pas être lue par les robots de spam)
const EMAIL = ['ethanlacomme316', 'gmail.com'].join('@');

function showEmail() {
    $('contact-email').textContent = EMAIL;
    $('contact-mailto').href = 'mailto:' + EMAIL;
}

async function copyEmail() {
    const button = $('contact-copy');
    try {
        await navigator.clipboard.writeText(EMAIL);
        button.textContent = t('contact.copie');
        setTimeout(() => { button.textContent = t('contact.copier'); }, 2000);
    } catch {
        window.location.href = 'mailto:' + EMAIL; // si la copie est bloquée
    }
}

// Menu burger (mobile)
function setMenuOpen(open) {
    document.querySelector('.menu ul').classList.toggle('show', open);
    document.querySelector('.burger-menu').setAttribute('aria-expanded', open);
}

function toggleMenu(event) {
    event.stopPropagation();
    setMenuOpen(!document.querySelector('.menu ul').classList.contains('show'));
}

// Ferme le menu quand on clique ailleurs ou sur un lien du menu
document.addEventListener('click', event => {
    const menu = document.querySelector('.menu ul');
    if (menu?.classList.contains('show') && (!menu.contains(event.target) || event.target.closest('a'))) {
        setMenuOpen(false);
    }
});

// ===========================
// NAVIGATION : section active + retour en haut
// ===========================

// Souligne dans le menu la section en cours de lecture
// (la dernière dont le haut a dépassé le premier tiers de l'écran)
function updateNavigation() {
    const links = [...document.querySelectorAll('.menu a')];
    const seuil = window.innerHeight * 0.3;
    const enBas = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    let actif = null;
    links.forEach(a => {
        const section = document.querySelector(a.getAttribute('href'));
        if (section && !section.hidden && section.getBoundingClientRect().top <= seuil) actif = a;
    });
    if (window.scrollY < 10) actif = links[0];      // tout en haut : Accueil
    else if (enBas) actif = links.at(-1);           // tout en bas : dernière section (trop courte pour atteindre le seuil)
    links.forEach(a => a.classList.toggle('actif', a === actif));
    placerIndicateur(actif);

    // Barre de lecture sous le menu : avance avec le défilement (0 → 100 %)
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $('progression').style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;

    // Titres de section : le trait jaune se dessine quand on y arrive
    document.querySelectorAll('.section h2:not(.vu)').forEach(h2 => {
        if (h2.getBoundingClientRect().top < window.innerHeight * 0.85) h2.classList.add('vu');
    });

    // Bouton "retour en haut" visible après un écran de défilement
    $('retourHaut').hidden = window.scrollY < window.innerHeight;
}

// Le soulignement jaune du menu glisse jusqu'au lien de la section active
function placerIndicateur(lien) {
    const indicateur = $('menu-indicateur');
    if (!lien) { indicateur.style.opacity = 0; return; }
    indicateur.style.opacity = 1;
    indicateur.style.left = lien.offsetLeft + 'px';
    indicateur.style.width = lien.offsetWidth + 'px';
}

function watchSections() {
    window.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateNavigation);
    updateNavigation();
}

// ===========================
// INITIALISATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    $('site-header').innerHTML = headerTemplate;
    $('site-footer').innerHTML = footerTemplate;
    updateLanguageButton();
    updateAllTranslations();

    $('age').textContent = computeAge(new Date(2004, 2, 17)); // 17/03/2004

    filterProjects('all');
    renderExperiences();

    showEmail();
    showLastUpdate();
    watchSections();

    // La largeur des cartes change avec la fenêtre : on recalcule les "Lire la suite"
    let resizeFrame;
    window.addEventListener('resize', () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(updateReadMore);
    });
});
