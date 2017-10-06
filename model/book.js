const mongoose = require('mongoose');

const newBook = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
});

module.exports = mongoose.model('Book', newBook, 'books');