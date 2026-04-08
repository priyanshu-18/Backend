const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/",(req,res) =>{
    res.send("hello from the server");
});


app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const user = users.find(user => user.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})
