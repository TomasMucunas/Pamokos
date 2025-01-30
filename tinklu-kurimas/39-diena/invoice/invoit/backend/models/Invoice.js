const pool = require("../config/db");

const getAllInvoices = async () => {
  const { rows } = await pool.query("SELECT * FROM invoices");
  return rows;
};

const createInvoice = async (invoice) => {
  const { due_date, client, amount, status } = invoice;
  const { rows } = await pool.query(
    "INSERT INTO invoices (due_date, client, amount, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [due_date, client, amount, status]
  );
  return rows[0];
};

const updateInvoice = async (id, invoice) => {
  const { due_date, client, amount, status } = invoice;
  const { rows } = await pool.query(
    "UPDATE invoices SET due_date = $1, client = $2, amount = $3, status = $4 WHERE id = $5 RETURNING *",
    [due_date, client, amount, status, id]
  );
  return rows[0];
};

const deleteInvoice = async (id) => {
  await pool.query("DELETE FROM invoices WHERE id = $1", [id]);
  return { message: "Счёт успешно удалён" };
};

module.exports = { getAllInvoices, createInvoice, updateInvoice, deleteInvoice };
