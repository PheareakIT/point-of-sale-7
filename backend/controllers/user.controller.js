const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const addUser = async (req, res) => {

    try{
        
        console.log(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // // console.log(hashedPassword);
        const newUser = await new User({
            ...req.body,
            password: hashedPassword
        }).save(); //store in databse
        //req.body = {username: username, email: email, password: hashedPassword}
        //req.body = {...req.body, password: hashedPassword}
        res.status(201).json({
            success: true,
            data: newUser,
            message: "+++ Add user successful !!!"
        })
        
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

module.exports = {
    addUser
}