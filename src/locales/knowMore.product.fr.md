## Présentation

Cette page représente un produit simple avec peu de champs.
Cette page est séparée en deux parties : une partie ou sont affichées des valeurs, et une partie où les valeurs du produit sont éditables.

### Affichage des valeurs

Comme dans la page vente, quelques valeurs sont affichées sans qu'elles ne fassent directement partie des données du produit. Par example, les données du produit ne contiennent que son prix sans TVA.

Le prix du produit avec TVA, par example, est calculé en utilisant de la programmation visuelle, définie par l'utilisateur final.
Vous pouvez accéder à la programmation visuelle d'un élément en cliquant sur le bouton <strap-button frozen>Editer la valeur dynamique</strap-button> dans la fenêtre d'édition d'un élément.
Pour plus d'aide avec les pages dynamiques, cliquez sur le bouton <strap-button frozen>Aide</strap-button> à côté de celui que vous avez utilisé pour ouvrir cette fenêtre.

Tout ceci montre l'intéret des pages dynamiques : non seulement vous pouvez arranger la page tel que VOUS le souhaitez, mais en plus, vous pouvez arranger les données de la page par vous-même.

### Edition des valeurs

Dans la seconde moitié de la page sont situés les champs qui permettent d'éditer les informations du produit.
Chaque changement de ces champs mettra automatiquement à jour les valeurs calculées par programmation visuelle partout sur la page.
Essayez de modifier le prix du produit et voyez son prix avec TVA être changé en fonction de se que vous avez rentré, en temps réel !

## Technique

A la base, cette page donne à l'utilisateur accès aux champs du produit via les bindings.
Cette page est le parfait exemple pour montrer à quoi sont destinées les pages dynamiques. Elles donnent le pouvoir à l'utilisateur de manier et d'afficher les données comme il le souhaite, sans l'intervention d'un développeur.

Du côté du développeur, il n'y a rien a faire, juste donner à la page les bindings et les données du produit.

Un élément important à noter : le tableau représentant les ventes où ce produit apparait n'est pas un élément générique. Il a été conçu spécialement pour cette page. C'est important dans la mesure où cela montre que si besoin, un développeur peut créer un composant spécifique pour une page.