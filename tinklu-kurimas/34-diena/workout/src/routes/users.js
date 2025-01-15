import db from "../db.js";
import bcrypt from "bcrypt";

import express from "express";
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Vartotojų maršrutas veikia!");
});




router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ klaida: "Visi laukai yra privalomi." });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ klaida: err.message });
  }
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ klaida: "Visi laukai yra privalomi." });
  }
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ zinute: "Sėkmė! Jūs esate įgaliotas!", user });
      } else {
        res.status(401).json({ zinute: "Neteisingi duomenys." });
      }
    } else {
      res.status(401).json({ zinute: "Neteisingi duomenys." });
    }
  } catch (err) {
    res.status(500).json({ klaida: err.message });
  }
});

export default router;
