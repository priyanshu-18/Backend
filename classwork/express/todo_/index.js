
const express = require("express");

const app = express();


app.get('/todos',(req,res)=>{
    res.json(todos);
});


app.post('/todos',(req,res)=>{
    cost newTodo
});