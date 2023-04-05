if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const dbUrl = process.env.DB_URL;
// const APP_ID = process.env.APP_ID;
// const SERVER_SECRET = process.env.SERVER_SECRET;
const patientRoutes = require("./routes/patients");
const gptRoutes = require("./routes/gpt");
// const { generateToken04 } = require("./token");

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Mongo Is Running");
  })
  .catch((err) => {
    console.log("mongo error" + err);
  });

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.set("X-Content-Type-Options", "nosniff");
  next();
});

app.get("/", async (req, res) => {
  res.send("home");
});

app.use("/gpt", gptRoutes);
app.use("/patients", patientRoutes);

// app.get("/room", (req, res) => {
//   try {
//     const userId = req.query.userId;
//     const effectiveTimeInSeconds = 7200;
//     const appID = 575089151;
//     const serverSecret = SERVER_SECRET; // type: 32 byte length string
//     const payload = "";
//     const token = generateToken04(
//       appID,
//       userId,
//       serverSecret,
//       effectiveTimeInSeconds,
//       payload
//     );
//     res.json(token);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something Went Wrong!!!!" });
//   }
// });

app.all("*", (req, res, next) => {
  res.status(404).send("Page Not Found Yo");
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Server Started");
});
