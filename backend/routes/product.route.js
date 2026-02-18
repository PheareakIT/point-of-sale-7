const express = require('express');
const { addProduct, getAllProduct, findProductById, updateProductById, removeProductById } = require('../controllers/product.controller');
const productRouter = express.Router();

productRouter.route('/')
    .post(addProduct)
    .get(getAllProduct)

productRouter.route('/:id')
    .get(findProductById)
    .patch(updateProductById)
    .delete(removeProductById)


module.exports = productRouter;