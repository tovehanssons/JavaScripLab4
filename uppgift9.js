/* Lösning till uppgift 9: Array med personobjekt
som kontrollerar om varje person är myndig. Av Tove Hansson, 2026 */

"use strict";

const people = [
    {
        name: "Tove",
        age: 31,
        city: "Åre"
    },
    {
        name: "Fredrik",
        age: 38,
        city: "Örebro"
    },
    {
        name: "Loui",
        age: 4,
        city: "Edsbyn"
    }
];

/* Funktionen kontrollerar personens ålder och visar om personen är myndig eller inte. */

function printPersonInfo(person) {
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig.`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
    }
}

/* Loopen igår genom arrayen och anropar funktionen för varje personobjekt. */

for (let i = 0; i < people.length; i++) {
    printPersonInfo(people[i]);
}