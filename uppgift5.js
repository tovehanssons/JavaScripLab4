/* Lösning till uppgift 5: Skapat en array med maträtter. Av Tove Hansson, 2026 */

"use strict";
const dishes = ["Pasta", "Pizza", "Sushi", "Tacos", "Kebab"];

console.log(dishes);
console.log(dishes[0]);
console.log(dishes[dishes.length - 1]);
dishes.push("Hamburgare");
dishes.shift();

console.log(dishes);