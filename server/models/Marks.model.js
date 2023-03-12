const mongoose = require("mongoose");
const Class = require("./Class.model");
const Student = require("./Student.model");
const marksSchema = new mongoose.Schema({
  class: {
    type: [Class],
  },
  student: {
    type: [Student],
  },
  marks:{
    type: Number
  }

});

const Marks = mongoose.model("Marks", "markSchema");
module.exports = Marks;
