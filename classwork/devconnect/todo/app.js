const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "ejs");

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use("/", authRoutes);
app.use("/todos", todoRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected");
    app.listen(3000, () => {
        console.log("server started on port 3000");
    });
  })
  .catch(err => console.log(err));
