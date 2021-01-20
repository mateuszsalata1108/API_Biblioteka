const router = require('express').Router();
const mongoose = require('mongoose');
const Book = require('../models/book.js');


exports.books_list = (req, res, next) => {
    Book.find()
        .then((docs) => {
            res.status(200).json({
                wiadomość: 'Lista wszystkich książek',
                info: docs,
            });
        })
        .catch((err) => res.status(500).json({ wiadomość:err}));
};

exports.books_new = (req, res, next) => {
    const book = new Book({
      _id: new mongoose.Types.ObjectId(),
      tytuł: req.body.tytuł,
      autor: req.body.autor,
      strony: req.body.strony,
      bestseller: req.body.bestseller,
    });
    book
      .save()
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Dodano nową książkę',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.book_get_by_id = (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Szczegóły książki o ID ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  };
  
  exports.book_edit = (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndUpdate(
      id,
      {
        tytuł: req.body.tytuł,
        autor: req.body.autor,
        strony: req.body.strony,
        bestseller: req.body.bestseller,
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          wiadomość: 'Zmieniono książkę o ID ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.book_delete = (req, res, next) => {
  const id = req.params.bookId;
  Book.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: 'Usunięto książkę o ID ' + id,
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};