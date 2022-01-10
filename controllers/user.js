const mongoose = require("mongoose");
const user = require("../models/user");

exports.postuser = async (req, res) => {
  try {
    console.log(req.body);
    let { name, url, mobile, gmail, job, dob, citya, cityb, cityc } = req.body;
    let newuser = new user({
      name,
      url,
      mobile,
      gmail,
      job,
      dob,
      citya,
      cityb,
      cityc,
    });
    await newuser.save();
  } catch (error) {
    console.log(error);
  }
};

exports.getuser = async (req, res) => {
  try {
    let get = await user.find({});
    get.reverse();
    res.json(get);
  } catch (error) {
    console.log(error);
  }
};

exports.deluser = async (req, res) => {
  try {
    console.log(req.params.id);
    let did = req.params.id;
    let del = await user.findByIdAndDelete(did);
    await del.save();
  } catch (error) {
    console.log(error);
  }
};
