/**
 * JOUR 04 — GUIDE 01
 * Accès et Modification
 *
 * OBJECTIF
 * Créez un tableau fruits = ["Pomme", "Banane", "Orange"]. Changez "Banane" par "Mangue" et affichez le dernier élément du tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
const fruits = ["pomme", "Banane", "orange"];
fruits[2] = "Mangue";
console.log(fruits[fruits.length - 1]);
