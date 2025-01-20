const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(express.json());


app.use('/products', productRoutes);
app.use('/users', userRoutes);


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
