const express = require("express");
const pool = require("../config/db"); // Подключение к базе PostgreSQL


const router = express.Router();

// Получить все счета
router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM invoices");
    res.json(rows);
  } catch (error) {
    console.error("Ошибка сервера:", error);
    res.status(500).json({ message: "Ошибка сервера", error: error.message });
  }
});

// Добавить новый счёт
router.post("/", async (req, res) => {
  try {
    const { due_date, client, amount, status } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO invoices (due_date, client, amount, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [due_date, client, amount, status]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Ошибка при добавлении счёта:", error);
    res.status(500).json({ message: "Ошибка при добавлении счёта", error: error.message });
  }
});

// Обновить счёт
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
    console.error("Ошибка при обновлении счёта:", error);
    res.status(500).json({ message: "Ошибка при обновлении счёта", error: error.message });
  }
});

// Удалить счёт
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM invoices WHERE id = $1", [id]);
    res.json({ message: "Счёт успешно удалён" });
  } catch (error) {
    console.error("Ошибка при удалении счёта:", error);
    res.status(500).json({ message: "Ошибка при удалении счёта", error: error.message });
  }
});

module.exports = router;