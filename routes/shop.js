const path = require('path');

const express = require('express');

const productController = require('../controllers/prodcuts');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
