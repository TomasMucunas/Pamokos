require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const morgan = require('morgan');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 5000;


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: process.env.DB_PORT,
});


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.send('Restaurant Management System API is running!');
});


app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/users', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Username, email, and password are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userResult = await pool.query(
            'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
            [username, email]
        );

        const userId = userResult.rows[0].id;
        await pool.query(
            'INSERT INTO user_secrets (user_id, password) VALUES ($1, $2)',
            [userId, hashedPassword]
        );

        res.status(201).json(userResult.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



app.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userResult.rows.length === 0) {
            return res.status(401).json({ error: "User not found" });
        }

        const secretResult = await pool.query('SELECT password FROM user_secrets WHERE user_id = $1', [userResult.rows[0].id]);
        if (secretResult.rows.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isValid = await bcrypt.compare(password, secretResult.rows[0].password);
        if (!isValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user: userResult.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ error: "Username and email are required" });
    }

    try {
        const result = await pool.query(
            'UPDATE users SET username = $1, email = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
            [username, email, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/menu', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM menu_items');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.get('/menu/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM menu_items WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.post('/menu', async (req, res) => {
    const { name, description, price, category_id } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" });
    }

    try {
        const result = await pool.query(
            'INSERT INTO menu_items (name, description, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, description, price, category_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




app.delete('/menu/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM menu_items WHERE id = $1', [id]);
        res.json({ message: "Menu item deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
