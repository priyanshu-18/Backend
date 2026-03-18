const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    if(req.method == "GET" && req.url=='/notes'){
        fs.readFile("./notes.json","utf-8",(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        });
    }
    else if(req.method == "POST" && req.url=='/notes'){
        const newNote = {notes:"hi",id:1};
        fs.readFile("./notes.json","utf-8",(err,data)=>{
            let notes =[];

            if(!err && data){
                notes = JSON.parse(data);
            }

            notes.push(newNote);
            
            fs.writeFile("./notes.json",JSON.stringify(notes),(err)=>{
                if(err) console.log(err);
                res.end("notes added");
            });

        });
    }
});

myServer.listen(8000,()=>console.log("server started"));


