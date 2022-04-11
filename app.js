const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// middleware

// Routes
app.get("/", (req, res) => {
  res.send("It is home brother");
});

app.get("/posts", (req, res) => {
  res.send("it is /posts");
});

// Connecting mongodb
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("mongodb connected");
});
// Listener
app.listen(3000, () => {
  console.log("listenin on port prt  : 3000");
});
