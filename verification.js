// =====================================================================
//  VÉRIFICATEUR DES FICHIERS DE DONNÉES
//  Ne s'exécute qu'en local (127.0.0.1 / localhost) : les visiteurs du
//  site en ligne ne voient jamais rien.
//
//  S'il trouve une erreur dans projets-data.js, outils-data.js ou
//  experiences-data.js (id inconnu, traduction oubliée...), il affiche
//  un encadré rouge en bas de la page avec la liste des corrections.
// =====================================================================
(function () {
    const enLocal = ['localhost', '127.0.0.1', ''].includes(location.hostname);
    if (!enLocal) return;

    const erreurs = [];
    const nomDe = v => (typeof v === 'object' && v ? v.fr : v) || '(sans titre)';
    const ajouter = (fichier, element, message) => erreurs.push(`<b>${fichier}</b> — ${element} : ${message}`);

    // Texte { fr, en } ou simple texte
    function verifierTexte(fichier, element, champ, valeur, obligatoire = true) {
        if (valeur === undefined || valeur === '') {
            if (obligatoire) ajouter(fichier, element, `le champ <code>${champ}</code> est vide ou absent`);
            return;
        }
        if (typeof valeur === 'object') {
            if (!valeur.fr) ajouter(fichier, element, `<code>${champ}</code> n'a pas de texte <code>fr</code>`);
            if (!valeur.en) ajouter(fichier, element, `<code>${champ}</code> n'a pas de traduction <code>en</code>`);
        }
    }

    function doublons(fichier, liste, quoi) {
        const vus = new Set();
        liste.forEach(x => {
            if (vus.has(x.id)) ajouter(fichier, `${quoi} « ${x.id} »`, 'cet id est utilisé deux fois');
            vus.add(x.id);
        });
    }

    function verifierLiens(fichier, element, liens) {
        (liens || []).forEach(lien => {
            if (!window.TYPES_LIENS[lien.type]) ajouter(fichier, element, `type de lien inconnu <code>${lien.type}</code> (types possibles : ${Object.keys(window.TYPES_LIENS).join(', ')})`);
            if (!lien.url) ajouter(fichier, element, 'un lien n\'a pas d\'<code>url</code>');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const CATS = window.CATEGORIES || [], OUTILS = window.OUTILS || [];
        const idsCats = new Set(CATS.map(c => c.id)), idsOutils = new Set(OUTILS.map(o => o.id));

        // --- Catégories ---
        doublons('projets-data.js', CATS, 'catégorie');
        CATS.forEach(c => {
            if (!c.fr || !c.en) ajouter('projets-data.js', `catégorie « ${c.id} »`, 'il manque le nom <code>fr</code> ou <code>en</code>');
            if (c.parent && !idsCats.has(c.parent)) ajouter('projets-data.js', `catégorie « ${c.id} »`, `le parent <code>${c.parent}</code> n'existe pas`);
        });

        // --- Outils ---
        doublons('outils-data.js', OUTILS, 'outil');

        // --- Projets ---
        (window.PROJETS || []).forEach((p, i) => {
            const element = `projet n°${i + 1} « ${nomDe(p.titre)} »`;
            verifierTexte('projets-data.js', element, 'titre', p.titre);
            verifierTexte('projets-data.js', element, 'description', p.description);
            if (!p.categories?.length) ajouter('projets-data.js', element, 'aucune catégorie');
            (p.categories || []).forEach(c => { if (!idsCats.has(c)) ajouter('projets-data.js', element, `catégorie inconnue <code>${c}</code>`); });
            (p.outils || []).forEach(o => { if (!idsOutils.has(o)) ajouter('projets-data.js', element, `outil inconnu <code>${o}</code> (à déclarer dans outils-data.js)`); });
            if (!p.video && !p.image) ajouter('projets-data.js', element, 'il faut une <code>video</code> ou une <code>image</code>');
            if (p.video && !/(?:youtu\.be\/|v=|embed\/|shorts\/)[\w-]{11}/.test(p.video)) ajouter('projets-data.js', element, 'le lien <code>video</code> n\'est pas un lien YouTube reconnu');
            verifierLiens('projets-data.js', element, p.liens);
        });

        // --- Expériences ---
        (window.EXPERIENCES || []).forEach((e, i) => {
            const element = `expérience n°${i + 1} « ${nomDe(e.titre)} »`;
            if (!window.TYPES_EXPERIENCES[e.type]) ajouter('experiences-data.js', element, `type inconnu <code>${e.type}</code> (types possibles : ${Object.keys(window.TYPES_EXPERIENCES).join(', ')})`);
            verifierTexte('experiences-data.js', element, 'titre', e.titre);
            verifierTexte('experiences-data.js', element, 'periode', e.periode);
            verifierTexte('experiences-data.js', element, 'description', e.description);
            verifierLiens('experiences-data.js', element, e.liens);
        });

        if (erreurs.length === 0) {
            console.info('✔ Vérification des données : aucune erreur.');
            return;
        }
        erreurs.forEach(e => console.warn(e.replace(/<[^>]+>/g, '')));

        const encadre = document.createElement('div');
        encadre.style.cssText = 'position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:9999;max-height:40vh;overflow:auto;' +
            'padding:1rem 1.25rem;background:#3a0d0d;border:2px solid #ff6b6b;border-radius:10px;color:#fff;' +
            'font:14px/1.5 Arial,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.5)';
        encadre.innerHTML = `
            <button type="button" style="float:right;background:none;border:1px solid #fff;color:#fff;border-radius:4px;cursor:pointer;padding:2px 8px">Fermer</button>
            <strong style="color:#ff9b9b">⚠ ${erreurs.length} problème(s) dans les fichiers de données</strong>
            <span style="opacity:.7">(visible seulement en local)</span>
            <ul style="margin:.5rem 0 0 1.2rem">${erreurs.map(e => `<li>${e}</li>`).join('')}</ul>`;
        encadre.querySelector('button').onclick = () => encadre.remove();
        document.body.appendChild(encadre);
    });
})();
