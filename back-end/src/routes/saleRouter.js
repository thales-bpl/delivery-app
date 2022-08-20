const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/saleController');

const router = express.Router();
// TO-DO: validação token
router
  .get('/', rescue(saleController.getAll))
  .get('/:saleId', rescue(saleController.getById))
  .get('/user/:userId', rescue(saleController.getByUserId))
  .post('/', rescue(saleController.postSale))
  .put('/:saleId', rescue(saleController.updateSale));

module.exports = router;
