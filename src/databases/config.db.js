const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pyqconsultores", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
    throw new Error("DB connection error");
  }
};

module.exports = {
  dbConnection,
};
