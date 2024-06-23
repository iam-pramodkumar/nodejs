const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menuItem");

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data  fetched");
    res.status(202).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person documents using the mongoose model
    const newMenu = new MenuItem(data);

    //Save the new person to the database
    const response = await newMenu.save();
    console.log("data saved");
    console.log(newMenu);
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "Internal Server Error" });
  }
});
// comment added
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy") {
      const responce = await MenuItem.find({ taste: tasteType });
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
