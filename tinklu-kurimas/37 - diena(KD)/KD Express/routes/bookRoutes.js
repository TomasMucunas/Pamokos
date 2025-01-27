const express = require('express');
const bookController = require('../controllers/bookController.js');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.post('/select', bookController.selectBook);


module.exports = router;
