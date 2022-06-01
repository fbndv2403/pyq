const { request, response } = require("express");
const User = require("../models/user");

const news = async (req = request, res = response) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  news,
};
