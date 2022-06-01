const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
});

UserSchema.methods.toJSON = function () {
  const {__v, ...user} = this.toObject();
}

module.exports = model("User", UserSchema);
