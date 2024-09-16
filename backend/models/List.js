import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
    title:{type:String, required:true, uniqure:true},
    type:{type:String},
    genre:{type:String},
    content:{type:Array}
})


export default mongoose.model("List",ListSchema);