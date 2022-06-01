const { Schema, models } = require("mongoose");

const NewsSchema = new Schema({
  tittle: {
    tyoe: String,
    required: [true, "The tittle is required"],
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  front_page: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("News", NewsSchema);
