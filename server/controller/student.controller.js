const Student = require("../models/Student.model");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const signupStudent = async (req, res) => {
  try {
    const data = req.body;
    const student = await Student.create(data);
    console.log(student);
    res.status(201).send(student);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = { getAllStudents, signupStudent };
