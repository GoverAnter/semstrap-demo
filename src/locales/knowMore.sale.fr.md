## Présentation

Cette page représente un produit simple avec peu de champs. Aucun champ n'est éditable sur cette page (choix de conception, une vente a été faite, elle ne devrai pas être modifiable).

Comme dans la page produit, quelques valeurs sont affichées sans qu'elles ne fassent directement partie des données de la vente.

La valeur "produits vendus", par example, est calculé en utilisant de la programmation visuelle, définie par l'utilisateur final.
Vous pouvez accéder à la programmation visuelle d'un élément en cliquant sur le bouton <strap-button frozen>Editer la valeur dynamique</strap-button> dans la fenêtre d'édition d'un élément.
Pour plus d'aide avec les pages dynamiques, cliquez sur le bouton <strap-button frozen>Aide</strap-button> à côté de celui que vous avez utilisé pour ouvrir cette fenêtre.

Tout ceci montre l'intéret des pages dynamiques : non seulement vous pouvez arranger la page tel que VOUS le souhaitez, mais en plus, vous pouvez arranger les données de la page par vous-même.

## Technique

Référez vous à la page [A propos](/about) pour plus de détails sur le fonctionnement des pages dynamiques.

A la base, cette page donne à l'utilisateur accès aux champs de l'objet vente via les bindings. Et c'est tout !
Cette page est le parfait exemple pour montrer à quoi sont destinées les pages dynamiques. Elles donnent le pouvoir à l'utilisateur de manier et d'afficher les données comme il le souhaite, sans l'intervention d'un développeur.

Du côté du développeur, il n'y a rien a faire, juste donner à la page les bindings et les données du produit.

Un élément important à noter : le tableau représentant les produits dans cette vente n'est pas un élément générique. Il a été conçu spécialement pour cette page. C'est important dans la mesure où cela montre que si besoin, un développeur peut créer un composant spécifique pour une page.