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
  gender: {
    type: String,
    required: true,
  },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  allergies: {
    type: String,
    required: true,
  },
  otherCond: {
    type: String,
    required: true,
  },
  medications: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  visits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Visits",
    },
  ],
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
