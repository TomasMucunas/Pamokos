const pool = require("../db");
const multer = require("multer");
const path = require("path");


// Настройка загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Загрузка аватара
exports.uploadAvatar = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const fileUrl = `http://localhost:${process.env.PORT || 5000}/uploads/${req.file.filename}`;
        res.json({ url: fileUrl });
    } catch (error) {
        console.error("Ошибка загрузки:", error);
        res.status(500).json({ message: "Upload failed" });
    }
};

// Получение всех пользователей (билетов)
exports.getAllTickets = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
        res.json({ status: "success", data: result.rows });
    } catch (error) {
        console.error("Ошибка получения пользователей:", error);
        res.status(500).json({ message: error.message });
    }
};

// Создание пользователя (билета)
exports.createTicket = async (req, res) => {
    try {
        const { fullName, email, githubUsername, avatarUrl } = req.body;

        if (!fullName || !email || !githubUsername || !avatarUrl) {
            return res.status(400).json({ message: "❌ All fields are required" });
        }

        console.log("📥 Получены данные:", { fullName, email, githubUsername, avatarUrl });

        // Проверка уникальности email
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "⚠️ User with this email already exists" });
        }

        // Выполняем SQL-запрос
        const query = `
            INSERT INTO users (full_name, email, github_username, avatar_url)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [fullName, email, githubUsername, avatarUrl];

        console.log("📝 SQL Query:", query);
        console.log("📊 Values:", values);

        const newUser = await pool.query(query, values);

        console.log("✅ Новый пользователь создан:", newUser.rows[0]);

        res.status(201).json({ status: "success", data: newUser.rows[0] });
    } catch (error) {
        console.error("❌ Ошибка создания пользователя:", error);
        res.status(500).json({ message: "Database error", error: error.message });
    }
};

// Получение билета по ID
exports.getTicketById = async (req, res) => {
    try {
        const { id } = req.params;

        const ticket = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (ticket.rows.length === 0) {
            return res.status(404).json({ message: "❌ Ticket not found" });
        }

        res.json({ status: "success", data: ticket.rows[0] });
    } catch (error) {
        console.error("❌ Ошибка при получении билета:", error);
        res.status(500).json({ message: "Database error", error: error.message });
    }
};
