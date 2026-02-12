const express = require('express');
const { addCategory, getAllCategory, findCategoryById, removeCategoryById, updateCategoryById } = require('../controllers/category.controller');
const categoryRouter = express.Router();

categoryRouter.route('/')
    .post(addCategory)
    .get(getAllCategory)

categoryRouter.route('/:id')
    .get(findCategoryById)
    .delete(removeCategoryById)
    .patch(updateCategoryById)


module.exports = categoryRouter;
