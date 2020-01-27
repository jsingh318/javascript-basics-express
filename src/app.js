const express = require('express');
const stringsRouter = require('./routes/strings.js');
const numbersRouter = require('./routes/numbers.js');
const booleansRouter = require('./routes/booleans.js');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/booleans', booleansRouter);

module.exports = app;
