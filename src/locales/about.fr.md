## Qu'est-ce que c'est ?

Cette démo est principalement une vitrine de mon framework privé (et très personnel !) de composants Vue, appelé Semstrap.
Tout simplement, c'est un mélange spirituel (c'est seulement MON code, aucune copie ni inspiration) entre :
- La partie JavaScript de Bootstrap, qui permet d'utiliser des composants avec litéralement 0 lignes de Javascript pour le developpeur.
- La partie CSS de Semantic UI, qui est juste tout comme il faut, aux petits oignons. Par contre, la partie JS de Semantic UI est juste horrible !!

Ce framework consiste en des composants Vue (comme un composant bouton ou lien par exemple), et leur stype associé (qui est dans un projet séparé). Une grosse partie du framework (la partie style) est donc utilisable sans Vue.

Tout le style est configurable via des variables SCSS. Le principal avantage de ce framework est qu'il a un mode de compatibilité Wordpress, qui empèche les collisions de classes CSS, en utilisant soit une classe comme Semantic UI (ici, "strap"), soit un préfixe aux classes composants.

Par exemple, si on n'active pas la compatibilité Wordpress, un bouton va ressembler à ça :

```html
<button class="strap flat red button">Mon bouton</button>
```

Si on active la compatibilité Wordpress, notre bouton ressemblera à ca :

```html
<button class="flat red strap-button">Mon bouton</button>
```

Tout est fait automatiquement à la compilation du SCSS, et est configurable à travers des variables SCSS. Vous pouvez même changer la classe/préfixe si l'envie vous en prends !

Les composants Vue sont fait pour être utilisés seuls, sans ajouter de classes HTML ou de style, et sont configurés avec les props Vue. Ces composants incluent un tas de fonctionnalités comme une réactivité des boutons et des liens accrus au clique (plus d'état actif à l'inifini !).

## Pourquoi est-ce intéressant ?

> "Ok, c'est super, vraiment, mais pourquoi ça devrait m'interesser ? Bootstrap et Semantic UI ne sont pas parfait, mais en quoi le tiens est meilleur ?"

Pour être honnête, j'ai vu cette question arriver ! ;)

1. Rien n'est parfait, il n'y a que des choses qui conviennent. Et ce framework me convient, j'aime la manière de l'utiliser et ce qu'on peut faire avec (forcément...).
2. Même s'il n'est pas aussi complet que la concurrence, il a des "atouts charme" indéniable, voir la section suivante.
3. Plus de conflit CSS avec Wordpress. Vous en réviez ? J'en ai fait une réalité ! ;p
4. Ce point est plus obscure, mais j'ai tout fait pour que chaque composant soit optimisé, ce qui aide à avoir une bonne experience utilisateur. En aucun cas il est parfait (rien n'est parfait), mais les résultats sont là (et pour certaines parties, c'est bien mieux que des libs similaires de composants Vue).

## Fonctionnalités super cool

Eeeeeeeet voilàààààà !!

### Fenêtres (et sa gestion)

Notre première grande fonctionnalité est la partie fenêtres du framework. Elle permet de déclarer un composant fenêtre, puis de pouvoir l'instancier n'importe où, n'importe quand. Les fenêtres persistent aux changements de page (au moins dans une Single Page Application), et sont gérées par l'utilisateur à travers les onglets (tellement similaire à notre ami Windows !!).

<strap-button v-on:click="openDemoWindow">Testez moi !</strap-button>

Pour vous prouver à quel point c'est magique, ce componsant démo ne fait que 13 lignes (sans compter con contenu) !

### Programmation visuelle

Et oui, j'ai fait ça !
Je l'ai fait principalement pour améliorer les interactions possibles avec les pages dynamiques (voir ci dessous), mais en soit, c'est vraiment cool (et plutôt énorme) !

Pour le voir en action, allez sur la [page produit](/products/764635af-5f8e-43e2-993d-0b05bcc12496).
Ensuite, activez le mode édition (en cliquant sur le bouton prévu à cet effet).
Choisissez un élément, le plus intéressant dans notre cas étant le calcul du prix avec TVA. Cliquez sur l'icone d'édition de cet élément : <strap-icon icon="edit" secondary />

Ensuite, une fenêtre va s'ouvrir. Vous y verrez un bouton <strap-button>Editer la valeur dynamique</strap-button>, cliquez dessus !
Cela va ouvrir la fenêtre de programmation visuelle de cet élément.

Pour l'instant, il n'y a qu'une quantité limité d'étapes à ajouter aux "programmes", mais, eh, c'est qu'une démo !!
Ajouter une étape en code est un élément très simple (et très permissif, je l'ai conçu dans ce sens), cela ne prends que quelques lignes de code, le principal à faire étant la fonction d'évaluation.

Si vous allez voir le [Tableau de bord](/) et si vous regardez le "programme" d'un des éléments, vous verrez que les valeurs sont déjà calculées, et que les "programmes" sont uniquement fait pour les lier à des éléments (pour les afficher).
C'est la deuxième méthode d'utilisation de la programmation visuelle. Vous pouvez simplement donner des valeurs précalculées à l'utilisateur, et lui décidera d'appliquer d'autre calcul, ou de les afficher tels quels (ou de ne rien en faire du tout !). Ce qui permet de précalculer des valeurs en back-end mais de toujours les rendre disponible pour l'utilisateur, pour lui donner la flexibilité dont il a besoin.

L'étape "Données de la page" est générée automatiquement pour refleter les changements dans les champs de la page.

### Pages dynamiques

C'est la chose principale que vous voyez sur les pages produit, vente et tableau de bord.

Ce composant vous donne la possibilité d'éditer vos pages avec du drag'n'drop, en les redimensionnant, pour arriver à un résultat personnalisé.
Le but principal de ce... sous-framework (vu la taille)... est de donner à l'utilisateur la possibilité de créer ses propres représentations d'objets, pour convenir a tous, par la personnalisation, en terme d'ergonomie et d'utilisabilité.

Pour le developpeur, une simple déclaration du composant (`<strap-pooled-dynamic-page>`) suffit, en lui donnant (ou pas) un template de page préfait (ou les modifications que l'utilisateur y a apporté), et surtout, les données de la page et les bindings.

Les pages dynamiques sont basées sur un principe simple : un utilisateur doit pouvoir visualiser un objet (comme une représentation de produit, les *données*). Cet objet a des champs (comme le prix du produit). Ces champs sont définit par les bindings, qui disent au composant comment interpreter les champs, et comment l'utilisateur peut interagir avec.

Vous vous souvenez de l'étape "Données de la page" un peu plus haut ? Et bien sa définition est générée à partir des bindings, ce qui veut dire que l'utilisateur peut avoir accès à ce qui était avant réservé aux developpeurs.
Avant, on avait besoin d'un developpeur pour créer des éléments et leur assigner des données, maintenant, l'utilisateur peut le faire seul, de manière simplifiée.
Il peut même utiliser des valeurs pour effectuer des calculs (comme une moyenne) et afficher les résultats comme il le souhaite.
Le tout sans rien savoir de comment tout fonctionne.

Vous voulez avoir des composants spécifiques ? Vous pouvez !

Si vous allez sur une page [produit](/products/764635af-5f8e-43e2-993d-0b05bcc12496), vous pourrez voir le tableau représentant les dernières ventes de ce produits. Ce composant a été fait spécialement pour cette démo.
Comme dit précédement, un développeur peut précalculer des valeurs, et, en utilisant les bindings, un utilisateur peut acceder à ces valeurs et les associer à un champ (ou tout autre composant). De cette manière, un developpeur peut créer des valeurs spécifiques et/ou impossible à faire avec la programmation visuelle,  mais toujours en donnant à l'utilisateur final la possiblité de faire quelque chose avec ces valeurs.

## Le future (ou la Promise pour un dev JS !)

1. Remplacer les dépendances qui doivent l'être (voir ci-dessous)
2. Finir les composants à finir (sans blague !) (inclus les date/time/datetime picker et l'éditeur WYSIWYG)
3. Améliorer les listes et tables dynamiques (remarquez comme cette fonctionnalité n'est PAS dans la liste)
4. Un back-end peut-être ?
5. Un query language. Pourquoi ? Parceque travailler avec des tableaux dans la programmation visuelle ne peut pas être efficace, parceque les "programmes" sont éxécutés indépendament les uns des autres. Ce qui veut dire que si on a 3 "programmes" qui parcourent le même tableau, le tableau sera bien parcouru... 3x, même s'il fait plusieurs millions d'éléments. Un query language va permettre de résoudre ces problèmes puisque toutes les queries d'une même page seront éxécutés dans le même tour de boucle, ce qui veut dire qu'on ne parcours le tableau qu'une seule fois pour potentiellement n résultats. La deuxième motivation pour faire le query language est de donner la possibilité à l'utilisateur de demander lui-même les informations dont il a besoin au back-end. Ces informations sont souvent des données précalculées et mises en cache. Vous vous souvenez de la page [Tableau de bord](/dashboard) ? C'est précisément dans ce genre de cas qu'on utiliserai le query language, avec 0 calcul client-side.

Avec ces fonctionnalités ajoutées, je pense que je pourrai consider le framework Semstrap comme étant majoritairement terminé.
Pas d'inquiétudes, il y aura toujours de la place pour des améliorations, voir même de nouvelles fonctionnalités !

## Dépendances

Vous allez être surpris !!

Dépendances Vue (obligatoires) :
- Vue
- Vuex -> Store pattern pour les apps vue, utilisé par les fenêtres, par la programmation visuelle, par le système de notification, et par les menus contextuels
- Vue i18n -> module d'inter...blablabla...tion (i18n pour faire plus court), utilisé partout dans le framework
- (Optionnel) Vue router -> uniquement présent pour la compatibilité du composant `<strap-link>` dans le framework, uniquement une dépendance majeure dans la démo
- (Va être supprimé) Portal vue -> utilisé dans la programmation visuelle pour le bon fonctionnement des fenêtres modales, je vais le remplacer par une solution moins lourde au plus long terme

Utilisé par la dépendance @inveasy/strong-type (c'est moi qui l'ai fait !!) :
- Decimal.js -> utilisé pour la gestion des nombres, parceque n'importe quel developpeur sait a quel point les opérations sur des nombres flottants peuvent être... flottantes...
- Luxon -> Gestion des objets date et heure

Dépendances principales du framework :
- v-tooltip -> juste un wrapper pour une très bonne lib JS, de toutes façon je n'aurai pas fait mieux, ni en fonctionnalité, ni en taille
- (Va être supprimé) imask (et son wrapper vue-imask) -> gestion des masques de champs, la dépendance étant très mal faite (pas de la faute de l'auteur, juste une question de design) pour de la réactivité, je compte faire un système de masques, ce qui permettera d'avoir plus de fonctionnalités notamment dans les pages dynamiques
- (Pas utilisé dans cette démo, je pense qu'elle va virer au profit de quelque chose fait maison) vuedraggable -> (pas) utilisé dans les tables dynamiques

Tout le reste vient de moi, impressionnant ?

## Statistiques du projet

Une chose importante à garder en tête : je suis tout seul à travailler sur ce framework.

Voici les dernières statistiques Sonarqube pour Semstrap :

- 8835 lignes, dont 6736 lignes de code
- 5660 lignes de TypeScript, 635 lignes de HTML, 441 lignes de JavaScript
- 3.2% de duplication (283 lignes exactement) (l'alerte sonarqube par défault se déclenche à 3%)
- Comme rapporté par Sonarqube : pas de bugs, pas de vulnérabilités, pas de problème de code majeur
- 63 classes, 31 interfaces
- 194 fichiers, dont 130 fichiers TypeScript

Statistiques Sonarqube pour la partie SCSS du framework :

- 3666 lignes, dont 3176 lignes de code
- Uniquement composé de SCSS
- pas de bugs, pas de vulnérabilités, pas de problème de code (du tout !)
- 45 fichiers

Statistiques Sonarqube pour cette démo (attention, cette démo contient les données des produits et des ventes, et les définitions des pages dynamiques et de programmation visuelle, qui ne sont pas vraiment des parties de la démo, mais du contenu généré) :

- 2350 lignes, dont 2065 lignes de code
- 1957 lignes de TypeScript, 89 lignes de HTML, 12 lignes de CSS, 7 lignes de JavaScript
- 32.7% de duplication (parceque les définitions sont le plus gros morceau de la démo, et c'est principalement la même chose avec uniquement quelques valeurs qui changent)
- pas de bugs, pas de vulnérabilités, pas de problème de code (encore une fois, du tout !)
- 13 classes, 9 interfaces
- 45 fichiers, dont 30 fichiers TypeScript