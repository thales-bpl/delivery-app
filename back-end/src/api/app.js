const express = require('express');
require('dotenv').config();
const errorHandler = require('../error/errorHandler');
const userRouter = require('../routes/userRouter');
const productRouter = require('../routes/productRouter');

const app = express();
app.use(express.json());
app.use('/login', userRouter);
app.use('/products', productRouter);
app.use(errorHandler);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
