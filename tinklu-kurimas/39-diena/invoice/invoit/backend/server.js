require("dotenv").config(); // Загружаем переменные среды
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");


// Проверяем, загружается ли JWT_SECRET
if (!process.env.JWT_SECRET) {
    console.error("❌ Ошибка: JWT_SECRET не задан в .env файле!");
    process.exit(1);
}

const app = express();

// CORS для правильной работы с браузером
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

// Подключаем маршруты
app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);

// Создание таблицы users, если её нет
const createUsersTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password TEXT NOT NULL
            );
        `);
        console.log("✅ Таблица users проверена или создана");
    } catch (error) {
        console.error("❌ Ошибка при создании таблицы users:", error);
    }
};

createUsersTable();

console.log("🔍 JWT_SECRET загружен:", process.env.JWT_SECRET);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Сервер работает на порту ${PORT}`));
