const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
dotenv.config({ path: path.join(__dirname, "./environments", ".env") });
const corsOption = {};
app.use(cors());
app.use(express.json());
const endpoint = process.env.PORT || 3001;

mongoose.connect(process.env.URI, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("DB connected successfully");
});

app.listen(endpoint, () => {
  console.log(`Server running at ${endpoint}`);
});
