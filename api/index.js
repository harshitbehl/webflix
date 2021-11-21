const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
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

// Endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

// // Admin Paths
// app.use(
//   "/admin",
//   express.static(path.join(__dirname, "/admin-dashboard/build"))
// );
// app.get("/admin/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "admin-dashboard/build", "index.html"));
// });

// // Client Paths
// app.use("/client", express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

// Listen for requests
app.listen(process.env.PORT || port, () => {
  console.log(`Backend is running...`);
});
