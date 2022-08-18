const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/saleController');
const verifyToken = require('../utils/jwt');

const router = express.Router();

router
  .get('/', rescue(saleController.getAll))
  .get('/:id', rescue(saleController.getById))
  .post('/', rescue(saleController.postSale));
  // .post('/test', rescue(saleController.postSaleTest));

module.exports = router;
