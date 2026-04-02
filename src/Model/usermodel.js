const mongoose = require("mongoose")

const usescheme = new mongoose.schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    pasword:{type:String,required:true,trim:true},
   
},

{timeseriestamps:true}

)

module.exports = mongoose.model("user",usescheme)