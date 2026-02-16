const http = require("http");
const fs = require("fs");


const myserver = http.createServer((req,res)=>{
    const user = {
        name:"anything",
        age:"anything"
    };
    const url = req.url;
    const method = req.method;
    if(url=="/users" && method=="GET"){
        res.end(JSON.stringify(user));
    }
    if(url=="/data" && method=="POST"){
        let body = "";
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            fs.writeFile("./file1.txt",body,()=>{
                res.writeHead(201,"data saved succfull");
                res.end();
            });
        });
    }
    
    
});

myserver.listen(8000,()=>{ console.log("server started")});



