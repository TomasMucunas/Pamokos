const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../models/dbConnection');
const User = require('../middlewares/user.js');


exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Reikalingas slaptažodis' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            'INSERT INTO users (username, password, role) VALUES (1, 2, 3)',
            [username, hashedPassword, role || 'user']
        );

        res.status(201).json({ message: 'Vartotojas sėkmingai užsiregistravo' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        console.log('Request Body:', req.body);

        const user = await User.findUserByUsername(username);
        console.log('Found User:', user);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Neteisingi įgaliojimai' });
        }         
    
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 1000 });
        res.status(200).json({ message: 'Sėkmingai prisijungta' });
    } catch (error) {
        next(error);
    }
};

