---
slug: demarrer-projet-front-end
title: "Front-end: comment démarrer un projet en méthode Agile"
date: 2020-05-30T15:54:53.557Z
thumbnail: https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591024813/studio-basilic-tropical/demarrer-projet-front-end/demarrer-projet-front-end_pgi0pz.png
category: Développement
author: Alexis
intro: Comment développer rapidement des composants stables et qui apportent de
  la valeur à l’utilisateur ? Voici ma liste des questions essentielles à se
  poser au démarrage d’un projet. Vous aurez ainsi un un projet mieux défini,
  des points bloquants déjà anticipés et moins de stress lors du développement.
template: blog
---
Ces questions peuvent être utilisées dans tout environnement de travail et sont tout à fait adaptées à un environnement utilisant la méthode Agile puisque c’est dans ces conditions que je l’utilise.

Au démarrage d’un projet, la partie front-end consiste généralement à assembler :

* Les données fournies par un back-end
* Le design réalisé par un designer
* L’ordre de priorité des fonctionnalités décidé par un product owner

Cette check-list va nous permettre de clarifier chacun de ces éléments.

- - -

## Questions au back-end

Que l’on travaille avec une API tierce ou directement avec des back-enders, avant de démarrer un projet, il est bon de se poser les questions suivantes :

Les questions essentielles:

* Quelle est l’url de l’API ?
* Quel est le type de l’API ? (REST, GraphQL, etc…)
* L’API attend-elle des paramètres ? Si oui, lesquels ?
* À quoi ressemblent les données que l’on reçoit ?
* Y a-t-il une API de développement et une de production ?
* Y a-t-il une “sandbox” pour tester l’API de façon sécurisée ?

Les questions au cas par cas:

* Quelles sont les méthodes disponibles ? (GET, POST, DELETE)
* Quel est le code “Success” ?
* Quel est ou quels sont les codes erreur possibles ?

- - -

## Questions au designer

Pour mieux anticiper le développement, il est important de vérifier que l’on a un design pour chacun des 3 états de base d’une application, à savoir:

* onLoad
* onSuccess
* onError

Chaque étape peut, bien entendu, avoir des sous-états. Il ne faut pas hésiter à aller dans le détail et a penser aux “edge cases”.

Par exemple, pour le cas d’un composant affichant le nombre de visiteurs dans un magasin physique, il est bon de s’interroger sur ce qu’il se passe quand:

* Le magasin n’est pas encore ouvert
* Le magasin est fermé et ouvre demain;
* Le magasin est fermé toute la journée;
* Le magasin est ouvert mais le back-end ne renvoie pas de données.

Au delà du visuel, en matière de matériel il est important de vérifier que l’on possède tous les éléments de base:

* Les codes couleur
* La typographie: font-family et font-sizes
* Les unités de mesure
* Le texte qui sera intégré si possible

- - -

## Questions au product owner

Un projet qui fonctionne est un projet que l’on délivre étape par étape.

Les avantages :

1. L’utilisateur peut rapidement profiter d’une nouvelle fonctionnalité
2. On peut mesurer l’impact plus rapidement et ainsi mieux estimer si continuer à développer à de l'intérêt
3. Les pull requests sont plus petites, ce qui facilite le travail des reviewers
4. On peut plus facilement segmenter le travail entre plusieurs développeurs
5. Mettre en production des choses, même les plus petites qui soient, est gratifiant pour tout le monde

Avant chaque projet, dans une méthodologie Agile, il est bon de travailler en collaboration avec tout le monde sur le remplissage du cahier des charges du Minimum Viable Product : ce qui apporte le plus de valeur à l’utilisateur en un minimum de temps.

Remplir les 5 étapes clés du projet est un bon point de départ et peut permettre d'éviter bien du chaos. On peut le faire en discutant, ou demander à chacun de remplir chaque colonne avec les fonctionnalités qu’il envisage pour chaque étape.

Dans l’exemple ci-dessous, j’ai également utilisé une “user story” de base que j’ai ensuite étoffée à chaque étape. Pour faire ce schéma rien de fou, j’ai juste ouvert KeyNote.

![Projet front-end agile](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591024909/studio-basilic-tropical/demarrer-projet-front-end/front-end-projet-agile_gxtsme_dfsgo8.jpg "Projet front-end agile")

L'image de base pour mon inspiration vient de l’article de Andrew Wilkinson intitulé [Skateboard, Bike, Car](https://medium.com/@awilkinson/skateboard-bike-car-6bec841ed96e)

![](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591024869/studio-basilic-tropical/demarrer-projet-front-end/projet-methode-agile_uyajfm_ngvxzf.png)

- - -

## Question aux autres front-enders et à vous-même

Avec les réponses de chacun, on obtient une vision assez claire du projet, des étapes clés et du matériel que l’on va pouvoir utiliser.

Maintenant il est bon de se poser les questions relatives au front-end pour essayer de prévoir et planifier au mieux.

**Attention :** je dis bien planifier. En aucun cas il ne faut essayer d’estimer le temps que va prendre une tâche. C’est dur et quasiment impossible, c’est pour le cela que le travail de prioritisation est là.

La planification sert à :

* savoir ce que l’on va faire
* comment l’on va répartir les tâches
* anticiper d’éventuels soucis techniques ou interrogations

Les questions varient beaucoup selon la configuration du projet, mais globalement il est bon de se demander :

* Y a-t-il une architecture / structure / flow type pour implémenter ce type de fonctionnalité
* Faut-il stocker la donnée au niveau front-end ? Si oui, où ? Store, local storage, state, cookie, etc...
* Ai-je déjà certains composants que je peux réutiliser ?
* Peut-on éviter d’utiliser une librairie ? Si oui, à quel coût niveau temps ? Si non, à quel coût niveau limitations et augmentation du poids du bundle ? 
* Quelle est la stratégie de test pour ce composant : unit, fonctionnel et end to end.
* Y a-t-il un développeur ayant déjà fait quelque chose de similaire dans le site actuel ou la passé pouvant partager son expérience.

- - -

Une fois que l’on a tout ça on est prêt à démarrer !

Bon développement à tous !