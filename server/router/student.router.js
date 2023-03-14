const router = require("express").Router();
const { getAllStudents, signupStudent } = require("../controller/student.controller");
const Students = require("../models/Student.model");
// const {Student} = require("../models/User.model");
//const Marks = require("../models/Marks.model")


//? john : 640f43c8264e797739f0b2dd
//?russel: 640f444ad2f204b69cfbe354

router.get("/all", getAllStudents);

router.post("/signup", signupStudent);


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
