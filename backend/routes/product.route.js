const express = require('express');
const { addProduct } = require('../controllers/product.controller');
const productRouter = express.Router();

productRouter.route('/')
    .post(addProduct);



module.exports = productRouter;