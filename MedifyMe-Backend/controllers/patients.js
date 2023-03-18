const axios = require("axios");
const Patient = require("../models/patient");

// React Login
module.exports.login = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { googleAccessToken } = req.body;
  axios
    .get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${googleAccessToken}` },
    })
    .then(async (response) => {
      const email = response.data.email;
      const photo = response.data.picture;
      const foundPatient = await Patient.findOne({ email });

      if (!foundPatient) {
        res.status(212).json({
          message: "Fill out these details to complete your registration",
          status: 212,
          email,
          photo,
          token: googleAccessToken,
          id: null,
        });
      } else {
        res.status(200).json({
          message: `Welcome ${name}`,
          email,
          photo,
          token: googleAccessToken,
          id: foundUser._id,
          status: 200,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({ message: "Invalid access token!!!!", status: 400 });
    });
  // }
};

//React Register
module.exports.register = async (req, res, next) => {
  const name = req.body.data.name;
  const email = req.body.data.email;
  const photo = req.body.data.photo;
  const age = req.body.data.age;
  const gender = req.body.data.gender;
  const height = req.body.data.height;
  const weight = req.body.data.weight;
  const allergies = req.body.data.allergies.trim();
  const otherConditions = req.body.data.otherConditions.trim();
  const medications = req.body.data.medications.trim();
  const overview = req.body.data.overview.trim();
  const token = req.body.data.token;

  if (!age && !gender && !height && !weight && !allergies &&   !photo && !name && !email && !otherConditions && !medications && !overview && !token) {
    res.status(400).json({ message: "Something Went Wrong", status: 400 });
  } else {
    const patient = new Patient({
      token,
      name,
      email,
      age,
      photo,
      gender,
      height,
      weight,
      allergies,
      otherConditions,
      medications,
      overview,
    });
    await patient.save();
    const id = patient._id.toString();
    res
      .status(200)
      .json({ message: "Registered Successfully", id, status: 200 });
  }
};