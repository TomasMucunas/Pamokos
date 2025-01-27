const pool = require('../models/dbConnection');
const Author = require('../middlewares/author');


exports.getAllAuthors = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM authors');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAuthorById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM authors WHERE id = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createAuthor = async (req, res, next) => {
    try {
        const { name, birthDate, biography } = req.body;
        const author = await Author.createAuthor(name, birthDate, biography);
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
};


exports.updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, birth_date, bio } = req.body;
        await pool.query('UPDATE authors SET name = $1, birth_date = $2, bio = $3 WHERE id = $4', [name, birth_date, bio, id]);
        res.status(200).json({ message: 'Author updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM books WHERE authorid = $1', [id]);
        await pool.query('DELETE FROM authors WHERE id = $1', [id]);
        res.status(200).json({ message: 'Author and related books deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.getAuthors = async (req, res, next) => {
    try {
        const authors = await Author.getAuthors();
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};