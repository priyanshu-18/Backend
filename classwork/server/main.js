const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    res.end("server");
});

myserver.listen(8000,()=>{ console.log("server started")});



