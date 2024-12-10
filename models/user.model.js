const { default: mongoose, Schema } = require("mongoose");

let usermodel=new Schema({
    name:String,
    email:String
})

module.exports=mongoose.model('UserNew', usermodel)