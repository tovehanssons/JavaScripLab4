/*Lösning till uppgift 3: Skapat variabel för ålder. Har testat med flera åldrar för att kontrollera
 att alla villkor fungerar. Av Tove Hansson, 2026 */
 
"use strict";
let age = 30;

if (age < 18) {
    console.log("Barn");
} else if (age < 65) {
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}