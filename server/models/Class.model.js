const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    enum: ["Bengali", "English", "Spanish"],
  },
  students: {
    type: [Students],
  },
});

const Class = mongoose.model("Class", "classSchema");
module.exports = Class;
