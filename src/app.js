const express = require('express');
const stringsRouter = require('./routers/strings.js');
const numbersRouter = require('./routers/numbers.js');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

module.exports = app;
