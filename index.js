const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Model/productModel');
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello");
})

app.get("/blog", (req, res) => {
    res.send("hello blog");
})
app.post('/product', async (req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.get('/product', async (req, res)=>{
    try{
        const product = await Product.find({});
        res.status(200).json(product)
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://prashantpatki7:123456admin@crudapi.mxtvfsh.mongodb.net/node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected")
    app.listen(3000, ()=>{
        console.log("server is running at 3000")
    })
}).catch((error) => {
    console.log(error);
})