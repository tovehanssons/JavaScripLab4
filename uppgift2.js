/* Lösning till uppgift 2: Beräkning av totalpris och pris inkl moms. Av Tove Hansson, 2026*/

"use strict";

const price = 100;
const productCount = 3;
const totalPrice = price * productCount;
const moms = totalPrice * 0.25;
const totalWithMoms = totalPrice + moms;

console.log(`Pris: ${price}kr`);
console.log(`Antal produkter: ${productCount}`);
console.log(`Totalpris: ${totalPrice}kr`);
console.log(`Totalt inkl moms: ${totalWithMoms}kr`);

