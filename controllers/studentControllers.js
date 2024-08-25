import studentModel from "../models/student.js";

class studentController{
    static createDoc =async (req,res)=>{
        try {

            const {name,age,fees} = req.body

            const doc = new studentModel({
                name:name,
                age:age, 
                fees:fees
            })

            const result = await doc.save()
            res.status(201).send(result)
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }
    static getAllDoc = async (req,res)=>{
        try {
            const result = await studentModel.find()
            res.send(result) 
        } catch (error) {
            console.log(error)
        }
    }

    static getSingleDocById =async(req,res)=>{
        try {
            const result = await studentModel.findById(req.params.id)
            res.send(result)
            c+onsole.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById =async(req,res)=>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)//req.body ma user enter gareko value hunxa hai 
            res.send(result)
        } catch (error) {
            console.log(error)
        }

    }

    static deleteDocById =async(req,res)=>{
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export default studentController