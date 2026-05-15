const express = require("express");

const app = express();


// Middleware
app.use(express.json());

app.use(express.static(__dirname));


// Array
let students = [];


// GET API
app.get("/students", (req, res) => {

    res.send(students);

});


// POST API
app.post("/students", (req, res) => {

    students.push(req.body);

    res.send({
        message: "Student Added"
    });

});


// Server
app.listen(3000, () => {

    console.log("Server Started");

});