const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

app.get("/",(req,res) =>{
    res.send("hello from the server");
});

app.listen(PORT,()=>{
 console.log(`server runing on http://localhost${PORT}`)
});