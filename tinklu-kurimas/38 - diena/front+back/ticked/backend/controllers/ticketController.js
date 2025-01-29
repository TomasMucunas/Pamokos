const pool = require("../db");
const multer = require("multer");
const path = require("path");

// „Multer“ failų saugyklos konfigūravimas
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });

// Naudojimo pavyzdys
pool.query("SELECT * FROM tickets", (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Данные из базы:", result.rows);
});

// Maršrutas įkelti avatarą
exports.uploadAvatar = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
        res.json({ url: fileUrl });
    } catch (error) {
        res.status(500).json({ message: "Upload failed" });
    }
};

// Maršrutas visiems bilietams gauti
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await pool.query("SELECT * FROM tickets ORDER BY id ASC");
        res.json({ status: "success", data: tickets.rows });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Naujo bilieto kūrimo maršrutas
exports.createTicket = async (req, res) => {
    try {
        const { fullName, email, githubUsername, avatarUrl } = req.body;


        console.log("Полученные данные:", req.body);

        if (!fullName || !email || !githubUsername || !avatarUrl) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTicket = await pool.query(
            "INSERT INTO tickets (fullName, email, githubUsername, avatarUrl) VALUES ($1, $2, $3, $4) RETURNING *",
            [fullName, email, githubUsername, avatarUrl]
        );

        res.status(201).json({ status: "success", data: newTicket.rows[0] });
    } catch (error) {
        console.error("Ошибка создания тикета:", error);
        res.status(500).json({ message: error.message });
    }
};
