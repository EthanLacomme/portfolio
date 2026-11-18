> Guide de maintenance : présent dans le dépôt GitHub, mais volontairement non lié depuis le README.
> Son nom commence par « _ » pour que GitHub Pages (Jekyll) ne le publie PAS sur le site.

# Guide de mise à jour

Le contenu se trouve dans des fichiers de données, sans toucher au HTML ni au JavaScript :

- **`projets-data.js`** : les projets, leurs catégories (domaines et sous-tags) et les types de boutons ;
- **`outils-data.js`** : les outils (section « Mes outils » et petits tags sur les projets) ;
- **`experiences-data.js`** : la chronologie « Mes expériences » (formations, stages…).

## Voir le site en local

Dans un terminal ouvert dans le dossier du portfolio :

```bash
python -m http.server 8000
```

Puis ouvrir http://127.0.0.1:8000 dans le navigateur. Après chaque modification, recharger la page (F5).

## Ajouter un projet

Dans `projets-data.js`, copier ce bloc **à la fin** de la liste `window.PROJETS`
(juste avant le `];`), et ajouter une virgule après le projet précédent.
Le dernier projet de la liste s'affiche en premier sur le site.

```js
{
    titre: { fr: "Mon projet", en: "My project" },
    categories: ["jeux", "levelDesign", "blockout"],
    outils: ["unreal", "blender"],
    video: "https://youtu.be/XXXXXXXXXXX",
    description: {
        fr: "Description en français.",
        en: "Description in English."
    },
    liens: [
        { type: "itch", url: "https://..." },
        { type: "page", url: "redaction_projet/mon_projet/index.html" }
    ]
}
```

| Champ | À savoir |
|---|---|
| `titre` | `{ fr: "...", en: "..." }`, ou simplement `"Titre"` s'il est identique dans les deux langues. |
| `categories` | Un ou plusieurs `id` de la liste `CATEGORIES` : domaines et/ou sous-tags (voir plus bas). |
| `outils` | Optionnel. Un ou plusieurs `id` de `outils-data.js`. Ils s'affichent en petits tags sur la carte et alimentent le compteur de la section « Mes outils ». |
| `video` | N'importe quel lien YouTube (`youtu.be/...`, `youtube.com/watch?v=...`). |
| `image` | À la place de `video` : chemin d'une image, ex. `"img/miniature_projets/mon_logo.jpg"`. Option : `imageStyle: "width: 80%;"` pour la réduire. |
| `description` | `{ fr: "...", en: "..." }`. Si `en` est absent, le texte français est utilisé. |
| `liens` | Optionnel. Chaque bouton a un `type` (voir ci-dessous) et une `url`. |

Types de boutons disponibles : `doc`, `manuel`, `document`, `github`, `itch`, `page`, `site`.
Le texte du bouton est traduit automatiquement.

## Ajouter une catégorie (domaine ou sous-tag)

Les filtres des projets ont **deux niveaux** :

1. les **domaines** (1re rangée) : Jeux, Level Design, Programmations, Autres ;
2. les **sous-tags** (2e rangée, visible quand on clique sur leur domaine) : ex. Level Design → Layout, Blockout, Réalité virtuelle.

Dans `projets-data.js`, ajouter une ligne dans `window.CATEGORIES` :

```js
// un nouveau domaine
{ id: "gameDesign", fr: "Game Design", en: "Game Design" },

// un sous-tag : il suffit d'indiquer son domaine dans "parent"
{ id: "narration", parent: "gameDesign", fr: "Narration", en: "Narrative" },
```

- `id` : nom court, sans espace ni accent, à réutiliser dans `categories` des projets.
- Un projet tagué avec un sous-tag (ex. `"blockout"`) apparaît **aussi** dans son domaine (`levelDesign`) : pas besoin de mettre les deux, mais ça ne gêne pas.
- Les boutons apparaissent automatiquement, dans les deux langues, avec le nombre de projets.
- Une catégorie sans aucun projet est cachée : on peut la créer à l'avance.
- L'ordre de la liste = l'ordre dans les filtres.

## Ajouter un outil

Dans `outils-data.js`, ajouter une ligne dans `window.OUTILS` :

```js
{ id: "houdini", titre: "Houdini", image: "img/environnements/houdini.webp", section: true },
```

- `image` est optionnelle : sans logo, la première lettre s'affiche à la place.
- `section: true` : l'outil apparaît dans la section « Mes outils ».
  `section: false` : seulement en petit tag sur les projets (c'est le cas des langages de programmation).
- Le nombre de projets par outil est calculé tout seul à partir du champ `outils` des projets.
  Un clic sur un outil (dans la section ou sur une carte) filtre les projets ; un 2e clic retire le filtre.

## Ajouter un type de bouton

Dans `projets-data.js`, ajouter une ligne dans `window.TYPES_LIENS` :

```js
steam: { fr: "Voir sur Steam", en: "View on Steam" },
```

Puis l'utiliser dans un projet : `{ type: "steam", url: "https://..." }`.

## Ajouter une expérience

Dans `experiences-data.js`, copier ce bloc **à la fin** de la liste `window.EXPERIENCES`
(juste avant le `];`), avec une virgule après l'expérience précédente.
La dernière de la liste s'affiche en haut de la chronologie.

```js
{
    type: "stage",
    periode: { fr: "Janv. – mars 2025", en: "Jan – Mar 2025" },
    titre: { fr: "Stage – Level design", en: "Internship – Level design" },
    lieu: "Studio, Ville",
    description: {
        fr: "Ce que j'ai fait.",
        en: "What I did."
    },
    liens: [
        { type: "site", url: "https://..." }
    ]
}
```

- `type` : `formation`, `stage`, `emploi` ou `evenement` (l'étiquette de couleur est traduite automatiquement).
  Pour un nouveau type, ajouter une ligne dans `window.TYPES_EXPERIENCES`.
- `periode`, `titre`, `lieu` : `{ fr: "...", en: "..." }` ou un simple texte s'il est identique.
- `liens` : optionnel, mêmes types de boutons que les projets.
- `lieu` est optionnel.
- Seules les **3 plus récentes** sont affichées ; les autres apparaissent avec le bouton « Voir les plus anciennes ».
  Pour changer ce nombre : `EXPERIENCES_VISIBLES` en haut de la partie « EXPÉRIENCES » de `app.js`.
- Si la liste est vide, la section et son lien dans le menu disparaissent automatiquement.

## Ajouter une image

Pour que le site reste rapide, les images sont au format **WebP** et pas plus grandes que nécessaire :

- logos et miniatures (`img/...`) : **800 px** maximum de côté ;
- captures et photos des pages de rédaction : **1920 px** de large maximum ;
- schémas / layouts : **2400 px** maximum.

Le plus simple : glisser l'image sur https://squoosh.app, choisir **WebP** (qualité ~80),
réduire la taille si besoin (*Resize*), puis télécharger le résultat dans le bon dossier.
Les `.jpg` et `.png` fonctionnent aussi, ils sont seulement plus lourds.

## Changer les tailles

Tout se règle en haut de `style.css`, dans le bloc `:root` :

| Variable | Effet |
|---|---|
| `--echelle: 1;` | Grossit ou réduit **tout le site** d'un coup : `1.1` = 10 % plus grand, `0.9` = 10 % plus petit. |
| `--fs-xs` à `--fs-xl` | Les 5 tailles de texte du site (du pied de page aux titres de section). |
| `--text-max: 65ch;` | Longueur maximale d'une ligne de texte (65 caractères). |
| `--wide-max: 1400px;` | Largeur maximale de la grille des projets. |

## Vérificateur automatique

En local (http://127.0.0.1:8000), le fichier `verification.js` relit les fichiers de données à chaque chargement.
S'il trouve un problème (id d'outil ou de catégorie inconnu, type de lien inexistant, traduction `en` oubliée,
lien YouTube non reconnu...), **un encadré rouge s'affiche en bas de la page** avec la liste des corrections.
Il ne s'affiche jamais sur le site en ligne.

## Référencement (Google, partage de liens)

- Chaque page a un aperçu de partage (image `og-image.png` ou `og.jpg` + titre + description).
- `sitemap.xml` liste les pages du site. Pour aider Google à les trouver, l'ajouter une fois dans
  [Google Search Console](https://search.google.com/search-console) (Sitemaps → `sitemap.xml`).
- Nouvelle page de rédaction ? Ajouter son adresse dans `sitemap.xml` et copier les balises `og:` d'une autre page.
  Pour qu'elle apparaisse dans la navigation « ← Précédent / Suivant → », ajouter une ligne dans
  `PAGES_DETAILLEES` en haut de `redaction_projet/redaction-translations.js`.

## Statistiques de visite

Le site utilise **GoatCounter** (gratuit, sans cookies, donc pas de bandeau de consentement à afficher).

- Tableau de bord : https://ethanlacomme.goatcounter.com (connexion avec ton compte GoatCounter).
- On y voit les pages vues, d'où viennent les visiteurs (LinkedIn, Google...), les pays et le type d'appareil.
- Les visites en local (127.0.0.1) ne sont pas comptées.
- Nouvelle page ? Copier la ligne `<script data-goatcounter=...>` du `<head>` d'une autre page.

## Erreur fréquente

Si plus aucun projet ne s'affiche après une modification, c'est presque toujours :
- une **virgule manquante** entre deux projets (`},` puis `{`),
- ou un **guillemet** `"` dans un texte : écrire `\"` ou utiliser l'apostrophe typographique `’`.

Appuyer sur F12 dans le navigateur → onglet *Console* : la ligne de l'erreur y est indiquée.
