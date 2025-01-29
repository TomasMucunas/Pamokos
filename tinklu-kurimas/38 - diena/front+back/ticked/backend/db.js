const { Pool } = require("pg");
require("dotenv").config();


console.log("DB_PASS:", process.env.DB_PASS);

// Prisijungimas prie duomenų bazės
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASS),
  port: process.env.DB_PORT,
});

// Patikrinimas prisijungimo
pool.connect()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ Database connection error:", err));

module.exports = pool;
