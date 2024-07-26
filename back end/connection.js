var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Krishna-S-S:Krishnainmongodb@cluster0.dy9l9va.mongodb.net/emp?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("db connected")
    })
    .catch((err) => {
        console.log(err)
})