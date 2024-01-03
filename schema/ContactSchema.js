const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  email: {
    type: "string",
    required: true,
    trim: true,
  },
  phone: {
    type: "string",
    required: true,
    trim: true,
    minlength: 9,
    maxlength: 15,
  },
});

const ConnectModel = model("Contact", userSchema);
module.exports = ConnectModel;
