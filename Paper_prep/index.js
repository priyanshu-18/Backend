const express = require("express");

const app = express();


// Import JSON file
const students = require("./students.json");


// Serve static files
app.use(express.static(__dirname));


// GET API
app.get("/students", (req, res) => {

    res.send(students);

});


// Server
app.listen(3000, () => {

    console.log("Server Running");

});