const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');
const router = require('./routes/routes');

mongoose.connect(config.mongoUrl, () => {
    console.log('db initialized...');
})

const app = express();

app.use('/app', router);

app.listen(config.port, () => {
    console.log(`app is now listening on port ${config.port}`);
})