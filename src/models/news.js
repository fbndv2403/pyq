const { Schema, model } = require("mongoose");

const NewsSchema = Schema({
  tittle: {
    type: String,
    required: [true, "The tittle is required"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  // front_page: {
  //   data: Buffer,
  //   contentType: String,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
  url: {
    type: String,
    required: [true, "The url is required"],
  },
});

NewsSchema.methods.toJSON = function () {
  const { __v, status, ...object } = this.toObject();
  return object;
};
module.exports = model("News", NewsSchema);
