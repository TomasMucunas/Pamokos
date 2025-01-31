const { Pool } = require("pg");
require("dotenv").config();

// Проверка переменных окружения
if (!process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PORT) {
    console.error("❌ Ошибка: Отсутствуют переменные окружения для базы данных!");
    process.exit(1);
}

// Подключение к базе данных
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Проверка подключения
pool.connect()
    .then(() => console.log("✅ Database connected"))
    .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool;
