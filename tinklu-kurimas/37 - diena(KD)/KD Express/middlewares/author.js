import pool from '../models/dbConnection.js';

export const createBook = async (title, summary, isbn, authorId) => {
    const result = await pool.query(
        'INSERT INTO books (title, summary, isbn, authorId) VALUES (1, 2, 3, 4) RETURNING *',
        [title, summary, isbn, authorId]
    );
    return result.rows[0];
};

export const getBooks = async () => {
    const result = await pool.query('SELECT * FROM books');
    return result.rows;
};
