const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydata")
  .then(() => console.log("MongoDB Connected "))
  .catch((err) => console.log("MongoDB Error", err));

const db = mongoose.connection;

module.exports = db;
