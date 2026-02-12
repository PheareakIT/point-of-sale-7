const addProduct = (req, res) => {
    try{
        res.status(201).json({
            success: true,
            message: "running product..."
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    addProduct
}