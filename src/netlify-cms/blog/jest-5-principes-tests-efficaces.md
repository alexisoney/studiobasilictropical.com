---
slug: jest-5-principes-tests-efficaces
title: "Jest : mes 5 principes pour écrire des tests efficaces"
date: 2020-06-07T13:34:14.975Z
thumbnail: https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591631975/studio-basilic-tropical/jest-5-principes/Jest-5-principes-tests-efficaces_cn7wva.jpg
category: Développement
author: Alexis
intro: Écrire des tests est vital quand l'on travaille sur des projets rendus
  public et qui vont grandir avec le temps. Voici 5 principes qui régissent mon
  écriture de tests avec Jest pour délivrer un maximum de qualité.
template: blog
---
## 1. Écrire ses tests en premier (= TDD)

### Test Driven Development, c’est quoi ?

Car il est inutile de réinventer la roue, voici la définition tirée de l’article Wikipedia intitulé [Test driven development](https://fr.wikipedia.org/wiki/Test_driven_development)

*Test-Driven Development (TDD), ou Développements Pilotés par les Tests en français, est une méthode de  développement logiciel , qui consiste à concevoir un logiciel par petits pas, de façon itérative et incrémentale, en écrivant chaque test avant d’écrire le  code source  et en remaniant le code continuellement.*  

La méthodologie TDD fait l’objet de conférences entières, aussi, je vais essayer d’être assez bref dans mon explication du pourquoi je l’utilise.

### Avantages

Écrire du code, c’est apporter une solution. Une solution, c’est répondre à de conditions, des demandes, et des contraintes. Bref : un cahier des charges.

Écrire ses tests en premier, c’est ni plus ni moins qu’écrire le cahier des charges en définissant en amont “Le code doit faire X quand il se passe Y”. 

Une fois le cahier des charges *logiciellement* retranscrit, on peut donc commencer à écrire le code et valider étapes par étapes que notre code répond à toutes les demandes, sans jamais en oublier une seule, et sans devoir vérifier manuellement chaque résultat *(grâce à la commande `--watch` de Jest)*.

Cela aide aussi à rester focus: c’est un plan qui décrit étape par étape ce que l’on doit valider. On peut démarrer le code, valider 3 étapes sur 15, aller faire autre chose, et revenir sur son code en sachant exactement où on en est. Ça aide également à garder une bonne qualité constamment : on a tous des jours “avec” et des jours “sans”, avec le TDD on se met à l’abris décrire de la mauvaise qualité.

Une fois toutes les conditions remplies, on peut même s’amuser à optimiser le code, le rendre plus petit ou plus lisible sans avoir la crainte de casser quelque chose puisque les tests seront là pour nous confirmer que tout fonctionne toujours.

Et dans le future, si nous revenons sur notre code ou, plus dangereux encore, une autre le fait, les risques de casser quelque chose sans faire exprès sont quasi nulles.

### Désavantages

Principal désavantages de la méthode, c’est qu’elle demande de la discipline. C’est toujours plus plaisant d’aller écrire son code et regarder dans le navigateur le résultat que de passer un peu de temps à écrire tous les tests.

Second désavantages selon certains, c’est que cela nécessite un peu plus de temps. Cet argument n’est valable, et encore, que si vous n’écrivez aucun test. Si au final vous écrivez votre code, puis le test, vous allez gagner du temps plutôt qu’en perdre !

## 2. Décrire ses tests avec “it should … when …”

La structure “it should … when …” permet de se poser les deux seuls questions qui animent un test : que fait notre morceau de code quand il est soumis à tel ou tel événement.

Un test ne devrait jamais être trop compliqué ni mixer plusieurs scénarios. Bien entendu on peut écrire des tests plus larges que d’autres selon ce que l’on test, mais deux objectifs distincts doivent être divisé en deux tests.

Parfois :

`it('checks if the title is on the page')`

Ce que je préfère :

`it('should render a title when it gets a title property')`

- - -

Parfois :

`test(user can add the product to the cart')`

Ce que je préfère :

`it('should call addToCart() function when user clicks on the "Add" button')`

## 3. Isoler au maximum les données de chaque test

Que l’on test une function ou un component, nous passons des propriétés à l’élément testé.

Lorsque l’on test son élément, pour éviter autant que possible les interférences et garder ce principe d’isolation au maximum, je recommande fortement d’utiliser aussi peu que possible un objet global contenant toutes les propriétés ou de passer des propriétés inutiles lors d’un test

Fragile:

```javascript
describe('hasAnimal()', () => {
  const data = ['🦁', '🐶', '🚀'];

  it('should return true', () => {
    const result = hasAnimal(data);
    expect(result).toBe(true);
  });
});
```

Précis:

```javascript
describe('hasAnimal()', () => {
  it('should return true when it gets one animal', () => {
    const data = ['🦁', '🐶', '🚀'];
    const result = hasAnimal(data);
    expect(result).toBe(true);
  });

  it('should return true when it gets more than one animal', () => {
    const data = ['🦁', '🐶', '😺', '🐝'];
    const result = hasAnimal(data);
    expect(result).toBe(true);
  });

  it('should return true when it gets animals and non-animal', () => {
    const data = ['🦁', '🐶', '🚀', '🥤'];
    const result = hasAnimal(data);
    expect(result).toBe(true);
  });
});
```

## 4. Utiliser `test.each` dès que possible

`test.each` est le `forEach()` pour Jest. Au lieu de répéter 3, 4 ou 5 fois le même test en changeant juste un paramètre, on peut tester la même expression plusieurs fois, dans un seul et même code. 

```javascript
describe('addOne()', () => {
  test.each(['Foo', ['Bar'], { baz: 'Baz' }])('should return null when it gets %s', (i) => {
    const result = addOne(i);
    expect(result).toBeNull();
  });
});
```

Résultat:

![Jest - test,each - Exemple](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591537925/studio-basilic-tropical/jest-5-principes/jest_test-each_z31hao.png "Jest - test,each - Exemple")

## 5. Contrôler son coverage en live

Que je sois entrain d’écrire un morceau de code en appliquant la méthode ou que je sois entrain d’augmenter la couverture en test d’une fonction, j’aime connaître en live la couverture actuelle en plus de savoir quels tests échouent. Ça ne prend pas plus de place sur l’écran, mais ça m’aide à être sûr que tout les cas de figure sont bien couverts.

Pour se faire, on combine `jest [fichier_test] --watch --coverage --collectCoverageOnlyFrom=[fichier_invocant_la_fonction]` 

Par exemple: `npm test — /Users/Alexis/Desktop/Development/Alexis/sbt-gatsby/sites/studio-basilic-tropical/src/components/__tests__/playground.test.js —watch —coverage —collectCoverageOnlyFrom=/Users/Alexis/Desktop/Development/Alexis/sbt-gatsby/sites/studio-basilic-tropical/src/components/playground.js`

Pour gagner du temps dans le copier / coller de mes noms de fichiers j’utilise la très pratique commande de VSCode `File: Copy Path of Active File`.

![Jest - test coverage en live](https://res.cloudinary.com/studio-basilic-tropical/image/upload/v1591537925/studio-basilic-tropical/jest-5-principes/jest_test-coverage_pwbkt2.png "Jest - test coverage en live")

Attention, dans le cas d’un composant en React le *coverage* peut-être très vite biaisé et ne reflète pas nécessairement la réelle qualité de votre test en fonction de comment votre code est construit.