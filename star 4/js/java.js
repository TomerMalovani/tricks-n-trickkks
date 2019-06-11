//  Keep track of which books you read and which books you want to read!
// ● Create a book object, where each object describes a book and has properties for the title, the author and
// whether or not you have already read this book
// ● Create a few instances of this object
// ● Create a global method that logs the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// ● Write a function that logs all the books that have not been read yet, and call it.




class Book {
    constructor(title, author, readit) {
        this.title = title;
        this.author = author;
        this.readit = readit;
    }
}

var little_prince = new Book ("little prince", "Antoine" ,true);
var don_juan = new Book ("The Teachings of Don Juan", "Carlos Castaneda" ,false);
var The_Jewish_Dog = new Book ("The Jewish Dog", "Asher Kravitz", true)
var book = [little_prince,don_juan,The_Jewish_Dog];

function name_The_book(book){
    console.log(book.title + " by " + book.author);
}


function checkIfIRead (book){
    for (var i = 0; i < book.length; i++){
        if (book[i].readit === false){
            name_The_book(book[i]);
        }
    }
}

checkIfIRead(book);