## Présentation

Cette page représente un tableau de bord plutôt classique, en utilisant les pages dynamiques et des valeurs pré-calculées mises à disposition de l'utilisateur.

Ces valeurs, ici calculées à l'affichage de page, sont normalement des données d'aggrégation mises en cache. cette page est donc, par extension, une démonstration de la possibilité pour l'utilisateur d'utiliser des champs indépendament d'un objet de domaine.

## Technique

Référez vous à la page [A propos](/about) pour plus de détails sur le fonctionnement des pages dynamiques.

Cette page peut devenir completement dynamique si en plus de générer les données, le back-end se charge aussi de générer les bindings, ce qui donne une possibilité d'évolution de schéma infinie sans modification du front-end.
Cette page montre aussi la flexibilité des bindings : si le développeur a besoin de rajouter des champs particuliers/pré-calculés/serveur/d'autres APIs, c'est possible simplement !!