const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  dob:{
    type: Date
  },
  userType: {
    type: String,
    enum: ['admin', 'teacher', 'student']
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
