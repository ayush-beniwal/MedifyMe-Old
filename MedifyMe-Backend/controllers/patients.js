const axios = require("axios");
const Patient = require("../models/patient");

// React Login
module.exports.login = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  // if (req.body.googleAccessToken) {
  const { googleAccessToken } = req.body;
  axios
    .get("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${googleAccessToken}` },
    })
    .then(async (response) => {
      const name = response.data.name;
      const email = response.data.email;
      const photo = response.data.picture;
      const foundPatient = await Patient.findOne({ email });

      if (!foundPatient) {
        res.status(212).json({
          message: "You Need To Register First",
          status: 212,
          name,
          email,
          photo,
          token: googleAccessToken,
          id: null,
        });
      } else {
        res.status(200).json({
          message: `Welcome ${name}`,
          name,
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