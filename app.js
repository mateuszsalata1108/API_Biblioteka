const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

//importowanie routów
const booksRoutes = require('./routes/books');
const authRoute = require('./routes/auth');

dotenv.config();

//podłączenie do bazy
mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log('Podłączono do bazy danych')
);

//parsowanie body
app.use(express.json());

//routy
app.use('/books', booksRoutes);
app.use('/user', authRoute);

//obsługa błędów
app.use((req, res, next) => {
    const error = new Error("Błąd 404, nie odnaleziono");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ wiadomość: error.message });
  });

//   //nasłuchiwanie serwera
// app.listen(3000, () => console.log("SERVER UP AND RUNNING"));

module.exports = app;
