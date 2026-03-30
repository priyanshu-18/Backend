const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/",(req,res) =>{
    res.send("hello from the server");
});

app.listen(PORT,()=>{
 console.log(`server runing on http://localhost${PORT}`)
});