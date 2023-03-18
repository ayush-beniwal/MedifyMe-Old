if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const dbUrl = process.env.DB_URL;
// const MongoDBStore = require("connect-mongo");
// const patientRoutes = require("./routes/patients")
// const doctorRoutes = require("./routes/doctors")
const gptRoutes = require("./routes/gpt")
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Mongo Is Running");
  })
  .catch((err) => {
    console.log("mongo error");
  });

const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());

// const secret = process.env.SECRET || "thisshouldbeabettersecret!";

// const Mongo_store = MongoDBStore.create({
//   mongoUrl: dbUrl,
//   secret,
//   touchAfter: 24 * 60 * 60,
// });

// app.use(
//   require("express-session")({
//     store: Mongo_store,
//     name: "session",
//     secret, //This is the secret used to sign the session ID cookie.
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   })
// );

// app.use("/patients", patientRoutes);
// app.use("/doctors", doctorRoutes);
// app.use("/gpt", ()=>gptRoutes);

app.get("/gpt", async (req, res) => {
  res.render("prompt");
})

app.post("/gpt",  async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });

console.log(completion.data.choices[0].text)

  res.send(completion.data.choices[0].text);
});

app.get("/", async (req, res) => {
  res.send("home");
});

app.all("*", (req, res, next) => {
  res.status(404).send("Page Not Found Yo");
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log("Server Started");
});