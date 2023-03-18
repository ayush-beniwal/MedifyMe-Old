const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  visits: [
    {
      patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
      },
      doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
      },
      date: {
        type: String,
        required: true,
      },
      isLatest: {
        type: Boolean,
        required: true,
        default: false,
      },
      doctorCom: {
        type: String,
        required: true,
      },
      patientCom: {
        type: String,
        required: true,
      },
      documents: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Visit", VisitSchema);
