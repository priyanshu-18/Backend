const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

let students = [];


// POST API
app.post("/students", (req, res) => {

    students.push(req.body);

    res.json({
        message: "Student Added"
    });

});


// GET API
app.get("/students", (req, res) => {

    res.json(students);

});


// SERVER
app.listen(3000, () => {

    console.log("Server Running");

});