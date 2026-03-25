const express = require("express");
const app = express();

app.use(express.json);


app.use(fucntion(req,res,next)){
    const url = req.url;
    const method = req.method;
    const tiemStap= new Date().toISOString();

    fs.writefile{
        "logs.txt"
    }
}

app.listen(8000,()=>{});