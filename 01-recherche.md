# 🔎 Jour 04 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> En JavaScript, le premier élément d'un tableau se trouve à quel index ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Le premier élément d'un tableau se trouve à l'index 0, car JavaScript utilise une indexation qui commence à zéro (zero-based indexing).
> À compléter avec mes propres mots.

---

### Question 02

> Quelle est la différence entre les méthodes `.push()` et `.unshift()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.push() ajoute un ou plusieurs éléments à la fin du tableau, tandis que .unshift() les ajoute au début du tableau. Les deux méthodes renvoient la nouvelle longueur du tableau
> À compléter avec mes propres mots.

---

### Question 03

> Quelle est la différence entre `.pop()` et `.shift()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
pop: supprime et renvoie le dernier élément du tableau, tandis que .shift: supprime et renvoie le premier élément du tableau. Les deux méthodes modifient le tableau original et réduisent sa longueur de 1.
> À compléter avec mes propres mots.

---

### Question 04

> Que retourne la propriété `.length` d'un tableau vide `[]` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
 La propriété `.length` d'un tableau vide `[]` retourne **0**, car il n'y a aucun élément dans le tableau.
> À compléter avec mes propres mots.

---

### Question 05

> Quelle est la différence entre une boucle `for...in` et une boucle `for...of` ? Laquelle est recommandée pour parcourir les *valeurs* d'un tableau ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La boucle for...in parcourt les clés/index d'un objet ou d'un tableau (les indices, sous forme de chaînes de caractères), tandis que la boucle for...of parcourt directement les valeurs des éléments itérables (comme un tableau, une chaîne, une Map, etc.).
> À compléter avec mes propres mots.

---

### Question 06

>La boucle for...in parcourt les clés/index d'un objet ou d'un tableau (les indices, sous forme de chaînes de caractères), tandis que la boucle for...of parcourt directement les valeurs des éléments itérables (comme un tableau, une chaîne, une Map, etc.).
- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Effectivement, for...in sert surtout à parcourir les propriétés énumérables d'un objet (ou les index d'un tableau sous forme de texte), alors que for...of est conçue pour parcourir directement les valeurs d'un itérable.
> À compléter avec mes propres mots.

---

### Question 07

> Quelle méthode utiliseriez-vous pour fusionner deux tableaux en un seul ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Pour fusionner deux tableaux en un seul, on peut utiliser la méthode .concat(), qui retourne un nouveau tableau contenant les éléments des tableaux d'origine, sans les modifier.
> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence entre `.slice()` et `.splice()` lors de la manipulation d'un tableau ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.slice() retourne une copie d'une portion du tableau (du début à la fin spécifiés) sans modifier le tableau original. .splice(), en revanche, modifie directement le tableau original
> À compléter avec mes propres mots.

---

### Question 09

> Les tableaux en JavaScript sont-ils passés par *valeur* ou par *référence* lorsqu'ils sont assignés à une nouvelle variable ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Les tableaux en JavaScript sont passés par référence. Lorsqu'on assigne un tableau à une nouvelle variable, cette nouvelle variable pointe vers le même emplacement mémoire que l'original, et non vers une copie indépendante
> À compléter avec mes propres mots.

---

### Question 10

> Peut-on stocker des types différents dans un même tableau en JS (ex: nombres, strings, booléens en même temps) ? Est-ce une bonne pratique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

Oui, en JavaScript un tableau peut contenir des éléments de types différents (nombres, chaînes, booléens, objets, autres tableaux, etc.), car les tableaux ne sont pas typés strictement. Cependant, ce n'est généralement pas une bonne pratique, sauf cas particulier justifié. Mélanger les types rend le code plus difficile à lire, à maintenir et à déboguer, et augmente le risque d'erreurs.
## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
