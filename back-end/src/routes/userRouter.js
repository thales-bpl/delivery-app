const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .get('/', rescue(userController.getAll))
  .post('/', rescue(userController.verifyLogin))
  .post('/register', rescue(userController.registerLogin));

module.exports = router;