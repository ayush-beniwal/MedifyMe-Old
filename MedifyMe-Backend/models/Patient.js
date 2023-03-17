const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
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
  record: [
    {
      test: [
        {
          type: String,
          required: true,
        },
      ],
    },
    { prescription: [{ type: String, required: true }] },
  ],
});

module.exports = mongoose.model("Patient", PatientSchema);
