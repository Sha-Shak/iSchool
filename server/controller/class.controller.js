const Class = require("../models/Class.model");
const getAllClass = async (req, res) => {
  try {
    const data = await Class.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(e);
  }
};
const addClass = async (req, res) => {
  try {
    console.log("data"); //{classTeacher: id, subject:[{name:"", teacher: id}], students:[{id}]}
    const data = req.body.subject;
    const createdClass = await Class.create( data );
    console.log(createdClass);
    res.status(201).send(createdClass);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
const addStudent = async (req, res) => {
  try {
    const classID = req.params.id;
    const studentIDs = req.body.students.map(student => student._id); // assuming the request body contains an array of Student objects with an _id field
    const updatedClass = await Class.findByIdAndUpdate(
      { _id: classID },
      { $push: { students: { $each: studentIDs } } },
      { new: true }
    );
    res.status(201).send(updatedClass);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const addSubject = async (req, res) => {
  try {
    const classID = req.params.id;
    console.log(classID);
    const subjects = req.body.subjects.map((subject) => subject);
    const updatedClass = await Class.findByIdAndUpdate(
      { _id: classID },
      { $push: { subjects: {$each:subjects }} },
      { new: true }
    );
    console.log(updatedClass);
    res.status(201).send(updatedClass);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
module.exports = { getAllClass, addClass, addStudent, addSubject };
