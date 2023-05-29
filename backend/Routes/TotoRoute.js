const {Router}=require("express")
const {getData, addData, updateData, deleteData}=require("../Controler/TodoControler");

const todoRoute=Router();

todoRoute.get("/todos",getData)
todoRoute.post("/todos",addData)
todoRoute.put("/todos/:id",updateData)
todoRoute.delete("/todos/:id",deleteData)

module.exports={
    todoRoute
}