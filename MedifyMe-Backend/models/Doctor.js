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
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  visits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Visits",
    },
  ],
});

module.exports = mongoose.model("Doctor", DoctorSchema);
