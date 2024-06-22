const mongoose = require("mongoose");

const personSechma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  salery: {
    type: Number,
    required: true,
  },
});

//create Person model
const Person = mongoose.model("Person", personSechma);
module.exports = Person;
