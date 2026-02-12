const Category = require("../models/category.model");

exports.addCategory = async (req, res) => {
    try{

        console.log(req.body)
        const data = await new Category(req.body).save();
        res.status(201).json({
            success: true,
            data: data,
            message: "+++ Add Category successful !!!"
        })

    }catch(err){
        res.status(500).json({
            success: false,
            error: err.message

        })
    }
}

exports.getAllCategory = async (req, res) => {
    try{
        const data = await Category.find({});
        res.status(200).json({
            success: true,
            data: data
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.findCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        // console.log(id);
        const newCate = await Category.findById(id);
        if(!newCate){
            return res.status(404).json({
                success: false,
                msg: `Category Id ${id} Not Found !!!`
            })
        }
        res.status(200).json({
            success: true,
            data: newCate,
        })

    }catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error ${error.message}`
        })
    }
} 

exports.removeCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        const newCate = await Category.findByIdAndDelete(id);
        if(!newCate){
            return res.status(404).json({
                success: false,
                message: "Error 404 Category Not Found"
            })
        }
        res.status(200).json({
            success: true,
            data: newCate,
            message: ` --- Remove Category Successful !!!`
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: `Server Error ${error.message}`
        })
    }
}

exports.updateCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        // console.log(id);
        const newCate= await Category.findByIdAndUpdate(id, req.body,{
                new: true,            // return updated document
                runValidators: true   // validate data before updating
            });
        if(!newCate){
            return res.status(404).json({
                success: false,
                msg: `Error 404 Category ID Not Found !!!`
            })
        }
        res.status(200).json({
            success: true,
            data: newCate,
            msg: `Category update successful !!!`
        })

    }catch(error){
        res.status(500).json({
            success: false,
            msg: `Server Error ${error.message}`
        })
    }
}



