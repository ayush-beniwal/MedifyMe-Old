const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients");

router.route("/login").post(patients.login);

module.exports = router;