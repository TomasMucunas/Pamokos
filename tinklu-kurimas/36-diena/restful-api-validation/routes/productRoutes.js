const express = require('express');
const { getProducts } = require('../controllers/productController');
const { check } = require('express-validator');
const validationHandler = require('../middlewares/validationHandler');

const router = express.Router();

// GET /products
router.get(
  '/',
  [
    check('price')
      .optional()
      .isFloat({ gt: 0 })
      .withMessage('Price must be a positive number with up to 2 decimal places'),
    check('category')
      .notEmpty()
      .withMessage('Category is required'),
  ],
  validationHandler,
  getProducts
);

module.exports = router;
