const express = require("express");

const app = express();

app.use(express.json);

app.post("/sum",(req,res) => {
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);



   res.send(a+b);
}); 



app.get("/mul",(req,res) => {
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   res.send(a*b);
}); 
app.get("/div",(req,res) => {
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   res.send(a/b);
}); 
app.get("/sub",(req,res) => {
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   res.send(a-b);
}); 





app.listen(8000,()=>{
    console.log("server started");

});