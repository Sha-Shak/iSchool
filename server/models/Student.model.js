const mongoose = require("mongoose");

const Class = require("./Class.model");
const Marks = require("./Marks.model");
const User = require("./User.model");

const studentSchema = new mongoose.Schema({
  classes:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  }],
});

const Student = User.discriminator("Student", studentSchema);
module.exports = Student;
