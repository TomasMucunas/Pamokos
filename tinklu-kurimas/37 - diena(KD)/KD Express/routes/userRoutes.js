const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post(
    '/register',
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    userController.register
);

module.exports = router;
