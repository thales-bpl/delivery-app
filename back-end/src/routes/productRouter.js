const express = require('express');
const rescue = require('express-rescue');
const productController = require('../controllers/productsController');

const router = express.Router();

router.get('/', rescue(productController.getAll));

module.exports = router;