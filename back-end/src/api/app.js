const express = require('express');
require('dotenv').config();
// const bodyParser = require('body-parser');
const errorHandler = require('../error/errorHandler');
const userRouter = require('../routes/userRouter');

const app = express();
app.use(express.json());
// app.use(bodyParser.json());
app.use('/login', userRouter);
app.use(errorHandler);

app.listen(process.env.API_PORT, () => {console.log(`ouvindo porta ${process.env.API_PORT}`)});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
