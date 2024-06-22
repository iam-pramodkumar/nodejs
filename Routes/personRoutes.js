const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/p", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person documents using the mongoose model
    const newPerson = new Person(data);

    //Save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    console.log(newPerson);
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data  fetched");
    res.status(202).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const responce = await Person.find({ work: workType });
      console.log("response fetch");
      res.status(200).json(responce);
    } else {
      res.status(200).json({ err: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
