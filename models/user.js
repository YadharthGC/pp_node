const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    default: "",
  },
  gmail: {
    type: String,
    default: "",
  },
  job: {
    type: String,
    default: "",
  },
  dob: {
    type: String,
    default: "",
  },
  citya: {
    type: String,
    default: "",
  },
  cityb: {
    type: String,
    default: "",
  },
  cityc: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("table", userSchema);
