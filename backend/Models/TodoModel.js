const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    Author: {
		type: String,
		default: 'Chaoo',
		trim: true
	},
	Added: {
		type: Date,
		default: Date.now,
		
	},
    
})

const todoModel=mongoose.model("todo",todoSchema)

module.exports={
    todoModel
}



















