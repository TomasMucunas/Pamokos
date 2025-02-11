const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const router = express.Router();


if (!process.env.JWT_SECRET) {
    console.error("❌ Klaida: JWT_SECRET nėra apibrėžta .env faile!");
    process.exit(1);
}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};


router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Visi laukai yra privalomi!" });
        }

       
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "Naudotojas jau egzistuoja!" });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, hashedPassword]
        );

        const token = generateToken(newUser.rows[0].id);

        
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            message: "Регистрация успешна!",
            user: { id: newUser.rows[0].id, username: newUser.rows[0].username, email: newUser.rows[0].email },
        });
    } catch (error) {
        console.error("Registracijos klaida:", error);
        res.status(500).json({ message: "Registracijos klaida", error: error.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Įveskite savo el. pašto adresą ir slaptažodį!" });
        }

      
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Neteisingas el. pašto adresas arba slaptažodis!" });
        }

        
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: "Neteisingas el. pašto adresas arba slaptažodis!" });
        }

        const token = generateToken(user.rows[0].id);

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Sėkmingas įrašas!",
            user: { id: user.rows[0].id, username: user.rows[0].username, email: user.rows[0].email },
        });
    } catch (error) {
        console.error("Prisijungimo klaida", error);
        res.status(500).json({ message: "Prisijungimo klaida", error: error.message });
    }
});


router.get("/me", async (req, res) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Neleidžiama" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await pool.query("SELECT id, username, email FROM users WHERE id = $1", [decoded.id]);

        if (user.rows.length === 0) {
            return res.status(401).json({ message: "Vartotojas nerastas" });
        }

        res.status(200).json({ user: user.rows[0] });
    } catch (error) {
        console.error("Autentiškumo patvirtinimo klaida:", error);
        res.status(500).json({ message: "Autentiškumo patvirtinimo klaida:", error: error.message });
    }
});

// ✅ Выход из системы (Logout)
router.post("/logout", (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).json({ message: "Išėjimas sėkmingas!" });
});

module.exports = router;
