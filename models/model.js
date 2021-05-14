const mongoose=require("mongoose")


const alienSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    role:{
        type:String,
    },
    link:{
        type:String,
    },
    score:{
        type:String,
    },
    usn:{
        type:String,
        required:true,
        default:false
    }
})

module.exports=mongoose.model("Alien" ,alienSchema)