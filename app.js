const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoute = require("./routes/posts");

require("dotenv").config();

// Connecting mongodb
mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) console.log(err);
  else console.log("mongodb connected");
});

// middleware
app.use(bodyParser.json());
app.use("/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("It is home brother");
});

// Listener
app.listen(3000, () => {
  console.log("listenin on port prt  : 3000");
});
