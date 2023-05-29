const {todoModel}=require("../Models/TodoModel")

const getData=async(req,res) => {
    const user=await todoModel.find()
    res.send(user)
    
}

const addData = async(req,res) => {
    const user = req.body;
    
    const newUser = new todoModel(user)
    try{
        await newUser.save()
        res.send("Add  successfully")

    }
    catch(err){
        console.log(err)
        res.send({error:err,message: "Something went worng!"})
    }

}

const updateData=async(req,res)=>{
    let user = req.body;
    const editUser = new todoModel(user)
    console.log(editUser)
    try{
        await todoModel.updateOne({ _id: req.params.id}, user)
        res.send(editUser)

    }
    catch(err){
        console.log("err",err)
    }
}

const deleteData=async(req,res)=>{
    const {id}=req.params;
    
    todoModel.findByIdAndDelete(id)
    .then(() =>res.send("Delete successfully"))
    .catch((err) =>{
        console.log(err)
        res.send({error:err,message: "Something went worng!"})
    })
}


module.exports={
    getData,addData,updateData,deleteData
}













