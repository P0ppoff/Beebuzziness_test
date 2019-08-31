# BeeBuzziness Test Technique

## Step 1

Mise en place d’un projet avec ce qu’il faut pour développer.

## Step 2

On commance avec les chiffres les plus importants: 0, 1, 2 et 3. On peut maintenant lancer le programme avec ces trois arguments:
```shell script
$ yarn dev 0
$ yarn dev 1
$ yarn dev 2
$ yarn dev 3
```

## Step 3

### Avant de commencer

On commence la partie sympa pour l’esprit. Mon idée est de créer toujours 3 lignes pour les afficher ensuite avec le MAP.
Il va donc falloir zipper les chiffres les uns après les autres pour continuer sur la même logique.

## Une fois fini

J’ai pris un pause de midi puis j’ai continué. J’ai mis beaucoup de temps à trouver comment faire mon zip.
Je pensais naïvement que c’était natif JS comme dans certains langages et puis non. J’ai essayé avec *lodash*.
Mais ça ne me plaisait pas trop. J’ai fini par trouver mon bonheur avec [ceci](https://gist.github.com/renaudtertrais/25fc5a2e64fe5d0e86894094c6989e10).
Je l’ai testé puis refactoré pour mettre des noms de variables avec un peu plus de sens.
J’ai fini par ajouter les restes de chiffres. Maintenant le programme répond bien quand on lui donne des arguements à macher.
La prochaine étape est donc de mieux gérer l’input de l’utilisateur.
