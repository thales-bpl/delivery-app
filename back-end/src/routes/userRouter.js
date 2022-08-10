const express = require('express');
const userController = require('../controllers/userController');
const rescue = require('express-rescue');

const router = express.Router();

router
  .post('/', rescue(userController.postLogin));

module.exports = router;