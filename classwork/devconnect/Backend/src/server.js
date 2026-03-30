const app = require("./app.js");

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}`);
});