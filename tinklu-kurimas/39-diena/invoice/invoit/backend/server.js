require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");



if (!process.env.JWT_SECRET) {
    console.error("❌ Klaida: JWT_SECRET nėra apibrėžta .env faile!");
    process.exit(1);
}

const app = express();


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/invoices", invoiceRoutes);
app.use("/api/auth", authRoutes);


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
        console.log("✅ Patikrinta arba sukurta naudotojų lentelė");
    } catch (error) {
        console.error("❌ Klaida kuriant naudotojų lentelę:", error);
    }
};

createUsersTable();

console.log("🔍 JWT_SECRET įkeltas:", process.env.JWT_SECRET);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveris veikia per prievadą ${PORT}`));
