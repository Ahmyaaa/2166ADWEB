var Express = require('express');
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer= require("multer");

var app=Express();

app.use(cors());

var CONNECTION_STRING = "mongodb+srv://stdatu4:Admin12345@cluster0.stkd52b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "MyDB";

var database;

app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("WOHOOO!!!!");
    })
})

app.get('/api/books/GetBooks',(req,res)=>{
    database.collection("books").find({}).toArray((error,result)=>{
        res.send(result);
    })
})

app.post('/api/books/AddBook',multer().none(), async(req,res)=>{
    try{
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        res.json("Added Successfully");
    }catch (error){
        console.error("Error adding book:", error);
        res.status(500).json({error: "Failed to add book"});
    }});

app.delete('/api/books/Deletebook',(req,res)=>{
    database.collection("books").deleteOne({
        id:req.query.id
    });
    res.json("Deleted successfully! yippee");
})