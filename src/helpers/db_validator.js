const { News } = require("../models");

const urlExits = async (url = "") => {
  const urlExits = await News.findOne({ url });
  if (urlExits) {
    throw new Error(`The url ${url} is already in use`);
  }
};

const tittleRepeat = async (tittle = "") => {
  const tittleExits = await News.findOne({ tittle });
  if (tittleExits) {
    throw new Error(`The tittle ${tittle} is already in use`);
  }
};

const descriptionRepeat = async (description = "") => {
  const descriptionExits = await News.findOne({ description });
  if (descriptionExits) {
    throw new Error(`The description ${description} is already in use`);
  }
};


module.exports = {
  urlExits,
  tittleRepeat,
  descriptionRepeat,
  
};
