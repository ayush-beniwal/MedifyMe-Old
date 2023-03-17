const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  token: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    default: null,
  },
  photo: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  patient: [
    {
      type: Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
