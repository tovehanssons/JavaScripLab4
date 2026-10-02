

"use strict";

const book = {
    title: "Harry Potter och flammande bägaren",
    author: "J.K. Rowling",
    year: 2000
};

/* Funktionen hämtar och skriver ut info om boktitel, författare och utgivningsår. */
function printBookInfo(book) {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Utgivningsår: ${book.year}`);
}

printBookInfo(book);