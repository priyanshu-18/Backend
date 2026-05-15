const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));


// Array data
let students = [
    { name: "Rahul", age: 20 }
];


// GET API
app.get("/students", (req, res) => {
    res.send(students);
});


// POST API
app.post("/students", (req, res) => {

    students.push(req.body);

    res.send({
        message: "Student Added",
        data: students
    });

});


// Server
app.listen(3000, () => {
    console.log("Server running");
});