const mongoose = require("mongoose");
const mongodb = require("mongodb");

mongoose.connect("mongodb://localhost:27017/PP", (err) => {
  if (err) return console.log(error);
  console.log("connected to mongodb");
});
