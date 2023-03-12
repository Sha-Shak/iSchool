const mongoose = require("mongoose");
const Class = require("./Class.model");
const User = require("./User.model");

const teacherSchema = new mongoose.Schema({
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});
const Teacher = User.discriminator("Teachers", "teacherSchema");
module.exports = Teacher;
