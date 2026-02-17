const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"username is required !!!"]
    },

    email:{
        type: String,
        required: [true, "email is required !!!"]
    },

    password:{
        type: String,
        required: [true, "password is required !!!"],
        minLength: 6
    },
    
    role:{
        type: String,
        required: true,
        enum: ['admin','user'],
        default: 'user'
    }
    
})

const User = mongoose.model('User',userSchema);
module.exports = User;