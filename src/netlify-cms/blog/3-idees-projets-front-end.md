---
slug: 3-projets-portfolio-front-end
title: "Front-end : 3 projets pour ton portfolio et préparer tes entretiens"
date: 2020-06-28T15:24:53.911Z
thumbnail: https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1593374306/studio-basilic-tropical/front-end-3-idees-projets/cover_ifl9fx.jpg
category: Développement
author: Alexis
intro: J’ai démarré ma carrière de développeur Front-end aux Pays-Bas, et plus
  précisément Amsterdam. Ici, que l’on postule ou que l’on fasse démarcher par
  des recruteurs, le processus de recrutement comporte à un moment donné un test
  technique à réaliser chez soit. Bien souvent ce test est demandé entre le
  premier et le second entretien avec les recruteurs.
template: blog
---
J’ai postulé à  plusieurs offres pour chercher mon premier travail, 29 pour être exacte. Beaucoup ne m’ont pas répondu, j’ai passé quelques entretiens, réalisé 4 tests et ai finalement réussi à me faire embaucher par une entreprise.

Après 8 mois dans cette agence je voulais changer, et me suis fait démarché au même moment par une entreprise fort intéressante et pour qui je travaille à l’heure où j’écris ces lignes. Même si c’est eux qui sont venus me chercher, j’ai du passer par le processus de recrutement classique à savoir entretient avec 2 recruteurs, test technique à la maison, test de QI, test de personnalité, entretien avec 3 membres de l’équipe et nouvel entretient avec les 2 recruteurs. C’est beaucoup, je vous l’accorde.

Au final, donc, j’ai passé 5 tests. 3 d’entre eux m’ont pris beaucoup pour une carrière de développeur et je pense que si tu n’as pas d’idée de projets ou que tu veux t’entrainer pour de tels tests ça peut aider à donner des idées.

Je vais essayer de ne pas trop m’attarder à la notion technologiques, mais plus à la logique à démontrer dans le projet. Angular, React, Vue ou autre… les projets sont faisables dans tous les cas. Personnellement je les ai fait en React + Redux mais c’est adaptable.

Je fais aussi le choix de ne pas vous montrer les screenshots de ce que j’ai fait pour éviter de vous influencer et vous mettre dans les mêmes conditions que moi.

## Tic Tac Toe

Le tic-tac-toe est ce que l’on nomme le morpion en Français. Il est possible de voir la version de google à cette adresse: <https://www.google.com/search?q=tic+tac+toe>

![Tic tac toe](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1593358311/studio-basilic-tropical/front-end-3-idees-projets/tic-tac-toe_dpdfj2.png)

### Les contraintes

#### Temps pour réaliser le projet

Le projet doit être réalisé en moins d’une semaine si tu as déjà un emploi salarié à côté (au Pays-Bas on travaille 40 heures par semaine).

#### Structure du store

La contrainte majeure et qu’il va falloir utiliser un store comme Redux, React Context,  Vuex, etc… et respecter cette structure:

```
{
  "matchId": "5a5c6f9b4d749d008e07e695", //string, identifies the current match, required
  "boardState": [
    "x", "-", "-", // first row of the game board, positions 0, 1, 2
    "-", "o", "o", // second row of the game board, positions 3, 4, 5
    "-", "-", "x" // third row of the game board, positions 6, 7, 8
  ], // array of chars ( one of ['o','x','-']), required
  "lastMove": {
    "char": "o", // char one of ['o','x'], required
    "position": 4 // number from 0 to 8, required 
  }, // object, represents the last move of the player
  "customField1": "customValue1", // any format, optional for the developer
  "customField2": "customValue1", // any format, optional for the developer
  "customField3": "customValue1" // any format, optional for the developer
}
```

Nous avons donc :

* Une `matchId` permettant d’identifier de façon unique la partie
* Un `boardState` qui enregistre dans un tableau l’état du jeu
* Un `lastMove` qui permet de savoir le dernier coup joué par le joueur
* 3 `customFields` si besoin

#### Démarrage du jeu

C’est un choix aléatoire qui permet de savoir si l’ordinateur ou le joueur commence.

Si le joueur commence, il peut choisir entre X ou O. Si c’est l’ordinateur qui commence, l’ordinateur choisie aléatoirement X ou O.

#### Mouvements de l’ordinateur

L’algorithme de l’ordinateur est implémenté selon les souhaits du développeur et peuvent être expliqué à l’aide d’un schéma au besoin.

Pour simuler le temps de réflexion, l’ordinateur prend 1 à 3 secondes pour jouer.

#### Exemple d’une partie

Ceci est un exemple. Si le board est mis à jour d’une autre manière qui permet tout de même de répondre aux différents critères cela reste correcte.

La partie démarre:

```
{
  matchId: “5a5c6f980bc11e007432ca3f”,
  boardState: [
    “-“, “-“, “-“,
    “-“, “-“, “-“,
    “-“, “-“, “-“
  ]
}
```

L’ordinateur a été aléatoirement choisi pour jouer en premier et à aléatoirement choisi les O:

```
{
  matchId: “5a5c6f980bc11e007432ca3f”,
  boardState: [
    “-“, “-“, “-“,
    “-“, “o”, “-“,
    “-“, “-“, “-“
  ]
}
```

Le joueur joue:

```
{
  “matchId”: “5a5c6f980bc11e007432ca3f”,
  “boardState”: [
    “-“, “-“, “-“,
    “-“, “o”, “-“,
    “-“, “-“, “-“
  ],
  “lastMove”: { “char”: “x”, “position”: 0 }
}
```

Le board est mis à jour:

```
{
  “matchId”: “5a5c6f980bc11e007432ca3f”,
  “boardState”: [
    “-“, “-“, “-“,
    “-“, “o”, “-“,
    “-“, “-“, “-“
  ],
  “lastMove”: { “char”: “x”, “position”: 0 }
}
```

### Le tableau des points

Plus le nombre de critères est respecté, mieux c’est :

* Code propre et lisible (3 points)
* L’interface empêche de réaliser des mouvements non valides (2 points)
* Approche “functional programming” (3 points)
* Styles en CSS correctes (3 points)
* Le dernier coup réalisé par le jouer peut-être annulé (4 points)
* L’ordinateur doit toujours pouvoir faire match nul ou gagner (5 points)
* Seuls les éléments du board qui sont mis à jour sont rendu par le navigateur (= limiter le nombre de renders) (6 points)

## Bar de recherche d’un site e-commerce

Dans le cas d’un site e-commerce, la bar de recherche est un élément très important du business. Elle doit donc répondre aux normes d’accessibilités web, doit être testée pour ne pas envoyer en production quelque chose de cassé et doit pouvoir proposer de la prédiction à l’utilisateur.

Le projet se décompose en 4 exercices

### Exercice 1

![Exercice 1](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1593358311/studio-basilic-tropical/front-end-3-idees-projets/projet-2-exo-1_gakmbf.png)

Réaliser une barre de recherche similaire à la capture d’écran en prêtant attention à :

* Les styles doivent être écrits en CSS
* Le design doit être responsive
* Les normes d’accessibilité respectée
* Le composant doit avoir des test unitaires

### Exercice 2

![Exercice 2](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1593358311/studio-basilic-tropical/front-end-3-idees-projets/projet-2-exo-2_xrik6l.png)

Améliorer la barre de recherche de l’exercice 1 en s’appuyant sur cette capture écran en en prêtant attention à :

* Le composant a un état différent “onFocus”
* Un bouton permet de vider le champs s’il n’est pas vide 
* Ajouter des transitions sympas quand l’utilisateur interagit  avec le formulaire
* Le composant doit avoir des test unitaires

### Exercice 3

![Exercice 3](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1593358311/studio-basilic-tropical/front-end-3-idees-projets/projet-2-exo-3_yimssw.png)

Mis en place : en utilisant [GitHub - sideshowcoder/canned: Server to respond with fake API responses, by using a directory of files for finding out what to say!](https://github.com/sideshowcoder/canned) et en vous créant un petit fichier JSON, créez une API locale qui retourne  des données similaires à :

```
{
    "search" : "default",
    "suggestions":[
       {
          "searchterm":"heren truien",
          "nrResults":1100
       },
       {
          "searchterm":"dames truien",
          "nrResults":1501
       },
       ...		
}
```

Dans la partie front-end, crée un service qui ira chercher les informations de l’API pour les afficher dans le composant selon la capture d’écran ci-dessus. Faire attention à :

* Les suggestions sont proposées lors de l’évènement “onKeyUp” 
* La data est récupérée de l’API quand la recherche a au moins 2 caractères
* La data est récupérée de manière asynchrone
* Il est possible de voir la suggestion des résultats
* Test unitaires pour chaque scénario et utilisation d’un mock pour ne pas utiliser l’API lors de l’écriture de tests

### Exercice 4

Si ce n’est pas encore fait, documente ton composant de Storybook

## Création d’une Application Spotify

Finalement le dernier projet, qui peut être aussi le plus dur, est celui utilisant l’API Spotify.

Les conditions sont simples, dans le sens il n’y en a que peu, et c’est ce qui rend le projet complexe mais aussi cool à faire. Libre à vous de choisir les technologies que vous souhaitez, dans mon cas c’était du React / Redux.

Le sujet : créer une application permettant à un utilisateur Spotify de sélectionner 5 de ses chansons préférées et d’avoir des recommendations basées sur celles-ci. Liberté sur l’interface et les fonctionnalités, le but étant d’être vague pour voir le comportement du développeur face à cette demande.

Il va falloir savoir gérer l’authentification avec Spotify, la lecture d’une documentation.

Bon, le sujet est tellement vague que je me sens coupable de ne pas en donner plus d’informations, mais c’est la demande que j’ai eu et finalement je garde un très bon souvenir de ce projet.

## Conclusion

Ces projets sont très intéressants et ont chacun leur problématique. 

Certains sont contres ce type de projet lors d’entretiens, et j’en convient cela demande du temps, beaucoup de temps. Mais ce fut des expériences qui m’ont permis de codé plus et d’être meilleur.