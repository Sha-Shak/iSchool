const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const studentsRouter = require("./router/student.router");
const classRouter = require("./router/class.router");
const endpoint = process.env.PORT || 3001;
dotenv.config({ path: path.join(__dirname, "./environments", ".env") });
const corsOption = {};
const corsConfig = {
  // origin:['http://localhost:3000']
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsConfig));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/student", studentsRouter);
app.use("/class", classRouter);


// mongoose
//   .connect(process.env.LOCALDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

app.listen(endpoint, () => {
  console.log(`Server running at ${endpoint}`);
});
