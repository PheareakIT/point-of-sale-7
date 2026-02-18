const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {

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

exports.getAllProduct = async (req, res) => {

    try{
        const data = await Product.find({});
        res.status(200).json({
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

exports.findProductById = async (req, res) => {
    try{
        const { id } = req.params;
        // console.log(id);
        const newData = await Product.findById(id);
        if(!newData){
            return res.status(404).json({
                success: false,
                msg: `Product Id ${id} Not Found !!!`
            })
        }
        res.status(200).json({
            success: true,
            data: newData,
        })

    }catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error ${error.message}`
        })
    }
} 

exports.updateProductById = async (req, res) => {
    try{
        const { id } = req.params;
        // console.log(id);
        const newData = await Product.findByIdAndUpdate(id, req.body,{
                new: true,            // return updated document
                runValidators: true   // validate data before updating
            });
        if(!newData){
            return res.status(404).json({
                success: false,
                msg: `Error 404 Product ID Not Found !!!`
            })
        }
        res.status(200).json({
            success: true,
            data: newData,
            msg: `Product update successful !!!`
        })

    }catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error ${error.message}`
        })
    }
}

exports.removeProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const newData = await Product.findByIdAndDelete(id);
        if(!newData){
            return res.status(404).json({
                success: false,
                message: "Error 404 Product Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: newData,
            message: ` --- Remove Product Successful !!!`
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: `Server Error ${error.message}`
        })
    }
}


