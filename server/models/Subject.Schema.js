const mongoose = require("mongoose");
const Teacher = require("./Teacher.model");
const marksSchema = require("./Marks.Schema");
const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectIdId,
    ref: "Teacher",
    required: true
  },
  marks: [marksSchema],
});
module.exports = subjectSchema;
