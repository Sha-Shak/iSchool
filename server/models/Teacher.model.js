const mongoose = require("mongoose");
const Class = require("./Class.model");
const User = require("./User.model");

const teacherSchema = new mongoose.Schema({
  speciality: String
});
const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;
