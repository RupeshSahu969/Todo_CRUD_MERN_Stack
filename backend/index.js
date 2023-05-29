const  Express  = require("express");
const { connection } = require("./database/db");
const {todoRoute}=require("./Routes/TotoRoute")
const cors = require("cors");
const { userRoute } = require("./Routes/UserRoute");

const app = Express();

const PORT = 8000

app.use(Express.json())

app.use(cors())

app.use("/",todoRoute)
app.use("/",userRoute)

app.listen(PORT, async() => {
    try{
        await connection;
        console.log("connected To DB successfully")
        console.log(`Listen Port On ${PORT}`)
    }
    catch(err){
        console.log("Error connect to DB")
        console.log(err)

    }
    
    
})