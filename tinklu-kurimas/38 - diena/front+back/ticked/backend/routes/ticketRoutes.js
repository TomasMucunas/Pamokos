const express = require("express");
const { getAllTickets, createTicket, getTicketById, uploadAvatar } = require("../controllers/ticketController.js");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.get("/:id", getTicketById);

router.get("/", getAllTickets);
router.post("/", createTicket);
router.post("/upload", upload.single("file"), uploadAvatar);

module.exports = router;
