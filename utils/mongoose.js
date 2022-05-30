const mongoose = require('mongoose');
require("dotenv").config();
module.exports = mongoose.connect(process.env.MONGOOSE_LINK_CONNECT,function(err){
    if (err){
        console.log('err: ',err);
    }else{
        console.log('server mongo connected success');
    }
});