const app = require("./app");

const PORT = 8000;

app.listens(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}`);
});