const Product = require("../models/product.model");

const addProduct = async (req, res) => {
    try{

        console.log(req.body)
        const data = await new Product(req.body).save();
        res.status(201).json({
            success: true,
            message: data
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllProduct = async (req, res) => {
    try{

        const data = await Product.find({});
        res.status(201).json({
            success: true,
            message: data
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    addProduct,
    getAllProduct
}