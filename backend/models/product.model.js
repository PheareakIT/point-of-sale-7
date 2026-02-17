const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 
    name: {
        type: String,
        // unique: true,
        required: [true, 'name is require']
    },
    
    categoryId: {
        type: mongoose.Types.ObjectId,
        required: [ true, 'category is require'],
        ref: 'Category'
    },

    code: {
        type: String,
        unique: true,
        required: [true, 'code is require']
    },

    imageURL : {
        type: String,
        required: false
    },

    costPrice: {
        type: Number,
        required: [true, 'cost price is require']
    },

    salePrice: {
        type: Number,
        required:[true, 'sale price is require']
    },

    stockQty: {
        type: Number,
        default: 0
    },

    description:{
        type: String,
        required: false
    } 

},{timestamps: true})

const Product = mongoose.model('Product', productSchema)
module.exports = Product