const express = require('express');
const app = express();
const PORT = 3000;


const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', year: 1937 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951 },
];


app.get('/books', (req, res) => {
    const { author, genre, year } = req.query; 

    let filteredBooks = books;

    if (author) {
        filteredBooks = filteredBooks.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }

    if (genre) {
        filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        filteredBooks = filteredBooks.filter(book => book.year === parseInt(year));
    }

    if (filteredBooks.length === 0) {
        return res.status(404).json({ message: 'Pagal jūsų užklausą knygų nerasta.' });
    }

    res.status(200).json(filteredBooks);
});

app.listen(PORT, () => {
    console.log(`Serveris veikia http://localhost:${PORT}`);
});
