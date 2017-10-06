const { Router } = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('../../model/book');

const router = Router();

router.post('/add', bodyParser.json(), (req, res) => {
    const newBook = new Book(req.body);

    newBook.save((err, book) => {
        if (err) {
            res.send(err);
        }
        res.json({ 
            "success": `${book.title} has been added...` 
        });
    });
});

router.get('/', (req, res) => {
    Book.find((err, books) => {
        if (err) {
            res.send(err);
        }
        res.json(books);
    });
});

module.exports = router;