const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
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

// Making Express accept json files
app.use(express.json());

// Endpoint
app.use("/api/auth", authRoute);

// Listen for requests
app.listen(port, () => {
  console.log(`App listening at localhost:${port}`);
});
