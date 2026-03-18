const express = require("express");

const app = express();



app.get('/',(req,res) =>{
    res.send("Hello PP");
});
app.get('/home',(req,res) =>{
    console.log(req.query);
    res.send("home page");
});
app.get('/user/:id',(req,res) =>{
    res.send(`User ID: ${req.params.id}`);
    console.log(req.params);
});

app.listen(3000,()=>{
    console.log("server started");
})