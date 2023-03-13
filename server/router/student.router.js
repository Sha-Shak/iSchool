const router = require("express").Router();
const Students = require("../models/Student.model");
// const {Student} = require("../models/User.model");
//const Marks = require("../models/Marks.model")


//? john : 640f43c8264e797739f0b2dd
//?russel: 640f444ad2f204b69cfbe354

router.get("/all", async (req, res) => {
 try {
  const students = await Students.find();
  res.status(200).send(students)
  
 } catch (error) {
  console.log(error)
  res.status(500).send(error)
 }
});

router.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    const student = await Students.create(data);
    console.log(student);
    res.status(201).send(student);
  } catch (e) {
    console.log(e);
    res.status(500).send(e)
  }
});
// router.patch("/addToClass", async (req, res) => {
//   try {
//     const {classID} = req.body;
//     const student = await Student.create(data);
//     console.log(student);
//     res.status(201).send(student);
//   } catch (e) {
//     console.log(e);
//     res.status(500).send(e);
//   }
// });

module.exports = router;
