const {Router}=require("express")
const {getData, addData, updateData, deleteData}=require("../Controler/TodoControler");

const todoRoute=Router();

todoRoute.get("/get",getData)
todoRoute.post("/add",addData)
todoRoute.put("/update/:id",updateData)
todoRoute.delete("/delete/:id",deleteData)

module.exports={
    todoRoute
}