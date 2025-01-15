import express from "express";
import database from "../db.js";
const router = express.Router();


router.post("/", async (req, res) => {
  const { workout_id, name, region, reps, sets } = req.body;

  if (!workout_id || !name || !region || !reps || !sets) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const result = await database.query(
      "INSERT INTO exercises (workout_id, name, region, reps, sets) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [workout_id, name, region, reps, sets]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});


router.get("/", async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM exercises");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
