const express = require("express");
const pool = require("./config/db");
const cors = require("cors");
const invoiceRoutes = require("./routes/invoiceRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/invoices", invoiceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveris veikia per prievadą ${PORT}`));
