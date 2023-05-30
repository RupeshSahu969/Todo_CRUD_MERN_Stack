const {UserModel} =require("../Models/UserModel");
const {Router} =require("express")


const userRoute=Router();

userRoute.post("/signup",async(req,res) => {
    const {email,password}=req.body;
    const new_user=new UserModel({
        email,
        password
    })

    await new_user.save()
    res.send("Signup Successfully!")
})

userRoute.post("/login",async(req,res) => {
    const {email,password}=req.body;
    const result=await UserModel.findOne({email,password})
    console.log(email)
    if(result){
        if(password === result.password && email === result.email) {
            res.send({message:"login sucess",user:result})
        }else{
            res.send({message:"wrong password"})
        }
     }else{
         res.send("user not Found")
     }


})

module.exports={
    userRoute
}

