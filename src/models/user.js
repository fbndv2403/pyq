const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  mail: {
    type: String,
    required: [true, "The mail is required"],
  },
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
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("User", UserSchema);
