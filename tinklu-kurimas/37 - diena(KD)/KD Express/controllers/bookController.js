const pool = require('../models/dbConnection.js');
const Book = require('../middlewares/book');


exports.getAllBooks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createBook = async (req, res, next) => {
    try {
        const { title, summary, isbn, authorId } = req.body;

        if (!title?.trim() || !isbn?.trim() || !authorId) {
            return res.status(400).json({ message: "Trūksta privalomų laukų: pavadinimas, isbn arba authorId" });
        }

        const result = await pool.query(
            'INSERT INTO books (title, summary, isbn, authorId) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, summary, isbn, authorId]
        );  

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating book:', error);
        res.status(500).json({ message: error.message });
    }
};


exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, summary, isbn, authorId } = req.body;
    await pool.query('UPDATE books SET title = $1, summary = $2, isbn = $3, authorId = $4 WHERE id = $5', [title, summary, isbn, authorId, id]);
    res.status(200).json({ message: 'Book updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.getBooks();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

exports.selectBook = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Не указан ID книги' });
        }

        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Книга не найдена' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};