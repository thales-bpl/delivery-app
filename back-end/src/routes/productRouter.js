const express = require('express');
const rescue = require('express-rescue');
const productController = require('../controllers/productsController');

const router = express.Router();

router
  .get('/', rescue(productController.getAll))
  .get('/:id', rescue(productController.getById));

module.exports = router;