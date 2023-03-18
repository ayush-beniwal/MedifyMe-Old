const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients");
const catchAsync = require("../utils/catchAsync");

router.route("/login").post(catchAsync(patients.login));
router.route("/register").post(catchAsync(patients.register));

module.exports = router;