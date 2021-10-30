const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 4000;
dotenv.config();

// Express App
// The require statement returns a function so we have to invoke it
const app = express();

// Connecting to Database using mongoose
mongoose
  .connect(process.env.dbConnect)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Listen for requests
app.listen(port, () => {
  console.log(`App listening at localhost:${port}`);
});
