const mongoose = require("mongoose")
const User = require('./User.model')
const Class = require('./Class.model')
const studentMongoose = new mongoose.Schema({
  classes:{
    type: [Class]
  },
  marks:{
    type: [Marks]
  }
})

const Student = User.discriminator('Students', studentSchema)
module.exports = Student