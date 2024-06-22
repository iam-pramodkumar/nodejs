const express = require("express");
const app = express();

const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Impors the routes file

const personRoutes = require("./Routes/personRoutes");
app.use("/person", personRoutes);

const menuRoutes = require("./Routes/menuRoutes");
app.use("/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("welcome to my hotel... How i Can help you..");
});

app.listen(2000, () => {
  console.log("Server Running at Port : 2000");
});
