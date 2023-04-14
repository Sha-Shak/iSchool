const mongoose = require("mongoose");

const Class = require("./Class.model");
const Marks = require("./Marks.Schema");
const User = require("./User.model");

const studentSchema = new mongoose.Schema({
  specialChild: {type: Boolean, default: false}
});

const Student = User.discriminator("Student", studentSchema);
module.exports = Student;
