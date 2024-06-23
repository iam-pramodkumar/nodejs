const mongoose = require("mongoose");

const mongoURL = process.env.MONGODB_URL;
// const mongoURL = process.env.MONGODB_LOCAL_URL;
// const mongoURL = "mongodb://127.0.0.1:27017/mydata"

mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB Connected "))
  .catch((err) => console.log("MongoDB Error", err));

const db = mongoose.connection;

module.exports = db;

// .connect("mongodb://127.0.0.1:27017/mydata")
