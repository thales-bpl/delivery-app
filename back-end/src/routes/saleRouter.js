const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/saleController');

const router = express.Router();

router
  .get('/', rescue(saleController.getAll))
  .get('/:id', rescue(saleController.getById))
  .post('/', rescue(saleController.postSale))
  .put('/:id', rescue(saleController.updateSale));
  // .post('/test', rescue(saleController.postSaleTest));

module.exports = router;
