const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes.js');
const authorRoutes = require('./routes/authorRoutes.js');
const bookRoutes = require('./routes/bookRoutes.js');
// const authMiddleware = require('./models/authMiddleware.js');



dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', userRoutes);
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

