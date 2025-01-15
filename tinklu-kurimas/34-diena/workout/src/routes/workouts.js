import express from "express";
const router = express.Router();
import db from "../db.js";


router.post("/", async (req, res) => {
  const { user_id, name } = req.body;

  if (
    typeof user_id !== "number" ||
    typeof name !== "string" ||
    name.trim() === ""
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const sanitizedUserId = parseInt(user_id, 10);
    const sanitizedName = name.trim();

    const result = await db.query(
      "INSERT INTO workouts (user_id, name) VALUES ($1, $2) RETURNING *",
      [sanitizedUserId, sanitizedName]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Duomenų bazės užklausa nepavyko", details: err.message });
  }
});


router.get("/", async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = parseInt(req.query.offset, 10) || 0;

  try {
    const result = await db.query("SELECT * FROM workouts LIMIT $1 OFFSET $2", [
      limit,
      offset,
    ]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;