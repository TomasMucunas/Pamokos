const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const ticketRoutes = require("./routes/ticketRoutes.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Įkelti aplinkos kintamuosius
dotenv.config();

// Sukurti „Express“ egzempliorių
const app = express();

// Sukurkite aplanką „Įkelti“, jei jo nėra
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// „Multer“ failų saugyklos konfigūravimas
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Įjungti CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Leisti apdoroti JSON ir formos duomenis
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Užtikrinkite, kad aplankas „Įkelti“ būtų prieinamas per HTTP
app.use("/uploads", express.static("uploads"));

// Įkelkite paveikslėlį ir pateikite nuorodą į jį
app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const fileUrl = `http://localhost:${process.env.PORT || 5000}/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
});

// Prijungti maršrutus
app.use("/api/tickets", ticketRoutes);

// Paleisti serverį
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
