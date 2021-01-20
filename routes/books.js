const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

const booksController = require('../controllers/books');


router.get('/', verify, booksController.books_list);

router.post('/', verify, booksController.books_new);

router.get('/:bookId', verify, booksController.book_get_by_id);

router.patch('/:bookId', verify, booksController.book_edit);

router.delete('/:bookId', verify, booksController.book_delete);

module.exports = router;
