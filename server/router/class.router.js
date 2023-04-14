const router = require("express").Router();
const {
  getAllClass,
  addClass,
  addStudent,
  addSubject
} = require("../controller/class.controller");
const Class = require("../models/Class.model");

//? bengaliID: 640f430ead0b2498fd560865
//? englishID: 640f432e987889eba395db2b

router.get("/", getAllClass);

router.post("/create", addClass);
router.patch("/:id/addstudents", addStudent);
router.patch("/:id/addsubject", addSubject);

module.exports = router;
