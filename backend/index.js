const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://rupeshsahu969:rupesh@cluster0.fppxd44.mongodb.net/letestCRUD?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  cardNumber: String,
  expiryDate: String,
  cvv: String
});

const Order = mongoose.model('Order', orderSchema);

app.post('/checkout', async (req, res) => {
  try {
    const { name, address, cardNumber, expiryDate, cvv } = req.body;

    if (!name || !address || cardNumber.length !== 16 || cvv.length !== 3) {
      return res.status(400).send({ message: 'Invalid input data' });
    }

    const newOrder = new Order({ name, address, cardNumber, expiryDate, cvv });
    await newOrder.save();

    res.status(201).send({ message: 'Order processed successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});


// const  Express  = require("express");
// const { connection } = require("./database/db");
// const {todoRoute}=require("./Routes/TotoRoute")
// const cors = require("cors");
// const { userRoute } = require("./Routes/UserRoute");

// const app = Express();

// const PORT = 8000

// app.use(Express.json())

// app.use(cors())

// app.use("/",todoRoute)
// app.use("/",userRoute)

// app.listen(PORT, async() => {
//     try{
//         await connection;
//         console.log("connected To DB successfully")
//         console.log(`Listen Port On ${PORT}`)
//     }
//     catch(err){
//         console.log("Error connect to DB")
//         console.log(err)

//     }
    
    
// })