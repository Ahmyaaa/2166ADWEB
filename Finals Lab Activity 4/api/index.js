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

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const existingBooks = await database.collection("books").find().toArray();

        // Find the smallest available ID
        let nextId = 1;
        const usedIds = existingBooks.map(book => book.id);
        while (usedIds.includes(nextId)) {
            nextId++;
        }

        const price = parseInt(req.body.price);
        if (isNaN(price)){
            throw new Error('Invalid price format');
        }

        // Insert the new book with the next available ID
        await database.collection("books").insertOne({
            id: nextId,
            title: req.body.title,
            description: req.body.description,
            price: price
        });

        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});



app.delete('/api/books/DeleteBook', async (req, res) => {
    try {
        const result = await database.collection("books").deleteOne({
            id: parseInt(req.query.id)
        });

        if (result.deletedCount === 1) {
            res.json("Deleted successfully!");
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Failed to delete book" });
    }
});