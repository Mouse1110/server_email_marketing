const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    avatar:String,
    name:String,
    phone:String,
    direction:String,
    date:Number,
    user:String,
    pass:String,
});

module.exports = mongoose.model('user',userSchema);