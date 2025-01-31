const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const ticketRoutes = require("./routes/ticketRoutes.js");

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log("📂 Sukurtas aplankas `uploads`");
}

app.use("/uploads", express.static(uploadDir));

app.use("/api/tickets", ticketRoutes);

app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
        console.log(`📌 Registruotas maršrutas: ${r.route.path}`);
    }
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
