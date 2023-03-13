const router = require("express").Router();
const Class = require("../models/Class.model");

//? bengaliID: 640f430ead0b2498fd560865
//? englishID: 640f432e987889eba395db2b

router.get("/", async (req, res) => {
  try {
    const data = await Class.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(e);
  }
});

router.post("/create", async (req, res) => {
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
});
router.patch("/:id/addToClass", async (req, res) => {
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
});

module.exports = router;
