import mongoose from "mongoose";

//Defining Schema
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>{
        v>=5000.5 }}
       
})

//compiling schema
const studentModel = mongoose.model('student',studentSchema)

export default studentModel