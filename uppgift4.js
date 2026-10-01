/* Lösning till uppgift 4: Skriver ut alla jämna tal mellan 1-20. 
Med hjälp av en for-loop och modulus operatorn. Av Tove Hansson, 2026 */

"use strict";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}