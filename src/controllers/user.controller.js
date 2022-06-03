const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const showUSers = async (req = request, res = response) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error, please comunicate with de admin" });
    throw error;
  }
};

const newUser = async (req = request, res = response) => {
  try {
    const { mail, name, password } = req.body;
    const user = new User({ mail, name, password });
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error, please comunicate with de admin" });
    throw error;
  }
};

module.exports = {
  newUser,
  showUSers,
};
