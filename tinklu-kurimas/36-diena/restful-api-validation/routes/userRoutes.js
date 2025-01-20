const express = require('express');
const { registerUser, getUserById } = require('../controllers/userController');
const { check } = require('express-validator');
const validationHandler = require('../middlewares/validationHandler');

const router = express.Router();


router.post(
  '/register',
  [
    check('email').isEmail().withMessage('Must be a valid email address'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    check('age')
      .optional()
      .isInt({ gt: 0 })
      .withMessage('Age must be a positive integer'),
  ],
  validationHandler,
  registerUser
);


router.get(
  '/:id',
  [check('id').isNumeric().withMessage('ID must be a numeric value')],
  validationHandler,
  getUserById
);

module.exports = router;
