const { Pool } = require("pg");
require("dotenv").config();

if (!process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PORT) {
    console.error("❌ Klaida: Duomenų bazei nėra aplinkos kintamųjų!");
    process.exit(1);
}

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

pool.connect()
    .then(() => console.log("✅ Database connected"))
    .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool;
