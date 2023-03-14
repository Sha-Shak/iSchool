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
    console.log("data");
    const data = req.body.subject;
    const createdClass = await Class.create({ subject: data });
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
    console.log(classID);
    const updatedClass = await Class.findByIdAndUpdate(
      { _id: classID },
      { $addToSet: { students: req.body.students } },
      { new: true }
    );
    console.log(updatedClass);
    res.status(201).send(updatedClass);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
module.exports = { getAllClass, addClass, addStudent };
