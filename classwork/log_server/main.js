const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    fs.appendFile("./log.txt", `${new Date().toString()} ${req.url} ${req.method} /n` ,  (err)=>{
        if(err) console.log(err);
        res.end("Done");
    });
    
});
 

myServer.listen(8000,()=>{ console.log("server started")});