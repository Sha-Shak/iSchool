const mongoose = require("mongoose");
const Student = require("./Student.model");
const Marks = require("./Marks.Schema");
const Teacher = require("./Teacher.model");
const subjectSchema = require("./Subject.Schema");

const classSchema = new mongoose.Schema({
  subjects: [subjectSchema],
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      unique: true,
    },
  ],
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
