const { request, response } = require("express");
const { News } = require("../models");

const newNews = async (req = request, res = response) => {
  try {
    const { tittle, description, url } = req.body;
    const news = new News({ tittle, description, url });
    await news.save();
    res.json({ news });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error whit the data your try save",
    });
    throw error;
  }
};

const showNews = async (req = request, res = response) => {
  try {
    const { limite = 5, desde = 0 } = req.query;
    const query = { status: true };

    const [count, usuarios] = await Promise.all([
      News.countDocuments(query),
      News.find(query).limit(Number(limite)).skip(Number(desde)),
    ]);
    res.json({ count, usuarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error we cant show the news" });
    throw error;
  }
};

const editNews = async (req = request, res = response) => {
  const { id } = req.params;
  console.log(id);
  const { _id, status, ...object } = req.body;
  const news = await News.findByIdAndUpdate(id, object);
  res.json({ news, "before update": object });
};

const deleteNews = async (req = request, res = response) => {
  const { id } = req.params;
  const news = await News.findByIdAndUpdate(id, { status: false });
  res.json({ "News deleted succesfully": news });
};

const deleteAllNews = async (req = request, res = response) => {
  const news = await News.find();
  const idAll = news.filter((x) => x.status === true).map((x) => x._id);
  console.log(idAll);
  for (const i of idAll) {
    await News.findByIdAndUpdate(i, { status: false });
  }
  res.json({ msg: "All news deleted succesfully" });
};

module.exports = {
  showNews,
  newNews,
  editNews,
  deleteNews,
  deleteAllNews,
};
