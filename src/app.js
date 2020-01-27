const express = require('express');
const stringsRouter = require('./routers/strings.js');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);

module.exports = app;
