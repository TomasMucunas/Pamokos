const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const router = express.Router();

// Проверяем, загружен ли `JWT_SECRET`
if (!process.env.JWT_SECRET) {
    console.error("❌ Ошибка: JWT_SECRET не задан в .env файле!");
    process.exit(1);
}

// Функция генерации токена
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ Регистрация пользователя
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Все поля обязательны!" });
        }

        // Проверяем, существует ли пользователь
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "Пользователь уже существует!" });
        }

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создаём пользователя
        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, hashedPassword]
        );

        const token = generateToken(newUser.rows[0].id);

        // Записываем JWT в куки
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
        });

        res.status(201).json({
            message: "Регистрация успешна!",
            user: { id: newUser.rows[0].id, username: newUser.rows[0].username, email: newUser.rows[0].email },
        });
    } catch (error) {
        console.error("Ошибка регистрации:", error);
        res.status(500).json({ message: "Ошибка регистрации", error: error.message });
    }
});

// ✅ Вход в систему (логин)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Введите email и пароль!" });
        }

        // Ищем пользователя в базе
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Неправильный email или пароль!" });
        }

        // Проверяем пароль
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: "Неправильный email или пароль!" });
        }

        const token = generateToken(user.rows[0].id);

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Успешный вход!",
            user: { id: user.rows[0].id, username: user.rows[0].username, email: user.rows[0].email },
        });
    } catch (error) {
        console.error("Ошибка входа:", error);
        res.status(500).json({ message: "Ошибка входа", error: error.message });
    }
});

// ✅ Проверка аутентификации
router.get("/me", async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Не авторизован" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await pool.query("SELECT id, username, email FROM users WHERE id = $1", [decoded.id]);

        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Пользователь не найден" });
        }

        res.status(200).json({ user: user.rows[0] });
    } catch (error) {
        console.error("Ошибка проверки аутентификации:", error);
        res.status(500).json({ message: "Ошибка проверки аутентификации", error: error.message });
    }
});

// ✅ Выход из системы (Logout)
router.post("/logout", (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: "Выход выполнен успешно!" });
});

module.exports = router;
