const mongoose = require("mongoose");
const Class = require("./Class.model");
const Student = require("./Student.model");

const marksSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
  totalMark: {
    type: Number,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
});

//feedback.bd@samsung.com

const Marks = mongoose.model("Marks", marksSchema);
module.exports = Marks;
