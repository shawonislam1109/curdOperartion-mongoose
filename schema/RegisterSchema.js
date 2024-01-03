const { model, Schema } = require("mongoose");

const registrationDataModel = new Schema({
  name: {
    type: "string",
    require: true,
    trim: true,
  },
  number: {
    type: "number",
    require: true,
    trim: true,
    maxlength: 15,
    minlength: 11,
  },
  picture: {
    type: "string",
    required: true,
    trim: true,
  },
});

const RegistrationModel = model("registration", registrationDataModel);
module.exports = RegistrationModel;
