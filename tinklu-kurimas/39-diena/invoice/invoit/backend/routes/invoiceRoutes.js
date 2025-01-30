const express = require("express");
const pool = require("../config/db"); 


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM invoices");
    res.json(rows);
  } catch (error) {
    console.error("Serverio klaida:", error);
    res.status(500).json({ message: "Serverio klaida", error: error.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const { due_date, client, amount, status } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO invoices (due_date, client, amount, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [due_date, client, amount, status]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Klaida pridedant paskyrą:", error);
    res.status(500).json({ message: "Klaida pridedant paskyrą", error: error.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { due_date, client, amount, status } = req.body;
    const { rows } = await pool.query(
      "UPDATE invoices SET due_date = $1, client = $2, amount = $3, status = $4 WHERE id = $5 RETURNING *",
      [due_date, client, amount, status, id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error("Klaida atnaujinant paskyrą:", error);
    res.status(500).json({ message: "Klaida atnaujinant paskyrą", error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM invoices WHERE id = $1", [id]);
    res.json({ message: "Paskyra sėkmingai ištrinta" });
  } catch (error) {
    console.error("Klaida šalinant paskyrą:", error);
    res.status(500).json({ message: "Klaida šalinant paskyrą", error: error.message });
  }
});

module.exports = router;