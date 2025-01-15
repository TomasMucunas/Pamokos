import dotenv from "dotenv";
import express from "express";
import db from "./db.js";
import bcrypt from "bcrypt";
import userRoutes from "./routes/users.js";
import workoutRoutes from "./routes/workouts.js";
import exerciseRoutes from "./routes/exercises.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/workouts", workoutRoutes);
app.use("/api/v1/exercises", exerciseRoutes);

app.post("/api/v1/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (
      result.rows.length > 0 &&
      (await bcrypt.compare(password, result.rows[0].password))
    ) {
      res.json({
        message: "Sėkmė! Jūs esate įgaliotas!",
        user: result.rows[0],
      });
    } else {
      res.status(401).json({ message: "Neteisingi duomenys." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Sveiki atvykę į treniruočių žurnalą!");
});

app.listen(PORT, () => {
  console.log(`Serveris veikia adresu http://localhost:${PORT}`);
});
