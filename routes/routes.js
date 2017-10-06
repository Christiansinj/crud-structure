const express = require('express');

const bookRouter = require('./routerBook/route')


const router = express.Router();

router.use('/book', bookRouter);

module.exports = router;