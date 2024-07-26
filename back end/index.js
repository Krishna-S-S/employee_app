// import express
var express = require("express")
var cors =require("cors")
require("./connection")
var empModel=require("./model/employee")

// initialize
var app = express();

// middleware
app.use(express.json());
app.use(cors())

// api
app.get('/trial', (req, res) => {
    res.send("message for trial")
})

// add data api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save();
        res.send({ message: "Data added" });
    } catch (error) {
        console.log(error);
        
    }
})

// view data api
app.get("/view", async (req, res) => {
    try {
        var result = await empModel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        
    }
});

// delete data api
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send(({message:"deleted successfully!!"}))
    } catch (error) {
        console.log(error)
        
    }
})
        
// update data api
app.put("/update/:id", async (req, res) => {
    try {
        var data=await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(({message:'updated successfully' ,data}))
    } catch (error) {
        console.log(error);
        
    }
})

// port
app.listen(3004, () => {
    console.log("port is up")
})
