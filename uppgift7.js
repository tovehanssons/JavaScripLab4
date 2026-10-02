/* Lösning till uppgift 7: Räknar ut summan av alla tal i en array
med hjälp av en funktion och en for-loop. Av Tove Hansson, 2026 */

"use strict";

const numbers = [2, 4, 6, 8, 10, 12];

const calculateSum = function(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
};

console.log("Summan är " + calculateSum(numbers));


