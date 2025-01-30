const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "New Project Invoits",
  password: "2378",
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ Užmegztas ryšys su duomenų baze"))
  .catch(err => console.error("❌ Ryšio klaida:", err));

module.exports = pool;
