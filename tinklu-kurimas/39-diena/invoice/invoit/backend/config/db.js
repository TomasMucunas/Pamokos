const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "New Project Invoits",
  password: "2378",
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ Подключение к базе данных установлено"))
  .catch(err => console.error("❌ Ошибка подключения:", err));

module.exports = pool;
