const dotenv = require('dotenv');

dotenv.config();

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

pool.connect((err) => {
    if (err) {
        console.error('Duomenų bazės ryšio klaida☠️:', err.message);
    } else {
        console.log('Sėkmingas prisijungimas prie duomenų bazės!👍');
    }
});

module.exports = pool;

