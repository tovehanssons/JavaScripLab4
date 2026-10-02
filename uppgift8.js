

"use strict";

const book = {
    title: "Harry Potter och flammande bägaren",
    author: "J.K. Rowling",
    year: 2000
};

function printBookInfo(book) {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Utgivningsår: ${book.year}`);
}

printBookInfo(book);