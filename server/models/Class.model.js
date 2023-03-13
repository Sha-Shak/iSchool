// const mongoose = require("mongoose");
// const Student = require("./Student.model");
// const Marks = require("./Marks.model");
// const classSchema = new mongoose.Schema({
//   subject: {
//     type: String,
//     required: true,
//     enum: ["Bengali", "English", "Spanish"],
//   },
//   students: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Student",
//   },
//   marks: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Marks",
//   },
// });

// const Class = mongoose.model("Class", classSchema);
// module.exports = Class;

const mongoose = require("mongoose");
const Student = require("./Student.model");
const Marks = require("./Marks.model");

const classSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    enum: ["Bengali", "English", "Spanish"],
  },
  students:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    unique: true,
  }]
});

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
