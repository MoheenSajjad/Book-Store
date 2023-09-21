const mongoose=require("mongoose")

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Date,
            default:Date.now
            
        }
    }
)

const Books = new mongoose.model("Book",bookSchema)

module.exports=Books