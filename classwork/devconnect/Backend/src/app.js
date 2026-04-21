const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.user(express.static())

app.get("/",(req,res) =>{
    res.send("hello from the server");
});

module.exports=app;  // hi