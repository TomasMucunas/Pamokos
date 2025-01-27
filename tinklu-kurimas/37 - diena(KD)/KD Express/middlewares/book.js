const pool = require('../models/dbConnection');
const book = require('../middlewares/book.js');

module.exports = {
    createBook: async (title, summary, isbn, authorId) => {
        const result = await pool.query(
            'INSERT INTO books (title, summary, isbn, authorId) VALUES (1, 2, 3, 4) RETURNING *',
            [title, summary, isbn, authorId]
        );
        return result.rows[0];
    },
    getBooks: async () => {
        const result = await pool.query('SELECT * FROM books');
        return result.rows;
    },
};
