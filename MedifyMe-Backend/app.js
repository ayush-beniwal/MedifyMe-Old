if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const dbUrl = process.env.DB_URL;
const patientRoutes = require("./routes/patients");
const gptRoutes = require("./routes/gpt");
const { v4: uuidv4 } = require("uuid");

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", async (req, res) => {
  res.send("home");
});

app.use("/gpt", gptRoutes);
app.use("/patients", patientRoutes);

app.get("/video_chat", (req, res) => {
  console.log(req.query);
  const userID = req.query.userID;
  const expired_ts = 7200;
  const token = uuidv4();
  let data = { token, userID, expired_ts };
  console.log(data);
  res.json(data);
});

app.all("*", (req, res, next) => {
  res.status(404).send("Page Not Found Yo");
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Server Started");
});
