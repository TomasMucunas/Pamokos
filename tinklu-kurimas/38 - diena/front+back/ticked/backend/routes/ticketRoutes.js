// „Express“ biblioteka
const express = require("express");
const {
    getAllTickets,
    createTicket,
    uploadAvatar
} = require("../controllers/ticketController.js");

// „Multer“ biblioteka
const multer = require("multer");

// „Multer“ konfigūravimas failų atsisiuntimui
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// „Multer“ konfigūravimas
const upload = multer({ storage: storage });
const router = express.Router();

// Maršrute
router.get("/", getAllTickets);
router.post("/", createTicket);
router.post("/upload", upload.single("file"), uploadAvatar); // <-- Добавлен маршрут загрузки

module.exports = router;
